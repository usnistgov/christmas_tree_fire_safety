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
    link = "mailto:treehrr@nist.gov" +
           "?subject=" + escape("HRR Competition") +
           "&body=" + escape(body);
    window.location.href = link
  })
})
