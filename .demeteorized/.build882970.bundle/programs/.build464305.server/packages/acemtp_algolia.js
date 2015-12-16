(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var AlgoliaSearch, algoliasearch;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/acemtp_algolia/server.js                                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
AlgoliaSearch = algoliasearch = Npm.require('algoliasearch');        // 1
                                                                     // 2
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['acemtp:algolia'] = {
  AlgoliaSearch: AlgoliaSearch
};

})();

//# sourceMappingURL=acemtp_algolia.js.map
