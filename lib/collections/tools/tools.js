/**
 * Created by avivhatzir on 10/11/2015.
 */
/**
 * Created by avivhatzir on 26/10/2015.
 */
Tools = new Meteor.Collection( 'tools');


//TBD!!!@#!@#!@#!@#
Tools.allow({
  insert: () => true,
  update: () => true,
  remove: () => false

});

Tools.deny({
  insert: () => false,
  update: () => false,
  remove: () => true
});

Tools.attachSchema( Schema.tools );
