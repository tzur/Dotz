// Connect dot integration test.
"user strict";
describe("Connect dot integration test", function(){

  let childDoc = {
    dotType: "Event",
    ownerUserId: "123456",
    title: "Child",
    createdAtDate: new Date()
  };

  let childDotId = Dotz.insert(childDoc);
  let parentDoc = {
    dotType: "Place",
    ownerUserId: "123456",
    title: "Parent",
    createdAtDate: new Date()
  };
  let parentDotId = Dotz.insert(parentDoc);

  /*end of create dot.*/

  let smartRefConnect = new Modules.both.Dotz.smartRef(childDotId,"123456",parentDotId,CONNECT_ACTION,"123456","personal");
  it("Action: connect, Owner case.",function(){
    spyOn(Meteor, 'userId').and.returnValue("123456");
    spyOn(Meteor, 'user').and.returnValue({profile:{}});
    Modules.both.Dotz.connectDot(smartRefConnect);
    let parentDot = Dotz.findOne(parentDotId);
    let childDot = Dotz.findOne(childDotId);
    expect(parentDot.title).toEqual("Parent");
    expect(childDot.title).toEqual("Child");
    expect(childDot.inDotz).toContain(parentDotId);
    expect(parentDot.connectedDotzArray[0].dot._id).toEqual(childDotId);
    expect(parentDot.connectedDotzArray[0].dot.ownerUserId).toEqual("123456");
    expect(parentDot.connectedDotzArray[0].connection.actionName).toEqual(CONNECT_ACTION);
    expect(parentDot.connectedDotzArray[0].connection.connectedByUserId).toEqual("123456");
    expect(parentDot.connectedDotzArray[0].connection.likes).toEqual([]);
    expect(parentDot.connectedDotzArray[0].connection.personalDescription).toEqual("personal");
    expect(parentDot.connectedDotzArray[0].connection.toParentDotId).toEqual(parentDotId);

  });
});
