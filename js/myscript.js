$(function () {
  const SUBJECT = "HRR Competition";

  $("#myform").submit(function (event) {
    event.preventDefault();
    var fields = $(this).serializeArray();
    var body = createSubmissionBody(fields);
    var link = "mailto:treehrr@nist.gov?subject=" + encodeURI(SUBJECT) + "&body=" + encodeURI(body);
    window.location.href = link;
  });

  $("#copy-entry").click(function () {
    var fields = $("#myform").serializeArray();
    var body = createSubmissionBody(fields);
    navigator.clipboard.writeText(body);
    $("#copy-entry").text("Copied!");
    setTimeout(() => $("#copy-entry").text("Copy Entry"), 2000);
  });

  function createSubmissionBody(fields) {
    var competition_entry = fields.map(f => f.name + ": " + f.value).join('\n');
    return `### Contact Information ###

Name:
Email:
Institution:
Country/State:


### Competition Entry ###

${competition_entry}`;
  }
});
