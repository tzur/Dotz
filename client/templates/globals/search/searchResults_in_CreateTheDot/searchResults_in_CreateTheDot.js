

Template.searchResults_in_CreateTheDot.onCreated(function() {
  //this.getListId = () => FlowRouter.getParam('_id');
  //
  //this.autorun(() => {
  //  this.subscribe('Todos.inList', this.getListId());
  //});
});


Template.searchResults_in_CreateTheDot.onDestroyed(function(){
  let algoliaIndicesArray = ["googleResults", "links_DOTZ", "media_DOTZ", "places_DOTZ", "events_DOTZ", "persons_DOTZ", "lists_DOTZ", "users_DOTZ"];
  algoliaIndicesArray.forEach(index => {
    Session.set(index, undefined);
  });

});


Template.searchResults_in_CreateTheDot.helpers({
  //// We use #each on an array of one item so that the "list" template is
  //// removed and a new copy is added when changing lists, which is
  //// important for animation purposes.
  //listIdArray() {
  //  const instance = Template.instance();
  //  const listId = instance.getListId();
  //  return Lists.findOne(listId) ? [listId] : [];
  //},
  //listArgs(listId) {
  //  const instance = Template.instance();
  //  return {
  //    todosReady: instance.subscriptionsReady(),
  //    // We pass `list` (which contains the full list, with all fields, as a function
  //    // because we want to control reactivity. When you check a todo item, the
  //    // `list.incompleteCount` changes. If we didn't do this the entire list would
  //    // re-render whenever you checked an item. By isolating the reactiviy on the list
  //    // to the area that cares about it, we stop it from happening.
  //    list() {
  //      return Lists.findOne(listId);
  //    },
  //    // By finding the list with only the `_id` field set, we don't create a dependency on the
  //    // `list.incompleteCount`, and avoid re-rendering the todos when it changes
  //    todos: Lists.findOne(listId, {fields: {_id: true}}).todos()
  //  };
  //},


  googleResults: function(){
    return Session.get('googleResults');
  },

  getDataForGoogleCard: function(){
    let parentDotId;

    if (Template.parentData().dot) {
      parentDotId = Template.parentData().dot._id;
    }

    return {
      parentDotId: parentDotId,
      googleDot: this
    };

  },

  links_DOTZ_Algolia: function(){
    return Session.get('links_DOTZ');
  },

  media_DOTZ_Algolia: function(){
    return Session.get('medias_DOTZ');
  },

  places_DOTZ_Algolia: function(){
    return Session.get('places_DOTZ');
  },

  events_DOTZ_Algolia: function(){
    return Session.get('events_DOTZ');
  },

  persons_DOTZ_Algolia: function(){
    return Session.get('persons_DOTZ');
  },

  lists_DOTZ_Algolia: function(){
    return Session.get('lists_DOTZ');
  },

  users_DOTZ_Algolia: function(){
    return Session.get('users_DOTZ');
  },

  isNotAlreadyConnected: function(){
    let parentDotId;

    if (Template.parentData().dot) {
      parentDotId = Template.parentData().dot._id;
    }
    return Modules.client.Dotz.canBeConnectedToDot(parentDotId, this._id)
  },

  dataForDotCard: function() {
    let data = {
      algolisSearchResult: this,
      dot: {
        _id: this._id,
        ownerUserId: this.ownerUserId,
        title: this.title,
        coverImageUrl: this.coverImageUrl,
        dotColor: this.dotColor
      }
      //connection: {
      //  connectedByUserId: this.ownerUserId,
      //  likes: "none"
      //},
      ////This helps us to determine if to show the plus/connect to dotParent button:
      //inDotParentSearchResults: true
    };
    return data;
  }
});




Template.searchResults_in_CreateTheDot.events({

});

