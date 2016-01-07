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
