"use strict";
describe('disConnectDot', function(){

  //let smartRef = new Modules.both.Dotz.smartRef(childDotId, parentDotId,"1", false,"CONNECT_ACTION");
  let userId;
  let fakeUser = Meteor.users.findOne({username: "testUser4"});
  if (fakeUser){
    Meteor.users.remove(fakeUser._id);
  }
  userId = Accounts.createUser({username:"testUser4",email:"test4@gmail.com",password:"123456",profile:{}});
  fakeUser = Meteor.users.findOne({username:"testUser4"});

  let parentDot = {
    dotType: "Event",
    ownerUserId: userId,
    title: "parentDot",
    createdAtDate: new Date()
  };
  let parentDotId = Dotz.insert(parentDot);
  let childDot = {
    dotType: "Event",
    ownerUserId: userId,
    title: "childDot",
    createdAtDate: new Date()
  };

  let childDotId = Dotz.insert(childDot);

  let smartRefConnect = new Modules.both.Dotz.smartRef(childDotId, userId, parentDotId, CONNECT_ACTION, userId, "Personal");
  fakeUser = Meteor.users.findOne({username: "testUser4"});
  it("should disconnect", function(){
    spyOn(Meteor, 'userId').and.returnValue(userId);
    spyOn(Meteor, 'user').and.returnValue(fakeUser);
    Modules.both.Dotz.connectDot(smartRefConnect);
    fakeUser = Meteor.users.findOne({username: "testUser4"});
    expect(fakeUser.profile.userConnections.length).toEqual(1);
    let childDot = Dotz.findOne(childDotId);
    expect(childDot.inDotz).toContain(parentDotId);
    Modules.both.Dotz.disConnectDot(smartRefConnect);
    childDot = Dotz.findOne(childDotId);
    let parentDot = Dotz.findOne(parentDotId);
    expect(childDot.inDotz).toEqual([]);
    expect(parentDot.connectedDotzArray).toEqual([]);
    fakeUser = Meteor.users.findOne({username: "testUser4"});
    expect(fakeUser.profile.userConnections.length).toEqual(0);
  });
});
