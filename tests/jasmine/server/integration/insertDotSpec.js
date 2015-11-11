"use strict";
describe("InsertDot", function(){
  let doc = {
    dotType: "Event",
    ownerUserId: "1",
    title: "Sample",
    createdAtDate: new Date()
  };
  it("just checking cows", function(){
    spyOn(Dotz, "insert");
    Meteor.call('insertDot', doc, function(error, result){
      if (error){
        fail("insert dot was failed");
      }
      else{
        let dot = Dotz.findOne(result);
        expect(dot.title).toEqual("Sample");
        expect(dot.dotType).toEqual("Event");
        expect(dot._id).toEqual(result);
        expect(dot.ownerUserId).toEqual("1");
        expect(dot.createdAtDate).toBe(Date);
      }
    });
    expect(Dotz.insert).toHaveBeenCalled();

  })
});
