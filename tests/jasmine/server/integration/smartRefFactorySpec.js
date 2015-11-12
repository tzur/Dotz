"use strict";
describe("smartRefFactory", function(){
  let smartRef = {
    dotId: "1",
    ownerUserId: "123324",
    parentDotId: "Daddy",
    connectedByUserId: "2",
    actionName: "Action",
    personalDescription:"Personal"
  };
  //( dotId, dotOwnerUserId,parentDotId, actionName, personalDescription)
  it("checking smartRefFactory", function(){
    let smartInstance = new Modules.both.Dotz.smartRef(smartRef.dotId, smartRef.ownerUserId
     , smartRef.parentDotId, smartRef.actionName, smartRef.ownerUserId,smartRef.personalDescription);
    expect(smartInstance.dot._id).toEqual("1");
    expect(smartInstance.dot.ownerUserId).toEqual("123324");
    expect(smartInstance.connection.toParentDotId).toEqual("Daddy");
    expect(smartInstance.connection.likes).toEqual([]);
    expect(smartInstance.connection.personalDescription).toEqual("Personal");
    expect(smartInstance.connection.actionName).toEqual("Action");
    expect(smartInstance.connection.connectedByUserId).toEqual("123324");
  })
});

