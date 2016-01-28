/**
 *
 * @param query the search query for google
 * @param callback the callback re
 * @private
 */
function _googleCustomSearch(query, callback){
  $.ajax({
    url: 'https://www.googleapis.com/customsearch/v1?q='+query+'&cx=008624082377900795454:asiutjaqta4&key=AIzaSyCfp_HRG9nPAZd9RMPHlZRYWT2LXF09i6k',
    dataType:'json',
    success: function(result){
      callback(undefined, result)
    },
    error: function(err){
      callback(err)
    }
  })

}
/**
 * Factory for generate dot from google result
 * @param googleResult
 * @private
 */
function _googleDotFactory(googleResult){
  if (googleResult.pagemap && googleResult.pagemap["cse_thumbnail"]){
    this.googleImg = googleResult.pagemap["cse_thumbnail"][0].src;
  }
  this.googleLinkUrl = googleResult.link;
  this.googleHtmlTitle = googleResult.htmlTitle;
  this.googleTitle = googleResult.title;
  this.googleDescription = googleResult.snippet;
  this.googleHtmlDescription = googleResult.htmlSnippet;
  this.googleWebsiteName = googleResult.displayLink;
}

/**
 *
 * @param googleResults
 * @returns {Array}
 */
function googleResultToCard(googleResults){
  let dataResults = [];
  googleResults.items.forEach(function(googleResult){
    dataResults.push(new _googleDotFactory(googleResult));
  });
  return dataResults;
}
Modules.client.googleResultToCard = googleResultToCard;
Modules.client.googleCustomSearch = _googleCustomSearch;
