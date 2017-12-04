// On Load
$(function () {
  
  // Initialize Brython
  brython();

  // Submit entry
  $("#myform").submit(function (event) {
    var fields = $(this).serializeArray();
    var contact = [
       { name: "Name", value: ''},
       { name: "Email", value: ''},
       { name: "Institution", value: ''},
       { name: "Country/State", value: '', }];
    var body;
    body = _.join(
      _.map(contact, function(f) { return f.name + ": " + f.value; }), '\n'
    )
    body += '\n\n';
    body += _.join(
      _.map(fields, function(f) { return f.name + ": " + f.value; }), '\n'
    )
    event.preventDefault();
    link = "mailto:TreeHRR2017@nistgov.onmicrosoft.com" +
           "?subject=" + escape("HRR Competition 2017") +
           "&body=" + escape(body);
    window.location.href = link
  })
})
