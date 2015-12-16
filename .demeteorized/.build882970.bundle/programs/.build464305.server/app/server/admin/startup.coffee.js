(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/admin/startup.coffee.js                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var createServiceConfiguration;                                        // 1
                                                                       //
createServiceConfiguration = function(service, clientId, secret) {     // 1
  var config;                                                          // 2
  ServiceConfiguration.configurations.remove({                         // 2
    service: service                                                   // 3
  });                                                                  //
  config = {                                                           // 2
    generic: {                                                         // 7
      service: service,                                                // 8
      clientId: clientId,                                              // 8
      secret: secret                                                   // 8
    },                                                                 //
    facebook: {                                                        // 7
      service: service,                                                // 12
      appId: clientId,                                                 // 12
      secret: secret                                                   // 12
    },                                                                 //
    twitter: {                                                         // 7
      service: service,                                                // 16
      consumerKey: clientId,                                           // 16
      secret: secret                                                   // 16
    }                                                                  //
  };                                                                   //
  switch (service) {                                                   // 20
    case 'facebook':                                                   // 20
      return ServiceConfiguration.configurations.insert(config.facebook);
    case 'twitter':                                                    // 20
      return ServiceConfiguration.configurations.insert(config.twitter);
    default:                                                           // 20
      return ServiceConfiguration.configurations.insert(config.generic);
  }                                                                    // 20
};                                                                     // 1
                                                                       //
createServiceConfiguration('facebook', '904084409705076', 'ed2840e1d563040cb0120317808e6524');
                                                                       //
createServiceConfiguration('github', 'Insert your clientId here.', 'Insert your secret here.');
                                                                       //
createServiceConfiguration('google', 'Insert your clientId here.', 'Insert your secret here.');
                                                                       //
createServiceConfiguration('twitter', 'Insert your consumerKey here.', 'Insert your secret here.');
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=startup.coffee.js.map
