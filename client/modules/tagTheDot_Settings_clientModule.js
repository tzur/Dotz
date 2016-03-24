
let tagTheDot_settings = ( dot, parentDotId ) => {

  check(dot, Object);
  check(parentDotId, String);

  let parentDot = Dotz.findOne(parentDotId);
  console.log("parentDot.title >>>> " + parentDot.title);

  let superTagsArray = [];

  if (parentDot.superTagsToFilterConnectedDotz) {
    parentDot.superTagsToFilterConnectedDotz.forEach(function (superTag) {

      let superTagToPush = {};
      superTagToPush._id = superTag._id;
      superTagToPush.parentTag = superTag.parentTag;
      if (dot.selfSuperTags) {
        let result = $.grep(dot.selfSuperTags, function(e){ return e._id === superTag._id; });
        if (result[0]) {
          superTagToPush.subTags = result[0].subTags;
        }
      }

      //if (result.length == 0) {
      //  // not found
      //} else if (result.length == 1) {
      //  // access the foo property using result[0].foo
      //} else {
      //  // multiple items found
      //}

      console.log("superTagToPush.subTags >>>>>>>>>>> " + superTagToPush.subTags)
      superTagsArray.push(superTagToPush);
    });

    let dotId_Slug = {
      "_id" : dot._id,
      "dotSlug" : dot.dotSlug
    };

    let data = {
      "dot" : dotId_Slug,
      "superTagsArray": superTagsArray
    };

    Session.set('superTagsArray_tagTheDot', data);
    Modal.show('addTagsModal');

  } else {
    console.log("There is no super tags, yet :(")
  }

};



Modules.client.tagTheDot_settings = tagTheDot_settings;
