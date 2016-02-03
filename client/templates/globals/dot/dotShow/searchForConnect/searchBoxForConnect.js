/**
 * Created by avivhatzir on 16/11/2015.
 */
Template.searchBoxForConnect.onCreated(function(){
  //Session.set('googleResults',[{
  //  googleImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6EF2spkVH7zbM97BU_lIf8Tc2YsNk_I7mXT2PduNznOmVFNjYp2Der-E6',
  //  googleTitle: 'example',
  //  googleWebsiteName: 'www.example.com',
  //  googleDescription:"Example description",
  //  googleLinkUrl: "example.com/blablabla"
  //}]);
});

Template.searchBoxForConnect.helpers({

  //userCanAutoGenerateDotz: function(){
  //  let data = Template.parentData();
  //  if ( data.dot.ownerUserId === Meteor.userId() && data.dot.quickStartListId && data.dot.connectedDotzArray.length === 0 ) {
  //    return "colCenter";
  //  }
  //},
  googleResults: function(){
    return Session.get('googleResults');
  },
  dotzResult: function(){
    return Session.get('dotzResult');
  },

  dotzResultNumber: function(){
    if(Session.get('dotzResult')){
      return ("(" + Session.get('dotzResult').hits.length + ")");
    }
  },
  getDataForGoogleCard: function(){
    console.log("dsfdsfsdf");
    return {
      parentDotId:Template.parentData().dot._id,
      googleDot: this
    };
  },
  isAlreadyConnected: function(){
    return Modules.client.Dotz.canBeConnectedToDot(Template.parentData().dot._id, this._id)
  },
  dataForDotCard: function() {
    let connection = {
      connectedByUserId: this.ownerUserId,
      likes: "none"
    };

    let data = {
      dot: this,
      //ownerUser: Meteor.users.findOne(this.ownerUserId),
      connection: connection,
      inSearchResults: true
    };
    return data;
  }

});

Template.searchBoxForConnect.events({
  'submit ._googleSearch': function(e){
    e.preventDefault();
    Modules.client.googleCustomSearch($('#_searchBoxInput').val(), function(error, result){
      if (error){
        Bert.alert("We are poor and have only 100 queries per day, please do something with it.",'danger')
      }else{
        Session.set('googleResults', Modules.client.googleResultToCard(result));
      }
    });
  },

  'click ._createNewDotHere':function(){
    Session.set('parentDot', this.dot._id);

    let parentDotId = this.dot._id;
    Modal.show('createNewDot_modal',{
      initialDataForFormFields: {
        //
      },
      parentDotId: parentDotId
    });
  },

  'click ._createNewListHere':function(){
    Session.set('parentDot', this.dot._id);

    let parentDotId = this.dot._id;
    console.log("parentDotId is >> " + parentDotId)
    Modal.show('createNewList_modal',{
      initialDataForFormFields: {
        //
      },
      parentDotId: parentDotId
    });
  },

  //'click ._createNewList': function(){
  //  Modal.show('createNewList_modal',{
  //    initialDataForFormFields: {
  //      //
  //    },
  //    parentDotId: Meteor.user().profile.profileDotId
  //  });
  //},



  'click #searchSubmit':function(){
    $('#searchTabs').removeClass('hidden');
  }
});

