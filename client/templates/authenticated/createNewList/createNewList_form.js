

Template.createNewList_form.onRendered( () => {
  Modules.client.createNewList({
    form: "#createNewList",
    template: Template.instance()
  });
});
