/**
 * Created by avivhatzir on 03/12/2015.
 */
//      Comment out by Otni - 31.12.15 + 21.1.16:

let dotCardAnalyticsEvents = (nameBeginning, titleBeginning,dotId, dotTitle, dotType) => {
  //if(Template.parentData().dot){
  //  let parentData = Template.parentData();
  //  let dotIndex = Modules.client.Dotz.getDotIndexInConnectedDotArray(dotId, parentData.dot._id);
  //  analytics.track(nameBeginning, {
  //    title: titleBeginning + dotTitle,
  //    dotType: dotType,
  //    parentDotType: parentData.dot.dotType,
  //    parentDotName: parentData.dot.title,
  //    isParentDotOpen: parentData.dot.isOpen,
  //    dotIndexInParentDot: dotIndex
  //  })
  //}
  //else{
  //  let parentData = Template.parentData();
  //  let dotIndex = Modules.client.Dotz.getDotIndexInConnectedDotArray(dotId, parentData.profile.profileDotId);
  //  analytics.track(nameBeginning, {
  //    title: titleBeginning + dotTitle,
  //    dotType: dotType,
  //    parentDotType: 'Profile',
  //    parentDotName: 'Profile',
  //    dotIndexInParentDot: dotIndex
  //  })
  //
  //}

};
Modules.client.Dotz.dotCardAnalyticsEvents = dotCardAnalyticsEvents;
