

let prepareMyProfile = (answersObj) => {


  //let theKeys = {
  //  _FinCF : 'zjNqwuqqWSN2ceD6j',
  //  _Men : 'mJ3FqRXe98Wpk7MyE',
  //  _BusM : 'i89vfTppjbB6Pa3qk',
  //  _Acc : '8knwDpjdoRkssYYjZ',
  //  _Inv : 'sQ5y5EPTk9YWs8CT4',
  //  _Eve : 'MDAecmxyfE38H5RFG',
  //  _MarR : 'a3CwsE9CSoGMN72sA',
  //  _ProV : '6cPkRorvt5rzZjBh7',
  //  _SerP : '8jme4Y8AHqfLgdxHg',
  //  _TooB : '32an4gFBdTRgMt9FH',
  //  _MusR : 'vBhXy6JXseANiJqcr'
  //};


  if (answersObj && answersObj.userDots) {

    //the-guide userId:
    let dotOwnerUserId = 'tX4LDQs98WFfxf3nK';
    //Send An Array with dot._id and dot.ownerUserId
    Meteor.call('prepareMyProfile_byDotzArray', answersObj, dotOwnerUserId, function (error, result) {
      if (!error) {
        //Bert.alert('Connected :)', 'success', 'growl-bottom-left');
      }
      else {
        console.log("Error" + error);
      }
    });

  }

};

//Go to action by the login/signUp modal (by FB) >>>
Modules.client.prepareMyProfile = prepareMyProfile;

