const EXPORT_HEADERS = [
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

function escapeCsvCell(value) {
  const text = value === undefined || value === null ? '' : String(value);
  if (/[,"\n]/.test(text)) {
    return `"${text.replaceAll('"', '""')}"`;
  }
  return text;
}

export function buildCsv(results) {
  const headerLine = EXPORT_HEADERS.join(',');
  const lines = results.map((row) =>
    EXPORT_HEADERS.map((header) => escapeCsvCell(row[header])).join(',')
  );
  return [headerLine, ...lines].join('\n');
}

export function autoDownloadCsv(results, fileName = 'col_pattern_results.csv') {
  const csv = buildCsv(results);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}

export async function postResultsToGoogleSheets(results) {
  const webAppUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL;
  if (!webAppUrl) {
    return { ok: false, reason: 'MISSING_ENDPOINT' };
  }

  try {
    const response = await fetch(webAppUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rows: results }),
    });

    if (!response.ok) {
      return { ok: false, reason: `HTTP_${response.status}` };
    }

    return { ok: true };
  } catch (error) {
    return { ok: false, reason: error?.message ?? 'UNKNOWN_ERROR' };
  }
}
