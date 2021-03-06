"use strict";
describe('deleteDot', function(){
  let userId;
  let fakeUser = Meteor.users.findOne({username: "testUser7"});
  if (fakeUser){
    Meteor.users.remove(fakeUser._id);
  }
  userId = Accounts.createUser({username:"testUser7",email:"test7@gmail.com",password:"123456",profile:{}});
  fakeUser = Meteor.users.findOne({username:"testUser7"});
  let parentDot1 = {
    dotType: "Event",
    ownerUserId: userId,
    title: "parentDot",
    createdAtDate: new Date()
  };
  let parentDot1Id = Dotz.insert(parentDot1);

  let parentDot2 = {
    dotType: "Event",
    ownerUserId: userId,
    title: "parentDot",
    createdAtDate: new Date()
  };
  let parentDot2Id = Dotz.insert(parentDot2);
  let childDot = {
    dotType: "Event",
    ownerUserId: userId,
    title: "parentDot",
    createdAtDate: new Date()
  };
  let childDotId = Dotz.insert(childDot);
  let insideTheDeletedDot = {
    dotType: "Place",
    ownerUserId: userId,
    title: "InsideDeletedDot",
    createdAtDate: new Date()
  };
  let insideTheDeletedDotId = Dotz.insert(insideTheDeletedDot);


  let smartRefInside = new Modules.both.Dotz.smartRef(insideTheDeletedDotId, userId, childDotId,CONNECT_ACTION, userId,"Personal");
  let smartRefDelete1 = new Modules.both.Dotz.smartRef(childDotId, userId, parentDot1Id,CONNECT_ACTION, userId,"Personal");
  let smartRefDelete2 = new Modules.both.Dotz.smartRef(childDotId, userId, parentDot2Id,CONNECT_ACTION, userId,"Personal");
  fakeUser = Meteor.users.findOne({username: "testUser7"});

  it("should delete", function(){
    spyOn(Meteor, 'userId').and.returnValue(userId);
    spyOn(Meteor, 'user').and.returnValue(fakeUser);
    Modules.both.Dotz.connectDot(smartRefInside);
    Modules.both.Dotz.connectDot(smartRefDelete1);
    Modules.both.Dotz.connectDot(smartRefDelete2);
    fakeUser = Meteor.users.findOne({username: "testUser7"});
    expect(fakeUser.profile.userConnections.length).toEqual(3);
    let parent1 = Dotz.findOne(parentDot1Id);
    let parent2 = Dotz.findOne(parentDot2Id);
    let insideDot = Dotz.findOne(insideTheDeletedDotId);
    expect(parent1.connectedDotzArray.length).toEqual(1);
    expect(parent2.connectedDotzArray.length).toEqual(1);
    expect(insideDot.inDotz).toContain(childDotId);
    let childDot = Dotz.findOne(childDotId);
    Modules.both.Dotz.deleteDot(childDot, smartRefDelete1.connection.toParentDotId);
    parent1 = Dotz.findOne(parentDot1Id);
    parent2 = Dotz.findOne(parentDot2Id);
    expect(parent1.connectedDotzArray.length).toEqual(0);
    expect(parent2.connectedDotzArray.length).toEqual(0);
    childDot = Dotz.findOne(childDotId);
    insideDot = Dotz.findOne(insideTheDeletedDotId);
    expect(insideDot.inDotz.length).toEqual(0);
    fakeUser = Meteor.users.findOne({username: "testUser7"});
    expect(fakeUser.profile.userConnections.length).toEqual(0);
    expect(childDot).toBeUndefined();

  });
});
