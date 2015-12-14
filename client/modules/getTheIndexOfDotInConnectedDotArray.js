/**
 * Created by avivhatzir on 03/12/2015.
 */
/**
 * Created by avivhatzir on 12/11/2015.
 */
//Move to client side.

let getDotIndexInConnectedDotArray = (currentDotId, parentDotId) => {
  let parentDot = Dotz.findOne(parentDotId);
  let indexCount = 0;
  if(parentDot.connectedDotzArray){
    while (currentDotId != parentDot.connectedDotzArray[indexCount].dot._id){
      indexCount++
    }
  }
  return indexCount +1;


};
Modules.client.Dotz.getDotIndexInConnectedDotArray = getDotIndexInConnectedDotArray;
