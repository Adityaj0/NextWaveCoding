const scriptURL = 'https://script.google.com/macros/s/AKfycbz4I0guMeOH3endReMCqOjvNcGJPdJzPfM34OtZoVIXm-Hdy-SbCSTIjhLX3kggwyc_lA/exec';

$('#join-form').on('submit', function(e) {
	e.preventDefault();
	const formData = new FormData(this);

	$.ajax({
		url: scriptURL,
		type: 'POST',
		data: formData,
		dataType: 'json',
		contentType: false,
		processData: false,
		success: function(data) {
			console.log('Form submission successful!');
			console.log('Response data:', data);
			// Reset the form after successful submission
			$('#join-form')[0].reset();
		},
		error: function(error) {
			console.error('Error:', error);
		}
	});
});
function doPost(e) {
  const formData = e.parameter;
  const sheetName = 'Form Responses'; // Update with your desired sheet name
  const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Update with your spreadsheet ID

  const headers = ['Name', 'Email', 'Phone', 'Reason', 'Contribution', 'Suggestions', 'Education', 'Timestamp'];
  const values = [
    formData.name,
    formData.email,
    formData.phone,
    formData.reason,
    formData.contribution,
    formData.suggestions,
    formData.education,
    new Date()
  ];

  const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
  const lastRow = sheet.getLastRow();

  if (lastRow === 0) {
    sheet.appendRow(headers);
  }

  sheet.appendRow(values);

  const response = {
    result: 'success',
    message: 'Form submission successful!'
  };

  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}