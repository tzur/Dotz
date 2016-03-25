
let relatedDotzArray = (userTags) => {

  let dotzArray = [];
  let total = 0;
  let i;
  //let userTags = Meteor.user().profile.userTags;
  let relatedDotzIdArrayB2C = ['HobzNxqLJae5rPb2G', '5GbGbgZRNGSrxJMd8', 'ybFYw7DQLScksgP4b', '5GbGbgZRNGSrxJMd8'];
  let relatedDotzIdArrayB2B = ['h3ZHNa4vx523KY6qE', 'WzWGZgbu9JAs8PS6v', 'tbK9agjwHPWAZkZMC', 'piArCwZeYNrK7aBtM'];

  userTags.forEach(function(tag){

    while (total < 3) {
      i = Math.floor(Math.random() * 4);
      total++;
      console.log('NOW >>>>>>>>>>  ' + total);
      if (tag === 'B2B') {
        if (relatedDotzIdArrayB2B[i]) {
          dotzArray.push(relatedDotzIdArrayB2B[i]);
          delete relatedDotzIdArrayB2B[i];
        }
      } else if (tag = 'B2C') {
        if (relatedDotzIdArrayB2C[i]) {
          dotzArray.push(relatedDotzIdArrayB2C[i]);
          delete relatedDotzIdArrayB2C[i];
        }
      }
    }
  });

  let dotzArrayToUpdate = [];
  dotzArray.forEach(function(id) {
    // _smartRef = function (dotId, dotOwnerUserId,parentDotId, actionName, connectedByUserId ,personalDescription )
    let newSmartRef = new Modules.both.Dotz.smartRef(id, Meteor.userId(),
      Meteor.user().profile.profileDotId, CONNECT_ACTION, Meteor.userId());
      dotzArrayToUpdate.push(relatedDotzIdArrayB2C[i]);
  });

  Meteor.call('updateRelatedDotzArray',Meteor.user().profile.profileDotId, dotzArrayToUpdate);

};

Modules.both.relatedDotzArray = relatedDotzArray;
