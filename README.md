# 🧩 Challenging Puzzle — সেটআপ গাইড (V1: Sudoku)

এই ওয়েবসাইটে আছে:
- Home page (English/বাংলা টগল)
- Sign Up / Login (Supabase)
- Sudoku গেম (৩টা ডিফিকাল্টি, টাইমার, স্কোর)
- Leaderboard (সবার সেরা স্কোর)
- প্রোফাইল (নিজের স্কোর হিস্টরি)

পরের ভার্সনে: Memory Match, Word Puzzle, Sudoku, Jigsaw Puzzle যুক্ত করা হবে।

---

## ধাপ ১: Supabase প্রজেক্ট তৈরি করুন

1. https://supabase.com এ লগইন করুন
2. **New Project** → নাম দিন (যেমন: `puzzle-game`), পাসওয়ার্ড সেট করুন, region সিলেক্ট করুন
3. ১-২ মিনিট অপেক্ষা করুন

---

## ধাপ ২: API Keys নিয়ে config.js আপডেট করুন

**Project Settings → API** এ গিয়ে:
- **Project URL**
- **Publishable / anon key**

কপি করে `config.js` ফাইলে বসান:

```js
const SUPABASE_URL = "https://xxxxxxxx.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_xxxxxxxx";
```

---

## ধাপ ৩: Database টেবিল তৈরি করুন

**SQL Editor → New query** এ গিয়ে `database_setup.sql` ফাইলের পুরো কোড পেস্ট করে **Run** চাপুন।

এটা দুটো টেবিল বানাবে:
- `profiles` — ইউজারের নাম
- `scores` — গেমের স্কোর (leaderboard এর জন্য)

এবং প্রয়োজনীয় security policy সেট করবে (সবাই leaderboard দেখতে পারবে, কিন্তু শুধু নিজের স্কোর/প্রোফাইল আপডেট করতে পারবে)।

---

## ধাপ ৪: Email Confirmation বন্ধ করুন (ঐচ্ছিক, টেস্টের জন্য সহজ)

**Authentication → Settings** এ গিয়ে **"Confirm email"** বন্ধ করে দিতে পারেন, তাহলে সাইনআপের পরপরই লগইন করা যাবে। (পরে চাইলে চালু করতে পারবেন।)

---

## ধাপ ৫: হোস্ট করুন

সব ফাইল (`index.html`, `login.html`, `sudoku.html`, `leaderboard.html`, `profile.html`, `style.css`, `config.js`, `i18n.js`, `auth.js`) একটা ফোল্ডারে রাখুন, তারপর:

**Netlify (সবচেয়ে সহজ, ল্যাপটপ থেকে):**
1. https://app.netlify.com এ ফ্রি অ্যাকাউন্ট খুলুন
2. **Add new site → Deploy manually**
3. পুরো ফোল্ডারটা ড্র্যাগ অ্যান্ড ড্রপ করুন
4. একটা লাইভ লিংক পাবেন (যেমন `https://your-site.netlify.app`)

অথবা GitHub Pages (আগের doc-vault এর মতোই) ব্যবহার করতে পারেন — নতুন একটা repository বানিয়ে এই ফাইলগুলো আপলোড করে Pages চালু করুন।

---

## পরীক্ষা করুন

1. সাইনআপ করুন (Display name + email + password)
2. Sudoku খেলুন, একটা সহজ পাজল শেষ করুন
3. Leaderboard-এ গিয়ে আপনার স্কোর দেখুন
4. Profile-এ গিয়ে স্কোর হিস্টরি দেখুন

---

## সমস্যা হলে

- **লগইন/সাইনআপ কাজ করছে না** → `config.js`-এ URL/key ঠিক আছে কিনা চেক করুন
- **Leaderboard ফাঁকা/Profile লোড হচ্ছে না** → SQL (ধাপ ৩) সঠিকভাবে চালানো হয়েছে কিনা চেক করুন
- **স্কোর সেভ হচ্ছে না** → লগইন করা আছে কিনা চেক করুন (গেস্ট ইউজার স্কোর সেভ করতে পারবে না)

কোনো স্ক্রিনে আটকে গেলে, কী দেখাচ্ছে বলুন — একসাথে সমাধান করব।
