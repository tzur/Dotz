//browser policy setup

//See more on http://content-security-policy.com :
BrowserPolicy.content.allowOriginForAll("data:"); //TBD
//BrowserPolicy.content.allowOriginForAll("unsafe-eval");
BrowserPolicy.content.allowOriginForAll("unsafe-inline");

//All the images (included .ico) are allow - TBD:
BrowserPolicy.content.allowImageOrigin("*");
//BrowserPolicy.content.allowOriginForAll("*");

//Google:
BrowserPolicy.content.allowEval("https://maps.googleapis.com");
BrowserPolicy.content.allowImageOrigin("https://csi.gstatic.com");
BrowserPolicy.content.allowOriginForAll("https://*.googleapis.com");
BrowserPolicy.content.allowOriginForAll("https://maps.gstatic.com");
BrowserPolicy.content.allowOriginForAll("https://fonts.gstatic.com");
BrowserPolicy.content.allowOriginForAll("http://*.googletagmanager.com");
BrowserPolicy.content.allowOriginForAll("http://*.google-analytics.com");
BrowserPolicy.content.allowOriginForAll("https://*.google-analytics.com");
BrowserPolicy.content.allowOriginForAll('https://lookup-id.com/');
BrowserPolicy.content.allowOriginForAll('https://lookup-id.com/*');

BrowserPolicy.content.allowEval("https://*.googleapis.com");
BrowserPolicy.content.allowEval('*.cse.google.com/*');
BrowserPolicy.content.allowEval('http://cse.google.com/*');
BrowserPolicy.content.allowOriginForAll('http://cse.google.com/*');
BrowserPolicy.content.allowOriginForAll('*.cse.google.com/*');
BrowserPolicy.content.allowFrameOrigin('*.cse.google.com/*');
BrowserPolicy.content.allowFrameOrigin('http://cse.google.com/*');
BrowserPolicy.content.allowInlineScripts('http://cse.google.com/*');
BrowserPolicy.content.allowInlineScripts('*.cse.google.com/*');
BrowserPolicy.content.allowDataUrlForAll('*.cse.google.com/*');
BrowserPolicy.content.allowDataUrlForAll('http://cse.google.com/*');
BrowserPolicy.framing.allowAll();
BrowserPolicy.content.allowInlineStyles();
BrowserPolicy.content.allowDataUrlForAll();
BrowserPolicy.content.allowInlineScripts();
BrowserPolicy.content.allowInlineScripts("https://*.googleapis.com");
//Analytics:
BrowserPolicy.content.allowOriginForAll("http://*.segment.com");
BrowserPolicy.content.allowOriginForAll("cdn.mxpnl.com");

//Intercom:
BrowserPolicy.content.allowOriginForAll("https://widget.intercom.io");
BrowserPolicy.content.allowEval("https://widget.intercom.io");
BrowserPolicy.content.allowOriginForAll("https://*.intercomassets.com");
BrowserPolicy.content.allowOriginForAll("https://js.intercomcdn.com");

//Images/embed
BrowserPolicy.content.allowOriginForAll("https://*.s3.amazonaws.com");
BrowserPolicy.content.allowOriginForAll("http://*.embed.ly");
BrowserPolicy.content.allowOriginForAll("https://*.imgix.com");
BrowserPolicy.content.allowOriginForAll("https://www.youtube.com");
BrowserPolicy.content.allowOriginForAll("https://www.youtube.com/embed");



//Kadira:
BrowserPolicy.content.allowOriginForAll("https://kadira.io");
BrowserPolicy.content.allowOriginForAll("https://*.kadira.io/*");
BrowserPolicy.content.allowOriginForAll("https://enginex.kadira.io/*");
BrowserPolicy.content.allowOriginForAll("https://enginex.kadira.io/simplentp/sync");

//CSS / Fonts:
BrowserPolicy.content.allowOriginForAll("https://maxcdn.bootstrapcdn.com");
BrowserPolicy.content.allowOriginForAll("http://css-spinners.com/css/spinner/dots.css");
BrowserPolicy.content.allowOriginForAll("http://www.css-spinners.com/css/spinner/dots.css");
BrowserPolicy.content.allowOriginForAll("http://fonts.googleapis.com");
BrowserPolicy.content.allowOriginForAll("http://fonts.gstatic.com");

//Facebook:
BrowserPolicy.content.allowOriginForAll("http://connect.facebook.net/en_US/sdk.js");
BrowserPolicy.content.allowOriginForAll("http://connect.facebook.net/en_US/sdk.js");
BrowserPolicy.content.allowOriginForAll("http://connect.facebook.net/en_US/sdk.js");
BrowserPolicy.content.allowOriginForAll("http://*.facebook.net");
BrowserPolicy.content.allowOriginForAll("https://*.facebook.net");
BrowserPolicy.content.allowOriginForAll("http://*.facebook.com");
BrowserPolicy.content.allowOriginForAll("https://*.facebook.com");
BrowserPolicy.content.allowOriginForAll("https://fbcdn-profile-a.akamaihd.net/*");
BrowserPolicy.content.allowOriginForAll("http://connect.facebook.net/*");
BrowserPolicy.content.allowOriginForAll("http://connect.facebook.net/en_US/sdk.js");
BrowserPolicy.content.allowOriginForAll("https://facebook.com/");
BrowserPolicy.content.allowOriginForAll("https://*.facebook.com/*");
BrowserPolicy.content.allowOriginForAll("https://facebook.com/");

//Twitter:
BrowserPolicy.content.allowOriginForAll("http://*.twitter.com");
BrowserPolicy.content.allowOriginForAll("https://*.twitter.com");
BrowserPolicy.content.allowOriginForAll("http://*.twitter.com");
BrowserPolicy.content.allowOriginForAll("http://platform.twitter.com");
BrowserPolicy.content.allowOriginForAll("http://platform.twitter.com/*");

//Temp - tbd:

BrowserPolicy.content.allowOriginForAll("http://*.giphy.com");
BrowserPolicy.content.allowOriginForAll("http://i.giphy.com/YwTXexxX2yEVy.gif");

BrowserPolicy.content.allowImageOrigin("http://s2.postimg.org/6yq2vojd1/Location_icon_lg.png");
BrowserPolicy.content.allowImageOrigin("http://s2.postimg.org/6yq2vojd1/location_icon_lg.png");
BrowserPolicy.content.allowImageOrigin("http://s2.postimg.org/6yq2vojd1/Location_icon_lg.png");
BrowserPolicy.content.allowOriginForAll("http://s2.postimg.org/6yq2vojd1/Location_icon_lg.png");
BrowserPolicy.content.allowOriginForAll("http://*.postimg.org");
BrowserPolicy.content.allowImageOrigin("https://dotz-dev-images.s3.amazonaws.com/otni/lights-night-bokeh-city.jpg");
BrowserPolicy.content.allowConnectOrigin("ws://localhost:5000");
BrowserPolicy.content.allowConnectOrigin("http://localhost:5000");
//BrowserPolicy.framing.allowAll();
BrowserPolicy.content.allowOriginForAll("https://player.vimeo.com");
BrowserPolicy.content.allowOriginForAll("https://*.gstatic.com");


//Temp - TBD
BrowserPolicy.content.allowOriginForAll("https://stats.g.doubleclick.net");
//BrowserPolicy.content.allowOriginForAll("data:application");


