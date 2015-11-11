// Connect dot integration test.
"user strict";
describe("Connect dot integration test", function(){

  let childDoc = {
    dotType: "Event",
    ownerUserId: "123",
    title: "Child",
    createdAtDate: new Date()
  };

  let childDotId = Dotz.insert(childDoc);
  let parentDoc = {
    dotType: "Place",
    ownerUserId: "123",
    title: "Parent",
    createdAtDate: new Date()
  };
  let parentDotId = Dotz.insert(parentDoc);

  /*end of create dot.*/

  let smartRefConnect = {
    dotId: childDotId,
    parentDot: parentDotId,
    connectedByUserId: "123",
    actionName: CONNECT_ACTION,
    personalDescription: "Personal",
    isConnectedToOthers: false
  };
  it("Action: connect, Owner case.",function(){
    spyOn(Meteor, 'userId').and.returnValue("123");
    Modules.both.Dotz.connectDot(smartRefConnect);
    let parentDot = Dotz.findOne(parentDotId);
    let childDot = Dotz.findOne(childDotId);
    expect(parentDot.title).toEqual("Parent");
    expect(childDot.title).toEqual("Child");
    expect(childDot.inDotz).toContain(parentDotId);
    expect(parentDot.dotzConnectedByOwner).toContain(smartRefConnect);
    ///WTF??? WHy this is what happening?? NEED TO GO TO SLEEP ASAP.
  });
});
