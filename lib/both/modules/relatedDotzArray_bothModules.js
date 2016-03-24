
let relatedDotzArray = () => {

  let dotzArray = [];
  let total = 0;
  let i;
  let userTags = Meteor.user().profile.userTags;
  let relatedDotzIdArrayB2C = ['122', '2323', '232', '323', '323', '2323'];
  let relatedDotzIdArrayB2B = ['122', '2323', '232', '323', '323', '2323'];

  userTags.forEach(function(tag){

    while (total < 4) {
      i = Math.floor(Math.random() * 6);
      total++;
      console.log('NOW >>>>>>>>>>  ' + total);
      if (tag === 'B2B') {
        if (relatedDotzIdArrayB2B[i]) {
          dotzArray.push(relatedDotzIdArrayB2B[i]);
        }
      } else if (tag = 'B2C') {
        if (relatedDotzIdArrayB2C[i]) {
          dotzArray.push(relatedDotzIdArrayB2C[i]);
        }
      }
    }


    // _smartRef = function (dotId, dotOwnerUserId,parentDotId, actionName, connectedByUserId ,personalDescription )
    let newSmartRef = new Modules.both.Dotz.smartRef(id, dotOwnerUserId,
      profileDotId, CONNECT_ACTION, Meteor.userId());
    console.log("answerObj.userDots.forEach: newSmartRef >>>>>>>>>>>>>>>>>>>>> " + newSmartRef);
    Meteor.call('connectDot',(newSmartRef));
  });

  //smartRef array:
  return dotzArray;

};

Modules.both.relatedDotzArray = relatedDotzArray;
