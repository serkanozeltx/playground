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

  const payload = JSON.stringify({ rows: results });

  try {
    const response = await fetch(webAppUrl, {
      method: 'POST',
      // Intentionally omit custom headers to reduce CORS/preflight issues with Apps Script web apps.
      body: payload,
    });

    if (!response.ok) {
      return { ok: false, reason: `HTTP_${response.status}` };
    }

    return { ok: true };
  } catch (error) {
    // Fallback for endpoints that do not allow CORS response reads but still accept writes.
    try {
      await fetch(webAppUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: payload,
      });
      return { ok: true, reason: 'SENT_NO_CORS' };
    } catch (fallbackError) {
      return { ok: false, reason: fallbackError?.message ?? error?.message ?? 'UNKNOWN_ERROR' };
    }
  }
}
