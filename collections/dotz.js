/**
 * Created by avivhatzir on 26/10/2015.
 */
Dotz = new Meteor.Collection( 'dotz' );

Dotz.allow({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Dotz.deny({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Dotz.attachSchema( Schema.dotSchema );
