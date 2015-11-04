//changing SmartRef to be independent object.
SmartRef = function (dotId, parentDot, connectedByUserId, actionName, personalDescription){
      this.dotId = dotId,
      this.parentDot = parentDot,
      this.connectedByUserId =  connectedByUserId,
      this.actionName =  actionName,
      this.personalDescription = personalDescription,
      this.likes = []
};
SmartRef.prototype = {
  like: function(userId){
    Meteor.call('likeDot', this.parentDot, this.dotId, userId);
  }
};
//Modules.both.Dotz.smartRef = SmartRef;

