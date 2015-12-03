if (Meteor.isClient) {
  ShareIt.init({
    siteOrder: ['facebook', 'twitter'],
    iconOnly: true,
    applyColors: false
  });
}
