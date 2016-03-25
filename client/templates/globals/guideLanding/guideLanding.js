
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
      var html = '<span id="selectedSkillInDrop" title="' + title + '">' + title + '</span>';
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

    let debugDots = [];
    let debugChoice = [];

    let aloneVal = parseInt($('#meOrFriends').val()); // 0 - alone, 1 - withOthers
    var isAlone = true;
    if (aloneVal == 1) {
      // Choose with others
      isAlone = false;
      debugChoice.push('NOT_ALONE');
    } else {
      debugChoice.push('ALONE');
    }


    let workingFullTimeVal = parseInt($('#fullOrPartTime').val()); // 0 - Full Time 1 - Half Time
    var isFullTime = true;
    if (workingFullTimeVal == 1) {
      debugChoice.push('NOT_FULL_TIME');
      isFullTime = false;
    } else {
      debugChoice.push('FULL_TIME');
    }

    // let skillsVal = .split(',');
    let skills = $("span[id='selectedSkillInDrop']").length; // 5 is the max
    debugChoice.push(skills);

    let typeVal = parseInt($('#businessType').val()); // 0 - B2B, 1 - B2C
    var type = 'B2B';
    var isB2B = true;
    if (typeVal == 1) {
      // Choose B2C
      type = 'B2C';
      isB2B = false;
      debugChoice.push('B2C');
    } else {
      debugChoice.push('B2B');
    }

    let stateVal = parseInt($('#ideaStage').val()); // 0 - Idea, 1 - Research, 2 - POC, 3 - Launched, 4 - Lunched & Paying costumers

    if (stateVal < 2) {
      if (stateVal == 1) {
        debugChoice.push('Research');
      } else {
        debugChoice.push('Idea');
      }
      userTags.push('Idea');
    } else if (stateVal == 2) {
      debugChoice.push('POC');
      userTags.push('POC');
    } else {
      debugChoice.push('Launched');
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
        debugDots.push('TEAM-1');
      }
    } else {
      if (isB2B) {
        if (skills < 2) {
          // Not Alone, but have less than 2 skills and B2B --> Need Team
          pushTeam = true;
          debugDots.push('TEAM-2');
        }
      } else {
        if (skills < 3) {
          // Not Alone, but have less than 3 skills and B2C --> Need Team
          pushTeam = true;
          debugDots.push('TEAM-3');
        }
      }
    }

    if (pushTeam) {
      userDots.push(TEAM); // Find Co-Founders
    }

    if (stateVal == 0) {
      // In Idea stage
      userDots.push(MARKET_RESEARCH); // Market Research
      debugDots.push('MARKET_RESEARCH');
    }

    if (stateVal < 2) {
      // Before Research
      if (isB2B) {
        userDots.push(EVENTS); // Events
        debugDots.push('EVENTS');
        userDots.push(MENTOR); // Mentor
        debugDots.push('MENTOR');
        userDots.push(PRODUCT_VALIDATION); // Product Validation
        debugDots.push('PRODUCT_VALIDATION');
      } else {
        userDots.push(PRODUCT_VALIDATION); // Product Validation
        debugDots.push('PRODUCT_VALIDATION');
        userDots.push(EVENTS); // Events
        debugDots.push('EVENTS');
      }
    }

    if (stateVal < 3) {
      // Before Prototype
      if (isB2B == false) {
        userDots.push(MENTOR); // Mentor
        debugDots.push('MENTOR');
      }
      if (isFullTime) {
        userDots.push(ACCELERATOR); // Accelerator
        debugDots.push('ACCELERATOR');
      }
    }

    userDots.push(INVESTORS); // Investors
    debugDots.push('INVESTORS');
    userDots.push(SERVICE_PROVIDERS); // Service Providers
    debugDots.push('SERVICE_PROVIDERS');
    userDots.push(TOOLS); // Tools
    debugDots.push('TOOLS');
    userDots.push(MUST_READ); // Must Read
    debugDots.push('MUST_READ');

    // Build the result object and send it through session
    let answerObject = {'userDots': userDots, 'userTags': userTags, 'debugSkills' : skills, 'debugDots': debugDots, 'debugChoice': debugChoice};
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

