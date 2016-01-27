if (Meteor.isServer) {
  Meteor.methods({
    checkHttp: function () {
      this.unblock();
      return Meteor.http.call("POST", 'https://lookup-id.com/',{
        data:{
          url: 'https://www.facebook.com/groups/Hashavua/'
        }
      })
    }
  });
}

//invoke the server method
