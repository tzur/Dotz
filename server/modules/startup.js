let startup = () => {
  _setBrowserPolicies();
  //_generateAccounts();

  //TODO >> fix this poor system...: @otni

  let tagDict = {};
  tagDict["Idea generation"] = ["רעיון"];
  tagDict["Naming"] = ["שמות"];
  tagDict["Domain names"] = ["דומיין", "שם מתחם", "רישום דומיין"];
  tagDict["Hosting"] = ["הוסטינג", "אירוח אתרים", "אכסון אתרים","אחסון אתרים", "אחסנת אתרים", "אכסנת אתרים"];
  tagDict["Market Research"] = ["מחקר שוק","חקר מתחרים","חקר שוק"];
  tagDict["טפסים וסקרים"] = ["טפסים","סקרים","שאלונים"];
  tagDict["Design"]= ["עיצוב","דיזיין","UX", "UI"];
  tagDict["UX"] = ["שמישות","מבחני משתמש"];
  tagDict["Development"] = ["פיתוח"];
  tagDict["Deployment"] = ["פריסה", "שרת", "דיפלויי", "דיפלויימנט"];
  tagDict["Social Tools"] = ["כלים חברתיים", "סושייאל"];
  tagDict["MVP"] = ["MVP", "לין סטארטאפ"];
  tagDict["Marketing"] = ["מרקטינג", "שיווק"];
  tagDict["Presentation"] = ["הצגה", "להציג", "מציגים"];
  tagDict["Launching"] = ["השקה"];
  tagDict["Analytics"] = ["אנליטיקות", "KPI", "מיקספאנל","משתמשים רשומים"];
  tagDict["Customer Support"] = ["שירות לקוחות"];
  tagDict["Payments"] = ["סליקה", "פתרונות סליקה", "העברת כספים", "תשלומים"];
  tagDict["Outsourcing"] = ["מיקור חוץ","אאוטסורסינג", "אאוטסורס", "פרילנסר"];
  tagDict["Sales"] = ["מכירות"];
  tagDict["Raising Capital"] = ["גיוס", "גיוס הון", "משיקעים"];
  let tagsObject = {
    hebrewTags: tagDict
  };

  if (Tags.find().count() === 0){
    Tags.insert(tagsObject);
  }


  //process.env.MAIL_URL = "smtp://postmaster%40dotz.city.mailgun.org:TLVbeta123@smtp.mailgun.org:587";
};

var _setBrowserPolicies = () => {};

//TODO: tbd wtf ? @otni
//var _generateAccounts = () => Modules.server.generateAccounts();


//Kadira.connect('WhNBWk69WyNe4e6SH', '97449698-c726-4fb0-9a28-704083cd9335');

Modules.server.startup = startup;
