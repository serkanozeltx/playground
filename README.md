# ÇÖL Pattern Recognition Experiment (React + dnd-kit)

Tablet-first experiment app for Boğaziçi University Child Learning Lab (ÇÖL), designed for children aged 4-6.

## Features

- 16-question session flow:
  - 4 fixed practice questions (`isPractice: true`)
  - 12 test questions from Balanced Latin Square sequence (`A`-`F` groups)
- 6 condition modes:
  - horizontal-mc
  - vertical-mc
  - memory-mc
  - horizontal-dnd
  - vertical-dnd
  - memory-dnd
- Pattern scoring uses abstract structure matching (isomorphism), not concrete symbol identity.
- Drag-and-drop powered by `dnd-kit` with immediate touch activation (no long press).
- Per-question logging fields:
  - `participantID`, `questionID`, `conditionType`, `isCorrect`, `reactionTime`, `studentResponse`
  - `isSkipped`, `readyReactionTime`, `answerReactionTime`
- Data output:
  - Optional POST to Google Sheets web app endpoint
  - Automatic CSV backup download on completion

## Boğaziçi Color Tokens Used

Extracted from live COL/BWB theme CSS:

- Blue: `#004990`
- Orange: `#fb872f`
- Green: `#004638`

Source CSS:
- `https://col.bogazici.edu.tr/sites/all/themes/bwb3/css/theme.css`
- `https://col.bogazici.edu.tr/sites/col.bogazici.edu.tr/themes/bwb3_subtheme/css/custom.css`

## Project Structure

- `src/App.jsx`: experiment state machine (`start -> running -> finished`)
- `src/data/experimentConfig.js`: all study constants, Latin Square groups, question pools
- `src/components/StartScreen.jsx`: participant setup
- `src/components/QuestionScreen.jsx`: question renderer and timing
- `src/components/StimulusSequence.jsx`: horizontal/vertical stimulus display
- `src/components/MultipleChoiceOptions.jsx`: MC answer UI
- `src/components/DndResponseBoard.jsx`: DnD answer UI + touch sensors
- `src/components/ThankYouScreen.jsx`: completion summary + backup download
- `src/utils/pattern.js`: isomorphism validation logic
- `src/utils/results.js`: CSV export + Google Sheets POST helper

## Run

```bash
npm install
npm run dev
```

## Google Sheets Setup

1. Create a Google Sheet.
2. Open `Extensions > Apps Script`.
3. Paste `google-apps-script.gs`.
4. Deploy as Web App.
5. Copy deployment URL into `.env` as:

```bash
VITE_GOOGLE_SHEETS_WEB_APP_URL=YOUR_WEB_APP_URL
```
