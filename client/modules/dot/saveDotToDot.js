/**
 * Created by avivhatzir on 27/10/2015.
 */

var currUser = Meteor.user();
var availableMixes = [];
//var innerMixes = [];
var findMixes = function(mixId, tab){
  var mix = Mixes.findOne(mixId);
  var labelAndValue = {label: tab + mix.title, value: mixId};
  availableMixes.push(labelAndValue);
  if (mix.mixChildren){
    tab += "-";
    mix.mixChildren.forEach(function(mixId){
      findMixes(mixId, tab);
    });

  }
};
if (currUser.profile.mixChildren) {
  currUser.profile.mixChildren.forEach(function(mixId) {
    findMixes(mixId, "");
  });
}


return [
  {
    optgroup: "My mixes:", //OTNI: add an IF statement
    options: availableMixes
  }
];


let _availableDotz = [];

let currUser = Meteor.user();

