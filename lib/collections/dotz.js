/**
 * Created by avivhatzir on 26/10/2015.
 */
Dotz = new Meteor.Collection( 'dotz');
//TBD!!!@#!@#!@#!@#
Dotz.allow({
  insert: () => false,
  update: () => false,
  remove: () => false

});

Dotz.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Dotz.attachSchema( Schema.dotSchema );
