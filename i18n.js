const translations = {
  en: {
    site_name: "Challenging Puzzle",
    toggle_lang: "বাংলা",

    // Home
    home_subtitle: "Pick a puzzle and start playing",
    menu_sudoku: "Sudoku",
    menu_number: "Number Puzzle",
    menu_memory: "Memory Match",
    menu_word: "Word Puzzle",
    menu_jigsaw: "Jigsaw Puzzle",
    menu_leaderboard: "Leaderboard",
    menu_profile: "My Profile",
    coming_soon: "Coming soon",
    login_btn: "Login / Sign Up",
    logout_btn: "Logout",

    // Auth
    tab_login: "Login",
    tab_signup: "Sign Up",
    label_email: "Email",
    label_password: "Password",
    label_password_min: "Password (min 6 characters)",
    label_username: "Display name",
    btn_login: "Login",
    btn_signup: "Create Account",
    msg_logging_in: "Logging in...",
    msg_wrong_credentials: "Incorrect email or password.",
    msg_creating_account: "Creating account...",
    msg_account_created: "Account created! Please log in.",
    back_to_home: "Back to Home",

    // Sudoku
    sudoku_title: "Sudoku",
    difficulty_easy: "Easy",
    difficulty_medium: "Medium",
    difficulty_hard: "Hard",
    new_game: "New Game",
    time_label: "Time",
    mistakes_label: "Mistakes",
    erase: "Erase",
    win_title: "Solved!",
    win_score: "Score",
    login_to_save: "Log in to save your score on the leaderboard.",
    score_saved: "Score saved to leaderboard!",
    play_again: "Play Again",

    // Leaderboard
    leaderboard_title: "Leaderboard",
    leaderboard_subtitle: "Best Sudoku times",
    th_rank: "#",
    th_player: "Player",
    th_difficulty: "Level",
    th_time: "Time",
    th_score: "Score",
    no_scores: "No scores yet. Be the first!",

    // Profile
    profile_title: "My Profile",
    your_scores: "Your Scores",
    no_personal_scores: "You haven't played yet.",
    please_login: "Please log in to view your profile."
  },

  bn: {
    site_name: "চ্যালেঞ্জিং পাজল",
    toggle_lang: "English",

    home_subtitle: "একটা পাজল বেছে খেলা শুরু করুন",
    menu_sudoku: "সুডোকু",
    menu_number: "নাম্বার পাজল",
    menu_memory: "মেমোরি ম্যাচ",
    menu_word: "ওয়ার্ড পাজল",
    menu_jigsaw: "জিগস পাজল",
    menu_leaderboard: "লিডারবোর্ড",
    menu_profile: "আমার প্রোফাইল",
    coming_soon: "শীঘ্রই আসছে",
    login_btn: "লগইন / সাইন আপ",
    logout_btn: "লগআউট",

    tab_login: "লগইন",
    tab_signup: "নতুন অ্যাকাউন্ট",
    label_email: "ইমেইল",
    label_password: "পাসওয়ার্ড",
    label_password_min: "পাসওয়ার্ড (কমপক্ষে ৬ অক্ষর)",
    label_username: "ডিসপ্লে নাম",
    btn_login: "লগইন করুন",
    btn_signup: "অ্যাকাউন্ট তৈরি করুন",
    msg_logging_in: "লগইন হচ্ছে...",
    msg_wrong_credentials: "ভুল ইমেইল বা পাসওয়ার্ড।",
    msg_creating_account: "অ্যাকাউন্ট তৈরি হচ্ছে...",
    msg_account_created: "অ্যাকাউন্ট তৈরি হয়েছে! এখন লগইন করুন।",
    back_to_home: "হোমে ফিরে যান",

    sudoku_title: "সুডোকু",
    difficulty_easy: "সহজ",
    difficulty_medium: "মধ্যম",
    difficulty_hard: "কঠিন",
    new_game: "নতুন গেম",
    time_label: "সময়",
    mistakes_label: "ভুল",
    erase: "মুছুন",
    win_title: "সমাধান হয়েছে!",
    win_score: "স্কোর",
    login_to_save: "লিডারবোর্ডে স্কোর সংরক্ষণ করতে লগইন করুন।",
    score_saved: "স্কোর লিডারবোর্ডে সংরক্ষিত হয়েছে!",
    play_again: "আবার খেলুন",

    leaderboard_title: "লিডারবোর্ড",
    leaderboard_subtitle: "সেরা সুডোকু সময়",
    th_rank: "#",
    th_player: "খেলোয়াড়",
    th_difficulty: "লেভেল",
    th_time: "সময়",
    th_score: "স্কোর",
    no_scores: "এখনো কোনো স্কোর নেই। প্রথম হোন!",

    profile_title: "আমার প্রোফাইল",
    your_scores: "আপনার স্কোরসমূহ",
    no_personal_scores: "আপনি এখনো খেলেননি।",
    please_login: "প্রোফাইল দেখতে লগইন করুন।"
  }
};

function getLang() {
  return localStorage.getItem('lang') || 'en';
}

function t(key) {
  const lang = getLang();
  return (translations[lang] && translations[lang][key]) || translations['en'][key] || key;
}

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = t('toggle_lang');
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
}

function toggleLang() {
  const current = getLang();
  localStorage.setItem('lang', current === 'en' ? 'bn' : 'en');
  applyLang();
}

document.addEventListener('DOMContentLoaded', applyLang);
