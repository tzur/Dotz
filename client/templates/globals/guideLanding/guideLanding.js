
Template.guideLanding.onCreated(function(){

});


Template.guideLanding.onDestroyed(function(){

});

Template.guideLanding.helpers({

});

Template.guideLanding.events({


  'click .selectedAnswer':function(){

      $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
      $(this).parents(".dropdown").find('.btn').val($(this).data('value'));


  }

});

