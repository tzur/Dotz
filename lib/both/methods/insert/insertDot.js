Meteor.methods({
  insertDot(doc){
    check(doc, Schema.dotSchema);
    try{
      var dotId = Dotz.insert(doc);
      return dotId;
    }catch(expection){
      return expection
    }
  }
});
