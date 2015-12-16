
Meteor.methods({

  omgCall(slug){

    //  security check:

    if ( Meteor.user().username != ( "Dotz" || "Otni" || "Aviv Hatzir" || "Yoav Sibony" || "Zur Tene") ) {
      return false
    }


    let theFakeLake = [
      "Otni",



    ];

    let i = Math.floor((Math.random() * theFakeLake.length) + 1);
    //



  }

});



