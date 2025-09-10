//    &copy; 2025 جميع الحقوق محفوظة | تطوير: فريق 


const quiz = {
  easy: [
    {question: "شنو هو اللون ديال السماء؟", answers: ["أحمر", "أزرق", "أخضر", "أسود"], correct: "أزرق"},
    {question: "شنو هي لغة البرمجة؟", answers: ["سي", "قهوة", "ماء", "رمل"], correct: "سي"},
    {question: "شحال 2 + 2؟", answers: ["3", "4", "5", "6"], correct: "4"},
    {question: "شنو هي عاصمة فرنسا؟", answers: ["باريس", "روما", "مدريد", "برلين"], correct: "باريس"},
    {question: "شنو هو الحيوان اللي كيعوم؟", answers: ["أسد", "سمك", "نمر", "نسر"], correct: "سمك"},
    {question: "شنو اللون ديال التفاح الأخضر؟", answers: ["أخضر", "أحمر", "أصفر", "برتقالي"], correct: "أخضر"},
    {question: "شنو هو اليوم الأول فالأسبوع؟", answers: ["الأحد", "الاثنين", "الثلاثاء", "الجمعة"], correct: "الأحد"},
    {question: "شنو هو الحيوان اللي كيطير؟", answers: ["سمك", "نسر", "أسد", "قرد"], correct: "نسر"},
    {question: "شنو هو لون الموز؟", answers: ["أصفر", "أخضر", "أحمر", "أزرق"], correct: "أصفر"},
    {question: "شنو هو اسم البحر اللي كاين فالمغرب؟", answers: ["الأبيض المتوسط", "الأحمر", "الميت", "الأسود"], correct: "الأبيض المتوسط"},
    {question: "شنو هو اسم أكبر مدينة فالمغرب؟", answers: ["الدار البيضاء", "الرباط", "مراكش", "فاس"], correct: "الدار البيضاء"},
    {question: "شنو هو الحيوان اللي كيعرف يسبح؟", answers: ["سمك", "قرد", "أسد", "نسر"], correct: "سمك"},
    {question: "شنو هو لون الحليب؟", answers: ["أبيض", "أحمر", "أصفر", "أخضر"], correct: "أبيض"},
    {question: "شنو هو اسم الشهر الأول فالسنة؟", answers: ["يناير", "فبراير", "مارس", "أبريل"], correct: "يناير"},
  ],
  normal: [
    {question: "شنو هو عاصمة المغرب؟", answers: ["الدار البيضاء", "مراكش", "الرباط", "فاس"], correct: "الرباط"},
    {question: "شحال 5 × 6؟", answers: ["30", "20", "25", "40"], correct: "30"},
    {question: "من هو مخترع الكهرباء؟", answers: ["توماس إديسون", "نيوتن", "أينشتاين", "إيلون ماسك"], correct: "توماس إديسون"},
    {question: "شنو هي أكبر قارة؟", answers: ["أفريقيا", "آسيا", "أوروبا", "أمريكا"], correct: "آسيا"},
    {question: "شنو هو أطول نهر في العالم؟", answers: ["الأمازون", "النيل", "الدانوب", "الغانج"], correct: "النيل"},
    {question: "شنو هي اللغة الرسمية في البرازيل؟", answers: ["الإنجليزية", "البرتغالية", "الإسبانية", "الفرنسية"], correct: "البرتغالية"},
    {question: "شنو هو الحيوان اللي كيعرف يضحك؟", answers: ["قرد", "سمك", "أسد", "نسر"], correct: "قرد"},
    {question: "شنو هو اسم العاصمة ديال مصر؟", answers: ["القاهرة", "الإسكندرية", "طنطا", "السويس"], correct: "القاهرة"},
    {question: "شنو هو عدد أيام الأسبوع؟", answers: ["5", "6", "7", "8"], correct: "7"},
    {question: "شنو هو اسم أكبر جبل فالعالم؟", answers: ["إيفرست", "توبقال", "كيلمنجارو", "الهيمالايا"], correct: "إيفرست"},
    {question: "شنو هو اسم أكبر دولة عربية؟", answers: ["الجزائر", "مصر", "السعودية", "المغرب"], correct: "الجزائر"},
    {question: "شنو هو اسم أصغر دولة عربية؟", answers: ["جزر القمر", "قطر", "الكويت", "البحرين"], correct: "جزر القمر"},
    {question: "شنو هو اسم أكبر جزيرة فالعالم؟", answers: ["غرينلاند", "مدغشقر", "إندونيسيا", "أستراليا"], correct: "غرينلاند"},
    {question: "شنو هو اسم أطول جبل فالمغرب؟", answers: ["توبقال", "إيفرست", "كيلمنجارو", "الهيمالايا"], correct: "توبقال"},
  ],
  hard: [
    {question: "شنو هو أكبر كوكب فالمجموعة الشمسية؟", answers: ["المشتري", "زحل", "الأرض", "المريخ"], correct: "المشتري"},
    {question: "فاش كتستعمل لغة Kotlin؟", answers: ["برمجة تطبيقات أندرويد", "تصميم", "طبخ", "رياضة"], correct: "برمجة تطبيقات أندرويد"},
    {question: "شنو هي وحدة قياس المقاومة الكهربائية؟", answers: ["أوم", "فولت", "واط", "أمبير"], correct: "أوم"},
    {question: "شحال عدد البروتونات فذرة الهيدروجين؟", answers: ["1", "2", "3", "4"], correct: "1"},
    {question: "شنو هي صيغة الماء الكيميائية؟", answers: ["H2O", "CO2", "O2", "NaCl"], correct: "H2O"},
    {question: "شنو هو اسم أكبر محيط؟", answers: ["الهادئ", "الأطلسي", "الهندي", "المتجمد"], correct: "الهادئ"},
    {question: "شنو هو اسم العالم اللي اكتشف الجاذبية؟", answers: ["نيوتن", "أينشتاين", "إديسون", "غاليليو"], correct: "نيوتن"},
    {question: "شنو هو اسم أصغر قارة؟", answers: ["أستراليا", "أوروبا", "أفريقيا", "آسيا"], correct: "أستراليا"},
    {question: "شنو هو اسم أول رئيس للمغرب؟", answers: ["محمد الخامس", "الحسن الثاني", "عبد الإله بنكيران", "عزيز أخنوش"], correct: "محمد الخامس"},
    {question: "شنو هو اسم أكبر صحراء فالعالم؟", answers: ["الصحراء الكبرى", "صحراء أتاكاما", "صحراء غوبي", "صحراء الربع الخالي"], correct: "الصحراء الكبرى"},
    {question: "شنو هو اسم أول عالم عربي حصل على جائزة نوبل؟", answers: ["أحمد زويل", "نجيب محفوظ", "محمد البرادعي", "فاروق الباز"], correct: "أحمد زويل"},
    {question: "شنو هو اسم أول دولة استعملت الورق؟", answers: ["الصين", "مصر", "اليابان", "الهند"], correct: "الصين"},
    {question: "شنو هو اسم أكبر بحيرة فالعالم؟", answers: ["بحيرة قزوين", "بحيرة فيكتوريا", "بحيرة سوبيريور", "بحيرة بايكال"], correct: "بحيرة قزوين"},
    {question: "شنو هو اسم أول عالم اكتشف البنسلين؟", answers: ["ألكسندر فلمنج", "لويس باستور", "إديسون", "نيوتن"], correct: "ألكسندر فلمنج"},
  ],
  expert: [
    {question: "شنو هو العدد الأولي الأكبر بين هادو؟", answers: ["53", "57", "59", "61"], correct: "61"},
    {question: "فاش كتعني SOLID فـ البرمجة؟", answers: ["مبادئ تصميم الكود", "نظام التشغيل", "الذكاء الاصطناعي", "شهادة"], correct: "مبادئ تصميم الكود"},
    {question: "شنو هي صيغة سرعة الضوء؟", answers: ["c = λ × f", "E=mc²", "F=ma", "P=IV"], correct: "c = λ × f"},
    {question: "شنو هي أكبر خلية عصبية في الجسم؟", answers: ["الدماغ", "العصب الوركي", "الحبل الشوكي", "العصب البصري"], correct: "العصب الوركي"},
    {question: "شنو هي وحدة قياس التردد؟", answers: ["هرتز", "أوم", "فولت", "واط"], correct: "هرتز"},
    {question: "شنو هو أكبر نجم معروف؟", answers: ["ريغل", "بتلجيوس", "سيلينوس", "الشمس"], correct: "بتلجيوس"},
    {question: "شنو هو اسم أول إنسان مشى على سطح القمر؟", answers: ["نيل أرمسترونغ", "يوري غاغارين", "باز ألدرين", "مايكل كولينز"], correct: "نيل أرمسترونغ"},
    {question: "شنو هو اسم أصغر دولة فالعالم؟", answers: ["الفاتيكان", "موناكو", "سان مارينو", "ليختنشتاين"], correct: "الفاتيكان"},
    {question: "شنو هو اسم العالم اللي اخترع الإنترنت؟", answers: ["تيم بيرنرز لي", "بيل غيتس", "ستيف جوبز", "لينوس تورفالدس"], correct: "تيم بيرنرز لي"},
    {question: "شنو هو اسم أول قمر صناعي؟", answers: ["سبوتنيك", "أبولو", "هابل", "فالكون"], correct: "سبوتنيك"},
    {question: "شنو هو اسم أول عالم عربي كتب موسوعة طبية؟", answers: ["ابن سينا", "الرازي", "ابن النفيس", "الخوارزمي"], correct: "ابن سينا"},
    {question: "شنو هو اسم أول عالم وضع قوانين الحركة؟", answers: ["نيوتن", "أينشتاين", "غاليليو", "الخوارزمي"], correct: "نيوتن"},
    {question: "شنو هو اسم أول عالم اكتشف الدورة الدموية؟", answers: ["ابن النفيس", "ابن سينا", "الرازي", "الخوارزمي"], correct: "ابن النفيس"},
    {question: "شنو هو اسم أول عالم وضع علم الجبر؟", answers: ["الخوارزمي", "ابن سينا", "الرازي", "ابن النفيس"], correct: "الخوارزمي"},
  ]
};

function getRandomQuestions(levelQuestions, count = 5) {
  const shuffled = [...levelQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

let currentDifficulty = null;
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval = null;
let timeLeft = 30;

const difficultySelection = document.getElementById("difficulty-selection");
const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const timerEl = document.getElementById("timer");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const shareBtn = document.getElementById("shareBtn");
const restartBtn = document.getElementById("restartBtn");

difficultySelection.addEventListener("click", e => {
  if (e.target.classList.contains("diff-btn")) {
    currentDifficulty = e.target.dataset.level;
    difficultySelection.style.display = "none";
    document.body.style.background = getBgByDifficulty(currentDifficulty);
    startQuiz();
  }
});

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if(currentQuestionIndex < currentQuiz.length){
    showQuestion();
  } else {
    clearInterval(timerInterval);
    showResult();
  }
});

shareBtn.addEventListener("click", () => {
  const shareText = `نتيجتي فـ Quiz الذكاء (${currentDifficulty}): ${score} / ${currentQuiz.length} (${Math.round((score / currentQuiz.length)*100)}%)! جربو https://zakariamatnsachtbdalurldyalsite.com 😉`;
  navigator.clipboard.writeText(shareText).then(() => {
    alert("✅ النتيجة تم نسخها! شاركها مع صحابك.");
  });
});

restartBtn.addEventListener("click", () => {
  quizContainer.style.display = "none";
  difficultySelection.style.display = "block";

  currentDifficulty = null;
  currentQuiz = [];
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 30;
  clearInterval(timerInterval);

  questionEl.style.display = "block";
  answersEl.style.display = "block";
  nextBtn.style.display = "inline-block";
  resultEl.textContent = "";
  shareBtn.style.display = "none";
  restartBtn.style.display = "none";
  timerEl.textContent = "";
});

// زر تفعيل الوضع الليلي
let darkModeBtn = document.createElement("button");
document.body.appendChild(darkModeBtn);
darkModeBtn.textContent = "🌙";
darkModeBtn.title = "تغيير الوضع الليلي";
darkModeBtn.style.position = "fixed";
darkModeBtn.style.top = "12px";
darkModeBtn.style.left = "12px";
darkModeBtn.style.zIndex = "999";
darkModeBtn.style.background = "transparent";
darkModeBtn.style.color = "#fff";

darkModeBtn.style.padding = "4px";
darkModeBtn.style.width = "20px";
darkModeBtn.style.height = "20px";
darkModeBtn.style.borderRadius = "6px"; // Smaller rounded square
darkModeBtn.style.cursor = "pointer";

darkModeBtn.style.fontSize = "18px";
darkModeBtn.style.display = "flex";
darkModeBtn.style.alignItems = "center";
darkModeBtn.style.justifyContent = "center";
darkModeBtn.style.transition = "border-color 0.2s";
darkModeBtn.onmouseenter = function(){darkModeBtn.style.borderColor="#ff9800";};
darkModeBtn.onmouseleave = function(){darkModeBtn.style.borderColor="#fff";};
document.body.appendChild(darkModeBtn);
let darkMode = false;
darkModeBtn.onclick = function() {
  darkMode = !darkMode;
  if(darkMode){
    document.body.style.background = "#222";
    document.body.style.color = "#fff";
    darkModeBtn.textContent = "☀️";
    darkModeBtn.title = "تغيير للوضع النهاري";
    darkModeBtn.style.background = "transparent";
  }else{
    document.body.style.background = getBgByDifficulty(currentDifficulty);
    document.body.style.color = "#222";
    darkModeBtn.textContent = "🌙";
    darkModeBtn.title = "تغيير الوضع الليلي";
    darkModeBtn.style.background = "transparent";
  }
};

// تغيير الخلفية حسب الصعوبة
function getBgByDifficulty(level) {
  if(level === "easy") return "linear-gradient(135deg, #a8ff78 0%, #78ffd6 100%)";
  if(level === "normal") return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  if(level === "hard") return "linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)";
  if(level === "expert") return "linear-gradient(135deg, #232526 0%, #414345 100%)";
  return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
}

function startQuiz() {
  currentQuiz = getRandomQuestions(quiz[currentDifficulty], 5).map(q => {
    // Remove correct answer from answers array
    const incorrectAnswers = q.answers.filter(ans => ans !== q.correct);
    // Shuffle incorrect answers
    const shuffledIncorrect = [...incorrectAnswers].sort(() => 0.5 - Math.random());
    // Insert correct answer at a random position
    const insertIndex = Math.floor(Math.random() * (shuffledIncorrect.length + 1));
    const shuffledAnswers = [...shuffledIncorrect];
    shuffledAnswers.splice(insertIndex, 0, q.correct);
    return {
      ...q,
      answers: shuffledAnswers,
      correct: q.correct
    };
  });
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 30;
  resultEl.textContent = "";
  shareBtn.style.display = "none";
  restartBtn.style.display = "none";
  quizContainer.style.display = "block";
  showQuestion();
}

function showQuestion() {
  clearInterval(timerInterval);
  timeLeft = 30;
  timerEl.textContent = `⏰ الوقت المتبقي: ${timeLeft} ثانية`;
  
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `⏰ الوقت المتبقي: ${timeLeft} ثانية`;
    if(timeLeft <= 0){
      clearInterval(timerInterval);
      disableAnswers();
      nextBtn.style.display = "inline-block";
    }
  }, 1000);

  const q = currentQuiz[currentQuestionIndex];
  questionEl.style.display = "block";
  answersEl.style.display = "block";
  nextBtn.style.display = "none";
  resultEl.textContent = "";
  shareBtn.style.display = "none";

  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => selectAnswer(answer);
    answersEl.appendChild(btn);
  });
}

function selectAnswer(selected) {
  clearInterval(timerInterval);
  const q = currentQuiz[currentQuestionIndex];
  if (selected === q.correct) {
    score++;
  }
  Array.from(answersEl.children).forEach(btn => {
    btn.disabled = true;
    if(btn.textContent === q.correct){
      btn.style.backgroundColor = "#4caf50";
      btn.style.color = "white";
    } else if(btn.textContent === selected){
      btn.style.backgroundColor = "#ff3526ff";
      btn.style.color = "white";
    }
  });
  nextBtn.style.display = "inline-block";
}

function disableAnswers() {
  Array.from(answersEl.children).forEach(btn => {
    btn.disabled = true;
  });
}

function showResult() {
  questionEl.style.display = "none";
  answersEl.style.display = "none";
  nextBtn.style.display = "none";
  // فقط إخفاء السؤال عند عرض النتيجة
  // questionEl.style.display = "none"; // This line is commented out to keep the question visible
  answersEl.style.display = "none";
  nextBtn.style.display = "none";

  const iqPercentage = Math.round((score / currentQuiz.length) * 100);

  let comment = "";
  if(iqPercentage >= 90){
    comment = "🔥 نتا عبقري! المعلم ديالنا!";
    comment = "🔥 ويلي ويلي زفت كيدرتي ليها ا عشيري ";
  } else if(iqPercentage >= 70){
    comment = "👍 مزيان بزاف، تستاهل التقدير!";
    comment = "👍ناضي, كانادي!";
    comment = "👍 ويلي ويلي ويلي ويلي نقيييي";
  } else if(iqPercentage >= 50){
    comment = "🙂 ماشي خايب، غادي تولي أحسن!";
    comment = "🙂 مبروك, دزتي لاستدراكية احبيبي";
    comment = "🙂 شوية على الواحد!";
  } else if(iqPercentage >= 30){
    comment = "😂 خاصك تزيد القراية وتشد القهوة!";
     comment = "😂  مبروك صوقوط ا لواعر";
      comment = "😂  اول مخلوق بهادا الكلاخ";
  }

  resultEl.innerHTML = `
    ✅ نتيجتك: <strong>${score} / ${currentQuiz.length}</strong><br/>
    💡 نسبة الذكاء: <strong>${iqPercentage}%</strong><br/>
    <em>${comment}</em><br/>
    <button id="whatsappBtn" style="margin-top:10px;background:#25d366;color:#fff;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-size:16px;">مشاركة واتساب</button>
  `;

  shareBtn.style.display = "inline-block";
  restartBtn.style.display = "inline-block";

  setTimeout(() => {
    const whatsappBtn = document.getElementById("whatsappBtn");
    if (whatsappBtn) {
      whatsappBtn.onclick = function() {
        const text = `نتيجتي فـ Quiz الذكاء (${currentDifficulty}): ${score} / ${currentQuiz.length} (${iqPercentage}%)! جربو https://charming-gnome-eef64b.netlify.app/ 1F609`;
        const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
      };
    }
  }, 100);
}

// تحسين المؤقت ليظهر بشكل أوضح
if(timerEl){
  timerEl.style.fontSize = "2rem";
  timerEl.style.fontWeight = "bold";
  timerEl.style.color = "#ff9800";
  timerEl.style.textAlign = "center";
}


