// On Load
$(function () {

  const SUBJECT = "HRR Competition";
  
  // Initialize Brython
  brython();

  // Submit entry
  $("#myform").submit(function (event) {
    var fields = $(this).serializeArray();

    var body = createSubmissionBody(fields);

    event.preventDefault();
    link = "mailto:treehrr@nist.gov" +
           "?subject=" + encodeURI(SUBJECT) +
           "&body=" + encodeURI(body);
    window.location.href = link
  })

  // Copy Results
  $("#copy-entry").click(function () {
    var fields = $("#myform").serializeArray();
    var body = createSubmissionBody(fields);
    navigator.clipboard.writeText(body);
    // Inform user that the text has been copied
    $("#copy-entry").text("Copied!");
    setTimeout(function () {
      $("#copy-entry").text("Copy Entry");
    }, 2000);
  })

  function createSubmissionBody(fields) {

    var template = _.template(
      "### Contact Information ###\n\n" +
      "<%= contact_info %>\n\n\n" +
      "### Competition Entry ###\n\n" +
      "<%= competition_entry %>"
    );
    var body;
    var contact_info = "Name: \nEmail: \nInstitution: \nCountry/State: ";
    var competition_entry = _.join(
      _.map(fields, function (f) { return f.name + ": " + f.value; }), '\n'
    );

    body = template({contact_info: contact_info, competition_entry: competition_entry});

    return body;
  }


})
