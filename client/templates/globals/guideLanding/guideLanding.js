
Template.guideLanding.onRendered(function(){

  $(".dropdown1 dt a").on('click', function() {
    $(".dropdown1 dd ul").slideToggle('fast');
  });

  $(".dropdown1 dd ul li a").on('click', function() {
    $(".dropdown1 dd ul").hide();
  });

  function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
  }

  $(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown1")) $(".dropdown1 dd ul").hide();
  });

  $('.mutliSelect input[type="checkbox"]').on('click', function() {

    var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
      title = $(this).val() + ",";

    if ($(this).is(':checked')) {
      var html = '<span title="' + title + '">' + title + '</span>';
      $('.multiSel').append(html);
      $(".hida").hide();
    } else {
      $('span[title="' + title + '"]').remove();
      var ret = $(".hida");
      $('.dropdown1 dt a').append(ret);

    }
  });

});




Template.guideLanding.onDestroyed(function(){

});

Template.guideLanding.helpers({

});

Template.guideLanding.events({


  //'click .selectedAnswer':function(){
  //
  //    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  //    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  //
  //},
  //
  //'click #multiSelect':function(){
  //
  //  $(".dropdown1 dd ul").slideToggle('fast');
  //
  //},
  //
  //'click #shoot':function(){
  //
  //  $(".dropdown1 dd ul").hide();
  //
  //},
  //
  //'click #landingPageGuide-body':function(e){
  //
  //    var $clicked = $(e.target);
  //    if (!$clicked.parents().hasClass("dropdown1")) $(".dropdown1 dd ul").hide();
  //
  //},
  //
  //'click .multiSelectInput':function(e){
  //
  //  var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
  //    title = $(this).val() + ",";
  //
  //  if ($(this).is(':checked')) {
  //    var html = '<span title="' + title + '">' + title + '</span>';
  //    $('.multiSel').append(html);
  //    $(".hida").hide();
  //  } else {
  //    $('span[title="' + title + '"]').remove();
  //    var ret = $(".hida");
  //    $('.dropdown1 dt a').append(ret);
  //
  //  }
  //}

});

