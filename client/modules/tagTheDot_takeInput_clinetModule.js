
//Our little recursion :)
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

//takeSuperTagsFromFields
let tagTheDot_takeInput = function() {

  //let data = {};
  //let parentDot = Session.get('superTagsArray_tagTheDot');
  //let parentDotId = FlowRouter.getParam('dotId');
  //if (parentDot.smartRef) {
  //  parentDotId = parentDot.smartRef.connection.toParentDotId;
  //} else {
  //  parentDotId = parentDot.dot._id;
  //}
  //console.log("parentDotId >>>>>>>>>>> " + parentDotId);
  //parentDot = Dotz.findOne(parentDotId);
  let data = [];

  //super Tags:
  Session.get('superTagsArray_tagTheDot').superTagsArray.forEach(function (superTag) {
    let superTagToPush = {};
    superTagToPush._id = superTag._id;
    superTagToPush.parentTag = superTag.parentTag;
    //superTagToPush.subTags = [];
    superTagToPush.subTags = $('#' + superTag._id + '_subTags').tagsinput('items') ;
    //superTagToPush.subTags.push( $('#' + superTag._id + '_subTags').tagsinput('items') );
    console.log("superTagToPush.subTags >>>>>>>>>>> " + superTagToPush.subTags)
    data.push(superTagToPush);
  });

  ////call Our little recursion :)
  //let newInputsArray = _findAllInputs();
  //console.log("newInputsArray >>>> " + newInputsArray)
  //if (newInputsArray) {
  //  newInputsArray.forEach(function (superTag) {
  //    console.log("2222222 superTag.parentTag >>>>>>>>>>> " + superTag.parentTag)
  //    superTagsToFilterConnectedDotz.push(superTag);
  //  });
  //}








  //let priceMax = $('#priceMax').val();
  //if (priceMax === ""){
  //  data.priceMax = undefined
  //} else if (priceMax) {
  //  data.priceMax = parseInt(priceMax, 10);
  //}


  return data;
};


Modules.client.tagTheDot_takeInput = tagTheDot_takeInput;
