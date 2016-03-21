




// Global Helpers - dot: :

Template.registerHelper('DOT_TYPE_IS', ( typeName, dotSubType ) => {
  return (typeName === dotSubType);
});

Template.registerHelper('DOT_TYPE_IS_OR', ( typeName1, typeName2, dotSubType, dotType ) => {
    if (typeName1 === dotSubType || typeName2 === dotType)
  return true;
});


Template.registerHelper('DATA_FOR_ALGOLIA_DOT_CARD', (algoliaObject) => {
  let data = {
    //dot: this,
    ////dot: {
    ////  _id: this._id,
    ////  ownerUserId: this.ownerUserId,
    ////  title: this.title
    ////},

    algolisSearchResult: algoliaObject,
    dot: {
      _id: algoliaObject._id,
      ownerUserId: algoliaObject.ownerUserId,
      title: algoliaObject.title,
      coverImageUrl: algoliaObject.coverImageUrl,
      dotColor: algoliaObject.dotColor
    },
    connection: {
      connectedByUserId: algoliaObject.ownerUserId,
      //TODO >>> add total likes here:
      likes: ""
    },
    //This helps us to determine if to show the plus/connect to dotParent button:
    inDotParentSearchResults: false
  };
  console.log("algolisSearchResult >>>> " + data.algolisSearchResult.title)
  return data;
});
