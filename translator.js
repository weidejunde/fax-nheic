// Metadata
const METADATA = {
  timestamp: "2025-05-16 16:10:30",
  author: "viducquans"
};

// New function: Check if the entire text matches a dictionary entry
function findInDictionary(text, srcLang) {
  const normalized = text.trim().toLowerCase();
  for (const [key, entry] of dictionary) {
    if (entry[srcLang]?.includes(normalized)) {
      return {
        type: 'dictionary',
        entry: entry,
        key: key
      };
    }
  }
  return null;
}

// Hàm tìm cụm từ dài nhất có trong từ điển
function findLongestMatch(text, startIndex, srcLang) {
  const words = text.trim().toLowerCase().split(/\s+/);
  // Bắt đầu với cụm từ dài nhất có thể
  for (let length = words.length - startIndex; length > 0; length--) {
    const phrase = words.slice(startIndex, startIndex + length).join(' ');
    const match = findInDictionary(phrase, srcLang);
    if (match) {
      return {
        match,
        endIndex: startIndex + length,
        text: phrase
      };
    }
  }
  return null;
}

// Hàm dịch cải tiến
function translate(text, srcLang, tgtLang) {
  // Kiểm tra nếu toàn bộ câu có trong từ điển
  const fullMatch = findInDictionary(text, srcLang);
  if (fullMatch) {
    document.getElementById('infoRule').innerHTML = 
      `<b>Dịch trực tiếp từ từ điển:</b><br>
       <b>Loại từ:</b> ${WORD_TYPES[fullMatch.entry.type]}<br>
       <b>Nghĩa:</b><br>
       - Việt: ${fullMatch.entry.vi.join(', ')}<br>
       - Anh: ${fullMatch.entry.en.join(', ')}<br>
       - Dao: ${fullMatch.entry.mji.join(', ')}<br>
       - Trung: ${fullMatch.entry.zh.join(', ')}`;
    return fullMatch.entry[tgtLang][0];
  }

  // Tìm các cụm từ dài nhất theo thứ tự
  const words = text.trim().toLowerCase().split(/\s+/);
  let currentIndex = 0;
  const matches = [];

  while (currentIndex < words.length) {
    const match = findLongestMatch(text, currentIndex, srcLang);
    if (match) {
      matches.push(match);
      currentIndex = match.endIndex;
    } else {
      // Nếu không tìm thấy match, bỏ qua từ hiện tại
      currentIndex++;
    }
  }

  // Nếu tìm được ít nhất 2 cụm từ
  if (matches.length >= 2) {
    const types = matches.map(m => m.match.entry.type);
    const matchedRule = grammarRules.find(rule => 
      matchPattern(types, rule.patterns[srcLang], srcLang)
    );

    if (matchedRule) {
      const targetPattern = expandPattern(matchedRule.patterns[tgtLang], tgtLang);
      const result = new Array(targetPattern.length);
      const used = new Array(matches.length).fill(false);

      targetPattern.forEach((type, i) => {
        const idx = matches.findIndex((m, j) => !used[j] && m.match.entry.type === type);
        if (idx !== -1) {
          result[i] = matches[idx].match.entry[tgtLang];
          used[idx] = true;
        }
      });

      let translations = [''];
      result.forEach(variants => {
        if (Array.isArray(variants)) {
          const newTranslations = [];
          translations.forEach(trans => {
            variants.forEach(variant => {
              newTranslations.push(
                (trans + ' ' + variant).trim()
              );
            });
          });
          translations = newTranslations;
        }
      });

      // Chỉ hiển thị quy tắc và các cách dịch có thể trong infoRule
      document.getElementById('infoRule').innerHTML = 
        `<b>Dịch theo quy tắc:</b> ${matchedRule.moTa}<br>
         <b>Các cách dịch có thể:</b><br>
         ${translations.map(t => `- ${t}`).join('<br>')}`;

      // Output chỉ hiển thị kết quả cuối cùng
      return translations.join('\n');
    }
  }

  document.getElementById('infoRule').innerHTML = 
    '<i>Không tìm thấy quy tắc phù hợp</i>';
  return text;
}

// Event handler for translation
function handleTranslate() {
  const input = document.getElementById('input').value;
  const srcLang = document.getElementById('sourceLanguage').value;
  const tgtLang = document.getElementById('targetLanguage').value;

  if (!input) {
    showError('Vui lòng nhập câu cần dịch');
    return;
  }

  if (srcLang === tgtLang) {
    showError('Vui lòng chọn ngôn ngữ nguồn và đích khác nhau');
    return;
  }

  try {
    const result = translate(input, srcLang, tgtLang);
    updateOutput(result);
  } catch (error) {
    showError('Có lỗi xảy ra khi dịch');
  }
}

// UI helper functions
function showError(message) {
  const output = document.getElementById('output');
  output.textContent = message;
  output.classList.add('error');
}

function updateOutput(text) {
  const output = document.getElementById('output');
  output.textContent = text;
  output.classList.remove('error');
}

function clearAll() {
  document.getElementById('input').value = '';
  document.getElementById('output').textContent = 'Kết quả sẽ hiển thị ở đây';
  document.getElementById('output').classList.remove('error');
  document.getElementById('infoRule').innerHTML = '';
}

// Initialize event listeners
window.onload = () => {
  document.getElementById('translateBtn').onclick = handleTranslate;
  document.getElementById('clearBtn').onclick = clearAll;
  document.getElementById('input').oninput = handleTranslate;
  document.getElementById('sourceLanguage').onchange = handleTranslate;
  document.getElementById('targetLanguage').onchange = handleTranslate;
};