const grammarRules = [
    {
        id: "ngữ pháp",
        moTa: "ngữ pháp",
        patterns: {
        vi: ["{chủ ngữ}","{động từ}","{tân ngữ}"],
        en: ["{chủ ngữ}","{động từ}","{tân ngữ}"],
        zh: ["{chủ ngữ}","{động từ}","{tân ngữ}"],
        mji: ["{chủ ngữ}","{động từ}","{tân ngữ}"]
        }
    },
        {
        id: "chủ ngữ",
        moTa: "chủ ngữ",
        patterns: {
            vi: ["n","p","{cụm danh từ}"],
            en: ["n","p","{cụm danh từ}"],
            zh: ["n","p","{cụm danh từ}"],
            mji: ["n","p","{cụm danh từ}"],
        }
    },
    {
    id: "cụm danh từ",
    moTa: "cụm danh từ",
    patterns: {
        vi: ["num","cl","n","a"],
        en: ["n","p","{cụm danh từ}"],
        zh: ["n","p","{cụm danh từ}"],
        mji: ["n","p","{cụm danh từ}"],
    }
}
];