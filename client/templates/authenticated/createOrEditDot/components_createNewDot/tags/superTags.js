

Template.superTags.onRendered( () => {

  //EditTags component:
  //TBD:
  $("._tagsInput").tagsinput('items');


  $(document).ready(function() {
    let max_fields      = 10; //maximum input boxes allowed
    let wrapper         = $(".input_fields_wrap"); //Fields wrapper
    let add_button      = $(".add_field_button"); //Add button ID

    let x = 0; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
      e.preventDefault();
      if(x < max_fields){ //max input box allowed
        x++; //text box increment


        let inputToAdd = '<div class="_newInput' + x + '"><input  id="_newParentTag' + x + '" class="_newParentTag' + x + '" type="text" name="parentTag[]"/>&nbsp;<input id="_newSubTags' + x + '" class="_newSubTags" type="text" data-role="tagsinput" name="subTags[]"/>&nbsp;<a href="#" class="remove_field">Remove</a></div>';
        $(wrapper).append(inputToAdd); //add input box
        $("._newSubTags").tagsinput('items');
      }
    });

    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
      e.preventDefault(); $(this).parent('div').remove(); x--;
    })
  });

});



Template.superTags.onDestroyed(function(){

});




Template.superTags.helpers({

  //editTags component:
  superTagsToFilterConnectedDotzToEdit: function(){
    console.log("docToedit>>>>>>>> " + Session.get('editAction_docToEdit').dot.superTagsToFilterConnectedDotz )
    return Session.get('editAction_docToEdit').dot.superTagsToFilterConnectedDotz;
  }

});


Template.superTags.events({

  //'submit form': (e) => {
  //  //Prevent form from submitting.
  //  e.preventDefault()
  //},



});

