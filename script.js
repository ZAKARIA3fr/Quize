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
    {question: "شنو هو لون الشمس؟", answers: ["أصفر", "أزرق", "أخضر", "أحمر"], correct: "أصفر"},
    {question: "شنو هو اسم عاصمة الجزائر؟", answers: ["الجزائر العاصمة", "وهران", "عنابة", "قسنطينة"], correct: "الجزائر العاصمة"},
    {question: "شنو هو الحيوان اللي كينبح؟", answers: ["كلب", "قطة", "سمك", "نسر"], correct: "كلب"},
    {question: "شنو هو اسم الشهر اللي بعد يناير؟", answers: ["فبراير", "مارس", "أبريل", "ماي"], correct: "فبراير"},
    {question: "شنو هو اسم أكبر قارة؟", answers: ["آسيا", "أوروبا", "أفريقيا", "أمريكا"], correct: "آسيا"},
    {question: "شنو هو اسم أصغر دولة في العالم؟", answers: ["الفاتيكان", "موناكو", "سان مارينو", "ليختنشتاين"], correct: "الفاتيكان"},
    {question: "شنو هو اسم أكبر جبل في المغرب؟", answers: ["توبقال", "إيفرست", "كيلمنجارو", "الهيمالايا"], correct: "توبقال"},
    {question: "شنو هو اسم أكبر دولة عربية؟", answers: ["الجزائر", "مصر", "السعودية", "المغرب"], correct: "الجزائر"},
    {question: "شنو هو اسم أصغر دولة عربية؟", answers: ["جزر القمر", "قطر", "الكويت", "البحرين"], correct: "جزر القمر"},
    {question: "شنو هو اسم أكبر جزيرة في العالم؟", answers: ["غرينلاند", "مدغشقر", "إندونيسيا", "أستراليا"], correct: "غرينلاند"},
    {question: "شنو هو اسم أكبر نهر في المغرب؟", answers: ["سبو", "أم الربيع", "ملوية", "زاي"], correct: "أم الربيع"},
    {question: "شنو هو اسم أكبر قارة؟", answers: ["آسيا", "أوروبا", "أفريقيا", "أمريكا"], correct: "آسيا"},
    {question: "شنو هو اسم أصغر قارة؟", answers: ["أستراليا", "أوروبا", "أفريقيا", "آسيا"], correct: "أستراليا"},
    {question: "شنو هو اسم أكبر محيط؟", answers: ["الهادئ", "الأطلسي", "الهندي", "المتجمد"], correct: "الهادئ"},
    {question: "شنو هو اسم أكبر صحراء؟", answers: ["الصحراء الكبرى", "صحراء غوبي", "صحراء أتاكاما", "صحراء الربع الخالي"], correct: "الصحراء الكبرى"},
    {question: "شنو هو اسم أكبر بحيرة؟", answers: ["بحيرة قزوين", "بحيرة فيكتوريا", "بحيرة بايكال", "بحيرة سوبيريور"], correct: "بحيرة قزوين"},
    {question: "شنو هو اسم أكبر دولة في إفريقيا؟", answers: ["الجزائر", "مصر", "نيجيريا", "جنوب إفريقيا"], correct: "الجزائر"},
    {question: "شنو هو اسم أصغر دولة في إفريقيا؟", answers: ["سيشيل", "جزر القمر", "غينيا", "تونس"], correct: "سيشيل"},
    {question: "شنو هو اسم أكبر مدينة في العالم؟", answers: ["طوكيو", "نيويورك", "شنغهاي", "مومباي"], correct: "طوكيو"},
    {question: "شنو هو اسم أكبر نهر في إفريقيا؟", answers: ["النيل", "الكونغو", "السنغال", "زمبيزي"], correct: "النيل"},
    {question: "شنو هو اسم أكبر جبل في العالم؟", answers: ["إيفرست", "توبقال", "كيلمنجارو", "الهيمالايا"], correct: "إيفرست"},
    {question: "شنو هو اسم أكبر دولة في آسيا؟", answers: ["الصين", "الهند", "روسيا", "إندونيسيا"], correct: "الصين"},
    {question: "شنو هو اسم أكبر دولة في أوروبا؟", answers: ["روسيا", "فرنسا", "ألمانيا", "إيطاليا"], correct: "روسيا"},
    {question: "شنو هو اسم أكبر دولة في أمريكا؟", answers: ["الولايات المتحدة", "البرازيل", "كندا", "الأرجنتين"], correct: "الولايات المتحدة"},
    {question: "شنو هو اسم أكبر دولة في أوقيانوسيا؟", answers: ["أستراليا", "نيوزيلندا", "بابوا غينيا الجديدة", "فيجي"], correct: "أستراليا"},
    {question: "شنو هو اسم أكبر قارة؟", answers: ["آسيا", "أوروبا", "أفريقيا", "أمريكا"], correct: "آسيا"},
    {question: "شنو هو اسم أصغر قارة؟", answers: ["أستراليا", "أوروبا", "أفريقيا", "آسيا"], correct: "أستراليا"},
    {question: "شنو هو اسم أكبر محيط؟", answers: ["الهادئ", "الأطلسي", "الهندي", "المتجمد"], correct: "الهادئ"},
    {question: "شنو هو اسم أكبر صحراء؟", answers: ["الصحراء الكبرى", "صحراء غوبي", "صحراء أتاكاما", "صحراء الربع الخالي"], correct: "الصحراء الكبرى"},
    {question: "شنو هو اسم أكبر بحيرة؟", answers: ["بحيرة قزوين", "بحيرة فيكتوريا", "بحيرة بايكال", "بحيرة سوبيريور"], correct: "بحيرة قزوين"},
    {question: "شنو هو اسم أكبر دولة في إفريقيا؟", answers: ["الجزائر", "مصر", "نيجيريا", "جنوب إفريقيا"], correct: "الجزائر"},
    {question: "شنو هو اسم أصغر دولة في إفريقيا؟", answers: ["سيشيل", "جزر القمر", "غينيا", "تونس"], correct: "سيشيل"},
    {question: "شنو هو اسم أكبر مدينة في العالم؟", answers: ["طوكيو", "نيويورك", "شنغهاي", "مومباي"], correct: "طوكيو"},
    {question: "شنو هو اسم أكبر نهر في إفريقيا؟", answers: ["النيل", "الكونغو", "السنغال", "زمبيزي"], correct: "النيل"},
    {question: "شنو هو اسم أكبر جبل في العالم؟", answers: ["إيفرست", "توبقال", "كيلمنجارو", "الهيمالايا"], correct: "إيفرست"},
    {question: "شنو هو اسم أكبر دولة في آسيا؟", answers: ["الصين", "الهند", "روسيا", "إندونيسيا"], correct: "الصين"},
    {question: "شنو هو اسم أكبر دولة في أوروبا؟", answers: ["روسيا", "فرنسا", "ألمانيا", "إيطاليا"], correct: "روسيا"},
    {question: "شنو هو اسم أكبر دولة في أمريكا؟", answers: ["الولايات المتحدة", "البرازيل", "كندا", "الأرجنتين"], correct: "الولايات المتحدة"},
    {question: "شنو هو اسم أكبر دولة في أوقيانوسيا؟", answers: ["أستراليا", "نيوزيلندا", "بابوا غينيا الجديدة", "فيجي"], correct: "أستراليا"},
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
  {question: "شنو هو اسم عاصمة تونس؟", answers: ["تونس", "صفاقس", "سوسة", "بنزرت"], correct: "تونس"},
  {question: "شنو هو اسم أكبر محيط؟", answers: ["الهادئ", "الأطلسي", "الهندي", "المتجمد"], correct: "الهادئ"},
  {question: "شنو هو اسم أصغر قارة؟", answers: ["أستراليا", "أوروبا", "أفريقيا", "آسيا"], correct: "أستراليا"},
  {question: "شنو هو اسم أول رئيس للمغرب؟", answers: ["محمد الخامس", "الحسن الثاني", "عبد الإله بنكيران", "عزيز أخنوش"], correct: "محمد الخامس"},
  {question: "شنو هو اسم أكبر صحراء فالعالم؟", answers: ["الصحراء الكبرى", "صحراء أتاكاما", "صحراء غوبي", "صحراء الربع الخالي"], correct: "الصحراء الكبرى"},
  {question: "شنو هو اسم أول عالم عربي حصل على جائزة نوبل؟", answers: ["أحمد زويل", "نجيب محفوظ", "محمد البرادعي", "فاروق الباز"], correct: "أحمد زويل"},
  {question: "شنو هو اسم أكبر بحيرة فالعالم؟", answers: ["بحيرة قزوين", "بحيرة فيكتوريا", "بحيرة سوبيريور", "بحيرة بايكال"], correct: "بحيرة قزوين"},
  {question: "شنو هو اسم أول دولة استعملت الورق؟", answers: ["الصين", "مصر", "اليابان", "الهند"], correct: "الصين"},
  {question: "شنو هو اسم أكبر جبل فالعالم؟", answers: ["إيفرست", "توبقال", "كيلمنجارو", "الهيمالايا"], correct: "إيفرست"},
  {question: "شنو هو اسم أكبر نجم معروف؟", answers: ["ريغل", "بتلجيوس", "سيلينوس", "الشمس"], correct: "بتلجيوس"},
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
  {question: "شنو هو اسم أول عالم وضع قوانين الحركة؟", answers: ["نيوتن", "أينشتاين", "غاليليو", "الخوارزمي"], correct: "نيوتن"},
  {question: "شنو هو اسم أول عالم اكتشف الدورة الدموية؟", answers: ["ابن النفيس", "ابن سينا", "الرازي", "الخوارزمي"], correct: "ابن النفيس"},
  {question: "شنو هو اسم أول عالم وضع علم الجبر؟", answers: ["الخوارزمي", "ابن سينا", "الرازي", "ابن النفيس"], correct: "الخوارزمي"},
  {question: "شنو هو اسم أول عالم عربي كتب موسوعة طبية؟", answers: ["ابن سينا", "الرازي", "ابن النفيس", "الخوارزمي"], correct: "ابن سينا"},
  {question: "شنو هو اسم أول قمر صناعي؟", answers: ["سبوتنيك", "أبولو", "هابل", "فالكون"], correct: "سبوتنيك"},
  {question: "شنو هو اسم أول عالم عربي كتب رواية عالمية؟", answers: ["نجيب محفوظ", "أحمد زويل", "محمد البرادعي", "فاروق الباز"], correct: "نجيب محفوظ"},
  {question: "شنو هو اسم أكبر دولة في إفريقيا؟", answers: ["الجزائر", "مصر", "نيجيريا", "جنوب إفريقيا"], correct: "الجزائر"},
  {question: "شنو هو اسم أصغر دولة في إفريقيا؟", answers: ["سيشيل", "جزر القمر", "غينيا", "تونس"], correct: "سيشيل"},
  {question: "شنو هو اسم أكبر مدينة في العالم؟", answers: ["طوكيو", "نيويورك", "شنغهاي", "مومباي"], correct: "طوكيو"},
  {question: "شنو هو اسم أكبر نهر في إفريقيا؟", answers: ["النيل", "الكونغو", "السنغال", "زمبيزي"], correct: "النيل"},
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
  {question: "شنو هو اسم أول عالم عربي حصل على جائزة نوبل؟", answers: ["أحمد زويل", "نجيب محفوظ", "محمد البرادعي", "فاروق الباز"], correct: "أحمد زويل"},
  {question: "شنو هو اسم أكبر بحيرة فالعالم؟", answers: ["بحيرة قزوين", "بحيرة فيكتوريا", "بحيرة سوبيريور", "بحيرة بايكال"], correct: "بحيرة قزوين"},
  {question: "شنو هو اسم أول دولة استعملت الورق؟", answers: ["الصين", "مصر", "اليابان", "الهند"], correct: "الصين"},
  {question: "شنو هو اسم أكبر صحراء فالعالم؟", answers: ["الصحراء الكبرى", "صحراء أتاكاما", "صحراء غوبي", "صحراء الربع الخالي"], correct: "الصحراء الكبرى"},
  {question: "شنو هو اسم أكبر جبل فالعالم؟", answers: ["إيفرست", "توبقال", "كيلمنجارو", "الهيمالايا"], correct: "إيفرست"},
  {question: "شنو هو اسم أكبر قارة؟", answers: ["آسيا", "أوروبا", "أفريقيا", "أمريكا"], correct: "آسيا"},
  {question: "شنو هو اسم أكبر دولة عربية؟", answers: ["الجزائر", "مصر", "السعودية", "المغرب"], correct: "الجزائر"},
  {question: "شنو هو اسم أكبر مدينة في المغرب؟", answers: ["الدار البيضاء", "الرباط", "مراكش", "فاس"], correct: "الدار البيضاء"},
  {question: "شنو هو اسم أكبر نهر في العالم؟", answers: ["الأمازون", "النيل", "الدانوب", "الغانج"], correct: "النيل"},
  {question: "شنو هو اسم أكبر نجم معروف؟", answers: ["ريغل", "بتلجيوس", "سيلينوس", "الشمس"], correct: "بتلجيوس"},
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
  if(iqPercentage >= 95){
   comment = "🔥🤯 نتا عبقري! المعلم ديالنا!";
    comment = "🔥🤯 انت وااعر ";
    comment = "🤯 واااااااااو! عبقري بمعنى الكلمة!";

  } else if(iqPercentage >= 70){
    comment = "👍 مزيان بزاف، تستاهل التقدير!";
    comment = "👍ناضي, كانادي!";
    comment = "👌 نقيييي";

  } else if(iqPercentage >= 50){
    comment = "🙂 ماشي خايب، غادي تولي أحسن!";
    comment = "🙂 مبروك سقطتي ";
    comment = "😐 خاصك تزيد القراية!";
  
  } else if(iqPercentage >= 30){
    comment = "😂 خاصك تزيد القراية وتشد القهوة!";
     comment = "😂 مبروك سقتى ";
    comment = "😅 واااااااااااااااو! خاصك تعيد المحاولة!";
    comment = "😅 مبروك سقطتي ";
  }

  resultEl.innerHTML = `
    ✅ نتيجتك: <strong>${score} / ${currentQuiz.length}</strong><br/>
    💡 نسبة الذكاء: <strong>${iqPercentage}%</strong><br/>
    <em>${comment}</em><br/>
    <button id="whatsappBtn" style="margin-top:10px;background:#25d366;color:#fff;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-size:16px;">شارك نتيجتك على واتساب</button>
  `;
  shareBtn.style.display = "none";
  restartBtn.style.display = "inline-block";

  setTimeout(() => {
    const whatsappBtn = document.getElementById("whatsappBtn");
    if (whatsappBtn) {
      whatsappBtn.onclick = function() {
        var text = '🎉 جربو Quiz3fr دابا!!  \n\nموقع جديد فيه أسئلة وتحديات مغربية، واجهة سهلة وتعليقات مضحكة.\n\nنتيجتي: ' + score + ' / ' + currentQuiz.length + ' فـ مستوى (' + currentDifficulty + ') بنسبة ذكاء ' + iqPercentage + '%\n\nجربوه من هنا: https://charming-gnome-eef64b.netlify.app/\n\nطورناه باش يكون ممتع لكلشي! شارك نتيجتك مع صحابك وورّينا شحال جبت!';
        var url = 'https://wa.me/?text=' + encodeURIComponent(text);
        window.open(url, '_blank');
      };
    }
  }, 100);
}

if(timerEl){
  timerEl.style.fontSize = "2rem";
  timerEl.style.fontWeight = "bold";
  timerEl.style.color = "#ff9800";
  timerEl.style.textAlign = "center";
}
