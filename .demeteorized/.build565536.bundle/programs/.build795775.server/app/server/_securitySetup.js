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
BrowserPolicy.content.allowImageOrigin("http://s2.postimg.org/6yq2vojd1/Location_icon_lg.png");
BrowserPolicy.content.allowImageOrigin("http://s2.postimg.org/6yq2vojd1/location_icon_lg.png");
BrowserPolicy.content.allowImageOrigin("http://s2.postimg.org/6yq2vojd1/Location_icon_lg.png");
BrowserPolicy.content.allowOriginForAll("http://s2.postimg.org/6yq2vojd1/Location_icon_lg.png");
BrowserPolicy.content.allowOriginForAll("https://maxcdn.bootstrapcdn.com");
BrowserPolicy.content.allowOriginForAll("http://*.postimg.org");       // 15
BrowserPolicy.content.allowImageOrigin("https://dotz-dev-images.s3.amazonaws.com/otni/lights-night-bokeh-city.jpg");
BrowserPolicy.content.allowOriginForAll("http://fonts.googleapis.com");
BrowserPolicy.content.allowOriginForAll("http://fonts.gstatic.com");   // 18
BrowserPolicy.content.allowOriginForAll("localhost:*");                // 19
BrowserPolicy.content.allowConnectOrigin("ws://localhost:5000");       // 20
BrowserPolicy.content.allowConnectOrigin("http://localhost:5000");     // 21
BrowserPolicy.framing.allowAll();                                      // 22
BrowserPolicy.content.allowOriginForAll("www.google-analytics.com");   // 23
BrowserPolicy.content.allowOriginForAll("cdn.mxpnl.com");              // 24
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=_securitySetup.js.map
