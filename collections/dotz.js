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
  update: () => true,
  remove: () => false

});

Dotz.deny({
  insert: () => true,
  update: () => false,
  remove: () => true
});

Dotz.attachSchema( Schema.dotSchema );
