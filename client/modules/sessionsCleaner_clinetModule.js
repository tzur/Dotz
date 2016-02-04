
let sessionsCleaner = () => {
  //TBD...
  _editAndCreateSessionsCleaner();
};

//Edit/Create sessions:
let _editAndCreateSessionsCleaner = () => {
  Session.set("parentDot", undefined);
  Session.set("locationObject", undefined);
  Session.set("editAction_dot", undefined);
  Session.set("editAction_list", undefined);
  Session.set('spinnerOn', false);
};

Modules.client.sessionsCleaner = sessionsCleaner;
Modules.client.editAndCreateSessionsCleaner = _editAndCreateSessionsCleaner;

