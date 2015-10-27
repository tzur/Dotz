/**
 * Created by avivhatzir on 27/10/2015.
 */

let dotHooks = {
  before: {
    method: function (doc){
      return doc;
    }

  }
};

AutoForm.addHooks('InsertDotForm', dotHooks);



