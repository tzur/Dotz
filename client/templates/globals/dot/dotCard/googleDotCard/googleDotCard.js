


Template.googleDotCard.helpers({
  check:function(){
  }
});
Template.googleDotCard.events({
  'click ._connectGoogle': function(){
    Modal.show('createNewDot_Modal',{
        initialDataForFormFields: {
          title: this.googleDot.googleTitle,
          description: this.googleDot.googleDescription,
          img: this.googleDot.googleImg,
          linkName: this.googleDot.googleWebsiteName,
          linkUrl: this.googleDot.googleLinkUrl
        },
        parentDotId: this.parentDotId

    });
  }
});
