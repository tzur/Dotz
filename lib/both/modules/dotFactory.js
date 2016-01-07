
//Please use this Factory to create random dotz that you need for any parts that are not usual  create dot way.
//Fell free to add more fields that you need i didn't put all fields.
let DotFactory = function(dotType, ownerUserId, title, createdAtDate, isOpen, description, fbAuthorId, fbAuthorName, coverPhoto, connectTo){
  this.dotType = dotType;
  this.ownerUserId = ownerUserId;
  this.title = title;
  this.bodyText = description;
  this.createdAtDate = createdAtDate;
  this.isOpen = isOpen;
  this.facebookAuthorId = fbAuthorId;
  this.facebookAuthorName = fbAuthorName;
  this.coverImageUrl = coverPhoto;
  this.inDotz = [connectTo];
};
Modules.both.Dotz.DotFactory = DotFactory;
