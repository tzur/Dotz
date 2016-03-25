
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

  'click #noIdeaConnect':function() {

    const TEAM = 'zjNqwuqqWSN2ceD6j';
    const MARKET_RESEARCH = 'i89vfTppjbB6Pa3qk';
    const EVENTS = 'MDAecmxyfE38H5RFG';
    const PRODUCT_VALIDATION = '6cPkRorvt5rzZjBh7';
    const MENTOR = 'mJ3FqRXe98Wpk7MyE';
    const ACCELERATOR = '8knwDpjdoRkssYYjZ';
    const INVESTORS = 'sQ5y5EPTk9YWs8CT4';
    const SERVICE_PROVIDERS = '8jme4Y8AHqfLgdxHg';
    const TOOLS = '32an4gFBdTRgMt9FH';
    const MUST_READ = 'vBhXy6JXseANiJqcr';

    let userDots = [];
    let userTags = [];

    userDots.push(TEAM); // Find Co-Founders

    userDots.push(MARKET_RESEARCH); // Market Research

    userDots.push(EVENTS); // Events
    userDots.push(MENTOR); // Mentor
    userDots.push(PRODUCT_VALIDATION); // Product Validation
    userDots.push(ACCELERATOR); // Accelerator

    userDots.push(INVESTORS); // Investors
    userDots.push(SERVICE_PROVIDERS); // Service Providers
    userDots.push(TOOLS); // Tools
    userDots.push(MUST_READ); // Must Read

    // Build the result object and send it through session
    let answerObject = {'userDots': userDots, 'userTags': userTags};
    Session.set('answerObject', answerObject);
  },

  'click #loginFacebookBtn':function() {
    const MAX_SKILLS = 5;
    const TEAM = 'zjNqwuqqWSN2ceD6j';
    const MARKET_RESEARCH = 'i89vfTppjbB6Pa3qk';
    const EVENTS = 'MDAecmxyfE38H5RFG';
    const PRODUCT_VALIDATION = '6cPkRorvt5rzZjBh7';
    const MENTOR = 'mJ3FqRXe98Wpk7MyE';
    const ACCELERATOR = '8knwDpjdoRkssYYjZ';
    const INVESTORS = 'sQ5y5EPTk9YWs8CT4';
    const SERVICE_PROVIDERS = '8jme4Y8AHqfLgdxHg';
    const TOOLS = '32an4gFBdTRgMt9FH';
    const MUST_READ = 'vBhXy6JXseANiJqcr';

    let userDots = [];
    let userTags = [];

    let aloneVal = $('#meOrFriends').val(); // 0 - alone, 1 - withOthers
    var isAlone = true;
    if (aloneVal == 1) {
      // Choose with others
      isAlone = false;
    }

    let workingFullTimeVal = $('#fullOrPartTime').val(); // 0 - Full Time 1 - Half Time
    var isFullTime = true;
    if (workingFullTimeVal == 1) {
      isFullTime = false;
    }

    // let skillsVal = .split(',');
    let skills = $('#skillSet').length; // 5 is the max

    let typeVal = $('#businessType').val(); // 0 - B2B, 1 - B2C
    var type = 'B2B';
    var isB2B = true;
    if (typeVal == 1) {
      // Choose B2C
      type = 'B2C';
      isB2B = false;
    }

    let stateVal = $('#ideaStage').val(); // 0 - Idea, 1 - Research, 2 - POC, 3 - Launched, 4 - Lunched & Paying costumers

    if (stateVal < 2) {
      userTags.push('Idea');
    } else if (stateVal == 2) {
      userTags.push('POC');
    } else {
      userTags.push('Launched');
    }

    // Build User tags
    userTags.push(type);


    // Build User Dots
    var pushTeam = false;
    if (isAlone) {
      if (skills < MAX_SKILLS) {
        // Alone & don't have all skills --> Need Team
        pushTeam = true;
      }
    } else {
      if (isB2B) {
        if (skills < 2) {
          // Not Alone, but have less than 2 skills and B2B --> Need Team
          pushTeam = true;
        }
      } else {
        if (skills < 3) {
          // Not Alone, but have less than 3 skills and B2C --> Need Team
          pushTeam = true;
        }
      }
    }

    if (pushTeam) {
      userDots.push(TEAM); // Find Co-Founders
    }

    if (stateVal == 0) {
      // In Idea stage
      userDots.push(MARKET_RESEARCH); // Market Research
    }

    if (stateVal < 2) {
      // Before Research
      if (isB2B) {
        userDots.push(EVENTS); // Events
        userDots.push(MENTOR); // Mentor
        userDots.push(PRODUCT_VALIDATION); // Product Validation
      } else {
        userDots.push(PRODUCT_VALIDATION); // Product Validation
        userDots.push(EVENTS); // Events
      }
    }

    if (stateVal < 3) {
      // Before Prototype
      if (isB2B == false) {
        userDots.push(MENTOR); // Mentor
      }
      if (isFullTime) {
        userDots.push(ACCELERATOR); // Accelerator
      }
    }

    userDots.push(INVESTORS); // Investors
    userDots.push(SERVICE_PROVIDERS); // Service Providers
    userDots.push(TOOLS); // Tools
    userDots.push(MUST_READ); // Must Read

    // Build the result object and send it through session
    let answerObject = {'userDots': userDots, 'userTags': userTags};
    Session.set('answerObject', answerObject);
  }
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

