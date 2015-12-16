(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/email/validation.coffee.js                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var Future;                                                            // 1
                                                                       //
Future = Npm.require('fibers/future');                                 // 1
                                                                       //
Meteor.methods({                                                       // 1
  validateEmailAddress: function(address) {                            // 4
    var validateEmail;                                                 // 5
    check(address, String);                                            // 5
    validateEmail = new Future();                                      // 5
    HTTP.call("GET", "https://api.kickbox.io/v1/verify", {             // 5
      params: {                                                        // 10
        email: address,                                                // 11
        apikey: "Enter your Kickbox.io API key here."                  // 11
      }                                                                //
    }, function(error, response) {                                     //
      if (error) {                                                     // 14
        return validateEmail["return"](error);                         //
      } else {                                                         //
        if (response.data.result === "invalid" || response.data.result === "unknown") {
          return validateEmail["return"]({                             //
            error: "Sorry, your email was returned as invalid. Please try another address."
          });                                                          //
        } else {                                                       //
          return validateEmail["return"](true);                        //
        }                                                              //
      }                                                                //
    });                                                                //
    return validateEmail.wait();                                       //
  }                                                                    //
});                                                                    //
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=validation.coffee.js.map
