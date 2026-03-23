export const DEFAULT_LANGUAGE = 'tr';

export const LANGUAGE_OPTIONS = [
  { code: 'tr', flag: '🇹🇷', label: 'Türkçe' },
  { code: 'en', flag: '🇺🇸', label: 'English' },
];

export const COPY = {
  tr: {
    languageName: 'Türkçe',
    screenReader: {
      languageSwitcher: 'Dil seçimi',
      turkish: 'Türkçe',
      english: 'İngilizce',
    },
    start: {
      labName: 'Boğaziçi Üniversitesi Çocuk Öğrenme Laboratuvarı (ÇÖL)',
      title: 'Örüntü Macerası',
      subtitle: 'Örüntüyü incele ve aynı kurala sahip örüntüyü seç. 4 alıştırma turu ve 12 test turu var.',
      participantId: 'Katılımcı Kodu',
      participantPlaceholder: 'örn. T_1001_2026-1014',
      latinGroup: 'Latin Kare Grubu',
      autoAssign: 'Otomatik ata',
      groupLabel: 'Grup',
      start: 'Başla',
    },
    question: {
      practice: 'Alıştırma',
      test: 'Test',
      skip: 'Geç',
      hiddenPattern: 'Örüntü gizlendi. Aynı kurala sahip örüntüyü seç.',
      readyAria: 'Hazırım',
      continueAria: 'Devam',
      nextAria: 'İleri',
      confirmDialogAria: 'Cevabı onayla',
      confirmTitle: 'Emin misin?',
      confirmSubtitle: 'Bir sonraki soruya geçmek için hazır mısın?',
      confirmBackAria: 'Tekrar kontrol et',
      confirmNextAria: 'Evet, ileri',
      answerOptionsAria: 'Cevap seçenekleri',
      practiceCorrect: 'Doğru!',
      practiceIncorrect: 'Cevabın doğru değil. Devam edelim.',
    },
    dnd: {
      shapeBank: 'Şekil havuzu',
      emptySlot: 'Boş yer',
      tapToClear: 'Temizlemek için dokun.',
      slotFilled: '{shape}. Temizlemek için dokun.',
    },
    shapes: {
      square: 'Kare',
      circle: 'Daire',
      triangle: 'Üçgen',
      star: 'Yıldız',
    },
    transition: {
      title: 'Alıştırmaları ne kadar dikkatli yaptın!',
      subtitle: 'Emeğine sağlık. Şimdi örüntülerin dünyasında harika şeyler keşfetme zamanı.',
      cta: 'Haydi Keşfedelim!',
    },
    thankYou: {
      title: 'Harika İş!',
      subtitle: 'Tüm örüntü görevlerini tamamladın. Aferin!',
      champion: 'Sen bir Örüntü Şampiyonusun!',
      celebrationAlt: 'Kutlama animasyonu',
      participant: 'Katılımcı',
      latinGroup: 'Latin Grubu',
      responses: 'Kaydedilen yanıtlar',
      googleSheets: 'Google Sheets',
      uploaded: 'Başarıyla yüklendi',
      notUploaded: 'Yüklenemedi',
      download: 'CSV Yedeğini İndir',
    },
  },
  en: {
    languageName: 'English',
    screenReader: {
      languageSwitcher: 'Language selector',
      turkish: 'Turkish',
      english: 'English',
    },
    start: {
      labName: 'Boğaziçi University Children\'s Learning Lab (ÇÖL)',
      title: 'Pattern Adventure',
      subtitle: 'Look at the pattern and choose the one with the same rule. There are 4 practice rounds and 12 test rounds.',
      participantId: 'Participant ID',
      participantPlaceholder: 'e.g. T_1001_2026-1014',
      latinGroup: 'Latin Square Group',
      autoAssign: 'Auto assign',
      groupLabel: 'Group',
      start: 'Start',
    },
    question: {
      practice: 'Practice',
      test: 'Test',
      skip: 'Skip',
      hiddenPattern: 'Pattern hidden. Choose the one with the same rule.',
      readyAria: 'I am ready',
      continueAria: 'Continue',
      nextAria: 'Next',
      confirmDialogAria: 'Confirm answer',
      confirmTitle: 'Are you sure?',
      confirmSubtitle: 'Are you ready to go to the next question?',
      confirmBackAria: 'Check again',
      confirmNextAria: 'Yes, next',
      answerOptionsAria: 'Answer options',
      practiceCorrect: 'Correct!',
      practiceIncorrect: 'Not correct! Let us continue.',
    },
    dnd: {
      shapeBank: 'Shape bank',
      emptySlot: 'Empty slot',
      tapToClear: 'Tap to clear.',
      slotFilled: '{shape}. Tap to clear.',
    },
    shapes: {
      square: 'Square',
      circle: 'Circle',
      triangle: 'Triangle',
      star: 'Star',
    },
    transition: {
      title: 'You paid such great attention during practice!',
      subtitle: 'Thank you for your effort. Now it’s time to discover amazing things in the world of patterns.',
      cta: 'Let’s Discover!',
    },
    thankYou: {
      title: 'Amazing Work!',
      subtitle: 'You finished all pattern tasks. Super job!',
      champion: 'You are a Pattern Champion!',
      celebrationAlt: 'Kids cheering celebration animation',
      participant: 'Participant',
      latinGroup: 'Latin Group',
      responses: 'Logged responses',
      googleSheets: 'Google Sheets',
      uploaded: 'Uploaded successfully',
      notUploaded: 'Not uploaded',
      download: 'Download CSV Backup',
    },
  },
};

export function getCopy(language) {
  return COPY[language] ?? COPY[DEFAULT_LANGUAGE];
}

export function formatCopy(template, values) {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template
  );
}
