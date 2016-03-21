




// Global Helpers - dot: :

Template.registerHelper('DOT_TYPE_IS', ( typeName, dotSubType ) => {
  return (typeName === dotSubType);
});

Template.registerHelper('DOT_TYPE_IS_OR', ( typeName1, typeName2, dotSubType, dotType ) => {
    if (typeName1 === dotSubType || typeName2 === dotType)
  return true;
});


Template.registerHelper('DATA_FOR_ALGOLIA_DOT_CARD', () => {
  let data = {
    //dot: this,
    ////dot: {
    ////  _id: this._id,
    ////  ownerUserId: this.ownerUserId,
    ////  title: this.title
    ////},
    //connection: {
    //  connectedByUserId: this.ownerUserId,
    //  likes: "none"
    //},
    algolisSearchResult: this,
    dot: {
      _id: this._id,
      ownerUserId: this.ownerUserId,
      title: this.title,
      coverImageUrl: this.coverImageUrl,
      dotColor: this.dotColor
    },
    //This helps us to determine if to show the plus/connect to dotParent button:
    inDotParentSearchResults: false
  };
  console.log("data >>>> " + data._id)
  return data;
});
