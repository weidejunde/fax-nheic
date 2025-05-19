const grammarRules = [
  {
    id: "thời_gian_svo",
    moTa: "Câu có trạng ngữ thời gian ở đầu",
    patterns: {
      vi: ["adv", "n", "v", "num", "n", "adj", "adj"],
      en: ["adv", "n", "v", "num", "adj", "adj", "n"],
      zh: ["adv", "n", "v", "num", "adj", "adj", "n"],
      mji: ["adv", "n", "v", "num", "adj", "adj", "n"]
    },
    examples: {
      vi: "Hôm qua tôi ăn ba con cá lớn tươi.",
      en: "Yesterday I ate three big fresh fish.",
      zh: "昨天我吃了三条大新鱼。",
      mji: "mbuoq mbanh yauh sam dai xin nyaang."
    }
  },
  {
    id: "thời_gian_svo_cụm danh từ_tính_từ",
    moTa: "Câu có trạng ngữ thời gian và tân ngữ là danh từ kèm tính từ",
    patterns: {
      vi: ["adv", "n", "v", "num", "n", "adj"],
      en: ["adv", "n", "v", "num", "adj", "n"],
      zh: ["adv", "n", "v", "num", "adj", "n"],
      mji: ["adv", "n", "v", "num", "adj", "n"]
    },
    examples: {
      vi: "Sáng nay mẹ nấu hai món ăn ngon.",
      en: "This morning mother cooked two delicious dishes.",
      zh: "今天早上妈妈做了两个好吃的菜。",
      mji: "naangz biet meix hanh song laengz di laiq."
    }
  },
  {
    id: "",
    moTa: "Cụm danh từ có định từ, danh từ và tính từ (ví dụ: con mèo vàng)",
    patterns: {
      en: ["det", "{cụm danh từ}"],
      vi: ["det", "{cụm danh từ}"],
      zh: ["det", "{cụm danh từ}"],
      mji: ["det", "{cụm danh từ}"]
    },
    examples: {
      vi: "con mèo vàng",
      en: "the yellow cat",
      zh: "那只黄色的猫",
      mji: "ndei naang nyei"
    }
  },
  {
    id: "cụm_dt_định_từ_danh_từ",
    moTa: "Cụm danh từ gồm định từ và danh từ",
    patterns: {
      en: ["det", "n"],
      vi: ["det", "n"],
      zh: ["det", "n"],
      mji: ["det", "n"]
    },
    examples: {
      vi: "cái bàn",
      en: "the table",
      zh: "那张桌子",
      mji: "ndei gon"
    }
  },

  {
    id: "cụm_dt_số_lượng_danh_từ_tính_từ",
    moTa: "Cụm danh từ có số từ và tính từ",
    patterns: {
      en: ["num", "{cụm danh từ}"],
      vi: ["num", "{cụm danh từ}"],
      zh: ["num", "{cụm danh từ}"],
      mji: ["num", "{cụm danh từ}"]
    },
    examples: {
      vi: "ba con chó đen",
      en: "three black dogs",
      zh: "三只黑狗",
      mji: "sam ndei geiz duoq"
    }
  },
  {
    id: "cụm_dt_số_lượng_danh_từ",
    moTa: "Cụm danh từ có số từ và danh từ",
    patterns: {
      en: ["num", "n"],
      vi: ["num", "n"],
      zh: ["num", "n"],
      mji: ["num", "n"]
    },
    examples: {
      vi: "hai ghế",
      en: "two chairs",
      zh: "两把椅子",
      mji: "song ngoen"
    }
  },
  {
    id: "cụm_dt_nhiều_tính_từ",
    moTa: "Cụm danh từ có nhiều tính từ (ví dụ: con mèo màu vàng lớn)",
    patterns: {
      vi: ["det", "n", "adj", "adj"],
      en: ["det", "adj", "adj", "n"],
      zh: ["det", "adj", "adj", "n"],
      mji: ["det", "adj", "adj", "n"]
    },
    examples: {
      vi: "con mèo vàng to",
      en: "the big yellow cat",
      zh: "那只大黄色的猫",
      mji: "ndei dai naang nyei"
    }
  },
    {
    id: "cụm danh từ",
    moTa: "Cụm danh từ",
    patterns: {
      en: ["adj", "n"],
      vi: ["n", "adj"],
      zh: ["adj", "n"],
      mji: ["n", "adj"]
    },
    examples: {
      vi: "cá to",
      en: "big fish",
      zh: "大的鱼",
      mji: "nyaang dai"
    }
  },
  {
    id: "câu_svo_cụm_dt",
    moTa: "Câu có chủ ngữ, động từ và cụm danh từ làm tân ngữ",
    patterns: {
      vi: ["n", "v", "{cụm danh từ}"],
      en: ["n", "v", "{cụm danh từ}"],
      zh: ["n", "v", "{cụm danh từ}"],
      mji: ["n", "v", "{cụm danh từ}"]
    },
    examples: {
      vi: "Anh thích con mèo vàng.",
      en: "He likes the yellow cat.",
      zh: "他喜欢那只黄色的猫。",
      mji: "gouq nding ndei naang nyei."
    }
  },
    {
    id: "cụm danh từ_động từ_danh từ",
    moTa: "Câu có chủ ngữ, động từ và cụm danh từ làm tân ngữ",
    patterns: {
      vi: ["{cụm danh từ}", "v", "n"],
      en: ["{cụm danh từ}", "v", "n"],
      zh: ["{cụm danh từ}", "v", "n"],
      mji: ["{cụm danh từ}", "v", "n"]
    },
    examples: {
      vi: "Anh thích con mèo vàng.",
      en: "He likes the yellow cat.",
      zh: "他喜欢那只黄色的猫。",
      mji: "gouq nding ndei naang nyei."
    }
  },
    {
    id: "động từ có tân ngữ",
    moTa: "Động từ có tân ngữ",
    patterns: {
      vi: ["v", "n"],
      en: ["v", "n"],
      zh: ["v", "n"],
      mji: ["v", "n"],
    },
    examples: {
      vi: "Anh thích con mèo vàng.",
      en: "He likes the yellow cat.",
      zh: "他喜欢那只黄色的猫。",
      mji: "gouq nding ndei naang nyei."
    }
  },
    {
    id: "chủ ngữ",
    moTa: "Chủ ngữ",
    patterns: {
      vi: ["n", "p", "{cụm danh từ}"],
      en: ["n", "p", "{cụm danh từ}"],
      zh: ["n", "p", "{cụm danh từ}"],
      mji: ["n", "p", "{cụm danh từ}"],
    },
    examples: {
      vi: "Tôi ăn cơm.",
      en: "I eat rice.",
      zh: "我吃饭。",
      mji: "ngo yauh faan."
    }
  },
  {
    id: "câu_svo_danh_từ",
    moTa: "Câu đơn với danh từ làm chủ ngữ và tân ngữ",
    patterns: {
      vi: ["n", "v", "n"],
      en: ["n", "v", "n"],
      zh: ["n", "v", "n"],
      mji: ["n", "v", "n"]
    },
    examples: {
      vi: "Tôi ăn cơm.",
      en: "I eat rice.",
      zh: "我吃饭。",
      mji: "ngo yauh faan."
    }
  },
    {
    id: "sv",
    moTa: "Chủ ngữ + động từ",
    patterns: {
      vi: ["n", "v"],
      en: ["n", "v"],
      zh: ["n", "v"],
      mji: ["n", "v"]
    },
    examples: {
      vi: "Tôi ăn cơm.",
      en: "I eat rice.",
      zh: "我吃饭。",
      mji: "ngo yauh faan."
    }
  },
  {
    id: "câu_svo_cụm_dt_nhiều_adj",
    moTa: "Câu phức với cụm danh từ mở rộng làm tân ngữ (ví dụ: tôi thích con mèo màu vàng lớn)",
    patterns: {
      vi: ["n", "v", "det", "n", "n", "adj", "adj"],
      en: ["n", "v", "det", "adj", "adj", "n"],
      zh: ["n", "v", "det", "adj", "adj", "n"],
      mji: ["n", "v", "det", "adj", "adj", "n"]
    },
    examples: {
      vi: "Tôi thích con mèo lông vàng to.",
      en: "I like the big yellow furry cat.",
      zh: "我喜欢那只大黄色的毛猫。",
      mji: "ngo nding ndei dai naang nyaang nyei."
    }
  }
];

window.grammarRules = grammarRules;


// Đưa danh sách các quy tắc ngữ pháp ra phạm vi toàn cục để có thể dùng ở nơi khác
window.grammarRules = grammarRules;

/**
 * Hàm mở rộng mẫu (pattern) theo ngôn ngữ
 * - Nếu gặp phần tử dạng {tên_rule}, sẽ tìm quy tắc tương ứng trong `grammarRules` và mở rộng đệ quy.
 * - Nếu không tìm thấy, gán là 'unknown'
 * 
 * @param {Array} pattern - Mẫu đầu vào có thể chứa các từ khóa hoặc tham chiếu đến rule khác
 * @param {string} lang - Ngôn ngữ (vi, en, zh, mji)
 * @returns {Array} - Mẫu đã được mở rộng (không còn tham chiếu lồng)
 */
function expandPattern(pattern, lang) {
  return pattern.reduce((expanded, item) => {
    if (typeof item === 'string' && item.startsWith('{')) {
      const ruleId = item.slice(1, -1); // Lấy id bên trong dấu ngoặc {}
      const rule = grammarRules.find(r => r.id === ruleId); // Tìm rule tương ứng
      if (rule?.patterns[lang]) {
        // Đệ quy mở rộng mẫu trong rule đó
        return [...expanded, ...expandPattern(rule.patterns[lang], lang)];
      }
      // Nếu không tìm thấy, thêm từ loại không xác định
      return [...expanded, window.WORD_TYPES.unknown];
    }
    // Nếu không phải dạng {tên}, thêm trực tiếp
    return [...expanded, item];
  }, []);
}

/**
 * Hàm kiểm tra khớp mẫu loại từ
 * - So sánh mảng loại từ đầu vào với mẫu (có thể chứa rule lồng)
 * - Chỉ trả về true nếu toàn bộ mảng khớp về độ dài và thứ tự
 * 
 * @param {Array} types - Mảng loại từ đầu vào (['n', 'v', 'adj', ...])
 * @param {Array} pattern - Mẫu cần so khớp
 * @param {string} lang - Ngôn ngữ đang xét
 * @returns {boolean} - true nếu khớp, false nếu không
 */
function matchPattern(types, pattern, lang) {
  const expandedPattern = expandPattern(pattern, lang); // Mở rộng mẫu
  return types.length === expandedPattern.length &&
         types.every((type, i) => type === expandedPattern[i]); // So sánh từng phần tử
}

// Xuất các hàm ra global để các script khác có thể dùng
window.expandPattern = expandPattern;
window.matchPattern = matchPattern;
