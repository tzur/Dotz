
let _findAllInputs = function () {
  let i = 1;
  let data = [];

  myRecursion();
  function myRecursion () {
    //let newInputsDiv = $('._newInput' + i);
    //let parentTag = $('#_newParentTag' + i).val();

    //console.log("newInputsDiv >>>>>>>>>>>> " + parentTag)
    if (i > 20) {
      console.log("slow down there :)");
      return false;
    } else if ($('#_newParentTag' + i) && $('#_newParentTag' + i).val() ) {
      console.log("else if: i >>>>>>>>>>>> " + i)
      let superTagToPush = {};
      superTagToPush.parentTag = $('#_newParentTag' + i).val();
      superTagToPush.subTags = $('#_newSubTags' + i).tagsinput('items') ;
      superTagToPush._id = superTagToPush.parentTag.replace(/ /g,'');
      data.push(superTagToPush);
      i++;
      myRecursion();
    } else {
      console.log("NO i NO >>>>>>>>>>>> " + i)
      return data;
    }
  }
  return data;
};



let editSuperTagsToFilterDot = ( dot ) => {

  check(dot, Object);


  //let superTagsToUpdate = _findAllInputs();

  let data = _findAllInputs();
  //super Tags:
  let superTagsArray = dot.superTagsToFilterConnectedDotz;
  if (superTagsArray) {
    superTagsArray.forEach(function (superTag) {
      let superTagToPush = {};
      superTagToPush._id = superTag._id;
      superTagToPush.parentTag = superTag.parentTag;
      //superTagToPush.subTags = [];
      superTagToPush.subTags = $('#' + superTag._id + '_subTags').tagsinput('items') ;
      //superTagToPush.subTags.push( $('#' + superTag._id + '_subTags').tagsinput('items') );
      console.log("superTagToPush.subTags >>>>>>>>>>> " + superTagToPush.subTags)
      data.push(superTagToPush);
    });
  }



  let superTagsToUpdate = data;


  //let superTagsToUpdate = Modules.client.tagTheDot_takeInput();

  console.log("superTagsToUpdate >>>>>>>>> " + superTagsToUpdate);

  //let dotToEdit = {};
  //superTagsToUpdate.superTagsToFilterConnectedDotz = input;

  if (superTagsToUpdate) {
    //updateDotTags(dotId, fieldToUpdate, superTagsArray)
    Meteor.call('updateDotSuperTagsToFilterConnectedDotz', dot._id, superTagsToUpdate ,function(error,result){
      if (error){
        console.log("updateDot error >>> " + error)
      } else {
        Session.set("superTagsArray_tagTheDot", undefined);
        Session.set('_showAddSuperTagsToFilter', undefined);
        Meteor.call('addOrEditObjectInAlgolia', dot.dotSlug, false);
      }
    });


  }

};



Modules.client.editSuperTagsToFilterDot = editSuperTagsToFilterDot;
