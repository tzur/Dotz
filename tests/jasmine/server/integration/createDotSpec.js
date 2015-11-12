"use strict";
describe("createDot test", function(done){
  let userId;
  let fakeUser = Meteor.users.findOne({username: "testUser1"});
  if (fakeUser){
    Meteor.users.remove(fakeUser._id);
  }
  userId = Accounts.createUser({username:"testUser1",email:"test1@gmail.com",password:"123456",profile:{}});
  fakeUser = Meteor.users.findOne({username:"testUser1"});
  let parentDot = {
    dotType: "Event",
    ownerUserId: userId,
    title: "Parent",
    createdAtDate: new Date()
  };
  let parentDotId = Dotz.insert(parentDot);
  let newCreatedDot = {
    dotType: "Event",
    ownerUserId: userId,
    title: "New Created Dot",
    createdAtDate: new Date(),
    inDotz: [parentDotId],
    isOpen: true
  };
  it("checking create dot", function(){
    spyOn(Meteor, 'userId').and.returnValue(userId);
    spyOn(Meteor, 'user').and.returnValue(fakeUser);
    Meteor.call('createDot', newCreatedDot, function(error, result){
      if (error){
        fail("insert dot was failed" + error);
      }
      else{
        console.log(result + " THIS IS THE RESULT IM GETTING");
        console.log(error + " this is the error im getting");
        let dot = Dotz.findOne(result);
        expect(dot.title).toEqual("New Created Dot");
        expect(dot.ownerUserId).toEqual(userId);
        expect(dot.dotType).toEqual("Event");
        let parentDot = Dotz.findOne(parentDotId);
        expect(parentDot.dotzConnectedByOwner.length).toEqual(1);
        done();
      }
    });
  })
});
