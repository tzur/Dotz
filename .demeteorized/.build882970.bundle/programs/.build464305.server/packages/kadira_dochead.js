(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var babelHelpers = Package['babel-runtime'].babelHelpers;

/* Package-scope variables */
var DocHead;

(function(){

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// packages/kadira_dochead/packages/kadira_dochead.js                     //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
(function () {                                                            // 1
                                                                          // 2
///////////////////////////////////////////////////////////////////////   // 3
//                                                                   //   // 4
// packages/kadira:dochead/lib/both.jsx.js                           //   // 5
//                                                                   //   // 6
///////////////////////////////////////////////////////////////////////   // 7
                                                                     //   // 8
var FlowRouter = null;                                                    // 9
if (Package['kadira:flow-router-ssr']) {                                  // 10
  FlowRouter = Package['kadira:flow-router-ssr'].FlowRouter;              // 11
}                                                                         // 12
                                                                          // 13
DocHead = {                                                               // 14
  currentTitle: null,                                                     // 15
  setTitle: function (title) {                                            // 16
    if (Meteor.isClient) {                                                // 17
      document.title = title;                                             // 18
    } else {                                                              // 19
      this.currentTitle = title;                                          // 20
      var titleHtml = '<title>' + title + '</title>';                     // 21
      this._addToHead(titleHtml);                                         // 22
    }                                                                     // 23
  },                                                                      // 24
  addMeta: function (info) {                                              // 25
    this._addTag(info, 'meta');                                           // 26
  },                                                                      // 27
  addLink: function (info) {                                              // 28
    this._addTag(info, 'link');                                           // 29
  },                                                                      // 30
  getTitle: function () {                                                 // 31
    if (Meteor.isClient) {                                                // 32
      return document.title;                                              // 33
    } else {                                                              // 34
      return this.currentTitle;                                           // 35
    }                                                                     // 36
  },                                                                      // 37
  loadScript: function (url, options, callback) {                         // 38
    if (Meteor.isClient) {                                                // 39
      LoadScript(url, options, callback);                                 // 40
    }                                                                     // 41
  },                                                                      // 42
  _addTag: function (info, tag) {                                         // 43
    if (Meteor.isClient) {                                                // 44
      var meta = this._buildTag(info, tag);                               // 45
      $('head').append(meta);                                             // 46
    } else {                                                              // 47
      var meta = this._buildTag(info, tag);                               // 48
      this._addToHead(meta);                                              // 49
    }                                                                     // 50
  },                                                                      // 51
  _addToHead: function (html) {                                           // 52
    // only work there is kadira:flow-router-ssr                          // 53
    if (!FlowRouter) {                                                    // 54
      return;                                                             // 55
    }                                                                     // 56
                                                                          // 57
    var ssrContext = FlowRouter.ssrContext.get();                         // 58
    if (ssrContext) {                                                     // 59
      ssrContext.addToHead(html);                                         // 60
    }                                                                     // 61
  },                                                                      // 62
  _buildTag: function (metaInfo, type) {                                  // 63
    var props = "";                                                       // 64
    for (var key in metaInfo) {                                           // 65
      props += key + '="' + metaInfo[key] + '" ';                         // 66
    }                                                                     // 67
    props += 'dochead="1"';                                               // 68
    var meta = '<' + type + ' ' + props + '/>';                           // 69
    return meta;                                                          // 70
  },                                                                      // 71
  removeDocHeadAddedTags: function () {                                   // 72
    if (Meteor.isClient) {                                                // 73
      $('[dochead="1"]', document.head).remove();                         // 74
    }                                                                     // 75
  }                                                                       // 76
};///////////////////////////////////////////////////////////////////////
                                                                          // 78
}).call(this);                                                            // 79
                                                                          // 80
////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['kadira:dochead'] = {
  DocHead: DocHead
};

})();

//# sourceMappingURL=kadira_dochead.js.map
