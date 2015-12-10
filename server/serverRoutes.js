var seoPicker = Picker.filter(function(req, res) {
  var isCrawler = [];
  var string = req.headers['user-agent'];
  isCrawler.push(/_escaped_fragment_/.test(req.url));
  if(string){
    isCrawler.push(string.indexOf('facebookexternalhit') >= 0);
    isCrawler.push(string.indexOf('Slack') >= 0);
    isCrawler.push(string.indexOf('Twitterbot') >= 0);
  }
  return isCrawler.indexOf(true) >= 0;
});
 //Indexing user pages
seoPicker.route('/:userSlug/:dotType/:dotSlug', function(params, req, res){
  var fullSlug = params.userSlug +'/' + params.dotType + '/' + params.dotSlug;
  console.log("im heree SSR render");
  console.log(fullSlug);
  var dot = Dotz.findOne({"dotSlug": fullSlug});
  console.log(dot.title);
  var html = SSR.render('seoLayout',{
    template:'seoDotShow',
    data: {dot: dot}
  });
  res.end(html);
});
