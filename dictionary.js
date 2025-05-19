// Định nghĩa các loại từ (danh từ, động từ, tính từ, v.v.)
const WORD_TYPES = {
  n: 'noun',         // danh từ
  v: 'verb',         // động từ
  p: 'pronoun',     // đại từ
  adv: 'adverb',     // trạng từ
  pre: 'preposition', // giới từ
  c: 'conjunction', // liên từ
  i: 'interjection', // thán từ
  e: 'exclamation', // cảm thán từ
  a: 'adjective',  // tính từ
  d: 'determiner', // từ định danh (như "con", "cái")
  num: 'number',     // số đếm
  cl: 'classifier', // từ chỉ loại (chưa dùng)
};

// Tạo một từ điển gồm các từ đa ngôn ngữ (Việt - Anh - Trung - mji)
const dictionary = new Map([

  // Từ định danh (Determiners)
  ['det_the', { vi: ['con', 'cái'], en: ['the', 'a'], zh: [''], mji: ['tăuh'], type: 'det' }],
  ['v_have', { vi: ['có'], en: ['have'], zh: ['有'], mji: ['naih'], type: 'v' }],

  // Danh từ (Nouns)
  ['n_cat', { vi: ['mèo', 'con mèo'], en: ['cat'], zh: ['猫'], mji: ['meur'], type: 'n' }],
  ['n_dog', { vi: ['chó','con chó'], en: ['dog'], zh: ['狗'], mji: ['klôd'], type: 'n' }],
  ['n_color', { vi: ['màu'], en: ['color'], zh: ['色'], mji: ['săkl'], type: 'n' }],
  ['n_book', { vi: ['sách', 'quyển sách'], en: ['book'], zh: ['书'], mji: ['soul'], type: 'n' }],

  // Tính từ (Adjectives)
  ['adj_red', { vi: ['đỏ', 'màu đỏ'], en: ['red'], zh: ['红'], mji: ['sil'], type: 'adj' }],
  ['adj_yellow', { vi: ['vàng'], en: ['yellow'], zh: ['黄'], mji: ['wăngh'], type: 'adj' }],
  ['adj_big', { vi: ['to', 'lớn'], en: ['big', 'large'], zh: ['大'], mji: ['lôl'], type: 'adj' }],
  ['adj_fat', { vi: ['béo', 'mập'], en: ['fat'], zh: ['胖'], mji: ['kŭnc'], type: 'adj' }],
  ['adj_green', { vi: ['xanh', 'màu xanh', 'màu xanh dương'], en: ['blue'], zh: ['蓝色'], mji: ['mengr'], type: 'adj' }],
  ['adj_blue', { vi: ['xanh', 'màu xanh', 'màu xanh lá cây'], en: ['green'], zh: ['绿色'], mji: ['mengr'], type: 'adj' }],
  ['adj_beautiful', { vi: ['đẹp', 'rất đẹp'], en: ['beautiful', 'very beautiful'], zh: ['漂亮'], mji: ['kuaid'], type: 'adj' }],
  ['adj_good', { vi: ['hay', 'rất hay'], en: ['good', 'very good'], zh: ['好'], mji: ['gŏngs'], type: 'adj' }],

  // Đại từ nhân xưng (Pronouns)
  ['pron_i', { vi: ['tôi', 'anh'], en: ['i', 'me'], zh: ['我'], mji: ['yar', 'yas'], type: 'n' }],
  ['pron_you', { vi: ['bạn', 'em'], en: ['you'], zh: ['你'], mji: ['meih'], type: 'n' }],

  // Động từ (Verbs)
  ['v_love', { vi: ['yêu'], en: ['love'], zh: ['爱'], mji: ['ois'], type: 'v' }],
  ['v_like', { vi: ['thích', 'yêu'], en: ['like', 'love'], zh: ['喜欢'], mji: ['yĕnx', 'ois'], type: 'v' }],
  ['v_read', { vi: ['đọc'], en: ['read'], zh: ['读'], mji: ['toc'], type: 'v' }],

  // Số đếm (Numbers)
  ['num_1', { vi: ['1', 'một'], en: ['1', 'one'], zh: ['一'], mji: ['ah'], type: 'num' }],
  ['num_2', { vi: ['2', 'hai'], en: ['2', 'two'], zh: ['二'], mji: ['ir'], type: 'num' }],

  // Trạng từ chỉ thời gian (Time adverbs)
  ['adv_today', { vi: ['hôm nay'], en: ['today'], zh: ['今天'], mji: ['neib'], type: 'adv' }],
  ['adv_yesterday', { vi: ['hôm qua'], en: ['yesterday'], zh: ['昨天'], mji: ['kŭmh noil'], type: 'adv' }],
  ['n_father', { vi: ['cha', 'bố'], en: ['father', 'dad'], zh: ['父亲'], mji: ['fad'], type: 'n' }],
  ['n_house', { vi: ['nhà', 'ngôi nhà'], en: ['house', 'home'], zh: ['房子'], mji: ['piăud'], type: 'n' }],
  ['n_water', { vi: ['nước'], en: ['water'], zh: ['水'], mji: ['wŏmr'], type: 'n' }],
  ['n_food', { vi: ['thức ăn', 'đồ ăn'], en: ['food'], zh: ['食物'], mji: ['giăir'], type: 'n' }],

  // Động từ (Verbs)
  ['v_eat', { vi: ['ăn'], en: ['eat'], zh: ['吃'], mji: ['nhĭnc'], type: 'v' }],
  ['v_sleep', { vi: ['ngủ'], en: ['sleep'], zh: ['睡觉'], mji: ['meic giomh'], type: 'v' }],

  // Tính từ (Adjectives)
  ['adj_small', { vi: ['nhỏ'], en: ['small'], zh: ['小'], mji: ['kiĕnr','kĭnr'], type: 'adj' }],
  ['adj_cold', { vi: ['lạnh'], en: ['cold'], zh: ['冷'], mji: ['năms'], type: 'adj' }],

  // Trạng từ (Adverbs)
  ['adv_always', { vi: ['luôn luôn'], en: ['always'], zh: ['总是'], mji: [''], type: 'adv' }],

  // Giới từ (Prepositions)
  ['pre_in', { vi: ['trong'], en: ['in'], zh: ['在'], mji: ['giax'], type: 'pre' }],

]);


// Đưa các đối tượng ra phạm vi toàn cục để có thể sử dụng ở nơi khác (trình duyệt)
window.WORD_TYPES = WORD_TYPES;
window.dictionary = dictionary;
