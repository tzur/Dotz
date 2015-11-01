
let createSmartRef = (dotId, parentDot, connectedByUserId, actionName, personalDescription) => {
  let smartRef = {};
  // just delete the entire if, at the worst case it will be undefined and it's fine.
  if (personalDescription){
    smartRef = {
      dotId: dotId,
      parentDot: parentDot,
      connectedByUserId: connectedByUserId,
      actionName: actionName,
      personalDescription:personalDescription
    }
  }
  else{
    smartRef = {
      dotId: dotId,
      parentDot: parentDot,
      connectedByUserId: connectedByUserId,
      actionName: actionName
    }
  }
  return smartRef
};

Modules.both.Dotz.smartRefFactory = createSmartRef;

