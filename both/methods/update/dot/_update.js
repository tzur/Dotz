Meteor.methods({
  _dotUpdate(dotId, updateOptions){
    try {
      check(updateOptions, Object);
      check(dotId, String)

      Dotz.update({_id: dotId}, updateOptions);

    } catch (exeption) {
      return exeption;
    }
  }
});
