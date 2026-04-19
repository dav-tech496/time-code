/* ════════════════════════════════════════════════════════
   TIME CODE — script.js
   Pure static JavaScript. No backend, no API calls.
   All data lives here as plain JS objects (const).
════════════════════════════════════════════════════════ */

/* ─── 1. TRANSLATIONS ─────────────────────────────────── */
const T = {
  en: {
    /* Navbar */
    n_about:'About', n_services:'Services', n_vehicles:'Vehicles', n_careers:'Careers', n_contact:'Contact', n_cta:'Inquiry',
    /* Hero */
    h_badge:'Since 2025 — Japan · Myanmar · Global',
    h_l1:'Connecting Markets.', h_l2:'Unlocking Opportunity.',
    h_sub:'TIME CODE bridges Japan and Myanmar through expert trade, M&A advisory, recruitment, and international business support.',
    h_cta1:'Explore Services', h_cta2:'Get in Touch',
    /* Stats */
    s1:'Vehicles Exported', s2:'M&A Deals', s3:'Candidates Placed', s4:'Countries Served',
    /* About */
    a_eye:'About TIME CODE',
    a_title:'A Bridge Between Japan, Myanmar & the World',
    a_p1:'Founded in 2025, TIME CODE was born from a vision to create a reliable, professional gateway connecting Japanese and Myanmar markets. We operate across used vehicle exports, M&A advisory, talent recruitment, and international business consulting.',
    a_p2:'Our team combines deep local knowledge with international expertise — ensuring every engagement is handled with precision, confidentiality, and a long-term partnership mindset.',
    a_global:'Global',
    a_quote:'"We don\'t just facilitate transactions — we build bridges that last for generations."',
    a_attr:'TIME CODE Leadership',
    /* Services */
    sv_eye:'What We Do', sv_title:'Our Core Services',
    /* Vehicles */
    v_eye:'Vehicle Export', v_title:'Available Inventory',
    t_all:'All', t_car:'Cars', t_truck:'Trucks', t_bus:'Buses',
    v_cta:'Inquire About a Vehicle',
    /* M&A */
    m_eye:'M&A Advisory', m_title:'Confidential M&A Matching',
    m_desc:'We provide discreet, high-integrity M&A matching services connecting Japanese acquirers with Myanmar businesses and vice versa. Every engagement is handled under strict NDA and professional discretion.',
    m_cta:'Request Consultation',
    m_f1:'Confidential', m_f2:'Precision Matching', m_f3:'Due Diligence', m_f4:'Legal Support',
    /* Careers */
    j_eye:'Recruitment', j_title:'Open Positions',
    cv_eye:"Don't see your role?", cv_title:'Submit Your CV', cv_sub:'We keep your profile on file for future opportunities.', cv_btn:'Send Your CV',
    /* Process */
    p_eye:'How We Work', p_title:'Our Process',
    /* Contact */
    c_eye:'Get In Touch', c_title:"Let's Build Something Together",
    c_desc:"Whether you're looking to export vehicles, explore M&A opportunities, find talent, or expand internationally — we're here to help.",
    c_el:'Email', c_ol:'Office', c_ov:'Tokyo, Japan · Yangon, Myanmar', c_hl:'Hours', c_hv:'Mon – Fri, 9:00 – 18:00 JST',
    /* Form */
    f_name:'Full Name', f_company:'Company', f_email:'Email', f_svc:'Service of Interest',
    f_sel:'— Select —', f_s1:'Used Vehicle Export', f_s2:'M&A Matching', f_s3:'Recruitment', f_s4:'International Business Support', f_s5:'Submit CV',
    f_msg:'Message', f_submit:'Send Inquiry',
    f_ename:'Required', f_eemail:'Valid email required', f_emsg:'Please enter a message',
    f_ok:"✓ Thank you! We'll respond within 1 business day.",
    /* Footer */
    ft_desc:'Your trusted partner bridging Japan and Myanmar in trade, M&A, and talent.',
    ft_svc:'Services', ft_s1:'Used Vehicle Export', ft_s2:'M&A Matching', ft_s3:'Recruitment', ft_s4:'Business Support',
    ft_co:'Company', ft_about:'About Us', ft_car:'Careers', ft_con:'Contact',
    ft_lang:'Language', ft_legal:'Privacy Policy · Terms of Service',
  },

  ja: {
    n_about:'会社概要', n_services:'サービス', n_vehicles:'車両', n_careers:'採用情報', n_contact:'お問い合わせ', n_cta:'お問い合わせ',
    h_badge:'2025年設立 — 日本 · ミャンマー · グローバル',
    h_l1:'市場をつなぐ。', h_l2:'機会を解放する。',
    h_sub:'TIME CODEは貿易・M&A・採用・国際ビジネス支援を通じて、日本とミャンマーを橋渡しします。',
    h_cta1:'サービスを見る', h_cta2:'お問い合わせ',
    s1:'輸出車両数', s2:'M&A成約件数', s3:'採用実績数', s4:'対応国数',
    a_eye:'TIME CODEについて',
    a_title:'日本・ミャンマー・世界をつなぐ架け橋',
    a_p1:'2025年に設立されたTIME CODEは、日本とミャンマーの市場を結ぶ信頼性の高い窓口として誕生しました。中古車輸出、M&Aアドバイザリー、人材採用、国際ビジネスコンサルティングに対応しています。',
    a_p2:'私たちのチームは、深い現地知識と国際的な専門知識を組み合わせ、すべての案件を精密さ・機密性・長期パートナーシップの観点で対応します。',
    a_global:'グローバル',
    a_quote:'「取引を仲介するだけでなく、世代を超える架け橋を構築します。」',
    a_attr:'TIME CODE 経営陣',
    sv_eye:'事業内容', sv_title:'主要サービス',
    v_eye:'車両輸出', v_title:'在庫車両一覧',
    t_all:'全て', t_car:'乗用車', t_truck:'トラック', t_bus:'バス',
    v_cta:'車両についてお問い合わせ',
    m_eye:'M&Aアドバイザリー', m_title:'機密M&Aマッチング',
    m_desc:'日本の買収者とミャンマー企業をつなぐ、高誠実性・機密性の高いM&Aマッチングサービスを提供します。すべての案件は厳格なNDAのもと対応します。',
    m_cta:'M&A相談を申し込む',
    m_f1:'機密保持', m_f2:'精密マッチング', m_f3:'デューデリジェンス', m_f4:'法的サポート',
    j_eye:'職業紹介', j_title:'求人情報',
    cv_eye:'希望の求人がない場合', cv_title:'履歴書を送る', cv_sub:'ご登録いただいた情報は今後の採用に活用します。', cv_btn:'履歴書を送る',
    p_eye:'進め方', p_title:'ご利用の流れ',
    c_eye:'お問い合わせ', c_title:'共に構築しましょう',
    c_desc:'車両輸出、M&A機会の探索、人材確保、海外進出など、どのようなことでもご相談ください。',
    c_el:'メール', c_ol:'オフィス', c_ov:'東京、日本 · ヤンゴン、ミャンマー', c_hl:'営業時間', c_hv:'月〜金 9:00〜18:00（JST）',
    f_name:'お名前', f_company:'会社名', f_email:'メールアドレス', f_svc:'ご希望のサービス',
    f_sel:'— 選択 —', f_s1:'中古車輸出', f_s2:'M&Aマッチング', f_s3:'職業紹介', f_s4:'国際ビジネス支援', f_s5:'履歴書送付',
    f_msg:'メッセージ', f_submit:'お問い合わせを送る',
    f_ename:'必須項目', f_eemail:'有効なメールを入力してください', f_emsg:'メッセージを入力してください',
    f_ok:'✓ ありがとうございます！1営業日以内にご返信します。',
    ft_desc:'日本とミャンマーをつなぐ、国際貿易・M&A・人材のパートナー。',
    ft_svc:'サービス', ft_s1:'中古車輸出', ft_s2:'M&Aマッチング', ft_s3:'職業紹介', ft_s4:'ビジネス支援',
    ft_co:'会社情報', ft_about:'会社概要', ft_car:'採用情報', ft_con:'お問い合わせ',
    ft_lang:'言語', ft_legal:'プライバシーポリシー · 利用規約',
  },

  my: {
    n_about:'ကုမ္ပဏီ', n_services:'ဝန်ဆောင်မှု', n_vehicles:'ယာဉ်', n_careers:'အလုပ်', n_contact:'ဆက်သွယ်', n_cta:'မေးမြန်းရန်',
    h_badge:'၂၀၂၅ ခုနှစ် — ဂျပန် · မြန်မာ · ကမ္ဘာ',
    h_l1:'ဈေးကွက်များ ချိတ်ဆက်သည်။', h_l2:'အခွင့်အလမ်းများ ဖွင့်ပေးသည်။',
    h_sub:'TIME CODE သည် ကုန်သွယ်ရေး၊ M&A၊ အလုပ်အကိုင် မိတ်ဆက် နှင့် နိုင်ငံတကာ စီးပွားရေး အထောက်အပံ့ဖြင့် ဂျပန်နှင့် မြန်မာကို ချိတ်ဆက်ပေးသည်။',
    h_cta1:'ဝန်ဆောင်မှုများ ကြည့်ရှုရန်', h_cta2:'ဆက်သွယ်ရန်',
    s1:'တင်ပို့ပြီးသော ယာဉ်', s2:'M&A ကိစ္စများ', s3:'အလုပ် ရရှိပြီးသူ', s4:'နိုင်ငံ အရေအတွက်',
    a_eye:'TIME CODE အကြောင်း',
    a_title:'ဂျပန်၊ မြန်မာ နှင့် ကမ္ဘာကြားတံတား',
    a_p1:'၂၀၂၅ ခုနှစ်တွင် တည်ထောင်ခဲ့သော TIME CODE သည် ဂျပန်နှင့် မြန်မာ ဈေးကွက်များကို ယုံကြည်စိတ်ချရသော တံတားတစ်ခု ဖန်တီးရန် မျှော်မှန်းချက်မှ မွေးဖွားခဲ့သည်။ ကျွန်ုပ်တို့သည် ယာဉ်တင်ပို့ရေး၊ M&A၊ အလုပ်သမား ရှာဖွေရေး နှင့် နိုင်ငံတကာ ပြသနာဖြေရှင်းမှုတို့ ဆောင်ရွက်သည်။',
    a_p2:'ကျွန်ုပ်တို့အဖွဲ့သည် ဒေသဆိုင်ရာ အဓိပ္ပာယ်ဖွင့်ဆိုချက်နှင့် နိုင်ငံတကာ ကျွမ်းကျင်မှုကို ပေါင်းစပ်၍ ကိစ္စတိုင်းကို တိကျမှု၊ လျှို့ဝှက်မှု နှင့် ရေရှည်မိတ်ဖက်ဆက်ဆံရေးဖြင့် ဆောင်ရွက်သည်။',
    a_global:'ကမ္ဘာ',
    a_quote:'"ငွေကြေးဆိုင်ရာ ကူးလူးဆောင်ရွက်မှုများသာ မဟုတ်ဘဲ — မျိုးဆက်များကြာမြင့်ခိုင်မာသော တံတားများ တည်ဆောက်ပေးသည်။"',
    a_attr:'TIME CODE ဦးဆောင်မှု',
    sv_eye:'ဝန်ဆောင်မှုများ', sv_title:'အဓိက ဝန်ဆောင်မှုများ',
    v_eye:'ယာဉ်တင်ပို့ရေး', v_title:'ရရှိနိုင်သော ယာဉ်များ',
    t_all:'အားလုံး', t_car:'ကား', t_truck:'ထရပ်', t_bus:'ဘတ်စ်',
    v_cta:'ယာဉ်အကြောင်း မေးမြန်းရန်',
    m_eye:'M&A အကြံပေးခြင်း', m_title:'လျှို့ဝှက် M&A ချိတ်ဆက်ရေး',
    m_desc:'ဂျပန် ဝယ်ယူသူများနှင့် မြန်မာ စီးပွားရေးလုပ်ငန်းများကို ချိတ်ဆက်ပေးသော M&A ဝန်ဆောင်မှုများ ပေးဆောင်သည်။ NDA သဘောတူညီချက်ဖြင့် ကိုင်တွယ်ဆောင်ရွက်သည်။',
    m_cta:'တိုင်ပင်ဆွေးနွေးရန် မေးမြန်းပါ',
    m_f1:'လျှို့ဝှက်မှု', m_f2:'တိကျသော ချိတ်ဆက်မှု', m_f3:'Due Diligence', m_f4:'ဥပဒေ အထောက်အပံ့',
    j_eye:'အလုပ်အကိုင် မိတ်ဆက်', j_title:'ရှိနေသော ရာထူးများ',
    cv_eye:'သင့်နှင့် ကိုက်ညီသော ရာထူး မတွေ့ပါက', cv_title:'CV ပေးပို့ပါ', cv_sub:'နောင်တွင် ကိုက်ညီသော ရာထူးရှိပါက အသိပေးပါမည်။', cv_btn:'CV ပေးပို့ရန်',
    p_eye:'လုပ်ဆောင်ပုံ', p_title:'လုပ်ငန်းစဉ်',
    c_eye:'ဆက်သွယ်ရန်', c_title:'အတူ တည်ဆောက်ကြစို့',
    c_desc:'ယာဉ်တင်ပို့ရေး၊ M&A ရှာဖွေရေး၊ အလုပ်သမားရှာဖွေရေး သို့မဟုတ် နိုင်ငံတကာ ချဲ့ထွင်ရေးနှင့် ပတ်သက်၍ ကျွန်ုပ်တို့ ကူညီပေးပါမည်။',
    c_el:'အီးမေးလ်', c_ol:'ရုံးခန်း', c_ov:'တိုကျို၊ ဂျပန် · ရန်ကုန်၊ မြန်မာ', c_hl:'ဆောင်ရွက်ချိန်', c_hv:'တနင်္လာ – သောကြာ ၉:၀၀–၁၈:၀၀ (JST)',
    f_name:'အမည်', f_company:'ကုမ္ပဏီ', f_email:'အီးမေးလ်', f_svc:'ဝန်ဆောင်မှု ရွေးချယ်ပါ',
    f_sel:'— ရွေးချယ်ပါ —', f_s1:'ယာဉ်တင်ပို့ရေး', f_s2:'M&A', f_s3:'အလုပ်မိတ်ဆက်', f_s4:'နိုင်ငံတကာ စီးပွားရေး', f_s5:'CV ပေးပို့ရန်',
    f_msg:'သတင်းစကား', f_submit:'မေးမြန်းချက် ပေးပို့ရန်',
    f_ename:'လိုအပ်ပါသည်', f_eemail:'မှန်ကန်သော အီးမေးလ် ထည့်ပါ', f_emsg:'မက်ဆေ့ ထည့်ပါ',
    f_ok:'✓ ကျေးဇူးတင်ပါသည်! ၁ ရက်အတွင်း ပြန်ကြားပါမည်။',
    ft_desc:'ဂျပန်နှင့် မြန်မာကို ချိတ်ဆက်သော နိုင်ငံတကာ ကုန်သွယ်ရေး၊ M&A နှင့် လူ့အင်အား ပါတနာ။',
    ft_svc:'ဝန်ဆောင်မှုများ', ft_s1:'ယာဉ်တင်ပို့ရေး', ft_s2:'M&A', ft_s3:'အလုပ်မိတ်ဆက်', ft_s4:'စီးပွားရေး အထောက်အပံ့',
    ft_co:'ကုမ္ပဏီ', ft_about:'ကုမ္ပဏီအကြောင်း', ft_car:'အလုပ်အကိုင်', ft_con:'ဆက်သွယ်ရန်',
    ft_lang:'ဘာသာစကား', ft_legal:'Privacy · Terms',
  }
};

/* ─── 2. STATIC DATA ──────────────────────────────────── */

const SERVICES = {
  en: [
    { icon:'🚛', sub:'Cars · Trucks · Buses', title:'Used Vehicle Export',           desc:'We source, inspect, and export quality used vehicles from Japan to Myanmar and beyond. Full documentation, shipping, and customs support included.' },
    { icon:'🤝', sub:'Mergers & Acquisitions', title:'M&A Matching Services',        desc:'Confidential deal-making connecting Japanese and Myanmar businesses seeking growth through mergers, acquisitions, and strategic partnerships.' },
    { icon:'👥', sub:'Talent Placement',        title:'Recruitment Services',         desc:'Specialized recruitment for Japanese companies seeking Myanmar talent, and Myanmar professionals seeking Japanese corporate opportunities.' },
    { icon:'🌏', sub:'International Consulting', title:'International Biz Support',   desc:'End-to-end guidance for companies expanding between Japan and Myanmar — market entry, regulatory compliance, and local partnership setup.' },
  ],
  ja: [
    { icon:'🚛', sub:'乗用車・トラック・バス',   title:'中古車・トラック・バス輸出', desc:'日本から良質な中古車を調達・検査・輸出します。必要書類、輸送、通関サポートも含まれます。' },
    { icon:'🤝', sub:'M&Aアドバイザリー',       title:'M&Aマッチング',              desc:'日本とミャンマーの企業を機密性高くマッチングし、合併・買収・戦略的提携を実現します。' },
    { icon:'👥', sub:'人材紹介',                title:'職業紹介',                   desc:'ミャンマー人材を求める日系企業と、日本での機会を求めるミャンマー専門職をつなぎます。' },
    { icon:'🌏', sub:'コンサルティング',         title:'国際ビジネス支援',           desc:'市場参入・法規制対応・現地パートナー構築など、日本とミャンマー間の事業拡大を一気通貫でサポートします。' },
  ],
  my: [
    { icon:'🚛', sub:'ကား · ထရပ် · ဘတ်စ်',     title:'ယာဉ်တင်ပို့ရေး',             desc:'ဂျပန်မှ အရည်အသွေး မြင့်မားသော ယာဉ်များကို စစ်ဆေး၊ တင်ပို့ပေးသည်။ စာရွက်စာတမ်း၊ သယ်ယူပို့ဆောင်ရေး အထောက်အပံ့ပါဝင်သည်။' },
    { icon:'🤝', sub:'M&A အကြံပေးခြင်း',        title:'M&A မိတ်ဖက်ရှာဖွေရေး',      desc:'ဂျပန်နှင့် မြန်မာ စီးပွားရေးလုပ်ငန်းများကို လျှို့ဝှက်သော မိတ်ဖက်ဆောင်ရွက်ရေးဖြင့် ချိတ်ဆက်ပေးသည်။' },
    { icon:'👥', sub:'လူ့အင်အား ဖြည့်ဆည်းရေး', title:'အလုပ်အကိုင် မိတ်ဆက်',      desc:'မြန်မာ ကျွမ်းကျင်ဝန်ထမ်းများ ရှာသော ဂျပန်ကုမ္ပဏီများနှင့် ဂျပန်တွင် အလုပ်လုပ်လိုသော မြန်မာပညာရှင်များကို ချိတ်ဆက်ပေးသည်။' },
    { icon:'🌏', sub:'နိုင်ငံတကာ အကြံပေးခြင်း', title:'နိုင်ငံတကာ စီးပွားရေး အထောက်အကူ', desc:'ဂျပန်နှင့် မြန်မာကြားတွင် ချဲ့ထွင်ရာ၌ ဈေးကွက်ဝင်ရောက်ရေး၊ ဥပဒေလိုက်နာမှု နှင့် ဒေသဆိုင်ရာ မိတ်ဖက်ဆက်ဆံရေး ဖြစ်ပေါ်စေသည်။' },
  ]
};

const VEHICLES = [
  { id:'v1', type:'car',   make:'Toyota',    model:'Land Cruiser 200',   year:2020, km:'45,000 km', color:'Pearl White',    price:'USD 38,000', status:'available', icon:'🚙' },
  { id:'v2', type:'car',   make:'Toyota',    model:'Alphard Hybrid',     year:2021, km:'28,000 km', color:'Silver',         price:'USD 32,500', status:'available', icon:'🚐' },
  { id:'v3', type:'truck', make:'Isuzu',     model:'Elf 150 4WD',        year:2019, km:'62,000 km', color:'White',          price:'USD 22,000', status:'available', icon:'🚛' },
  { id:'v4', type:'truck', make:'Hino',      model:'500 Series Cargo',   year:2018, km:'88,000 km', color:'Blue',           price:'USD 28,500', status:'sold',      icon:'🚚' },
  { id:'v5', type:'bus',   make:'Mitsubishi',model:'Rosa 29-Seater',     year:2020, km:'39,000 km', color:'White / Blue',   price:'USD 45,000', status:'available', icon:'🚌' },
  { id:'v6', type:'car',   make:'Nissan',    model:'Elgrand E52',        year:2022, km:'18,000 km', color:'Midnight Black', price:'USD 29,000', status:'available', icon:'🚖' },
];

const JOBS = {
  en: [
    { title:'Business Development Manager',    loc:'Yangon, Myanmar',   type:'Full-time', dept:'Sales & BD' },
    { title:'Japanese–Burmese Interpreter',    loc:'Remote / Tokyo',    type:'Contract',  dept:'Operations' },
    { title:'Automotive Export Coordinator',   loc:'Osaka, Japan',      type:'Full-time', dept:'Vehicle Export' },
    { title:'M&A Analyst',                     loc:'Tokyo, Japan',      type:'Full-time', dept:'M&A Advisory' },
  ],
  ja: [
    { title:'事業開発マネージャー',               loc:'ヤンゴン、ミャンマー', type:'正社員',  dept:'営業' },
    { title:'日本語・ミャンマー語通訳',           loc:'リモート / 東京',    type:'契約社員', dept:'オペレーション' },
    { title:'中古車輸出コーディネーター',          loc:'大阪、日本',         type:'正社員',  dept:'車両輸出' },
    { title:'M&Aアナリスト',                    loc:'東京、日本',          type:'正社員',  dept:'M&Aアドバイザリー' },
  ],
  my: [
    { title:'စီးပွားရေး ဖွံ့ဖြိုးတိုးတက်ရေး မန်နေဂျာ', loc:'ရန်ကုန်၊ မြန်မာ', type:'အပြည့်အဝ', dept:'Sales & BD' },
    { title:'ဂျပန်-မြန်မာ စကားပြန်',             loc:'Remote / တိုကျို', type:'Contract', dept:'Operations' },
    { title:'ယာဉ်တင်ပို့ရေး ညှိနှိုင်းရေးမှူး',    loc:'အိုဆာကာ၊ ဂျပန်', type:'အပြည့်အဝ', dept:'ယာဉ်တင်ပို့' },
    { title:'M&A ခွဲခြမ်းစိတ်ဖြာသူ',             loc:'တိုကျို၊ ဂျပန်',   type:'အပြည့်အဝ', dept:'M&A' },
  ]
};

const PROCESS = {
  en: ['Initial Consultation', 'Needs Assessment', 'Tailored Proposal', 'Execution & Support'],
  ja: ['初回相談', 'ニーズ分析', 'カスタム提案', '実行とサポート'],
  my: ['အကြိုတိုင်ပင်မှု', 'လိုအပ်ချက် စစ်ဆေးမှု', 'ကမ်းလှမ်းချက်', 'အကောင်အထည်ဖော်ခြင်း'],
};

const MA_FEATURES = {
  en: ['Strict NDA & Confidentiality Agreement', 'Cross-border M&A Expertise', 'Business Valuation & Deal Structuring', 'Post-merger Integration Support'],
  ja: ['厳格なNDA・機密保持契約', '国境を越えたM&A専門知識', '企業評価・案件組成', '統合後サポート'],
  my: ['NDA လျှို့ဝှက်မှု သဘောတူညီချက်', 'M&A ကျွမ်းကျင်မှု', 'တန်ဖိုးသတ်မှတ်ရေး', 'ပေါင်းစည်းပြီးနောက် အထောက်အပံ့'],
};

/* ─── 3. STATE ────────────────────────────────────────── */
let lang = 'en';

/* ─── 4. LANGUAGE SWITCH ──────────────────────────────── */
function setLang(l) {
  lang = l;
  const t = T[l];

  // Apply all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.textContent = t[k];
  });

  // Sync lang-btn active states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    const txt = btn.textContent.trim();
    if ((l === 'en' && (txt === 'EN' || txt === 'English')) ||
        (l === 'ja' && txt === '日本語') ||
        (l === 'my' && (txt === 'မြန်မာ' || txt === 'မြန်'))) {
      btn.classList.add('active');
    }
  });

  // Re-render dynamic blocks
  renderServices();
  renderVehicles(currentFilter);
  renderJobs();
  renderProcess();
  renderMAFeatures();
}

/* ─── 5. RENDER: SERVICES ─────────────────────────────── */
function renderServices() {
  const items = SERVICES[lang] || SERVICES.en;
  const el = document.getElementById('services-grid');
  if (!el) return;
  el.innerHTML = items.map((s, i) => `
    <div class="svc-card fade-up" style="transition-delay:${i * 0.08}s">
      <div style="font-size:2rem;margin-bottom:.9rem">${s.icon}</div>
      <div style="font-size:.58rem;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);margin-bottom:.35rem">${s.sub}</div>
      <h3 style="font-family:'Cormorant Garamond',serif;font-size:1.22rem;font-weight:600;color:var(--navy);margin-bottom:.7rem">${s.title}</h3>
      <p style="color:var(--slate-lt);font-size:.83rem;line-height:1.76">${s.desc}</p>
      <a href="#contact" style="display:inline-flex;align-items:center;gap:6px;color:var(--gold);font-size:.68rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;margin-top:1.2rem;text-decoration:none">
        Learn More <span>→</span>
      </a>
    </div>
  `).join('');
  initFadeUp();
}

/* ─── 6. RENDER: VEHICLES ─────────────────────────────── */
let currentFilter = 'all';

function renderVehicles(filter) {
  currentFilter = filter;
  const list = filter === 'all' ? VEHICLES : VEHICLES.filter(v => v.type === filter);
  const el = document.getElementById('vehicles-grid');
  if (!el) return;

  if (list.length === 0) {
    el.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--slate-lt);font-size:.9rem">No vehicles in this category at the moment. <a href="#contact" style="color:var(--gold)">Contact us</a> for custom requests.</div>`;
    return;
  }

  el.innerHTML = list.map(v => `
    <div class="veh-card fade-up">
      <div style="background:linear-gradient(135deg,var(--navy-dark),var(--navy-light));height:155px;display:flex;align-items:center;justify-content:center;font-size:3.8rem;position:relative">
        ${v.icon}
        <span class="${v.status === 'available' ? 'badge-a' : 'badge-s'}" style="position:absolute;top:12px;right:12px">
          ${v.status === 'available' ? '● AVAILABLE' : '● SOLD'}
        </span>
      </div>
      <div style="padding:1.2rem">
        <div style="font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:4px">${v.year} · ${v.type.toUpperCase()}</div>
        <h4 style="font-family:'Cormorant Garamond',serif;font-size:1.18rem;font-weight:600;color:var(--navy);margin-bottom:.5rem">${v.make} ${v.model}</h4>
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:.7rem">
          <span style="background:#f0ede8;font-size:.7rem;padding:2px 8px;color:var(--slate)">🛣 ${v.km}</span>
          <span style="background:#f0ede8;font-size:.7rem;padding:2px 8px;color:var(--slate)">🎨 ${v.color}</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid #eee;padding-top:.7rem">
          <span style="font-family:'Cormorant Garamond',serif;font-size:1.08rem;font-weight:700;color:var(--navy)">${v.price}</span>
          <a href="#contact" style="font-size:.67rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);text-decoration:none">Inquire →</a>
        </div>
      </div>
    </div>
  `).join('');
  initFadeUp();
}

function filterV(type, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderVehicles(type);
}

/* ─── 7. RENDER: JOBS ─────────────────────────────────── */
function renderJobs() {
  const jobs = JOBS[lang] || JOBS.en;
  const el = document.getElementById('jobs-list');
  if (!el) return;
  el.innerHTML = jobs.map((j, i) => `
    <div class="job-card fade-up" style="transition-delay:${i * 0.07}s">
      <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:10px">
        <div>
          <div style="font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:3px">${j.dept}</div>
          <h4 style="font-family:'Cormorant Garamond',serif;font-size:1.12rem;font-weight:600;color:var(--navy)">${j.title}</h4>
          <p style="font-size:.78rem;color:var(--slate-lt);margin-top:3px">📍 ${j.loc}</p>
        </div>
        <div style="display:flex;align-items:center;gap:10px;flex-shrink:0">
          <span style="background:rgba(201,168,76,.11);color:var(--gold-dark);font-size:.65rem;font-weight:600;letter-spacing:.08em;padding:4px 10px">${j.type}</span>
          <a href="#contact" class="btn-gold" style="font-size:.65rem;padding:8px 18px">Apply</a>
        </div>
      </div>
    </div>
  `).join('');
  initFadeUp();
}

/* ─── 8. RENDER: PROCESS STEPS ───────────────────────── */
function renderProcess() {
  const steps = PROCESS[lang] || PROCESS.en;
  const el = document.getElementById('process-steps');
  if (!el) return;
  el.innerHTML = steps.map((s, i) => `
    <div class="fade-up" style="transition-delay:${i * 0.1}s;text-align:center">
      <div style="width:48px;height:48px;border:1px solid var(--gold);display:flex;align-items:center;justify-content:center;margin:0 auto .9rem;font-family:'Cormorant Garamond',serif;font-size:1.25rem;font-weight:700;color:var(--gold)">0${i+1}</div>
      <p style="font-size:.85rem;font-weight:500;color:var(--navy);line-height:1.4">${s}</p>
    </div>
  `).join('');
  initFadeUp();
}

/* ─── 9. RENDER: M&A FEATURE LIST ────────────────────── */
function renderMAFeatures() {
  const feats = MA_FEATURES[lang] || MA_FEATURES.en;
  const el = document.getElementById('ma-list');
  if (!el) return;
  el.innerHTML = feats.map(f => `
    <li style="display:flex;align-items:center;gap:10px;color:rgba(255,255,255,.72);font-size:.86rem">
      <span style="width:20px;height:20px;background:rgba(201,168,76,.18);border:1px solid var(--gold);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.6rem;color:var(--gold)">✓</span>
      ${f}
    </li>
  `).join('');
}

/* ─── 10. NAVBAR SCROLL ───────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* ─── 11. MOBILE MENU ─────────────────────────────────── */
function toggleMenu() {
  const menu = document.getElementById('mob-menu');
  const open  = document.getElementById('ico-open');
  const close = document.getElementById('ico-close');
  const isOpen = menu.classList.toggle('open');
  open.style.display  = isOpen ? 'none'  : 'block';
  close.style.display = isOpen ? 'block' : 'none';
}

/* ─── 12. FADE-UP INTERSECTION OBSERVER ──────────────── */
function initFadeUp() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up:not(.visible)').forEach(el => obs.observe(el));
}

/* ─── 13. FORM VALIDATION ─────────────────────────────── */
function handleSubmit(e) {
  e.preventDefault();
  const t = T[lang];
  let valid = true;

  const name  = document.getElementById('f-name');
  const email = document.getElementById('f-email');
  const msg   = document.getElementById('f-msg');
  const eN    = document.getElementById('e-name');
  const eE    = document.getElementById('e-email');
  const eM    = document.getElementById('e-msg');

  [eN, eE, eM].forEach(el => el.style.display = 'none');

  if (!name.value.trim())  { eN.textContent = t.f_ename;  eN.style.display = 'block'; valid = false; }
  if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { eE.textContent = t.f_eemail; eE.style.display = 'block'; valid = false; }
  if (!msg.value.trim())   { eM.textContent = t.f_emsg;   eM.style.display = 'block'; valid = false; }

  if (valid) {
    const ok = document.getElementById('f-ok');
    ok.textContent = t.f_ok;
    ok.style.display = 'block';
    document.getElementById('ct-form').reset();
    setTimeout(() => { ok.style.display = 'none'; }, 5000);
  }
}

/* ─── 14. INIT ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderVehicles('all');
  renderJobs();
  renderProcess();
  renderMAFeatures();
  initFadeUp();
});
