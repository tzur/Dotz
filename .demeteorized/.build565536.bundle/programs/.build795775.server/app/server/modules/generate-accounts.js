(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/modules/generate-accounts.js                                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var administrators = [{                                                // 1
  name: { first: 'Admin', last: 'McAdmin' },                           // 3
  email: 'admin@admin.com',                                            // 4
  password: 'password'                                                 // 5
}];                                                                    //
                                                                       //
var generateAccounts = function () {                                   // 9
  var fakeUserCount = 5,                                               // 10
      usersExist = _checkIfAccountsExist(administrators.length + fakeUserCount);
                                                                       //
  if (!usersExist) {                                                   // 13
    _createUsers(administrators);                                      // 14
    _createUsers(_generateFakeUsers(fakeUserCount));                   // 15
  }                                                                    //
};                                                                     //
                                                                       //
var _checkIfAccountsExist = function (count) {                         // 19
  var userCount = Meteor.users.find().count();                         // 20
  return userCount < count ? false : true;                             // 21
};                                                                     //
                                                                       //
var _createUsers = function (users) {                                  // 24
  for (var i = 0; i < users.length; i++) {                             // 25
    var user = users[i],                                               // 26
        userExists = _checkIfUserExists(user.email);                   //
                                                                       //
    if (!userExists) {                                                 // 29
      _createUser(user);                                               // 30
    }                                                                  //
  }                                                                    //
};                                                                     //
                                                                       //
var _checkIfUserExists = function (email) {                            // 35
  return Meteor.users.findOne({ 'emails.address': email });            // 36
};                                                                     //
                                                                       //
var _createUser = function (user) {                                    // 39
  Accounts.createUser({                                                // 40
    email: user.email,                                                 // 41
    password: user.password,                                           // 42
    profile: {                                                         // 43
      name: user.name                                                  // 44
    }                                                                  //
  });                                                                  //
};                                                                     //
                                                                       //
var _generateFakeUsers = function (count) {                            // 49
  var users = [];                                                      // 50
                                                                       //
  for (var i = 0; i < count; i++) {                                    // 52
    users.push({                                                       // 53
      name: { first: faker.name.firstName(), last: faker.name.lastName() },
      email: faker.internet.email(),                                   // 55
      password: 'password'                                             // 56
    });                                                                //
  }                                                                    //
                                                                       //
  return users;                                                        // 60
};                                                                     //
                                                                       //
Modules.server.generateAccounts = generateAccounts;                    // 63
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=generate-accounts.js.map
