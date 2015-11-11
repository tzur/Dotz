"use strict";
describe("smartRefFactory", function(){
  let smartRef = {
    dotId: "1",
    parentDot: "Daddy",
    connectedByUserId: "2",
    isConnectedToOthers: false,
    actionName: "Action",
    personalDescription:"Personal"
  };
  it("checking smartRefFactory", function(){
    let smartInstance = new Modules.both.Dotz.smartRef(smartRef.dotId, smartRef.parentDot
     , smartRef.connectedByUserId, smartRef.isConnectedToOthers, smartRef.actionName, smartRef.personalDescription);
    expect(smartInstance.dotId).toEqual("1");
    expect(smartInstance.parentDot).toEqual("Daddy");
    expect(smartInstance.connectedByUserId).toEqual("2");
    expect(smartInstance.actionName).toEqual("Action");
    expect(smartInstance.personalDescription).toEqual("Personal");
    expect(smartInstance.isConnectedToOthers).toEqual(false);
  })
});

