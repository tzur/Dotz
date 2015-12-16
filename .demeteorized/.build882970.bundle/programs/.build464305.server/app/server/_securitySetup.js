(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/_securitySetup.js                                            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
//browser poslicy setup                                                //
BrowserPolicy.content.allowEval("https://maps.googleapis.com");        // 2
BrowserPolicy.content.allowImageOrigin("https://csi.gstatic.com");     // 3
BrowserPolicy.content.allowOriginForAll("https://*.googleapis.com");   // 4
BrowserPolicy.content.allowOriginForAll("https://maps.gstatic.com");   // 5
BrowserPolicy.content.allowOriginForAll("https://fonts.gstatic.com");  // 6
BrowserPolicy.content.allowOriginForAll("https://*.s3.amazonaws.com");
                                                                       //
//Temp:                                                                //
                                                                       //
BrowserPolicy.content.allowImageOrigin("http://s2.postimg.org/6yq2vojd1/Location_icon_lg.png");
BrowserPolicy.content.allowImageOrigin("http://s2.postimg.org/6yq2vojd1/location_icon_lg.png");
BrowserPolicy.content.allowImageOrigin("http://s2.postimg.org/6yq2vojd1/Location_icon_lg.png");
BrowserPolicy.content.allowOriginForAll("http://s2.postimg.org/6yq2vojd1/Location_icon_lg.png");
BrowserPolicy.content.allowOriginForAll("https://maxcdn.bootstrapcdn.com");
BrowserPolicy.content.allowOriginForAll("http://*.postimg.org");       // 17
BrowserPolicy.content.allowImageOrigin("https://dotz-dev-images.s3.amazonaws.com/otni/lights-night-bokeh-city.jpg");
BrowserPolicy.content.allowOriginForAll("http://fonts.googleapis.com");
BrowserPolicy.content.allowOriginForAll("http://fonts.gstatic.com");   // 20
BrowserPolicy.content.allowOriginForAll("localhost:*");                // 21
BrowserPolicy.content.allowOriginForAll("http://connect.facebook.net/*");
BrowserPolicy.content.allowOriginForAll("http://platform.twitter.com/*");
BrowserPolicy.content.allowOriginForAll("http://connect.facebook.net/en_US/sdk.js");
BrowserPolicy.content.allowConnectOrigin("ws://localhost:5000");       // 25
BrowserPolicy.content.allowConnectOrigin("http://localhost:5000");     // 26
//BrowserPolicy.framing.allowAll();                                    //
BrowserPolicy.content.allowOriginForAll("https://*.google-analytics.com");
BrowserPolicy.content.allowOriginForAll("cdn.mxpnl.com");              // 29
BrowserPolicy.content.allowOriginForAll("https://player.vimeo.com");   // 30
BrowserPolicy.content.allowOriginForAll("https://*.gstatic.com");      // 31
                                                                       //
//css                                                                  //
BrowserPolicy.content.allowOriginForAll("http://css-spinners.com/css/spinner/dots.css");
BrowserPolicy.content.allowOriginForAll("http://www.css-spinners.com/css/spinner/dots.css");
                                                                       //
//ZOPIM:                                                               //
//BrowserPolicy.content.allowOriginForAll("http://v2.zopim.com/?3VHcUUxOehxuZrvBy2WXoYIxKkNNjkXi"); //TBD
BrowserPolicy.content.allowOriginForAll("http://*.zopim.com");         // 39
BrowserPolicy.content.allowDataUrlForAll();                            // 40
//BrowserPolicy.content.allowOriginForAll("data:application/font-woff"); //TBD
//BrowserPolicy.content.allowOriginForAll("data:application"); //TBD   //
//BrowserPolicy.content.allowScriptDataUrl();                          //
//BrowserPolicy.content.allowOriginForAll("");                         //
                                                                       //
//Intercom:                                                            //
//BrowserPolicy.content.allowOriginForAll("https://*.intercomcdn.com");
//BrowserPolicy.content.allowOriginForAll("https://js.intercomcdn.com");
//BrowserPolicy.content.allowOriginForAll("https://widget.intercom.io");
//BrowserPolicy.content.allowOriginForAll("https://widget.intercom.io/widget/ty914nuw");
//BrowserPolicy.content.allowOriginForAll("https://js.intercomcdn.com/intercom.167a86f8.js");
//BrowserPolicy.content.allowOriginForAll("https://js.intercomcdn.com/intercom.167a86f8.js");
                                                                       //
//Share:                                                               //
BrowserPolicy.content.allowOriginForAll("http://connect.facebook.net/en_US/sdk.js");
BrowserPolicy.content.allowOriginForAll("http://connect.facebook.net/en_US/sdk.js");
BrowserPolicy.content.allowOriginForAll("http://connect.facebook.net/en_US/sdk.js");
BrowserPolicy.content.allowOriginForAll("http://*.facebook.net");      // 59
BrowserPolicy.content.allowOriginForAll("https://*.facebook.net");     // 60
BrowserPolicy.content.allowOriginForAll("http://*.facebook.com");      // 61
BrowserPolicy.content.allowOriginForAll("https://*.facebook.com");     // 62
BrowserPolicy.content.allowOriginForAll("http://*.twitter.com");       // 63
BrowserPolicy.content.allowOriginForAll("https://*.twitter.com");      // 64
                                                                       //
//Temp TBD                                                             //
BrowserPolicy.content.allowOriginForAll("https://stats.g.doubleclick.net");
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=_securitySetup.js.map
