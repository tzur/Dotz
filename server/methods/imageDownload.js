Meteor.methods({
  downloadImage: function (imageUrl) {
    check(imageUrl, String);
    //https://atmospherejs.com/froatsnook/request
    var result = request.getSync(imageUrl, {encoding: null});
    return 'data:image/png;base64,' + new Buffer(result.body).toString('base64');
  }
});
