




// Global Helpers - dot: :

Template.registerHelper('DOT_TYPE_IS', ( typeName, dotSubType ) => {
  return (typeName === dotSubType);
});

Template.registerHelper('DOT_TYPE_IS_OR', ( typeName1, typeName2, dotSubType, dotType ) => {
    if (typeName1 === dotSubType || typeName2 === dotType)
  return true;
});
