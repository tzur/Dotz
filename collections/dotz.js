/**
 * Created by avivhatzir on 26/10/2015.
 */
Dotz = new Meteor.Collection( 'dotz'),
  DotzIndex = new EasySearch.Index({
    collection: Dotz,
    fields: ['title', 'bodyText'],
    engine: new EasySearch.MongoDB()
  });


//TBD!!!@#!@#!@#!@#
Dotz.allow({
  insert: () => false,
  update: (userId, doc, fieldNames, modifier) => {
    return doc.ownerUserId === userId
  },
  remove: () => false

});

Dotz.deny({
  insert: () => true,
  update: (userId, doc, fieldNames, modifier) => {
    return (doc.ownerUserId != userId);
  },
  remove: () => true
});

Dotz.attachSchema( Schema.dotSchema );
