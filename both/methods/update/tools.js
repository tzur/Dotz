/**
 * Created by avivhatzir on 10/11/2015.
 */
Meteor.methods({
  updateTagsDoc(tagsArray, docName){
    check(tagsArray, [String]);
    check(docName, String);

    try{
      Tools.update({docName: docName}, {$addToSet: {tags:{ $each: tagsArray } }})
    }catch(expection){
      return expection
    }
  }
});
