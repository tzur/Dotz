

Template.mini_searchResultCard.helpers({

  shortenTitle: function () {
    return s.prune(this.title, 30);
  }

});
