(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/serverRoutes.js                                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
// LINK TO MUHAMAD CONFIGURE FILE :https://forums.meteor.com/t/facebook-share-setup/12980
                                                                       //
var seoPicker = Picker.filter(function (req, res) {                    // 4
  var isCrawler = [];                                                  // 5
  var string = req.headers['user-agent'];                              // 6
  isCrawler.push(/_escaped_fragment_/.test(req.url));                  // 7
  if (string) {                                                        // 8
    isCrawler.push(string.indexOf('facebookexternalhit') >= 0);        // 9
    isCrawler.push(string.indexOf('Slack') >= 0);                      // 10
    isCrawler.push(string.indexOf('Twitterbot') >= 0);                 // 11
    isCrawler.push(string.indexOf('Googlebot') >= 0);                  // 12
  }                                                                    //
  return isCrawler.indexOf(true) >= 0;                                 // 14
});                                                                    //
//Indexing user pages                                                  //
seoPicker.route('/:userSlug/:dotType/:dotSlug', function (params, req, res) {
  var fullSlug = params.userSlug + '/' + params.dotType + '/' + params.dotSlug;
  console.log("im heree SSR render DOT");                              // 19
  console.log(fullSlug);                                               // 20
  var dot = Dotz.findOne({ "dotSlug": fullSlug });                     // 21
  console.log(dot.title);                                              // 22
  var html = SSR.render('seoLayout', {                                 // 23
    template: 'seoDotShow',                                            // 24
    data: { dot: dot }                                                 // 25
  });                                                                  //
  res.end(html);                                                       // 27
});                                                                    //
seoPicker.route('/:userSlug', function (params, req, res) {            // 29
  console.log("im heree SSR render USER");                             // 30
  var user = Meteor.users.findOne({ "profile.userSlug": params.userSlug });
  console.log(user.username);                                          // 32
  var html = SSR.render('seoLayout', {                                 // 33
    template: 'seoUserShow',                                           // 34
    data: { user: user }                                               // 35
  });                                                                  //
  res.end(html);                                                       // 37
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=serverRoutes.js.map
