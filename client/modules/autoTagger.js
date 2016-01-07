let _getTaggers = function(template){

};

let autoTagger = function(template){
  $(template.find('[name=bodyText]')).change(function(event){
    _getTaggers(template)
  });
  $(template.find('[name=title]')).change(function(event){
    _getTaggers(template);
  });
};

Modules.client.autoTagger = autoTagger;
