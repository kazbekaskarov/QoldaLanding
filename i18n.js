/* i18n.js · qolda landing · ru/en/kk/tr */
(() => {
  const DICT = {
    ru: {
      'nav.what':'что_это','nav.gestures':'жесты','nav.voice':'голос','nav.download':'скачать',
      'hero.eyebrow':'DEMO · v0.2 · public preview · expect bugs',
      'hero.h1.l1':'компьютер','hero.h1.l2':'снова твой.','hero.h1.l3':'без_рук',
      'hero.lede':'Двигай курсор лицом. Печатай голосом. Всё работает локально на твоём ноутбуке. Windows, macOS, Linux.',
      'hero.cta.primary':'download demo · for','hero.cta.secondary':'▶ watch 32s demo',
      'hero.annotation':'это рабочий прототип. криво, но настоящее.',
      'hero.sticky.1':'голова ↘ → курсор ↘','hero.sticky.2':'рот открыл = клик','hero.sticky.3':'пауза словом «стоп»',
      'problem.box':`┌── // зачем ──────────────────────────────────────────────┐
│                                                          │
│   94 миллиона людей в мире живут с моторными             │
│   нарушениями верхних конечностей.                       │
│   Большинству — компьютер недоступен.                    │
│                                                          │
└──────────────────────────────────────────────────────────┘`,
      'problem.q1':'«После аварии я не мог даже открыть браузер.»','problem.a1':'Айдар, 34, Алматы',
      'problem.q2':'«Туннельный синдром. К концу дня рука как камень.»','problem.a2':'Лена, фронтенд',
      'problem.q3':'«Маме 71. Артрит. Хочет YouTube без помощи.»','problem.a3':'внук Денис',
      'problem.foot':'[stand-in quotes · собираем настоящие истории — пиши на hello@qolda.app] · источник 94M: WHO',
      'solution.box':'┌── // как это работает ─────────────────────────────────────┐',
      'solution.h2':'камера видит лицо. микрофон слышит голос. компьютер делает остальное.',
      'solution.t1':'ЛИЦО → КУРСОР','solution.d1':'MediaPipe FaceLandmarker. 52 микро-движения.',
      'solution.t2':'ГОЛОС → ТЕКСТ','solution.d2':'Whisper.cpp. Metal / CUDA / CPU. Локально.',
      'solution.t3':'ВСЁ ЛОКАЛЬНО','solution.d3':'Камера и микрофон обрабатываются на твоём устройстве. 0 запросов в облако.',
      'gestures.box':'┌── // 5 жестов ──────────────────────────────────────────┐',
      'gestures.muted':'// видео не покидает страницу. ничего не записывается. убедись сам — открой devtools → network.',
      'gestures.try':'◉ try it with my camera → (доступно в полной версии)',
      'gestures.col1':'жест','gestures.col2':'действие','gestures.col3':'порог',
      'gestures.g1':'◉ открыть рот','gestures.g2':'◉ поднять брови','gestures.g3':'◉ улыбнуться',
      'gestures.g4':'◉ закрыть L глаз','gestures.g5':'◉ закрыть R глаз',
      'voice.stats':'70+ команд      ·      4 языка      ·      смысловое распознавание',
      'privacy.h2':'мы не видим то,<br>что видишь ты.',
      'privacy.b1':'✓ камера и микрофон ─────────── обрабатываются на твоём устройстве',
      'privacy.b2':'✓ ноль сетевых запросов ─────── с твоими аудио или видео',
      'privacy.b3':'✓ исходный код открыт ───────── github.com/kazbekaskarov/BeMyHands',
      'privacy.note':'«проверь сам: открой Network в devtools — там тишина.»',
      'how.box':'┌── // как начать ────────────────────────────────────────┐',
      'how.s1':'скачай demo','how.s2':'разреши запуск','how.s3':'дай разрешения','how.s4':'сядь, нажми калибровать',
      'how.dl':'download demo','how.report':'⚠ что-то сломалось → report issue',
      'features.box':'┌── // фичи ──────────────────────────────────────────────┐',
      'f1.t':'HOT-CORNERS','f1.d':'Углы экрана как аварийные кнопки.',
      'f2.t':'ALWAYS-ON-TOP БАР','f2.d':'Тонкая полоса со статусом, всегда видна.',
      'f3.t':'PRECISION MODE','f3.d':'Скажи «точно» — на 3 сек крестик.',
      'f4.t':'4 ЯЗЫКА UI И КОМАНД',
      'f5.t':'АВТО-КОНФИГ','f5.d':'Калибровка и пороги сохраняются навсегда.',
      'f6.t':'AUTO-START WITH OS',
      'f7.t':'ЛОКАЛЬНЫЙ INTENT-МАТЧЕР','f7.d':'Свой классификатор без сети.',
      'f8.t':'WHISPER ACCELERATED','f8.d':'large-v3-turbo ≈ 5× реалтайма на M2/M3.',
      'oss.h2':'открыто. на века.',
      'oss.p':"MIT-лицензия. Каждая строка — на GitHub. Pull request'ы и issue приветствуются — это публичный demo, и нам важно знать, что ломается у тебя.",
      'oss.star':'★ star on github','oss.bug':'⚠ report a bug →',
      'dl.box':'┌── // download · v0.2.0-demo · last updated 2026-04-27 ──────────┐',
      'dl.note':'// you are downloading a preview build · last updated 2026-04-27',
      'dl.reqs':'min · 8 GB RAM · webcam 720p+ · mic · arm64 or x64 · gpu optional',
      'faq.box':'┌── // faq ───────────────────────────────────────────────┐',
      'faq.q1':'На каких ОС работает?','faq.a1':'Windows 10/11 (x64, arm64), macOS 13+ (Apple Silicon, Intel), Linux (Ubuntu 22.04+, Fedora 38+, X11 полностью, Wayland частично).',
      'faq.q2':'Это правда demo?','faq.a2':'Да. v0.2, публичный preview. Будут баги. Stable-релиз — позже, дату не обещаем.',
      'faq.q3':'Нужен ли интернет?','faq.a3':'Только при первой загрузке модели Whisper. Дальше — полностью offline.',
      'faq.q4':'Сколько весит модель?','faq.a4':'large-v3-turbo ≈ 1.6 ГБ (по умолчанию), small — 488 МБ.',
      'faq.q5':'Безопасно ли давать Accessibility-права?','faq.a5':'Да. Исходники открыты, проверяй сам. Только курсор и клавиатура, никакого экрана/микрофона в облако.',
      'faq.q6':'Можно ли в Zoom / созвонах?','faq.a6':'Да. Скажи «стоп» — печать с голоса отключается, курсор продолжает работать. «слушай» — обратно.',
      'faq.q7':'Что если у меня дёргается голова?','faq.a7':'Сглаживание EMA + dwell-click + precision mode по голосу.',
      'faq.q8':'Очки / борода / наушники мешают?','faq.a8':'MediaPipe устойчив. Проверь сам в demo выше.',
      'faq.q9':'Wayland?','faq.a9':'Курсор и клавиатура — да. Always-on-top бар — ограниченно. Работаем над этим.',
      'faq.q10':'Можно ли коммерчески использовать?','faq.a10':'Да. MIT.',
      'final.h2':'попробуй прямо сейчас.<br>это бесплатно.<br>это твоё.',
      'final.muted':'без регистрации · без подписки · без облака · MIT',
      'footer.product':'product','footer.project':'project','footer.connect':'connect',
      'footer.changelog':'changelog','footer.email':'email',
    },

    en: {
      'nav.what':'what_is','nav.gestures':'gestures','nav.voice':'voice','nav.download':'download',
      'hero.eyebrow':'DEMO · v0.2 · public preview · expect bugs',
      'hero.h1.l1':'your computer','hero.h1.l2':'is yours again.','hero.h1.l3':'hands_free',
      'hero.lede':'Move the cursor with your face. Type with your voice. Runs locally on your laptop. Windows, macOS, Linux.',
      'hero.cta.primary':'download demo · for','hero.cta.secondary':'▶ watch 32s demo',
      'hero.annotation':'this is a working prototype. rough, but real.',
      'hero.sticky.1':'head ↘ → cursor ↘','hero.sticky.2':'open mouth = click','hero.sticky.3':'say "stop" to pause',
      'problem.box':`┌── // why ────────────────────────────────────────────────┐
│                                                          │
│   94 million people worldwide live with motor            │
│   impairments of the upper limbs.                        │
│   Most of them — can't use a computer.                   │
│                                                          │
└──────────────────────────────────────────────────────────┘`,
      'problem.q1':'"After the accident I couldn\'t even open a browser."','problem.a1':'Aidar, 34, Almaty',
      'problem.q2':'"Carpal tunnel. By evening my hand is stone."','problem.a2':'Lena, frontend',
      'problem.q3':'"Mom is 71. Arthritis. Wants YouTube on her own."','problem.a3':'grandson Denis',
      'problem.foot':'[stand-in quotes · we are collecting real stories — write to hello@qolda.app] · 94M source: WHO',
      'solution.box':'┌── // how it works ─────────────────────────────────────────┐',
      'solution.h2':'the camera sees your face. the mic hears your voice. the computer does the rest.',
      'solution.t1':'FACE → CURSOR','solution.d1':'MediaPipe FaceLandmarker. 52 micro-movements.',
      'solution.t2':'VOICE → TEXT','solution.d2':'Whisper.cpp. Metal / CUDA / CPU. Local.',
      'solution.t3':'ALL LOCAL','solution.d3':'Camera and mic are processed on your device. 0 cloud requests.',
      'gestures.box':'┌── // 5 gestures ─────────────────────────────────────────┐',
      'gestures.muted':'// the video never leaves this page. nothing is recorded. check yourself — open devtools → network.',
      'gestures.try':'◉ try it with my camera → (available in full version)',
      'gestures.col1':'gesture','gestures.col2':'action','gestures.col3':'threshold',
      'gestures.g1':'◉ open mouth','gestures.g2':'◉ raise brows','gestures.g3':'◉ smile',
      'gestures.g4':'◉ close L eye','gestures.g5':'◉ close R eye',
      'voice.stats':'70+ commands      ·      4 languages      ·      semantic matching',
      'privacy.h2':"we don't see<br>what you see.",
      'privacy.b1':'✓ camera & mic ─────────────── processed on your device',
      'privacy.b2':'✓ zero network requests ─────── with your audio or video',
      'privacy.b3':'✓ source code open ──────────── github.com/kazbekaskarov/BeMyHands',
      'privacy.note':'"check yourself: open Network in devtools — silence."',
      'how.box':'┌── // how to start ──────────────────────────────────────┐',
      'how.s1':'download demo','how.s2':'allow launch','how.s3':'grant permissions','how.s4':'sit down, hit calibrate',
      'how.dl':'download demo','how.report':'⚠ something broke → report issue',
      'features.box':'┌── // features ──────────────────────────────────────────┐',
      'f1.t':'HOT-CORNERS','f1.d':'Screen corners as emergency buttons.',
      'f2.t':'ALWAYS-ON-TOP BAR','f2.d':'A thin status strip, always visible.',
      'f3.t':'PRECISION MODE','f3.d':'Say "precision" — crosshair for 3s.',
      'f4.t':'4 LANGUAGES UI & COMMANDS',
      'f5.t':'AUTO-CONFIG','f5.d':'Calibration and thresholds saved forever.',
      'f6.t':'AUTO-START WITH OS',
      'f7.t':'LOCAL INTENT MATCHER','f7.d':'Own classifier, no network.',
      'f8.t':'WHISPER ACCELERATED','f8.d':'large-v3-turbo ≈ 5× realtime on M2/M3.',
      'oss.h2':'open. forever.',
      'oss.p':"MIT licence. Every line on GitHub. Pull requests and issues welcome — this is a public demo, and we want to know what breaks for you.",
      'oss.star':'★ star on github','oss.bug':'⚠ report a bug →',
      'dl.box':'┌── // download · v0.2.0-demo · last updated 2026-04-27 ──────────┐',
      'dl.note':'// you are downloading a preview build · last updated 2026-04-27',
      'dl.reqs':'min · 8 GB RAM · webcam 720p+ · mic · arm64 or x64 · gpu optional',
      'faq.box':'┌── // faq ───────────────────────────────────────────────┐',
      'faq.q1':'Which OS does it run on?','faq.a1':'Windows 10/11 (x64, arm64), macOS 13+ (Apple Silicon, Intel), Linux (Ubuntu 22.04+, Fedora 38+, X11 fully, Wayland partially).',
      'faq.q2':'Is this really a demo?','faq.a2':'Yes. v0.2, public preview. There will be bugs. Stable release — later, no promises on date.',
      'faq.q3':'Do I need internet?','faq.a3':'Only for first Whisper model download. After that — fully offline.',
      'faq.q4':'How big is the model?','faq.a4':'large-v3-turbo ≈ 1.6 GB (default), small — 488 MB.',
      'faq.q5':'Is it safe to grant Accessibility permissions?','faq.a5':'Yes. Sources are open, check yourself. Only cursor and keyboard, no screen/mic going to the cloud.',
      'faq.q6':'Can I use it on Zoom / calls?','faq.a6':'Yes. Say "stop" — voice typing off, cursor still works. "listen" — back on.',
      'faq.q7':'What if my head shakes?','faq.a7':'EMA smoothing + dwell-click + voice-controlled precision mode.',
      'faq.q8':'Glasses / beard / headphones in the way?','faq.a8':'MediaPipe is robust. Check yourself in the demo above.',
      'faq.q9':'Wayland?','faq.a9':'Cursor and keyboard — yes. Always-on-top bar — limited. Working on it.',
      'faq.q10':'Commercial use?','faq.a10':'Yes. MIT.',
      'final.h2':'try it right now.<br>it\'s free.<br>it\'s yours.',
      'final.muted':'no signup · no subscription · no cloud · MIT',
      'footer.product':'product','footer.project':'project','footer.connect':'connect',
      'footer.changelog':'changelog','footer.email':'email',
    },

    kk: {
      'nav.what':'не_бұл','nav.gestures':'қимылдар','nav.voice':'дауыс','nav.download':'жүктеу',
      'hero.eyebrow':'DEMO · v0.2 · public preview · қателер болады',
      'hero.h1.l1':'компьютер','hero.h1.l2':'қайта сенікі.','hero.h1.l3':'қолсыз',
      'hero.lede':'Курсорды бетіңмен жылжыт. Дауыспен жаз. Бәрі ноутбукта жергілікті жұмыс істейді. Windows, macOS, Linux.',
      'hero.cta.primary':'demo жүктеу · ОЖ:','hero.cta.secondary':'▶ 32с demo көру',
      'hero.annotation':'бұл жұмыс істеп тұрған прототип. шикі, бірақ нағыз.',
      'hero.sticky.1':'бас ↘ → курсор ↘','hero.sticky.2':'ауыз ашу = шерту','hero.sticky.3':'«тоқта» десең — пауза',
      'problem.box':`┌── // не үшін ────────────────────────────────────────────┐
│                                                          │
│   Әлемде 94 миллион адам жоғарғы аяқ-қол                 │
│   моторикасының бұзылуымен өмір сүреді.                  │
│   Олардың көбі — компьютерді қолдана алмайды.            │
│                                                          │
└──────────────────────────────────────────────────────────┘`,
      'problem.q1':'«Апаттан кейін браузерді де аша алмадым.»','problem.a1':'Айдар, 34, Алматы',
      'problem.q2':'«Туннельді синдром. Кеш болса қол тас.»','problem.a2':'Лена, фронтенд',
      'problem.q3':'«Анам 71-де. Артрит. YouTube өзі қарағысы келеді.»','problem.a3':'немересі Денис',
      'problem.foot':'[stand-in dәйексөздер · нақты әңгімелер жинаймыз — hello@qolda.app] · 94M дереккөзі: WHO',
      'solution.box':'┌── // қалай жұмыс істейді ─────────────────────────────────┐',
      'solution.h2':'камера бетті көреді. микрофон дауысты естиді. компьютер қалғанын істейді.',
      'solution.t1':'БЕТ → КУРСОР','solution.d1':'MediaPipe FaceLandmarker. 52 микро-қимыл.',
      'solution.t2':'ДАУЫС → МӘТІН','solution.d2':'Whisper.cpp. Metal / CUDA / CPU. Жергілікті.',
      'solution.t3':'БӘРІ ЖЕРГІЛІКТІ','solution.d3':'Камера мен микрофон құрылғыңда өңделеді. Бұлтқа 0 сұраныс.',
      'gestures.box':'┌── // 5 қимыл ───────────────────────────────────────────┐',
      'gestures.muted':'// бейне беттен шықпайды. ештеңе жазылмайды. өзің тексер — devtools → network.',
      'gestures.try':'◉ камераммен сынап көру → (толық нұсқада қолжетімді)',
      'gestures.col1':'қимыл','gestures.col2':'әрекет','gestures.col3':'шек',
      'gestures.g1':'◉ ауызды ашу','gestures.g2':'◉ қасты көтеру','gestures.g3':'◉ күлу',
      'gestures.g4':'◉ сол көзді жабу','gestures.g5':'◉ оң көзді жабу',
      'voice.stats':'70+ команда      ·      4 тіл      ·      мағыналық тану',
      'privacy.h2':'сен көргенді<br>біз көрмейміз.',
      'privacy.b1':'✓ камера мен микрофон ──────── құрылғыңда өңделеді',
      'privacy.b2':'✓ нөл желілік сұраныс ───────── аудио/бейнеңмен',
      'privacy.b3':'✓ ашық бастапқы код ─────────── github.com/kazbekaskarov/BeMyHands',
      'privacy.note':'«өзің тексер: devtools → Network — тыныштық.»',
      'how.box':'┌── // қалай бастау керек ────────────────────────────────┐',
      'how.s1':'demo жүкте','how.s2':'іске қосуға рұқсат бер','how.s3':'рұқсаттар бер','how.s4':'отыр, калибрлеуді бас',
      'how.dl':'demo жүктеу','how.report':'⚠ бірдеңе бұзылды → issue ашу',
      'features.box':'┌── // мүмкіндіктер ──────────────────────────────────────┐',
      'f1.t':'HOT-CORNERS','f1.d':'Экран бұрыштары — апаттық түймелер.',
      'f2.t':'ALWAYS-ON-TOP ЖОЛАҚ','f2.d':'Жұқа жолақ, әрқашан көрінеді.',
      'f3.t':'PRECISION MODE','f3.d':'«дәл» десең — 3 сек қиылыс.',
      'f4.t':'UI ЖӘНЕ КОМАНДА — 4 ТІЛ',
      'f5.t':'АВТО-КОНФИГ','f5.d':'Калибрлеу мен шектер мәңгі сақталады.',
      'f6.t':'ОЖ-МЕН АВТО-ҚОСУ',
      'f7.t':'ЖЕРГІЛІКТІ INTENT МАТЧЕР','f7.d':'Желісіз өз классификаторы.',
      'f8.t':'WHISPER ACCELERATED','f8.d':'large-v3-turbo ≈ M2/M3-те 5× realtime.',
      'oss.h2':'ашық. мәңгілікке.',
      'oss.p':'MIT лицензиясы. Әр жол — GitHub-та. Pull request пен issue қош келдік — бұл көпшілік demo, бізге не бұзылғанын білу маңызды.',
      'oss.star':'★ github-та star','oss.bug':'⚠ қате туралы хабарлау →',
      'dl.box':'┌── // download · v0.2.0-demo · 2026-04-27 жаңартылды ────────────┐',
      'dl.note':'// сен preview build жүктеп жатырсың · 2026-04-27 жаңартылды',
      'dl.reqs':'мин · 8 ГБ RAM · webcam 720p+ · mic · arm64 не x64 · gpu қажет емес',
      'faq.box':'┌── // faq ───────────────────────────────────────────────┐',
      'faq.q1':'Қандай ОЖ-да жұмыс істейді?','faq.a1':'Windows 10/11 (x64, arm64), macOS 13+ (Apple Silicon, Intel), Linux (Ubuntu 22.04+, Fedora 38+, X11 толық, Wayland ішінара).',
      'faq.q2':'Бұл шынымен demo ма?','faq.a2':'Иә. v0.2, public preview. Қателер болады. Тұрақты релиз — кейінірек.',
      'faq.q3':'Интернет керек пе?','faq.a3':'Тек Whisper моделін бірінші рет жүктегенде. Кейін — толық offline.',
      'faq.q4':'Модель қанша орын алады?','faq.a4':'large-v3-turbo ≈ 1.6 ГБ (әдепкі), small — 488 МБ.',
      'faq.q5':'Accessibility рұқсаты қауіпсіз бе?','faq.a5':'Иә. Бастапқы код ашық, өзің тексер. Тек курсор мен пернетақта.',
      'faq.q6':'Zoom-да қолдануға бола ма?','faq.a6':'Иә. «тоқта» десең — дауыс жазу өшеді, курсор қалады. «тыңда» — қайта қосылады.',
      'faq.q7':'Бас дірілдесе ше?','faq.a7':'EMA тегістеу + dwell-click + дауыспен precision mode.',
      'faq.q8':'Көзілдірік / сақал / құлаққап кедергі ме?','faq.a8':'MediaPipe тұрақты. Жоғарыдағы demo-да тексер.',
      'faq.q9':'Wayland?','faq.a9':'Курсор мен пернетақта — иә. Always-on-top бар — шектеулі.',
      'faq.q10':'Коммерциялық қолдану?','faq.a10':'Иә. MIT.',
      'final.h2':'қазір сынап көр.<br>тегін.<br>сенікі.',
      'final.muted':'тіркеусіз · жазылымсыз · бұлтсыз · MIT',
      'footer.product':'өнім','footer.project':'жоба','footer.connect':'байланыс',
      'footer.changelog':'changelog','footer.email':'email',
    },

    tr: {
      'nav.what':'nedir','nav.gestures':'jestler','nav.voice':'ses','nav.download':'indir',
      'hero.eyebrow':'DEMO · v0.2 · public preview · hatalar olabilir',
      'hero.h1.l1':'bilgisayar','hero.h1.l2':'yine senin.','hero.h1.l3':'eller_serbest',
      'hero.lede':'İmleci yüzünle hareket ettir. Sesinle yaz. Her şey dizüstünde yerel çalışır. Windows, macOS, Linux.',
      'hero.cta.primary':'demo indir · şunun için','hero.cta.secondary':'▶ 32s demo izle',
      'hero.annotation':'çalışan bir prototip. ham ama gerçek.',
      'hero.sticky.1':'kafa ↘ → imleç ↘','hero.sticky.2':'ağzı aç = tıkla','hero.sticky.3':'«dur» de, duraklasın',
      'problem.box':`┌── // neden ──────────────────────────────────────────────┐
│                                                          │
│   Dünyada 94 milyon kişi üst ekstremite                  │
│   motor bozukluğuyla yaşıyor.                            │
│   Çoğu için bilgisayar erişilemez.                       │
│                                                          │
└──────────────────────────────────────────────────────────┘`,
      'problem.q1':'«Kazadan sonra tarayıcıyı bile açamıyordum.»','problem.a1':'Aidar, 34, Almatı',
      'problem.q2':'«Karpal tünel. Akşama elim taş gibi.»','problem.a2':'Lena, frontend',
      'problem.q3':'«Annem 71. Artrit. YouTube\'u tek başına izlemek istiyor.»','problem.a3':'torun Denis',
      'problem.foot':'[stand-in alıntılar · gerçek hikâyeler topluyoruz — hello@qolda.app] · 94M kaynağı: WHO',
      'solution.box':'┌── // nasıl çalışır ───────────────────────────────────────┐',
      'solution.h2':'kamera yüzü görür. mikrofon sesi duyar. bilgisayar gerisini yapar.',
      'solution.t1':'YÜZ → İMLEÇ','solution.d1':'MediaPipe FaceLandmarker. 52 mikro hareket.',
      'solution.t2':'SES → METİN','solution.d2':'Whisper.cpp. Metal / CUDA / CPU. Yerel.',
      'solution.t3':'HER ŞEY YEREL','solution.d3':'Kamera ve mikrofon cihazında işlenir. Buluta 0 istek.',
      'gestures.box':'┌── // 5 jest ────────────────────────────────────────────┐',
      'gestures.muted':'// video sayfayı terk etmez. hiçbir şey kaydedilmez. kendin kontrol et — devtools → network.',
      'gestures.try':'◉ kameramla dene → (tam sürümde mevcut)',
      'gestures.col1':'jest','gestures.col2':'eylem','gestures.col3':'eşik',
      'gestures.g1':'◉ ağzı aç','gestures.g2':'◉ kaşları kaldır','gestures.g3':'◉ gülümse',
      'gestures.g4':'◉ sol gözü kapat','gestures.g5':'◉ sağ gözü kapat',
      'voice.stats':'70+ komut      ·      4 dil      ·      anlamsal eşleştirme',
      'privacy.h2':'gördüğünü<br>biz görmüyoruz.',
      'privacy.b1':'✓ kamera ve mikrofon ────────── cihazında işlenir',
      'privacy.b2':'✓ sıfır ağ isteği ───────────── ses veya video ile',
      'privacy.b3':'✓ kaynak kod açık ───────────── github.com/kazbekaskarov/BeMyHands',
      'privacy.note':'«kendin kontrol et: devtools → Network — sessizlik.»',
      'how.box':'┌── // nasıl başlanır ────────────────────────────────────┐',
      'how.s1':'demo indir','how.s2':'çalıştırmaya izin ver','how.s3':'izinleri ver','how.s4':'otur, kalibre et',
      'how.dl':'demo indir','how.report':'⚠ bir şey bozuldu → issue aç',
      'features.box':'┌── // özellikler ────────────────────────────────────────┐',
      'f1.t':'HOT-CORNERS','f1.d':'Ekran köşeleri acil durum tuşları.',
      'f2.t':'ALWAYS-ON-TOP BAR','f2.d':'İnce durum çubuğu, daima görünür.',
      'f3.t':'PRECISION MODE','f3.d':'«hassas» de — 3 sn artı imleç.',
      'f4.t':'UI VE KOMUTLARDA 4 DİL',
      'f5.t':'OTOMATİK YAPILANDIRMA','f5.d':'Kalibrasyon ve eşikler kalıcı.',
      'f6.t':'OS İLE OTOMATİK BAŞLAT',
      'f7.t':'YEREL INTENT EŞLEYİCİ','f7.d':'Ağsız kendi sınıflandırıcısı.',
      'f8.t':'WHISPER ACCELERATED','f8.d':'large-v3-turbo ≈ M2/M3 üzerinde 5× realtime.',
      'oss.h2':'açık. ebediyen.',
      'oss.p':'MIT lisansı. Her satır GitHub\'da. Pull request ve issue\'lar bekleriz — bu kamuya açık bir demo.',
      'oss.star':'★ github\'da star','oss.bug':'⚠ hata bildir →',
      'dl.box':'┌── // download · v0.2.0-demo · son güncelleme 2026-04-27 ────────┐',
      'dl.note':'// preview build indiriyorsun · son güncelleme 2026-04-27',
      'dl.reqs':'min · 8 GB RAM · webcam 720p+ · mic · arm64 ya da x64 · gpu opsiyonel',
      'faq.box':'┌── // faq ───────────────────────────────────────────────┐',
      'faq.q1':'Hangi işletim sistemlerinde çalışır?','faq.a1':'Windows 10/11 (x64, arm64), macOS 13+ (Apple Silicon, Intel), Linux (Ubuntu 22.04+, Fedora 38+, X11 tam, Wayland kısmen).',
      'faq.q2':'Gerçekten demo mu?','faq.a2':'Evet. v0.2, public preview. Hatalar olacak. Kararlı sürüm — sonra.',
      'faq.q3':'İnternet gerekli mi?','faq.a3':'Sadece Whisper modelinin ilk indirilmesi için. Sonrası tamamen offline.',
      'faq.q4':'Model ne kadar yer kaplar?','faq.a4':'large-v3-turbo ≈ 1.6 GB (varsayılan), small — 488 MB.',
      'faq.q5':'Accessibility izinleri güvenli mi?','faq.a5':'Evet. Kaynak açık, kendin bak. Sadece imleç ve klavye.',
      'faq.q6':'Zoom / aramalarda kullanılabilir mi?','faq.a6':'Evet. «dur» de — sesle yazma kapanır, imleç çalışır. «dinle» — geri açılır.',
      'faq.q7':'Başım titrerse?','faq.a7':'EMA yumuşatma + dwell-click + sesle precision mode.',
      'faq.q8':'Gözlük / sakal / kulaklık engel mi?','faq.a8':'MediaPipe sağlam. Yukarıdaki demo\'da dene.',
      'faq.q9':'Wayland?','faq.a9':'İmleç ve klavye — evet. Always-on-top bar — sınırlı.',
      'faq.q10':'Ticari kullanım?','faq.a10':'Evet. MIT.',
      'final.h2':'şimdi dene.<br>ücretsiz.<br>senin.',
      'final.muted':'kayıt yok · abonelik yok · bulut yok · MIT',
      'footer.product':'ürün','footer.project':'proje','footer.connect':'iletişim',
      'footer.changelog':'changelog','footer.email':'email',
    },
  };

  const HTML_LANG = { ru:'ru', en:'en', kk:'kk', tr:'tr' };

  function apply(lang) {
    const dict = DICT[lang] || DICT.ru;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (val == null) return;
      if (el.hasAttribute('data-i18n-html') || el.hasAttribute('data-i18n-pre')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });
    document.documentElement.lang = HTML_LANG[lang] || 'ru';
    document.querySelectorAll('.lang [data-lang]').forEach(b => {
      b.classList.toggle('is-active', b.dataset.lang === lang);
    });
    try { localStorage.setItem('qolda_lang', lang); } catch {}
  }

  function init() {
    let lang = 'ru';
    try { lang = localStorage.getItem('qolda_lang') || 'ru'; } catch {}
    if (!DICT[lang]) lang = 'ru';
    apply(lang);

    document.querySelectorAll('.lang [data-lang]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        apply(btn.dataset.lang);
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

