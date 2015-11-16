/**
 * Created by avivhatzir on 10/11/2015.
 */
/**
 * Created by avivhatzir on 26/10/2015.
 */
Tools = new Meteor.Collection( 'tools');


//TBD!!!@#!@#!@#!@#
Tools.allow({
  insert: () => false,
  update: () => false,
  remove: () => false

});

Tools.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Tools.attachSchema( Schema.tools );
