let _getTaggers = function(template, text,selectedTagsSet){
  Tags.find().forEach(function(tagDict){
    for (let tag in tagDict.hebrewTags){
      //Hebrew tags logic - need to make it a method and reuse on english tags when they eventually will come
      tagDict.hebrewTags[tag].forEach(function(tagValue){
        if (text.indexOf(tagValue) > -1){
          selectedTagsSet.add(tag);
        }
      });
    }
  });
  let stringTags = "";
  selectedTagsSet.forEach(function(value, key, setObj){
    stringTags +=  key + ', ';
  });
  console.log(stringTags);
  $(template.find('[name=tags]')).val(stringTags);

  Session.set('givenTags', stringTags);
};

let autoTagger = function(template){
  let selectedTagsSet = new Set();
  Session.set('givenTags', undefined);
  $(template.find('[name=bodyText]')).change(function(event){
    _getTaggers(template, event.target.value, selectedTagsSet)
  });
  $(template.find('[name=title]')).change(function(event){
    _getTaggers(template, event.target.value, selectedTagsSet);
  });
};

Modules.client.autoTagger = autoTagger;
