// Data extracted from PDF
const dictionaryData = [
    { term: "特定技能評価試験", kana: "とくていぎのうひょうかしけん", sinhala: "විශේෂිත කුසලතා ඇගයීම් විභාගය", meaning: "Tokutei Ginou Skill Evaluation Exam" },
    { term: "航空機", kana: "こうくうき", sinhala: "ගුවන් යානය", meaning: "Aircraft" },
    { term: "安全", kana: "あんぜん", sinhala: "ආරක්ෂාව", meaning: "Safety. The most important priority." },
    { term: "コクピット", kana: "こくぴっと", sinhala: "නියමු කුටිය", meaning: "Cockpit. Has many blind spots." },
    { term: "マーシャラ", kana: "まーしゃら", sinhala: "මාෂල් / සංඥාකරු", meaning: "Marshaller. Guides the aircraft." },
    { term: "アンチコリジョン・ライト", kana: "あんちこりじょん・らいと", sinhala: "ගැටුම් නාශක විදුලි පහන්", meaning: "Anti-collision Light (Red blinking light)" },
    { term: "翼端灯", kana: "よくたんとう", sinhala: "පියාපත් තුඩ විදුලි පහන්", meaning: "Wing Tip Lights (Right: Green, Left: Red)" },
    { term: "チョック", kana: "ちょっく", sinhala: "රෝද කුට්ටි", meaning: "Chocks (Wheel stoppers)" },
    { term: "ブラスト", kana: "ぶらすと", sinhala: "පිපිරුම් / පිටාර", meaning: "Blast (Engine Exhaust). Dangerous wind." },
    { term: "インテーク", kana: "いんてーく", sinhala: "ඉන්සට්ටක් / චූෂණ", meaning: "Intake (Engine Inlet). Suction danger." },
    { term: "危険物", kana: "きけんぶつ", sinhala: "අන්තරායකර භාණ්ඩ", meaning: "Dangerous Goods" },
    { term: "標準IDカード", kana: "ひょうじゅんIDかーど", sinhala: "සම්මත හැඳුනුම්පත", meaning: "Standard ID Card" },
    { term: "保護具", kana: "ほごぐ", sinhala: "ආරක්ෂක උපකරණ", meaning: "Protective Gear (PPE)" },
    { term: "ウエイト・アンド・バランス", kana: "うえいと・あんど・ばらんす", sinhala: "බර සහ සමබරතාවය", meaning: "Weight and Balance" },
    { term: "タラップ", kana: "たらっぷ", sinhala: "පඩි පෙළ", meaning: "Passenger Steps" },
    { term: "滑走路", kana: "かっそうろ", sinhala: "ගුවන් පථය", meaning: "Runway" },
    { term: "誘導路", kana: "ゆうどうろ", sinhala: "ටැක්සි මාර්ගය", meaning: "Taxiway" },
    { term: "エプロン", kana: "えぷろん", sinhala: "ගුවන් යානා අංගනය", meaning: "Apron/Ramp" },
    { term: "着眼点", kana: "ちゃくがんてん", sinhala: "අවධානය යොමු කළ යුතු කරුණු", meaning: "Points to observe" },
    { term: "指差呼称", kana: "ゆびさしこしょう", sinhala: "ඇඟිල්ල දිගු කර පෙන්වා දීම", meaning: "Pointing and Calling (Yubisashi Koshou)" },
    { term: "ヒヤリ・ハット", kana: "ひやり・はっと", sinhala: "අතපසුවීේ / අනූනවයෙන් බේරීම", meaning: "Near-miss / Hiyari Hatto" },
    { term: "火薬類", kana: "かやくるい", sinhala: "පුපුරණ ද්‍රවය", meaning: "Explosives" },
    { term: "高圧ガス", kana: "こうあつがす", sinhala: "අධි පීඩන්‍ වායු", meaning: "High Pressure Gas" },
    { term: "引火性液体", kana: "いんかせいえきたい", sinhala: "දැසවන්‍සුළු ියර", meaning: "Flammable Liquids" },
    { term: "腐食性物質", kana: "ふしょくせいぶっしつ", sinhala: "විඛාදන්‍ ද්‍රේය", meaning: "Corrosives" },
    { term: "車両", kana: "しゃりょう", sinhala: "වාහනය", meaning: "Vehicle" }
];

const quizData = [
    {
        question: "ගුවන් සේවා සමාගමක වැදගත්ම දේ කුමක්ද? (What is most important for an airline?)",
        options: ["ලාභය (Profit)", "වේගය (Speed)", "ආරක්ෂාව (Safety)", "ආහාර (Food)"],
        correct: 2
    },
    {
        question: "නියමු කුටියට පෙනෙන ප්‍රදේශය සීමිතද? (Is visibility limited from the cockpit?)",
        options: ["නැත, සියල්ල පෙනේ", "ඔව්, අන්ධ ස්ථාන (Blind spots) ඇත", "දන්නේ නැත", "පියාපත් පමණක් පෙනේ"],
        correct: 1
    },
    {
        question: "එන්ජිම ක්‍රියාත්මක වන විට භයානක කලාප මොනවාද? (Danger zones when engine is running?)",
        options: ["ඉදිරිපස පමණයි", "පිටුපස පමණයි", "ඉන්ටේක් (Intake) සහ බ්ලාස්ට් (Blast)", "කිසිවක් නැත"],
        correct: 2
    },
    {
        question: "Anti-collision light (ගැටුම් නාශක ලාම්පුව) කුමන වර්ණයක්ද?",
        options: ["නිල් (Blue)", "කොළ (Green)", "රතු (Red)", "කහ (Yellow)"],
        correct: 2
    },
    {
        question: "දකුණු පියාපත් තුඩේ (Right Wing Tip) විදුලි එළියේ වර්ණය කුමක්ද?",
        options: ["රතු (Red)", "කොළ (Green)", "සුදු (White)", "කහ (Yellow)"],
        correct: 1
    },
    {
        question: "ගුවන් යානයක් වෙත ළඟා වන විට වාහන නැවැත්විය යුත්තේ කොතැනද?",
        options: ["යානයට යටින්", "යානයට ඉතා ළඟින්", "ආරක්ෂිත දුරකින් (ගුවන් යානයට යටින් නොවේ)", "ඕනෑම තැනක"],
        correct: 2
    },
    {
        question: "ID කාඩ්පත පැළඳිය යුත්තේ කෙසේද?",
        options: ["සාක්කුවේ දාගෙන", "පිටතට පෙනෙන ලෙස (Visible to outside)", "ගෙදර තබා", "අතේ තබාගෙන"],
        correct: 1
    },
    {
        question: "භයානක භාණ්ඩ (Dangerous Goods) ප්‍රවාහනය කිරීමේදී අවසර ලත් ප්‍රමාණය (ගෑස්ලින්) කොපමණද?",
        options: ["ලීටර් 10", "ලීටර් 5", "ලීටර් 100", "ගෙන යෑම තහනම්"],
        correct: 1
    },
    {
        question: "ප්‍රවාහනය කළ නොහැකි භාණ්ඩය කුමක්ද?",
        options: ["ඇඳුම්", "වතුර", "ගිනිකෙළි (Fireworks/Explosives)", "පොත්"],
        correct: 2
    },
    {
        question: "ඇඟිල්ල දිගු කර 'යෝෂි' (Yoshi) කීමෙන් බලාපොරොත්තු වන්නේ කුමක්ද?",
        options: ["විනෝදය", "ආරක්ෂාව තහවුරු කිරීම (Safety Confirmation)", "නැටීම", "කෑගැසීම"],
        correct: 1
    }
];

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Navigation highlighting
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-links a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    }

    // Dictionary Logic
    const dictionaryGrid = document.getElementById('dictionary-grid');
    const searchInput = document.getElementById('searchInput');

    if (dictionaryGrid && searchInput) {
        renderDictionary(dictionaryData);

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = dictionaryData.filter(item =>
                item.term.toLowerCase().includes(searchTerm) ||
                item.sinhala.includes(searchTerm) ||
                item.meaning.toLowerCase().includes(searchTerm) ||
                (item.kana && item.kana.includes(searchTerm))
            );
            renderDictionary(filtered);
        });
    }

    // Quiz Logic
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        // Initial start button is in HTML, on click we load quiz
        const startBtn = quizContainer.querySelector('button');
        if (startBtn) {
            startBtn.addEventListener('click', () => startQuiz());
        }
    }
});

function renderDictionary(data) {
    const grid = document.getElementById('dictionary-grid');
    grid.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <h3>${item.term}</h3>
                <button class="speaker-btn" onclick="playAudio('${item.kana || item.term}')" title="Listen">🔊</button>
            </div>
             <p style="font-size: 0.9rem; color: #555; margin-bottom: 0.5rem;">${item.kana || ''}</p>
            <p style="color: var(--primary-color); font-weight: bold;">${item.sinhala}</p>
            <p>${item.meaning}</p>
        `;
        grid.appendChild(card);
    });
}

function playAudio(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP'; // Set language to Japanese
        utterance.rate = 0.9; // Slightly slower for better clarity
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Sorry, your browser doesn't support text-to-speech.");
    }
}

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    const container = document.getElementById('quiz-container');
    currentQuestion = 0;
    score = 0;
    showQuestion(container);
}

function showQuestion(container) {
    if (currentQuestion >= quizData.length) {
        showResult(container);
        return;
    }

    const q = quizData[currentQuestion];

    container.innerHTML = `
        <div class="card" style="max-width: 600px; margin: 0 auto; text-align: left;">
            <h3>Question ${currentQuestion + 1}/${quizData.length}</h3>
            <p style="font-size: 1.2rem; margin: 1rem 0;">${q.question}</p>
            <div class="options-grid" style="display: grid; gap: 10px;">
                ${q.options.map((opt, index) => `
                    <button class="btn btn-secondary option-btn" data-index="${index}" style="width: 100%; text-align: left; justify-content: flex-start;">
                        ${opt}
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    const buttons = container.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selected = parseInt(e.target.dataset.index);
            if (selected === q.correct) {
                score++;
                e.target.style.backgroundColor = '#d4edda';
                e.target.style.borderColor = '#c3e6cb';
                e.target.style.color = '#155724';
            } else {
                e.target.style.backgroundColor = '#f8d7da';
                e.target.style.borderColor = '#f5c6cb';
                e.target.style.color = '#721c24';
            }

            // Disable all buttons
            buttons.forEach(b => b.disabled = true);

            setTimeout(() => {
                currentQuestion++;
                showQuestion(container);
            }, 1000);
        });
    });
}

function showResult(container) {
    const percentage = Math.round((score / quizData.length) * 100);

    // Save Best Score
    const previousBest = localStorage.getItem('quizBestScore') || 0;
    let message = "";
    let subMessage = "";

    if (percentage > previousBest) {
        localStorage.setItem('quizBestScore', percentage);
        subMessage = "🎉 New Personal Best! (Saved to Profile)";
    } else {
        subMessage = `Your Best: ${previousBest}%`;
    }

    if (percentage > 80) message = "Supiri! (Excellent!) 🌟";
    else if (percentage > 50) message = "Hodai! (Good Job!) 👍";
    else message = "Thawa padam karamu! (Keep Studying!) 📚";

    container.innerHTML = `
        <div style="text-align: center; max-width: 600px; margin: 0 auto;" class="card">
            <h2 style="font-size: 3rem; color: var(--primary-color);">${score} / ${quizData.length}</h2>
            <h3>${message}</h3>
            <p style="font-size: 1.5rem; font-weight: bold;">${percentage}%</p>
            <p style="color: var(--secondary-color); margin-top: 5px;">${subMessage}</p>
            <br>
            <div style="display: flex; gap: 10px; justify-content: center;">
                <button class="btn btn-primary" onclick="startQuiz()">Try Again</button>
                <a href="profile.html" class="btn btn-secondary">View Profile</a>
            </div>
        </div>
    `;
}

// --- Theme Toggle Logic ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        // Use FontAwesome classes
        if (theme === 'dark') {
            btn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            btn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }
}

// Run on load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle icon between bars and times (X)
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});
