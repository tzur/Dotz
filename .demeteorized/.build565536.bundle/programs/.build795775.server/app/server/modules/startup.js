(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/modules/startup.js                                           //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var startup = function () {                                            // 1
  _setBrowserPolicies();                                               // 2
  _generateAccounts();                                                 // 3
};                                                                     //
                                                                       //
var _setBrowserPolicies = function () {};                              // 6
                                                                       //
var _generateAccounts = function () {                                  // 8
  return Modules.server.generateAccounts();                            //
};                                                                     //
                                                                       //
Modules.server.startup = startup;                                      // 10
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=startup.js.map
