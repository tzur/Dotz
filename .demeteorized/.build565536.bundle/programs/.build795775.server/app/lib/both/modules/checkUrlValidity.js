(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/both/modules/checkUrlValidity.js                                //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var _fileExistsInDatabase = function (url) {                           // 1
  return Files.findOne({ "url": url, "userId": Meteor.userId() }, { fields: { "_id": 1 } });
};                                                                     //
                                                                       //
var _isNotAmazonUrl = function (url) {                                 // 5
  return url.indexOf('s3.amazonaws.com') < 0;                          // 6
};                                                                     //
                                                                       //
var _validateUrl = function (url) {                                    // 9
  if (_fileExistsInDatabase(url)) {                                    // 10
    return { valid: false, error: "Sorry, this file already exists!" };
  }                                                                    //
                                                                       //
  if (_isNotAmazonUrl(url)) {                                          // 14
    return { valid: false, error: "Sorry, this isn't a valid URL!" };  // 15
  }                                                                    //
                                                                       //
  return { valid: true };                                              // 18
};                                                                     //
                                                                       //
var validate = function (url) {                                        // 21
  var test = _validateUrl(url);                                        // 22
                                                                       //
  if (!test.valid) {                                                   // 24
    throw new Meteor.Error("file-error", test.error);                  // 25
  }                                                                    //
};                                                                     //
                                                                       //
Modules.both.checkUrlValidity = validate;                              // 29
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=checkUrlValidity.js.map
