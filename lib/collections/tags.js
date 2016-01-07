Tags = new Meteor.Collection('tags');

tagSchema = new SimpleSchema({
  hebrewTags: {
    type: Object,
    blackbox: true
  },
  englishTags: {
    type: Object,
    optional: true,
    blackbox: true
  }
});
Tags.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Tags.attachSchema(tagSchema);
