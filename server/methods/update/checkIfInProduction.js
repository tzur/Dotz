/**
 * Created by avivhatzir on 16/12/2015.
 */
Meteor.methods({
  isAppInProduction(){
    if(process.env.NODE_ENV === "production"){
      return "eUiePRZJCru751lnoFAhP09cchUtEqGZ"
    }
    else{
      return false
    }
  }
});
