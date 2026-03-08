/**
 * Deploy as a web app (Execute as: Me, Access: Anyone with link).
 * Expects JSON body: { rows: [ ... ] }
 */
function doPost(e) {
  var sheetName = 'results';
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);

  var payload = JSON.parse(e.postData.contents || '{}');
  var rows = payload.rows || [];

  if (!rows.length) {
    return ContentService.createTextOutput(JSON.stringify({ ok: true, inserted: 0 }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var headers = [
    'participantID',
    'latinGroup',
    'questionID',
    'conditionType',
    'isPractice',
    'isCorrect',
    'isSkipped',
    'reactionTime',
    'readyReactionTime',
    'answerReactionTime',
    'studentResponse',
    'timestampISO',
  ];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }

  var values = rows.map(function (row) {
    return headers.map(function (key) {
      return row[key] === undefined || row[key] === null ? '' : row[key];
    });
  });

  sheet.getRange(sheet.getLastRow() + 1, 1, values.length, headers.length).setValues(values);

  return ContentService.createTextOutput(JSON.stringify({ ok: true, inserted: values.length }))
    .setMimeType(ContentService.MimeType.JSON);
}
