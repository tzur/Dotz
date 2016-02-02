
Template.dateComponent.onRendered(function() {



  this.$('#datetimepicker-startday').datetimepicker({
      useCurrent: false, //Important! See issue #1075
      format: 'DD MMMM YYYY',
      pickTime: false,
      autoclose: true
    });

  this.$('#datetimepicker-starthour').datetimepicker({
    useCurrent: false, //Important! See issue #1075
    format: 'hh:mm A',
    pickDate: false,
    autoclose: true
  });

  this.$('#datetimepicker-endday').datetimepicker({
    useCurrent: false, //Important! See issue #1075
    format: 'DD MMMM YYYY',
    pickTime: false,
    autoclose: true
  });

  this.$('#datetimepicker-endhour').datetimepicker({
    useCurrent: false, //Important! See issue #1075
    format: 'hh:mm A',
    pickDate: false,
    autoclose: true
  });



});


Template.dateComponent.helpers({

});

Template.dateComponent.events ({




});
