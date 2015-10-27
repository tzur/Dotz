///**
// * Created by avivhatzir on 27/10/2015.
// */
//
//var currUser = Meteor.user();
//var availableMixes = [];
////var innerMixes = [];
//var findMixes = function(mixId, tab){
//  var mix = Mixes.findOne(mixId);
//  var labelAndValue = {label: tab + mix.title, value: mixId};
//  availableMixes.push(labelAndValue);
//  if (mix.mixChildren){
//    tab += "-";
//    mix.mixChildren.forEach(function(mixId){
//      findMixes(mixId, tab);
//    });
//
//  }
//};
//if (currUser.profile.mixChildren) {
//  currUser.profile.mixChildren.forEach(function(mixId) {
//    findMixes(mixId, "");
//  });
//}
//
//
//return [
//  {
//    optgroup: "My mixes:", //OTNI: add an IF statement
//    options: availableMixes
//  }
//];


let _availableDotz = [];

let _currUser = Meteor.user();

let _userProfileDotzId = _currUser.profile.profileDotId;

let _userProfileDot = function(){
  return (Dotz.findOne({_id: _userProfileDotzId}));

};

let _findDotzForOptions = function(dotId, tab){
  let _dot = Dotz.findOne(dotId);
  let _labelAndValue = {label: tab + _dot.title, value: dotId};
  _availableDotz.push(_labelAndValue);
  if (_dot.dotzConnectedByOwner){
    tab += "-";
    _dot.dotzConnectedByOwner.forEach(function(dotId){
      _findDotzForOptions(dotId, tab);
    });

  }
};

let dotzForOptionsResult = function(){
  if(_userProfileDot){
    _userProfileDot.dotzConnectedByOwner.forEach(function(dotId) {
      _findDotzForOptions(mixId, "");
    });

    return [
      {
        optgroup: "My Dotz:",
        options: _availableDotz
      }
    ];

  }
};

Modules.client.dotzToConnectToOptions = dotzForOptionsResult;


