
Template.dateComponent.onRendered(function() {

//Bootstrap 3 Datepicker v4 (from https://eonasdan.github.io/bootstrap-datetimepicker):
  $(function () {
    $('#datetimepicker6').datetimepicker();
    $('#datetimepicker7').datetimepicker({
      useCurrent: false //Important! See issue #1075
    });
    $("#datetimepicker6").on("dp.change", function (e) {
      $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker7").on("dp.change", function (e) {
      $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    });
  });
});


Template.dateComponent.helpers({

});
