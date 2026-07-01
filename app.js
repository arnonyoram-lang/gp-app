/* נוצר אוטומטית מ-app/index.html — אל תערוך ידנית */
var GP_CSS = "\n  :root{\n    --accent:#2f6fed; --accent-bg:#e9f0fe; --accent-bd:#bcd3fb;\n    --ok:#1d9e75; --ok-bg:#e1f5ee; --warn:#ba7517; --warn-bg:#faeeda;\n    --danger:#d8443c; --danger-bg:#fbeae9;\n    --ink:#1c1c1a; --muted:#6b6a64; --line:#e4e2da; --card:#fff; --page:#f7f6f1; --r:10px; --soft:#f3f2ec;\n  }\n  body.dark{--ink:#e8e6e0;--muted:#a3a199;--line:#34332f;--card:#23231f;--page:#1a1a17;--soft:#2a2a25;--accent-bg:#16233a;--accent-bd:#244266;--ok-bg:#10231d;--warn-bg:#2a2110;--danger-bg:#2c1614;}\n  :focus-visible{outline:2px solid var(--accent);outline-offset:2px}\n  @media print{header,.row,#fuOwner,.tile,#mkAud,#kbSearch{display:none!important}.card,.task{break-inside:avoid}body{background:#fff}}\n  *{box-sizing:border-box}\n  html,body{max-width:100%;overflow-x:hidden}\n  body{margin:0;font-family:\"Segoe UI\",Arial,sans-serif;background:var(--page);color:var(--ink);line-height:1.6}\n  .card,.task,.msgbox,.tile,.kpi div{overflow-wrap:anywhere;word-break:break-word}\n  svg,img,pre{max-width:100%}\n  header{background:var(--card);border-bottom:1px solid var(--line);padding:12px 18px;display:flex;align-items:center;gap:10px;position:sticky;top:0;z-index:5}\n  header h1{font-size:18px;margin:0;font-weight:600;flex:1}\n  .wrap{max-width:920px;margin:0 auto;padding:18px}\n  button{font-family:inherit;cursor:pointer;border-radius:8px;border:1px solid var(--line);background:var(--card);padding:9px 14px;font-size:14px;color:var(--ink)}\n  button:hover{border-color:#bbb}\n  .primary{background:var(--accent);color:#fff;border-color:var(--accent)}\n  .ok{background:var(--ok);color:#fff;border-color:var(--ok)}\n  .ghost{background:transparent}\n  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}\n  .tile{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:16px 12px;text-align:center;font-size:15px;font-weight:600}\n  .tile:hover{border-color:var(--accent);color:var(--accent)}\n  .tile small{display:block;font-weight:400;color:var(--muted);font-size:12px;margin-top:4px}\n  .card{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:16px;margin-bottom:14px}\n  textarea{width:100%;min-height:110px;border:1px solid var(--line);border-radius:8px;padding:10px;font-family:inherit;font-size:14px;resize:vertical;background:var(--card);color:var(--ink)}\n  label{display:block;font-size:12px;color:var(--muted);margin:8px 0 3px}\n  input,select{width:100%;border:1px solid var(--line);border-radius:8px;padding:8px;font-family:inherit;font-size:14px;background:var(--card);color:var(--ink)}\n  .form{display:grid;grid-template-columns:1fr 1fr;gap:6px 12px}\n  .form .full{grid-column:1/3}\n  .row{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:12px}\n  pre{background:var(--soft);border:1px solid var(--line);border-radius:8px;padding:10px;overflow:auto;font-size:12px;direction:ltr;text-align:left;white-space:pre-wrap;word-break:break-all}\n  .tag{display:inline-block;font-size:12px;padding:2px 8px;border-radius:20px;border:1px solid}\n  .t-new{background:var(--accent-bg);color:var(--accent);border-color:var(--accent-bd)}\n  .t-exist{background:var(--warn-bg);color:var(--warn);border-color:#e5cfa0}\n  .hide{display:none}\n  .muted{color:var(--muted);font-size:13px}\n  .task{display:flex;gap:10px;align-items:flex-start;padding:10px;border:1px solid var(--line);border-radius:8px;margin-bottom:8px;background:#fff}\n  .task .b{width:6px;border-radius:3px;align-self:stretch}\n  .b-hot{background:var(--danger)} .b-warn{background:var(--warn)} .b-ok{background:var(--ok)} .b-mut{background:#cfcdc5}\n  .pill{font-size:11px;color:var(--muted);background:#f0efe9;border-radius:12px;padding:1px 7px}\n  .sumbar{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:12px}\n  .sumbar div{background:var(--card);border:1px solid var(--line);border-radius:8px;padding:8px 12px;font-size:13px}\n  .kpi{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px;margin-bottom:12px}\n  .kpi div{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:12px;text-align:center}\n  .kpi b{display:block;font-size:22px}\n  .kpi span{font-size:12px;color:var(--muted)}\n  .modal-bg{position:fixed;inset:0;background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;z-index:20}\n  .modal{background:#fff;border-radius:12px;padding:18px;max-width:440px;width:90%}\n  .msgbox{background:var(--soft);border:1px solid var(--line);border-radius:8px;padding:8px;font-size:13px;margin-top:6px}\n  h3{margin:18px 0 8px;font-size:15px}\n  .bottomnav{display:none}\n  @media(max-width:560px){\n    .wrap{padding:10px}\n    .form{grid-template-columns:1fr}\n    .form .full{grid-column:1}\n    .kpi{grid-template-columns:repeat(2,1fr)}\n    header{gap:6px 8px;padding:9px 10px;flex-wrap:wrap}\n    header h1{font-size:14px;flex:1 1 100%;margin-bottom:2px}\n    .grid{grid-template-columns:repeat(2,1fr);gap:8px}\n    .tile{padding:18px 10px;min-height:72px;font-size:14px}\n    button{padding:11px 12px;min-height:44px}\n    input,select,textarea{font-size:16px}\n    .task{flex-wrap:wrap;gap:8px}\n    .task .row{gap:6px}\n    .task button{min-height:auto;padding:9px 14px;flex:0 0 auto;font-size:14px;white-space:nowrap}\n    .sumbar div{flex:1 1 45%;text-align:center}\n    .kpi b{font-size:20px}\n    body{padding-bottom:64px}\n    .bottomnav{display:flex;position:fixed;bottom:0;left:0;right:0;background:var(--card);border-top:1px solid var(--line);z-index:10}\n    .bottomnav button{flex:1;border:none;border-radius:0;background:transparent;padding:7px 2px;min-height:56px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;font-size:11px;color:var(--muted)}\n    .bottomnav button.active{color:var(--accent)}\n    .bottomnav button .ic{font-size:18px;line-height:1}\n  }\n";
var GP_HTML = "\n<header>\n  <h1>אנשים טובים – עובדים זרים והשמה</h1>\n  <span id=\"connDot\" class=\"pill\">לא מחובר</span>\n  <span id=\"busy\" class=\"pill\" style=\"display:none\">⏳ טוען…</span>\n  <button class=\"ghost\" onclick=\"show('home')\">בית</button>\n  <button class=\"ghost\" id=\"darkBtn\" onclick=\"toggleDark()\" aria-label=\"החלף מצב כהה\">🌙</button>\n  <button class=\"ghost\" onclick=\"window.print()\" aria-label=\"הדפסה או PDF\">🖨</button>\n  <button class=\"ghost\" onclick=\"openCfg()\" aria-label=\"הגדרות\">⚙ הגדרות</button>\n</header>\n<div class=\"wrap\">\n\n  <section id=\"home\">\n    <div class=\"row\" style=\"margin-bottom:10px;gap:8px\">\n      <button id=\"modeZ\" class=\"primary\" style=\"flex:1;font-size:15px;font-weight:600\" onclick=\"setMode('z')\">👷‍♂️ עובדים זרים</button>\n      <button id=\"modeM\" class=\"ghost\" style=\"flex:1;font-size:15px;font-weight:600\" onclick=\"setMode('m')\">🧑‍💼 מנהלי עבודה</button>\n    </div>\n\n    <div id=\"homeZ\">\n      <div id=\"homeNow\"></div>\n      <div class=\"grid\">\n        <div class=\"tile\" data-sec=\"intake\" onclick=\"show('intake')\">ליד חדש<small>טקסט חופשי ← רשומה</small></div>\n        <div class=\"tile\" data-sec=\"summary\" onclick=\"show('summary')\">סכם שיחה<small>תמלול ← עדכון</small></div>\n        <div class=\"tile\" data-sec=\"followup\" onclick=\"show('followup')\">פולואפים להיום<small>רשימת עבודה</small></div>\n        <div class=\"tile\" data-sec=\"agreements\" onclick=\"show('agreements')\">הסכמים תקועים<small>תזכורות</small></div>\n        <div class=\"tile\" data-sec=\"corp\" onclick=\"show('corp')\">ממתינים לתאגיד<small>שיבוץ</small></div>\n        <div class=\"tile\" data-sec=\"active\" onclick=\"show('active')\">לקוחות פעילים<small>שביעות רצון</small></div>\n        <div class=\"tile\" data-sec=\"commiss\" onclick=\"show('commiss')\">עמלות וגבייה<small>פערים</small></div>\n        <div class=\"tile\" data-sec=\"manager\" onclick=\"show('manager')\">דוח מנהל<small>בוקר/סוף יום</small></div>\n        <div class=\"tile\" data-sec=\"marketing\" onclick=\"show('marketing')\">שיווק והודעות<small>רשימות + נוסחים</small></div>\n        <div class=\"tile\" data-sec=\"quality\" onclick=\"show('quality')\">בקרת איכות<small>רשומות חסרות</small></div>\n      </div>\n      <div class=\"row\"><button class=\"ghost\" onclick=\"show('wa')\">📩 וואטסאפ נכנס</button><button class=\"ghost\" onclick=\"show('knowledge')\">📚 מרכז ידע ותסריטים</button><button class=\"ghost\" onclick=\"show('features')\">⭐ פיצ'רים פעילים ומדריך</button></div>\n      <p class=\"muted\" style=\"margin-top:8px\">מקור האמת: AppSheet / Google Sheets. המסך הזה הוא שכבת הפעולה החכמה.</p>\n    </div>\n\n    <div id=\"homeM\" class=\"hide\">\n      <div id=\"homeNowM\"></div>\n      <div class=\"grid\">\n        <div class=\"tile\" onclick=\"openMgr('open')\" style=\"grid-column:1/-1;border-color:var(--accent);color:var(--accent)\">פולואפ פתוחים<small>מי צריך טיפול עכשיו</small></div>\n        <div class=\"tile\" onclick=\"openMgr('cand')\">מועמדים<small>מנהלי עבודה</small></div>\n        <div class=\"tile\" onclick=\"openMgr('con')\">קבלנים / מזמינים<small>הצד המשלם</small></div>\n        <div class=\"tile\" onclick=\"openMgr('proj')\">פרויקטים<small>לכל קבלן</small></div>\n        <div class=\"tile\" onclick=\"openMgr('place')\">השמות ועמלות<small>חיבור + כסף</small></div>\n        <div class=\"tile\" onclick=\"show('wa')\" style=\"grid-column:1/-1\">📩 וואטסאפ נכנס<small>לאישור לפני שנכנס למערכת</small></div>\n      </div>\n      <p class=\"muted\" style=\"margin-top:8px\">שכבת פעולה — דוחפת פתוחים ומתעדכנת מול אפליקציית הראיונות ו‑AppSheet.</p>\n    </div>\n  </section>\n\n  <section id=\"wa\" class=\"hide\">\n    <div class=\"card\"><div class=\"row\" style=\"margin:0\"><b style=\"flex:1\">וואטסאפ נכנס</b><button class=\"primary\" onclick=\"waPullNow()\">משוך עכשיו</button><button class=\"ghost\" onclick=\"waResetNow()\">רענן ממתינים (מקור+שם)</button><button class=\"ghost\" onclick=\"waTestNow()\">בדיקת חיבור</button></div>\n      <div class=\"row\" style=\"margin-top:8px\"><button id=\"waTabPend\" class=\"primary\" onclick=\"waSwitch('pend')\">ממתין לאישור</button><button id=\"waTabAppr\" class=\"ghost\" onclick=\"waSwitch('appr')\">מאושר — להעברה</button></div>\n      <p class=\"muted\" style=\"margin:6px 0 0\">משיכה בלבד. <b>אשר</b> = שומר אצלנו (לא נכתב לשום מקום). רק <b>העבר לגוגל שיט</b> כותב בפועל (זרים→לידים · מנהלים→מועמדים).</p></div>\n    <div id=\"waSummary\" class=\"sumbar\"></div>\n    <div id=\"waList\"></div>\n    <div class=\"card\" style=\"margin-top:14px\"><b>📝 בקשות והערות לקלוד</b>\n      <p class=\"muted\" style=\"margin:4px 0 6px\">הדבק כאן שמות קבוצות להשתקה, תיקונים, או כל בקשה. נצבר כאן ואטפל בהכל בבת אחת — פשוט תגיד לי \"תטפל בבקשות\".</p>\n      <textarea id=\"waNoteBox\" placeholder=\"לדוגמה: להשתיק את הקבוצה 'דרושים בנייה מרכז' · הכפתור X לא עובד · להוסיף שדה Y למועמדים\"></textarea>\n      <div class=\"row\"><button class=\"ok\" onclick=\"saveWaNote()\">שמור בקשה</button></div>\n      <div id=\"waNotesList\" style=\"margin-top:8px\"></div>\n    </div>\n  </section>\n\n  <section id=\"intake\" class=\"hide\">\n    <div class=\"card\">\n      <b>ליד חדש — הדבק טקסט חופשי</b>\n      <p class=\"muted\">שיחה / וואטסאפ / SMS / הערה. \"נתח\" ימלא טופס מראש (ניתן לעריכה).</p>\n      <textarea id=\"intakeText\" placeholder=\"דיברתי עם אבי מחברת כהן ביצוע. צריך 6 טפסנים באזור רחובות לעוד שבועיים. אין מגורים. ביקש פרטים והסכם.\"></textarea>\n      <div class=\"row\"><button class=\"primary\" onclick=\"analyzeIntake()\">נתח</button><button class=\"ghost\" onclick=\"startDictation('intakeText')\">🎤 הקראה</button><button class=\"ghost\" onclick=\"loadDemoText()\">טען דוגמה</button><span id=\"dupTag\"></span></div>\n    </div>\n    <div id=\"intakeResult\" class=\"hide\"></div>\n  </section>\n\n  <section id=\"summary\" class=\"hide\">\n    <div class=\"card\">\n      <b>סיכום שיחה</b>\n      <p class=\"muted\">הדבק תמלול או סיכום חופשי. נחזיר תיעוד מובנה + עדכון לטבלה 1.</p>\n      <label>טלפון מנורמל של הלקוח</label><input id=\"sumPhone\" placeholder=\"0501234567\">\n      <label>סיכום / תמלול</label><textarea id=\"sumText\" placeholder=\"מעוניין, ביקש הסכם, חושש מקצב עבודה...\"></textarea>\n      <div class=\"row\"><button class=\"primary\" onclick=\"analyzeSummary()\">נתח</button><button class=\"ghost\" onclick=\"startDictation('sumText')\">🎤 הקראה</button></div>\n    </div>\n    <div id=\"sumResult\" class=\"hide\"></div>\n  </section>\n\n  <section id=\"followup\" class=\"hide\">\n    <div class=\"card\"><div class=\"row\" style=\"margin:0\"><b style=\"flex:1\">פולואפים להיום</b>\n      <input id=\"fuSearch\" placeholder=\"חיפוש לקוח\" oninput=\"renderFollowup()\" style=\"width:130px\">\n      <select id=\"fuOwner\" onchange=\"renderFollowup()\" style=\"width:auto\"><option>הכל</option><option>יורם</option><option>עוזר</option><option>אביבית</option></select>\n      <button class=\"ghost\" onclick=\"loadAll(renderFollowup,true)\">רענן</button></div></div>\n    <div id=\"fuSummary\" class=\"sumbar\"></div><div id=\"fuList\"></div>\n  </section>\n\n  <section id=\"agreements\" class=\"hide\">\n    <div class=\"card\"><div class=\"row\" style=\"margin:0\"><b style=\"flex:1\">הסכמים פתוחים ותקועים</b><button class=\"ghost\" onclick=\"loadAll(renderAgreements,true)\">רענן</button></div></div>\n    <div id=\"agList\"></div>\n  </section>\n\n  <section id=\"corp\" class=\"hide\">\n    <div class=\"card\"><div class=\"row\" style=\"margin:0\"><b style=\"flex:1\">ממתינים לתאגיד / שיבוץ</b><button class=\"ghost\" onclick=\"loadAll(renderCorp,true)\">רענן</button></div></div>\n    <div id=\"corpList\"></div>\n  </section>\n\n  <section id=\"active\" class=\"hide\">\n    <div class=\"card\"><div class=\"row\" style=\"margin:0\"><b style=\"flex:1\">לקוחות פעילים — שביעות רצון</b><button class=\"ghost\" onclick=\"loadAll(renderActive,true)\">רענן</button></div></div>\n    <div id=\"actList\"></div>\n  </section>\n\n  <section id=\"commiss\" class=\"hide\">\n    <div class=\"card\"><div class=\"row\" style=\"margin:0\"><b style=\"flex:1\">עמלות וגבייה — פערים</b><button class=\"ghost\" onclick=\"exportCommiss()\">ייצוא Excel</button><button class=\"ghost\" onclick=\"loadAll(renderCommiss,true)\">רענן</button></div></div>\n    <div id=\"cmSummary\" class=\"sumbar\"></div><div id=\"cmList\"></div>\n  </section>\n\n  <section id=\"manager\" class=\"hide\">\n    <div class=\"card\"><div class=\"row\" style=\"margin:0\"><b style=\"flex:1\">דוח מנהל</b><button class=\"ghost\" onclick=\"loadAll(renderManager,true)\">רענן</button></div></div>\n    <div id=\"mgKpi\" class=\"kpi\"></div><div id=\"mgChart\"></div><div id=\"mgText\"></div>\n  </section>\n\n  <section id=\"marketing\" class=\"hide\">\n    <div class=\"card\"><b>שיווק והודעות</b><p class=\"muted\">בחר קהל → קבל נוסחים מוכנים לכל ערוץ.</p>\n      <select id=\"mkAud\" onchange=\"renderMarketing()\"></select></div>\n    <div id=\"mkOut\"></div>\n  </section>\n\n  <section id=\"quality\" class=\"hide\">\n    <div class=\"card\"><div class=\"row\" style=\"margin:0\"><b style=\"flex:1\">בקרת איכות נתונים</b><button class=\"ghost\" onclick=\"loadAll(renderQuality,true)\">רענן</button></div></div>\n    <div id=\"qSummary\" class=\"sumbar\"></div><div id=\"qList\"></div>\n  </section>\n\n  <section id=\"knowledge\" class=\"hide\">\n    <div class=\"card\"><b>מרכז ידע ותסריטים</b><p class=\"muted\">חפש או לחץ שאלה לתשובה קצרה ופרקטית.</p><input id=\"kbSearch\" placeholder=\"חיפוש לפי מילה (מחיר, מגורים, איטי, תאגיד...)\" oninput=\"initKnowledge(true)\" aria-label=\"חיפוש במרכז הידע\"><div id=\"kbQ\" style=\"margin-top:8px\"></div></div>\n    <div id=\"kbA\"></div>\n  </section>\n\n  <section id=\"features\" class=\"hide\">\n    <div id=\"featList\"></div>\n  </section>\n\n  <section id=\"mgr\" class=\"hide\">\n    <div class=\"card\"><div class=\"row\" style=\"margin:0\">\n      <b style=\"flex:1\">מנהלי עבודה — השמה</b>\n      <button id=\"mgrTabOpen\" class=\"ghost\" onclick=\"mgrSwitch('open')\">פולואפ</button>\n      <button id=\"mgrTabCand\" class=\"primary\" onclick=\"mgrSwitch('cand')\">מועמדים</button>\n      <button id=\"mgrTabCon\" class=\"ghost\" onclick=\"mgrSwitch('con')\">קבלנים</button>\n      <button id=\"mgrTabProj\" class=\"ghost\" onclick=\"mgrSwitch('proj')\">פרויקטים</button>\n      <button id=\"mgrTabPlace\" class=\"ghost\" onclick=\"mgrSwitch('place')\">השמות</button>\n    </div>\n    <div class=\"row\" style=\"margin-top:8px\"><input id=\"mgrSearch\" placeholder=\"חיפוש\" oninput=\"renderMgr()\" style=\"flex:1\"><button class=\"ghost\" onclick=\"mgrReload()\">רענן</button></div></div>\n    <div id=\"mgrSummary\" class=\"sumbar\"></div>\n    <div id=\"mgrList\"></div>\n  </section>\n\n</div>\n\n<nav class=\"bottomnav\" aria-label=\"ניווט מהיר\">\n  <button data-go=\"home\" onclick=\"show('home')\"><span class=\"ic\">🏠</span><span>בית</span></button>\n  <button data-go=\"intake\" onclick=\"show('intake')\"><span class=\"ic\">➕</span><span>ליד</span></button>\n  <button data-go=\"summary\" onclick=\"show('summary')\"><span class=\"ic\">💬</span><span>סיכום</span></button>\n  <button data-go=\"followup\" onclick=\"show('followup')\"><span class=\"ic\">✅</span><span>פולואפ</span></button>\n  <button data-go=\"manager\" onclick=\"show('manager')\"><span class=\"ic\">📊</span><span>דוח</span></button>\n</nav>\n\n";
try{document.title="אנשים טובים – עובדים זרים";}catch(e){}
(function(){var s=document.createElement("style");s.textContent=GP_CSS;document.head.appendChild(s);document.body.innerHTML=GP_HTML;})();

const SHEET_LEADS='1e150yNq_kJ8-H9coSCgUKQVwuNUJM64hdyHtvu-TXg0';
const SHEET_HOURS='1pjHaZFQyNmKNGvPOxXFebhZqhYdxtUmgjrN2FwQg_mU';
const SHEET_MANAGERS='1ugamdY4natRTBBJh-AbAuC8p_AHTtbBO7UPEu42LnqE';
function leadsId(){return cfg().t1Id||SHEET_LEADS}
function hoursId(){return cfg().t2Id||SHEET_HOURS}
const F_STATUS='בעבודה';
const CFG_KEY='gp_cfg';
function cfg(){try{return JSON.parse(localStorage.getItem(CFG_KEY))||{}}catch(e){return{}}}
function saveCfg(o){localStorage.setItem(CFG_KEY,JSON.stringify(o));refreshConn()}
function refreshConn(){document.getElementById('connDot').textContent=embedded()?'מחובר (Apps Script)':(cfg().url?'מחובר לגשר':'מצב דמו')}
function toggleDark(){const on=!document.body.classList.contains('dark');document.body.classList.toggle('dark',on);try{localStorage.setItem('gp_dark',on?'1':'0')}catch(e){}document.getElementById('darkBtn').textContent=on?'☀':'🌙'}
function initDark(){let v=null;try{v=localStorage.getItem('gp_dark')}catch(e){}if(v===null&&window.matchMedia)v=window.matchMedia('(prefers-color-scheme: dark)').matches?'1':'0';if(v==='1'){document.body.classList.add('dark');const b=document.getElementById('darkBtn');if(b)b.textContent='☀'}}
const val=id=>document.getElementById(id).value.trim();
function openCfg(){
  const c=cfg();const bg=document.createElement('div');bg.className='modal-bg';
  bg.innerHTML='<div class="modal"><b>הגדרות גשר (Apps Script)</b>'+
    '<label>Web app URL</label><input id="cfgUrl" value="'+(c.url||'')+'" placeholder="https://script.google.com/.../exec">'+
    '<label>SECRET_TOKEN</label><input id="cfgTok" value="'+(c.token||'')+'">'+
    '<label>שם טאב הלידים</label><input id="cfgT1" value="'+(c.t1||'לידים')+'">'+
    '<label>שם טאב שעות ועמלות</label><input id="cfgT2" value="'+(c.t2||'שעות')+'">'+
    '<label>שם המשתמש (אחראי ברירת מחדל)</label><select id="cfgOwner"><option '+(c.owner=='יורם'?'selected':'')+'>יורם</option><option '+(c.owner=='עוזר'?'selected':'')+'>עוזר</option><option '+(c.owner=='אביבית'?'selected':'')+'>אביבית</option></select>'+
    '<label>תצוגה לפי תפקיד (מסנן מסכים — לא אבטחה)</label><select id="cfgRole"><option value="">הכל (יורם)</option><option value="עוזר" '+(c.role=='עוזר'?'selected':'')+'>עוזר</option><option value="אביבית" '+(c.role=='אביבית'?'selected':'')+'>אביבית</option></select>'+
    '<div class="row"><button class="primary" onclick="doSaveCfg()">שמור</button><button class="ghost" onclick="this.closest(\'.modal-bg\').remove()">סגור</button></div>'+
    '<p class="muted">בלי גשר — הכל עובד במצב דמו ובהעתקת JSON.</p></div>';
  document.body.appendChild(bg);
}
function doSaveCfg(){saveCfg({url:val('cfgUrl'),token:val('cfgTok'),t1:val('cfgT1'),t2:val('cfgT2'),owner:val('cfgOwner'),role:val('cfgRole')});document.querySelector('.modal-bg').remove();applyRole()}
const ROLE_SECTIONS={'עוזר':['intake','summary','followup','agreements','corp','active','knowledge'],'אביבית':['marketing','commiss','quality','manager','knowledge']};
function applyRole(){const role=cfg().role;const allow=ROLE_SECTIONS[role];document.querySelectorAll('.tile[data-sec]').forEach(t=>{t.style.display=(!allow||allow.indexOf(t.getAttribute('data-sec'))>-1)?'':'none'})}

function embedded(){return typeof google!=='undefined'&&google.script&&google.script.run}
function hasBackend(){return embedded()||!!cfg().url}
let _busy=0;
function busy(on){_busy=Math.max(0,_busy+(on?1:-1));const b=document.getElementById('busy');if(b)b.style.display=_busy>0?'inline-block':'none'}
let DEMO_MODE=false, _cacheAt=0;
const WRITE_ACTIONS=['append','update','upsert','waApprove','waPush','waReject','waResetPending','waNote','waNoteDone','waMute'];
function applyDemoBanner(){
  let b=document.getElementById('demoBanner');
  if(DEMO_MODE){
    if(!b){b=document.createElement('div');b.id='demoBanner';b.style.cssText='position:sticky;top:0;z-index:9999;background:#a32d2d;color:#fff;padding:8px 12px;text-align:center;font-weight:600;font-size:14px';document.body.insertBefore(b,document.body.firstChild)}
    b.textContent='⛔ לא מחובר לנתונים האמיתיים — מוצג דמו. פעולות שמירה חסומות.';b.style.display='block';
  }else if(b){b.style.display='none'}
}
async function gw(payload){
  if(DEMO_MODE&&payload&&WRITE_ACTIONS.indexOf(payload.action)>-1){toast('לא מחובר — הפעולה חסומה במצב דמו');return{ok:false,error:'demo_blocked'}}
  busy(true);
  try{
    let res;
    if(embedded()){res=await new Promise((resolve,reject)=>{google.script.run.withSuccessHandler(resolve).withFailureHandler(e=>reject(new Error(e.message||'server_error'))).api(payload)})}
    else{const c=cfg();if(!c.url)throw new Error('no_gateway');const r=await fetch(c.url,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({token:c.token,...payload})});res=await r.json();}
    if(payload&&WRITE_ACTIONS.indexOf(payload.action)>-1)_cacheAt=0; // כתיבה מבטלת cache
    return res;
  }finally{busy(false)}
}

const SECTIONS=['home','intake','summary','followup','agreements','corp','active','commiss','manager','marketing','quality','knowledge','features','mgr','wa'];
function show(id){SECTIONS.forEach(s=>document.getElementById(s).classList.add('hide'));document.getElementById(id).classList.remove('hide');
  const map={followup:renderFollowup,agreements:renderAgreements,corp:renderCorp,active:renderActive,commiss:renderCommiss,manager:renderManager,quality:renderQuality};
  if(map[id])loadAll(map[id]);
  if(id=='marketing')initMarketing();
  if(id=='knowledge')initKnowledge();
  if(id=='features')renderFeatures();
  if(id=='mgr')mgrReload();
  if(id=='wa'){loadWa();loadWaNotes();}
  if(id=='home'){setMode(appMode);if(appMode=='z')renderHome();}
  document.querySelectorAll('.bottomnav button').forEach(b=>b.classList.toggle('active',b.getAttribute('data-go')===id));
  try{window.scrollTo(0,0)}catch(e){}
}

const STATUSES=['חדש','לא ענה','דיברנו - לא צריך כרגע','לחזור בתאריך','מתעניין','חם','חם מאוד','נשלח מידע','נשלח הסכם','תיקונים בהסכם','חתום','הועבר לתאגיד','ממתין לשיבוץ עובדים','נקבע מועד התחלה','התחילו עובדים','פעיל','לקוח לא מרוצה - טיפול','ביקש עוד עובדים','סיים','לא רלוונטי','לא לפנות'];
const CITIES=['רחובות','תל אביב','ירושלים','חיפה','באר שבע','נתניה','אשדוד','ראשון','פתח תקווה','חולון','רמלה','לוד','מודיעין','כפר סבא','הרצליה','אשקלון','עפולה','טבריה','נצרת','כרמיאל'];
function normPhone(s){let d=(s||'').replace(/\D/g,'');if(d.length===9&&d.charAt(0)==='5')d='0'+d;if(d.startsWith('0'))d='972'+d.slice(1);return d}
function todayISO(){return new Date().toISOString().slice(0,10)}
function plusDays(n){const d=new Date();d.setDate(d.getDate()+n);return d.toISOString().slice(0,10)}
function parseDate(v){
  if(v==null||v==='')return null;
  if(Object.prototype.toString.call(v)==='[object Date]')return isNaN(v)?null:v;
  const s=String(v).trim();
  let m=s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);if(m)return new Date(+m[1],+m[2]-1,+m[3]);
  m=s.match(/^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{2,4})/);if(m){let y=+m[3];if(y<100)y+=2000;return new Date(y,+m[2]-1,+m[1])}
  const d=new Date(s);return isNaN(d)?null:d;
}
function daysSince(v){const d=parseDate(v);if(!d)return null;const t=new Date();t.setHours(0,0,0,0);d.setHours(0,0,0,0);return Math.round((t-d)/864e5)}
function num(x){const n=parseFloat(String(x).replace(/[^\d.\-]/g,''));return isNaN(n)?0:n}

function extract(t){
  const o={};
  const ph=(t.match(/0\d[\d\-\s]{7,}\d/)||[])[0];if(ph){o['טלפון']=ph.replace(/[\s\-]/g,'');o['טלפון מנורמל']=normPhone(ph)}
  const comp=(t.match(/(?:מחברת|חברת)\s+([֐-׿"'\s]{2,20})/)||[])[1];if(comp)o['חברה']=comp.trim();
  const nm=(t.match(/(?:עם|שמי|שם)\s+([֐-׿]{2,12})/)||[])[1];if(nm)o['שם הלקוח']=nm.trim();
  o['אזור עבודה']=CITIES.find(c=>t.includes(c))||'';
  const isS=/טפס|ברזל|שלד/.test(t),isF=/טייח|טיח|ריצוף|רצפ|רצף|גמר/.test(t);
  const cnt=(t.match(/(\d{1,3})\s*(?:עובד|טפס|ברזל|טייח|רצפ|רצף|פועל)/)||[])[1]||'';
  o['כמות עובדים שלד']=isS&&!isF?cnt:'';o['כמות עובדים גמרים']=isF&&!isS?cnt:'';
  let nat='';if(/הוד/.test(t))nat='הודים';else if(/סרי\s?לנק/.test(t))nat='סרילנקים';else if(/תאילנד/.test(t))nat='תאילנדים';else if(/אוזבק/.test(t))nat='אוזבקים';else if(/גיאורג/.test(t))nat='גיאורגים';
  o['סוג עובדים']=nat;
  o['בעבודה']=/דחוף|מיד|הסכם|מעוניין|צריך/.test(t)?'מתחמם':'קר';
  o['_ag']=/הסכם/.test(t);
  return o;
}

const F1=['שם הלקוח','חברה','טלפון','טלפון מנורמל','ח.פ.','שם התאגיד','אזור עבודה','כמות עובדים שלד','כמות עובדים גמרים','סוג עובדים','תאור הפרויקט','לכמה זמן','דירוג אשראי','בעבודה','מתי לפנות שוב','הערות'];
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/`/g,'&#96;')}
function field(k,inner){return '<div><label>'+k+'</label>'+inner+'</div>'}
function sel(k,opts,v){return '<select data-k="'+k+'">'+opts.map(o=>'<option '+(o==v?'selected':'')+'>'+o+'</option>').join('')+'</select>'}
function aiExtractClient(t){busy(true);return new Promise(res=>{const done=v=>{busy(false);res(v)};try{google.script.run.withSuccessHandler(done).withFailureHandler(()=>done(null)).aiExtract(t)}catch(e){done(null)}})}
async function analyzeIntake(){
  const t=document.getElementById('intakeText').value;if(!t.trim())return;
  const e=extract(t);
  if(embedded()){const ai=await aiExtractClient(t);if(ai&&ai.ok&&ai.fields){Object.keys(ai.fields).forEach(k=>{const v=ai.fields[k];if(v!==''&&v!=null)e[k]=v});e._ai=true}}
  e['שם התאגיד']=e['שם התאגיד']||'ארץ יסוד';e['אחראי']=cfg().owner||'עוזר';e['מתי לפנות שוב']=e['מתי לפנות שוב']||plusDays(1);e['הערות']=e['הערות']||t.trim();
  const miss=[];if(!e['טלפון']&&!e['טלפון מנורמל'])miss.push('טלפון');if(!e['חברה'])miss.push('חברה');
  let h='<div class="card">'+(miss.length?'<div style="background:var(--warn-bg);color:var(--warn);border:1px solid var(--warn);border-radius:8px;padding:8px;margin-bottom:8px;font-size:13px">⚠ חסר: '+miss.join(', ')+' — מומלץ להשלים לפני שליחה</div>':'')+'<b>נתונים מובנים</b>'+(e._ai?' <span class="tag t-new">שופר ע"י AI</span>':'')+'<div class="form">';
  F1.forEach(k=>{
    if(k=='בעבודה')h+=field(k,sel(k,['קר','מתחמם','בעבודה','ת. לא מעוניין','ת. לא עובדים איתו'],e[k]));
    else if(k=='סוג עובדים')h+=field(k,sel(k,['','הודים','סרילנקים','תאילנדים','אוזבקים','גיאורגים'],e[k]));
    else if(k=='הערות'||k=='תאור הפרויקט')h+='<div class="full"><label>'+k+'</label><input data-k="'+k+'" value="'+esc(e[k]||'')+'"></div>';
    else h+=field(k,'<input data-k="'+k+'" value="'+esc(e[k]||'')+'">');
  });
  h+='</div>';
  const msg=e['_ag']?('היי '+(e['שם הלקוח']||'')+', נעים מאוד. אשלח לך עכשיו פרטים והסכם לעובדי '+(e['סוג עובדים']||'בנייה')+'. נדבר על אזור '+(e['אזור עבודה']||'[אזור]')+' ומועד. תודה!'):('היי '+(e['שם הלקוח']||'')+', תודה על הפנייה. כדי לבדוק התאמה — כמה עובדים, איזה מקצוע, באיזה אזור ומתי?');
  h+='<label>הודעת וואטסאפ מוכנה</label><textarea id="readyMsg">'+esc(msg)+'</textarea>';
  h+='<div class="row"><button class="ok" onclick="sendIntake()">שלח לאפשיט</button><button class="ok" onclick="waIntake()">וואטסאפ</button><button onclick="copyJson(\'intakeJson\')">העתק JSON</button><button class="ghost" onclick="copyEl(\'readyMsg\')">העתק הודעה</button></div><pre id="intakeJson"></pre></div>';
  const r=document.getElementById('intakeResult');r.innerHTML=h;r.classList.remove('hide');buildIntakeJson();
  r.querySelectorAll('[data-k],#readyMsg').forEach(el=>el.addEventListener('input',buildIntakeJson));
  document.getElementById('dupTag').innerHTML='<span class="tag t-new">חדש (לא נבדק מול הגשר)</span>';checkDup(e['טלפון מנורמל']);
}
function collect(){const o={};document.querySelectorAll('#intakeResult [data-k]').forEach(el=>{if(el.value!=='')o[el.dataset.k]=el.value});return o}
function buildIntakeJson(){const rec=collect();const j={action:'upsert',table:cfg().t1||'',sheetId:leadsId(),match_on:['טלפון מנורמל','ח.פ.','חברה'],record:rec,unsafe_fields:rec['טלפון']?[]:['טלפון']};document.getElementById('intakeJson').textContent=JSON.stringify(j,null,2);return j}
async function checkDup(np){if(!hasBackend()||!np)return;try{const res=await gw({action:'get',table:cfg().t1||'',sheetId:leadsId(),filter:{'טלפון מנורמל':np}});if(res.ok&&res.count>0)document.getElementById('dupTag').innerHTML='<span class="tag t-exist">לקוח קיים — יעודכן</span>'}catch(e){}}
async function sendIntake(){const j=buildIntakeJson();if(!hasBackend()){alert('אין חיבור — השתמש ב"העתק JSON".');return}try{const res=await gw(j);if(res.ok){try{localStorage.removeItem('gp_draft')}catch(e){}}alert(res.ok?'נשמר ✓ ('+(res.mode||'')+')':'שגיאה: '+res.error)}catch(e){alert('שגיאת חיבור. נסה "העתק JSON". '+e.message)}}

function analyzeSummary(){
  const t=document.getElementById('sumText').value,np=normPhone(document.getElementById('sumPhone').value);if(!t.trim())return;
  const status=/לא מעוניין|לא צריך/.test(t)?'ת. לא מעוניין':(/הסכם|מעוניין|צריך|דחוף/.test(t)?'מתחמם':'קר');
  let h='<div class="card"><b>סיכום</b><div class="form">'+
    field('סטטוס (בעבודה)',sel('בעבודה',['קר','מתחמם','בעבודה','ת. לא מעוניין','ת. לא עובדים איתו'],status))+
    field('מתי לפנות שוב','<input data-k="מתי לפנות שוב" value="'+plusDays(2)+'">')+
    '</div><label>תיעוד ל"הערות"</label><textarea data-k="הערות">'+esc(todayISO().slice(5)+': '+t.trim())+'</textarea>'+
    '<div class="row"><button class="ok" onclick="sendSummary(\''+np+'\')">עדכן באפשיט</button><button onclick="copyJson(\'sumJson\')">העתק JSON</button></div><pre id="sumJson"></pre></div>';
  const r=document.getElementById('sumResult');r.innerHTML=h;r.classList.remove('hide');buildSumJson(np);
  r.querySelectorAll('[data-k]').forEach(el=>el.addEventListener('input',()=>buildSumJson(np)));
}
function buildSumJson(np){const set={};document.querySelectorAll('#sumResult [data-k]').forEach(el=>{if(el.dataset.k!='risk')set[el.dataset.k]=el.value});set['עדכון אחרון']=todayISO();const j={action:'update',table:cfg().t1||'',sheetId:leadsId(),key:{'טלפון מנורמל':np},set};document.getElementById('sumJson').textContent=JSON.stringify(j,null,2);return j}
async function sendSummary(np){
  if(!np){alert('צריך טלפון מנורמל של הלקוח כדי לעדכן בבטחה (אחרת עלולה להידרס רשומה שגויה).');return}
  if(!hasBackend()){alert('אין חיבור — העתק JSON.');return}
  try{
    let prev='';try{const g=await gw({action:'get',table:cfg().t1||'',sheetId:leadsId(),filter:{'טלפון מנורמל':np}});if(g.ok&&g.rows&&g.rows[0])prev=g.rows[0]['הערות']||''}catch(e){}
    const j=buildSumJson(np);
    if(prev&&j.set['הערות'])j.set['הערות']=prev+' | '+j.set['הערות'];
    const res=await gw(j);alert(res.ok?'עודכן ✓ (ההערה צורפה)':'שגיאה: '+res.error)
  }catch(e){alert('שגיאת חיבור. '+e.message)}
}

let LEADS=[],ROWS=[];
let LOAD_ERR='';
async function loadAll(cb,force){
  if(hasBackend()){
    if(!force&&_cacheAt&&!DEMO_MODE&&(Date.now()-_cacheAt)<30000){try{if(cb)cb()}catch(e){}return;} // cache: לא לשלוף שוב תוך 30ש' (חוסך קריאת 763 שורות בכל מעבר מסך)
    LOAD_ERR='';let okL=false,okH=false;
    try{const a=await gw({action:'get',table:cfg().t1||'',sheetId:leadsId()});if(a&&a.ok){LEADS=a.rows;okL=true}else if(a&&a.error){LOAD_ERR='לידים: '+a.error}}catch(e){LOAD_ERR='לידים: '+((e&&e.message)||e)}
    try{const b=await gw({action:'get',table:cfg().t2||'',sheetId:hoursId()});if(b&&b.ok){ROWS=b.rows;okH=true}}catch(e){}
    if(!okL)LEADS=DEMO_LEADS;
    _cacheAt=okL?Date.now():0;
    DEMO_MODE=!okL;applyDemoBanner();
    if(!okH)ROWS=DEMO_HOURS;
    try{if(cb)cb()}catch(e){LOAD_ERR='תצוגה: '+((e&&e.message)||e)}
    const bz=document.getElementById('busy');if(bz){if(LOAD_ERR){bz.style.display='inline-block';bz.textContent='⚠ '+String(LOAD_ERR).slice(0,90)}else{bz.style.display='none'}}
    return;
  }
  LEADS=DEMO_LEADS;ROWS=DEMO_HOURS;DEMO_MODE=true;applyDemoBanner();if(cb)cb();
}
function leadScore(r){
  let s=0;
  s+=({'בעבודה':35,'מתחמם':25,'קר':8,'ת. לא מעוניין':2,'ת. לא עובדים איתו':2}[r[F_STATUS]]||10);
  const w=(parseInt(r['כמות עובדים שלד'])||0)+(parseInt(r['כמות עובדים גמרים'])||0);
  s+=Math.min(w,10)*2.5;
  const d=daysSince(r['מתי לפנות שוב']);if(d!==null&&d>=0)s+=15;
  if(r['חתם']==='כן')s+=10;
  if(r['דרישה חדשה']=='כן'||r['דרישה חדשה']===true)s+=10;
  return Math.max(0,Math.min(100,Math.round(s)));
}
function buildCsv(rows,cols){
  if(!rows||!rows.length)return '';
  const cs=cols||Array.from(rows.reduce((s,r)=>{Object.keys(r).forEach(k=>s.add(k));return s},new Set()));
  const esc=v=>'"'+String(v==null?'':v).replace(/"/g,'""')+'"';
  return '﻿'+[cs.map(esc).join(',')].concat(rows.map(r=>cs.map(c=>esc(r[c])).join(','))).join('\r\n');
}
function exportCsv(rows,cols,filename){
  const csv=buildCsv(rows,cols);if(!csv){toast('אין נתונים לייצוא');return}
  try{const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});const u=URL.createObjectURL(blob);const a=document.createElement('a');a.href=u;a.download=filename;document.body.appendChild(a);a.click();document.body.removeChild(a);setTimeout(()=>URL.revokeObjectURL(u),1000);toast('יוצא ✓ — ייפתח באקסל')}catch(e){toast('ייצוא נכשל')}
}
function exportLeads(){exportCsv(LEADS,null,'leads.csv')}
function exportCommiss(){exportCsv(ROWS,null,'commissions.csv')}
function pipelineSvg(){
  const stages=[['קר',r=>r[F_STATUS]=='קר'],['מתחמם',r=>r[F_STATUS]=='מתחמם'],['חתום',r=>r['חתם']=='כן'&&!r['תחילת עבודה']],['בעבודה',r=>r['תחילת עבודה']||r[F_STATUS]=='בעבודה'],['דרישה חדשה',r=>r['דרישה חדשה']=='כן']];
  const counts=stages.map(s=>LEADS.filter(s[1]).length);
  const max=Math.max(1,Math.max.apply(null,counts));
  const w=560,bh=26,gap=12,lblW=120,right=w-lblW-6,h=stages.length*(bh+gap)+8;
  let svg='<svg viewBox="0 0 '+w+' '+h+'" width="100%" role="img" aria-label="פייפליין לידים לפי שלב">';
  stages.forEach((s,i)=>{const y=i*(bh+gap)+6;const bw=Math.max((right-8)*counts[i]/max,2);const x=right-bw;
    svg+='<text x="'+(w-4)+'" y="'+(y+bh*0.7)+'" text-anchor="end" font-size="13" style="fill:var(--ink)">'+s[0]+'</text>';
    svg+='<rect x="'+x+'" y="'+y+'" width="'+bw+'" height="'+bh+'" rx="5" style="fill:var(--accent)"/>';
    svg+='<text x="'+(x-6)+'" y="'+(y+bh*0.7)+'" text-anchor="end" font-size="13" style="fill:var(--muted)">'+counts[i]+'</text>';
  });
  return svg+'</svg>';
}
function computeTasks(){
  const today=todayISO();const tasks=[];
  LEADS.forEach(r=>{try{
    const o=r['אחראי']||'עוזר',due=r['מתי לפנות שוב']||'',phone=String(r['טלפון מנורמל']||r['טלפון']||''),st=r[F_STATUS]||'';
    const dd=daysSince(due);
    if(dd!==null&&dd<0)return; // נדחה לתאריך עתידי — יחזור להופיע באותו תאריך (לא נמחק)
    const score=leadScore(r);
    const p=(txt,reason,lvl,close)=>tasks.push({c:String(r['חברה']||r['שם הלקוח']||'—'),txt,reason,lvl,owner:o,phone,score,close:close||{'מתי לפנות שוב':'','עדכון אחרון':today}});
    if(dd!==null&&dd>0)p('פולואפ — תאריך עבר','מתי לפנות שוב: '+due,'hot');else if(dd===0)p('פולואפ להיום',' ','warn');
    if(r['דרישה חדשה']=='כן'||r['דרישה חדשה']===true)p('להציע עוד עובדים','דרישה חדשה','ok',{'דרישה חדשה':'','עדכון אחרון':today});
    if(r['חתם']=='כן'&&!r['תחילת עבודה'])p('לוודא התחלה מול תאגיד','חתום בלי תחילת עבודה','warn',{'מתי לפנות שוב':plusDays(30),'עדכון אחרון':today});
  }catch(e){}});
  const ord={hot:0,warn:1,ok:2};tasks.sort((a,b)=>(ord[a.lvl]-ord[b.lvl])||(b.score-a.score));return tasks;
}
let FU=[];
function renderFollowup(){
  const owner=document.getElementById('fuOwner').value;let tasks=computeTasks();if(owner!='הכל')tasks=tasks.filter(t=>t.owner==owner);
  const q=((document.getElementById('fuSearch')||{}).value||'').trim();if(q)tasks=tasks.filter(t=>t.c.indexOf(q)>-1);
  FU=tasks;
  document.getElementById('fuSummary').innerHTML='<div><b>'+tasks.length+'</b> משימות</div><div>🔴 '+tasks.filter(t=>t.lvl=='hot').length+' דחופות</div><div>🟡 '+tasks.filter(t=>t.lvl=='warn').length+' ממתינות</div><div>🟢 '+tasks.filter(t=>t.lvl=='ok').length+' הזדמנויות</div>';
  document.getElementById('fuList').innerHTML=tasks.map((t,i)=>{
    const wa=t.phone?'<button class="ok" onclick="waSend(\''+String(t.phone).replace(/\D/g,'')+'\')">וואטסאפ</button>':'';
    return '<div class="task"><div class="b b-'+t.lvl+'"></div><div style="flex:1"><b>'+esc(t.c)+'</b> — '+esc(t.txt)+'<br><span class="muted">'+esc(t.reason)+'</span><div class="row" style="margin-top:6px"><button class="ghost" onclick="snoozeFU('+i+',7)">טופל (שבוע)</button><button class="ghost" onclick="closeFU('+i+')">סיים</button><button class="ghost" onclick="openTreatFU('+i+')">טיפול</button>'+callBtn(t.phone)+wa+'</div></div><div style="text-align:center"><span class="pill" title="ניקוד ליד">'+t.score+'</span><br><span class="pill">'+esc(t.owner)+'</span></div></div>';
  }).join('')||'<p class="muted">אין משימות. 👍</p>';
}
// "טופל" / "דחה" = לא מוחק! רק קובע מתי הלקוח יחזור לרשימה (תאריך "מתי לפנות שוב" עתידי).
async function snoozeLead(phone,days){
  const set={'מתי לפנות שוב':plusDays(days),'עדכון אחרון':todayISO()};
  const row=LEADS.find(r=>String(r['טלפון מנורמל']||r['טלפון']||'')===String(phone));if(row)Object.assign(row,set);
  if(hasBackend()&&phone){try{const res=await gw({action:'update',table:cfg().t1||'',sheetId:leadsId(),key:{'טלפון מנורמל':phone},set:set});if(res&&!res.ok){toast('⚠ לא נשמר: '+(res.error||''));return}}catch(e){toast('⚠ שגיאת חיבור — לא נשמר');return}}
  toast(days==1?'נדחה למחר ✓':'טופל — יחזור בעוד '+days+' ימים ✓');
}
async function snoozeFU(i,days){const t=FU[i];if(!t)return;await snoozeLead(t.phone,days);renderFollowup()}
async function markDone(i){return snoozeFU(i,7)}
// "סיים" = סוגר את המשימה לתמיד (מנקה את מה שגרם לה). הלקוח נשאר בגיליון; פשוט לא מציק יותר.
async function closeFU(i){
  const t=FU[i];if(!t)return;
  const set=t.close||{'מתי לפנות שוב':'','עדכון אחרון':todayISO()};
  const row=LEADS.find(r=>String(r['טלפון מנורמל']||r['טלפון']||'')===String(t.phone));if(row)Object.assign(row,set);
  if(hasBackend()&&t.phone){try{const res=await gw({action:'update',table:cfg().t1||'',sheetId:leadsId(),key:{'טלפון מנורמל':t.phone},set:set});if(res&&!res.ok){toast('⚠ לא נסגר: '+(res.error||''));return}}catch(e){toast('⚠ שגיאת חיבור — לא נסגר');return}}
  toast('המשימה נסגרה ✓');renderFollowup();
}
function openTreatFU(i){const t=FU[i];if(!t)return;openTreat(t.phone,t.c)}
function openTreat(phone,name){
  const bg=document.createElement('div');bg.className='modal-bg';
  bg.innerHTML='<div class="modal"><b>טיפול בלקוח: '+esc(name||'')+'</b>'+
    '<label>סוג בעיה</label><select id="trType"><option value=""></option><option>מקצועיות</option><option>קצב עבודה</option><option>משמעת</option><option>שפה</option><option>מגורים</option><option>ציפיות</option><option>התאמה לאתר</option><option>זמינות עובדים</option><option>אחר</option></select>'+
    '<label>חומרה</label><select id="trSev"><option>חמורה</option><option selected>בינונית</option><option>קלה</option></select>'+
    '<label>מה הטיפול / מה נעשה</label><textarea id="trText" placeholder="לדוגמה: דיברתי עם הלקוח, הסברתי תקופת קליטה, אערב את התאגיד"></textarea>'+
    '<label>מתי לחזור לבדוק (ימים)</label><input id="trDays" type="number" value="3">'+
    '<div class="row"><button class="ok" onclick="saveTreat(\''+String(phone).replace(/\D/g,'')+'\')">שמור טיפול</button><button class="ghost" onclick="this.closest(\'.modal-bg\').remove()">בטל</button></div>'+
    '<p class="muted">נשמר אצל הלקוח בשדה "הערות" (בגיליון/AppSheet).</p></div>';
  document.body.appendChild(bg);
}
async function saveTreat(phone){
  const type=val('trType'),sev=document.getElementById('trSev').value,text=document.getElementById('trText').value.trim(),days=parseInt(document.getElementById('trDays').value)||3;
  if(!text){toast('כתוב מה הטיפול');return}
  if(!phone){toast('אין טלפון מזהה ללקוח');return}
  const line=todayISO().slice(5)+' בעיה: '+(type||'-')+' ('+sev+') | טיפול: '+text;
  let prev='';
  if(hasBackend()){try{const g=await gw({action:'get',table:cfg().t1||'',sheetId:leadsId(),filter:{'טלפון מנורמל':phone}});if(g.ok&&g.rows&&g.rows[0])prev=g.rows[0]['הערות']||''}catch(e){}}
  const set={'הערות':(prev?prev+' | ':'')+line,'עדכון אחרון':todayISO(),'מתי לפנות שוב':plusDays(days)};
  const row=LEADS.find(r=>String(r['טלפון מנורמל']||r['טלפון']||'')===String(phone));if(row)Object.assign(row,set);
  if(hasBackend()){try{const res=await gw({action:'update',table:cfg().t1||'',sheetId:leadsId(),key:{'טלפון מנורמל':phone},set});toast(res.ok?'הטיפול נשמר אצל הלקוח ✓':'שגיאה: '+(res.error||''))}catch(e){toast('שגיאת חיבור')}}
  else toast('דמו: הטיפול היה נשמר אצל הלקוח');
  const m=document.querySelector('.modal-bg');if(m)m.remove();
  renderFollowup();
}

function msgCard(title,sub,msg,lvl,phone,act){
  const wa=phone?'<button class="ok" onclick="waSend(\''+String(phone).replace(/\D/g,'')+'\',this.closest(\'.task\').querySelector(\'.msgbox\').textContent)">וואטסאפ</button>':'';
  return '<div class="task"><div class="b b-'+(lvl||'warn')+'"></div><div style="flex:1"><b>'+esc(title)+'</b> — '+esc(sub)+'<div class="msgbox">'+esc(msg)+'</div><div class="row" style="margin-top:6px"><button class="ghost" onclick="copyText(this.closest(\'.task\').querySelector(\'.msgbox\').textContent)">העתק</button>'+(act||'')+callBtn(phone)+wa+'</div></div></div>';
}
const ACT={};
function actBtn(view,i,label){return '<button class="ghost" onclick="doAct(\''+view+'\','+i+')">'+(label||'סמן טופל')+'</button>'}
async function doAct(view,i){const t=ACT[view][i];if(!t)return;const row=LEADS.find(r=>(r['טלפון מנורמל']||r['טלפון'])===t.phone);if(row)Object.assign(row,t.set);if(hasBackend()&&t.phone){try{const res=await gw({action:'update',table:cfg().t1||'',sheetId:leadsId(),key:{'טלפון מנורמל':t.phone},set:t.set});if(res&&!res.ok){toast('⚠ לא עודכן: '+(res.error||''));return}}catch(e){toast('⚠ שגיאת חיבור — לא עודכן');return}}toast('עודכן ✓');({agreements:renderAgreements,corp:renderCorp,active:renderActive}[view])()}
function waSend(phone,text){const p=String(phone||'').replace(/\D/g,'');if(!p){toast('אין טלפון לרשומה');return}try{window.open('https://wa.me/'+p+(text?'?text='+encodeURIComponent(text):''),'_blank')}catch(e){copyText(text||'')}}
function waIntake(){const r=collect();waSend(r['טלפון מנורמל']||r['טלפון'],document.getElementById('readyMsg').value)}
function tel(phone){const p=String(phone||'').replace(/\D/g,'');if(!p){toast('אין טלפון');return}try{window.location.href='tel:+'+p}catch(e){}}
function callBtn(phone){const p=String(phone||'').replace(/\D/g,'');return p?'<button class="ghost" onclick="tel(\''+p+'\')">חייג</button>':''}
function micSupported(){return typeof window!=='undefined'&&('webkitSpeechRecognition' in window||'SpeechRecognition' in window)}
function micBtn(targetId){return micSupported()?'<button type="button" class="ghost" onclick="startDictation(\''+targetId+'\')" aria-label="הקראה קולית">🎤 הקראה</button>':''}
function startDictation(targetId){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){toast('הקראה לא נתמכת בדפדפן הזה');return}
  const el=document.getElementById(targetId);if(!el)return;const rec=new SR();rec.lang='he-IL';rec.interimResults=false;rec.continuous=false;
  toast('🎤 דבר עכשיו…');
  rec.onresult=e=>{const txt=e.results[0][0].transcript;el.value=(el.value?el.value+' ':'')+txt;try{el.dispatchEvent(new Event('input'))}catch(_){}};
  rec.onerror=()=>toast('לא נקלט, נסה שוב');
  try{rec.start()}catch(e){}
}
let appMode='z';
function setMode(m){appMode=m;
  const z=document.getElementById('modeZ'),mm=document.getElementById('modeM'),hz=document.getElementById('homeZ'),hm=document.getElementById('homeM');
  if(z)z.className=(m=='z'?'primary':'ghost');if(mm)mm.className=(m=='m'?'primary':'ghost');
  if(hz)hz.classList.toggle('hide',m!='z');if(hm)hm.classList.toggle('hide',m!='m');
  if(m=='m')renderHomeM();
}
function openMgr(v){mgrView=v;show('mgr');}
function renderHomeM(){
  const el=document.getElementById('homeNowM');if(!el)return;
  el.innerHTML='<div class="card" style="border-color:var(--accent)"><b>מנהלי עבודה — שכבת פעולה</b>'+
    '<div class="muted" style="margin-top:4px">דחיפת פתוחים · קליטה · עדכון לראיונות ו‑AppSheet</div>'+
    '<div class="row"><button class="primary" onclick="openMgr(\'open\')">פולואפ פתוחים</button></div></div>';
}
function renderHome(){loadAll(function(){
  const el=document.getElementById('homeNow');if(!el)return;
  const tasks=computeTasks();const top=tasks[0];
  el.innerHTML='<div class="card" style="border-color:var(--accent)"><b>מה עכשיו?</b>'+
    (top?'<div style="margin-top:4px">🔸 <b>'+esc(top.c)+'</b> — '+esc(top.txt)+'</div>':'<div style="margin-top:4px">אין משימות דחופות 👍</div>')+
    '<div class="row"><button class="primary" onclick="show(\'followup\')">כל הפולואפים ('+tasks.length+')</button></div></div>';
})}
function renderAgreements(){
  const open=LEADS.filter(r=>r['חתם']!='כן'&&(r[F_STATUS]=='מתחמם'||r[F_STATUS]=='בעבודה')&&!r['תחילת עבודה']);
  ACT.agreements=[];
  document.getElementById('agList').innerHTML=open.map(r=>{
    const d=daysSince(r['עדכון אחרון']);const stuck=d!==null&&d>3;const name=r['חברה']||r['שם הלקוח']||'—';const ph=r['טלפון מנורמל']||r['טלפון']||'';
    let msg;if(r['חתם']=='כן')msg='היי '+(r['שם הלקוח']||'')+', ההסכם חתום — אנחנו מקדמים מול התאגיד שיבוץ ומועד התחלה. אעדכן בקרוב.';
    else if(stuck)msg='היי '+(r['שם הלקוח']||'')+', כדי לשריין עובדים למועד שדיברנו אני צריך את ההסכם החתום. אפשר היום?';
    else msg='היי '+(r['שם הלקוח']||'')+', רק לוודא שההסכם הגיע. רוצה שנעבור עליו יחד בטלפון?';
    const i=ACT.agreements.length;ACT.agreements.push({phone:ph,set:{'עדכון אחרון':todayISO()}});
    return msgCard(name,(r[F_STATUS]||'')+(stuck?' · תקוע '+d+' ימים':(d!==null?' · '+d+' ימים':'')),msg,stuck?'hot':'warn',ph,actBtn('agreements',i,'סמן נשלחה תזכורת'));
  }).join('')||'<p class="muted">אין הסכמים פתוחים.</p>';
}
function renderCorp(){
  const waiting=LEADS.filter(r=>r['חתם']=='כן'&&!r['תחילת עבודה']);
  ACT.corp=[];
  document.getElementById('corpList').innerHTML=waiting.map(r=>{
    const name=r['חברה']||r['שם הלקוח']||'—';const credit=r['דירוג אשראי'];const ph=r['טלפון מנורמל']||r['טלפון']||'';
    const sub='חתום, ממתין לתחילת עבודה'+(!credit?' · ⚠ אין דירוג אשראי':'');
    const msg='היי, לקוח '+name+' חתום ומוכן. אזור '+(r['אזור עבודה']||'[אזור]')+', '+(r['סוג עובדים']||'')+'. אפשר לאשר זמינות ומועד התחלה?';
    const i=ACT.corp.length;ACT.corp.push({phone:ph,set:{'עדכון אחרון':todayISO()}});
    return msgCard(name,sub,msg,!credit?'hot':'warn',ph,actBtn('corp',i,'סמן עודכן'));
  }).join('')||'<p class="muted">אין לקוחות ממתינים לתאגיד.</p>';
}
function nextCheck(start){const ds=daysSince(start);if(ds===null)return null;const ms=[3,7,21,30];for(const m of ms)if(ds<m)return{in:m-ds,at:m};const nm=Math.ceil((ds+1)/30)*30;return{in:nm-ds,at:nm}}
function renderActive(){
  const act=LEADS.filter(r=>r['תחילת עבודה']);
  ACT.active=[];
  document.getElementById('actList').innerHTML=act.map(r=>{
    const name=r['חברה']||r['שם הלקוח']||'—';const nc=nextCheck(r['תחילת עבודה']);const ds=daysSince(r['תחילת עבודה']);const ph=r['טלפון מנורמל']||r['טלפון']||'';
    const risk=r['דרישה חדשה']=='כן'?'ok':'warn';
    const due=nc&&nc.in<=0;
    let msg=r['דרישה חדשה']?'היי '+(r['שם הלקוח']||'')+', שמח שאתה מרוצה. רוצה שנוסיף עוד עובדים בשבועות הקרובים?':'היי '+(r['שם הלקוח']||'')+', איך העובדים מסתדרים? משהו שצריך לשפר? (בתקופת הקליטה זה טבעי שלוקח זמן להיכנס לקצב.)';
    const sub='פעיל '+ds+' ימים'+(nc?' · בדיקה הבאה: יום '+nc.at+(due?' (להיום!)':' (בעוד '+nc.in+' ימים)'):'')+(r['דרישה חדשה']?' · רוצה עוד עובדים':'');
    const set={'עדכון אחרון':todayISO()};if(r['דרישה חדשה'])set['דרישה חדשה']='';
    const i=ACT.active.length;ACT.active.push({phone:ph,set:set});
    return msgCard(name,sub,msg,due?'hot':risk,ph,actBtn('active',i,'סמן נבדק'));
  }).join('')||'<p class="muted">אין לקוחות פעילים.</p>';
}

function renderCommiss(){
  let exp=0,act=0,flags=[];
  ROWS.forEach(r=>{const e=num(r['הערכת תשלום לקבל']),a=num(r['תשלום שהתקבל בפועל']),eh=num(r['הערכת מספר שעות חודשי']),ah=num(r['מספר השעות בפועל']);exp+=e;act+=a;const name=r['שם לקוח']||'—';
    if(!r['מספר השעות בפועל'])flags.push({name,txt:'אין דיווח שעות',lvl:'hot'});else if(ah<eh*0.8)flags.push({name,txt:'שעות נמוכות: '+ah+' מול '+eh,lvl:'warn'});
    if(!r['תשלום שהתקבל בפועל']&&e>0)flags.push({name,txt:'תשלום לא התקבל',lvl:'warn'});else if(a>0&&a<e*0.95)flags.push({name,txt:'פער תשלום: '+(e-a).toFixed(0)+'₪',lvl:'warn'});
  });
  document.getElementById('cmSummary').innerHTML='<div>צפוי: <b>'+exp.toFixed(0)+'₪</b></div><div>בפועל: <b>'+act.toFixed(0)+'₪</b></div><div style="color:var(--danger)">פער: <b>'+(exp-act).toFixed(0)+'₪</b></div>';
  document.getElementById('cmList').innerHTML=flags.map(f=>'<div class="task"><div class="b b-'+f.lvl+'"></div><div style="flex:1"><b>'+esc(f.name)+'</b> — '+esc(f.txt)+'</div></div>').join('')||'<p class="muted">אין פערים. 👌</p>';
}

function renderManager(){
  const tasks=computeTasks();const today=todayISO();
  const hot=LEADS.filter(r=>r[F_STATUS]=='מתחמם').length;
  const stuckAg=LEADS.filter(r=>r['חתם']=='כן'&&!r['תחילת עבודה']).length;
  const waitCorp=stuckAg;
  const active=LEADS.filter(r=>r['תחילת עבודה']||r[F_STATUS]=='בעבודה').length;
  const risk=LEADS.filter(r=>r['דרישה חדשה']=='כן').length;
  let floor=0;ROWS.forEach(r=>{const e=num(r['הערכת תשלום לקבל']),a=num(r['תשלום שהתקבל בפועל']);if(!r['מספר השעות בפועל'])floor+=e;else if(a<e)floor+=e-a});
  const openColl=ROWS.filter(r=>!r['תשלום שהתקבל בפועל']&&num(r['הערכת תשלום לקבל'])>0).length;
  document.getElementById('mgKpi').innerHTML=
    kpi(tasks.length,'משימות היום')+kpi(hot,'מתחממים')+kpi(stuckAg,'חתום בלי התחלה')+kpi(active,'בעבודה')+kpi(risk,'דרישה חדשה')+kpi(openColl,'גבייה פתוחה')+kpi(floor.toFixed(0)+'₪','כסף על הרצפה');
  const topLeads=LEADS.slice().sort((a,b)=>leadScore(b)-leadScore(a)).slice(0,5);
  document.getElementById('mgChart').innerHTML='<div class="card"><h3 style="margin-top:0">פייפליין לידים</h3>'+pipelineSvg()+
    '<h3>5 לידים מובילים (ניקוד)</h3>'+topLeads.map(r=>'<div class="row" style="margin:4px 0;justify-content:space-between"><span>'+esc(r['חברה']||r['שם הלקוח']||'—')+'</span><span class="pill">'+leadScore(r)+'</span></div>').join('')+
    '<div class="row"><button class="ghost" onclick="exportLeads()">ייצוא לידים (Excel)</button><button class="ghost" onclick="exportCommiss()">ייצוא עמלות (Excel)</button></div></div>';
  const top=tasks[0];
  const followTomorrow=LEADS.filter(r=>daysSince(r['מתי לפנות שוב'])===-1).length;
  document.getElementById('mgText').innerHTML='<div class="card"><h3>הפעולה הכי חשובה היום</h3>'+(top?('<b>'+top.c+'</b> — '+top.txt+' <span class="muted">('+top.reason+')</span>'):'אין')+
    '<h3>הסיכון הכי גדול</h3>'+(stuckAg>0?stuckAg+' לקוחות חתומים שעדיין לא התחילו — לוודא מול התאגיד.':'אין סיכון בולט.')+
    '<h3>איפה הכסף על הרצפה</h3>'+floor.toFixed(0)+'₪ — פערי עמלות + שורות בלי דיווח שעות.'+
    '<h3>סוף יום</h3>משימות פתוחות שנותרו: <b>'+tasks.length+'</b> · פולואפים למחר: <b>'+followTomorrow+'</b> · לידים חמים פתוחים: <b>'+hot+'</b>.</div>';
}
function kpi(v,l){return '<div><b>'+v+'</b><span>'+l+'</span></div>'}

const AUDIENCES=[
  {k:'קבלני שלד',f:r=>num(r['כמות עובדים שלד'])>0},
  {k:'קבלני גמרים',f:r=>num(r['כמות עובדים גמרים'])>0},
  {k:'בעבודה (פעילים)',f:r=>r['תחילת עבודה']||r[F_STATUS]=='בעבודה'},
  {k:'מתחממים',f:r=>r[F_STATUS]=='מתחמם'},
  {k:'קרים',f:r=>r[F_STATUS]=='קר'},
  {k:'דרישה חדשה',f:r=>r['דרישה חדשה']=='כן'},
  {k:'לא מעוניינים (לעבר)',f:r=>String(r[F_STATUS]).indexOf('לא מעוניין')>-1},
];
function initMarketing(){const s=document.getElementById('mkAud');if(s.options.length)return;AUDIENCES.forEach(a=>s.add(new Option(a.k,a.k)));renderMarketing()}
function renderMarketing(){
  const k=document.getElementById('mkAud').value;const a=AUDIENCES.find(x=>x.k==k);const n=LEADS.filter(r=>!(r['סטטוס']=='לא לפנות')&&a.f(r)).length;
  const base='שלום, יש אפשרות לקליטת עובדים זרים לבנייה בשלד וגמרים, בהתאם לזמינות ולתנאי התאגיד. אם צריך טפסנים, ברזלנים, טייחים או רצפים — כתוב לי כמה עובדים, באיזה אזור ומתי, ואבדוק התאמה.';
  const wa='היי, '+(k.includes('פעיל')?'בודק איתך — צריך עוד עובדים בתקופה הקרובה?':'מזכיר שיש זמינות עובדי '+(k.includes('גמר')?'גמרים (טיח/ריצוף)':k.includes('שלד')?'שלד (טפסנות/ברזלנות)':'שלד וגמרים')+'. רוצה שאבדוק התאמה לפרויקט שלך?');
  const out=[['WhatsApp',wa],['SMS','עובדים זרים לבנייה — זמינות עכשיו. כמה, איזה מקצוע, איזה אזור? השב ואחזור אליך.'],['מייל',base],['סטטוס WhatsApp','✅ עובדי שלד וגמרים זמינים. שלחו צורך — נבדוק התאמה.'],['פוסט פייסבוק',base+' (בכפוף לתנאי התאגיד ותקופת קליטה).'],['רעיון סרטון','30 שניות: "איך נראית תקופת קליטה של עובד זר טוב — ולמה סבלנות משתלמת."']];
  document.getElementById('mkOut').innerHTML='<div class="card"><b>קהל: '+k+'</b> <span class="pill">'+n+' רשומות (לא כולל "לא לפנות")</span><div class="row"><button class="ghost" onclick="logCampaign()">תעד שליחה</button></div></div>'+
    out.map(o=>'<div class="task"><div class="b b-mut"></div><div style="flex:1"><b>'+o[0]+'</b><div class="msgbox">'+o[1]+'</div><div class="row" style="margin-top:6px"><button class="ghost" onclick="copyText(this.parentElement.previousElementSibling.textContent)">העתק</button></div></div></div>').join('');
}

async function logCampaign(){
  const k=document.getElementById('mkAud').value;const a=AUDIENCES.find(x=>x.k==k);
  const n=LEADS.filter(r=>!(r['סטטוס']=='לא לפנות')&&a.f(r)).length;
  const rec={'תאריך':todayISO(),'קהל':k,'כמות':n,'אחראי':cfg().owner||'אביבית'};
  if(hasBackend()){try{const res=await gw({action:'append',table:'קמפיינים',record:rec});toast(res.ok?'תועד ✓':'שגיאה: '+(res.error||'')+' (צריך טאב "קמפיינים")')}catch(e){toast('שגיאת חיבור')}}
  else toast('דמו: היה נרשם קמפיין ל"'+k+'" ('+n+' רשומות)');
}
function renderQuality(){
  const issues=[];const seen={};
  LEADS.forEach(r=>{const name=r['חברה']||r['שם הלקוח']||'(ללא שם)';const o=r['אחראי']||'עוזר';
    const add=(txt,sev)=>issues.push({name,txt,sev,owner:o});
    if(!r['טלפון מנורמל']&&!r['טלפון'])add('אין טלפון','hot');
    if(!r['חברה'])add('אין שם חברה','warn');
    if(!r[F_STATUS])add('אין סטטוס','warn');
    if(r[F_STATUS]=='מתחמם'&&!r['מתי לפנות שוב'])add('מתחמם בלי תאריך פולואפ','hot');
    if(r['מתי לפנות שוב']&&r['מתי לפנות שוב']<todayISO())add('תאריך פולואפ עבר','hot');
    if(r['חתם']=='כן'&&!r['שם התאגיד'])add('חתום בלי תאגיד','hot');
    if(r['חתם']=='כן'&&!r['תחילת עבודה']&&daysSince(r['עדכון אחרון'])>7)add('חתום בלי תחילת עבודה (>7 ימים)','hot');
    const key=r['טלפון מנורמל'];if(key){if(seen[key])add('כפילות לפי טלפון מנורמל','hot');seen[key]=1}
  });
  const ord={hot:0,warn:1};issues.sort((a,b)=>ord[a.sev]-ord[b.sev]);
  document.getElementById('qSummary').innerHTML='<div><b>'+issues.length+'</b> בעיות</div><div>🔴 '+issues.filter(i=>i.sev=='hot').length+' חמורות</div><div>🟡 '+issues.filter(i=>i.sev=='warn').length+' בינוניות</div>';
  document.getElementById('qList').innerHTML=issues.map(i=>'<div class="task"><div class="b b-'+(i.sev=='hot'?'hot':'warn')+'"></div><div style="flex:1"><b>'+esc(i.name)+'</b> — '+esc(i.txt)+'</div><span class="pill">'+esc(i.owner)+'</span></div>').join('')||'<p class="muted">אין בעיות. 👌</p>';
}

const KB=[
  ['מה לענות לקבלן שאומר שהעובדים איטיים?','כל העובדים נבחנו בארצם (טפסנות/ברזלנות/טיח/ריצוף). בישראל שיטות עבודה שונות ולכן יש תקופת קליטה. הם מדויקים אך איטיים יותר בהתחלה ומשתפרים עם הדרכה. נעזור לך להיות סבלני, ובמקביל נבדוק בעיה אמיתית ונערב את התאגיד אם צריך.'],
  ['מה לשלוח ללקוח שקיבל הסכם ולא חתם?','תזכורת קצרה: "היי, רק לוודא שההסכם הגיע — רוצה שנעבור עליו יחד בטלפון?" אם אין תשובה עד סוף היום — להתקשר.'],
  ['מה לשאול לקוח שרוצה 10 עובדים?','אזור, מקצועות (שלד/גמרים), מועד התחלה, מגורים, פרטי פרויקט, שם חברה + ח.פ. ולבדוק זמינות מול התאגיד לפני התחייבות.'],
  ['מה לבדוק לפני העברה לתאגיד?','הסכם חתום, דירוג אשראי תקין, וכל פרטי הפרויקט (חברה, ח.פ., איש קשר, אזור, כמות, מקצוע, מגורים).'],
  ['מה להגיד למי שלא רוצה להתחייב ל-3 חודשים?','להסביר שזה מינימום התאגיד (קליטה והדרכה לוקחות זמן וכך זה כדאי לשני הצדדים), ולבדוק גמישות מול התאגיד.'],
  ['אין עובדים פנויים כרגע — מה עושים?','לרשום כ"רצה עובדים ואין זמינות", לקבוע תאריך חזרה, ולהציע רשימת המתנה — לא לאבד את הליד.'],
  ['מה המחירים ותנאי המגורים?','לפי התנאים הנוכחיים (לאמת): ~77₪+מע"מ כשהתאגיד דואג למגורים, ~71₪+מע"מ כשהקבלן דואג. מגורים מתאימים: 6 מ"ר לאדם, על כל 8 עובדים שירותים+מטבחון+מקלחת, האוכל על העובדים.'],
  ['מה תנאי המינימום?','כלל אצבע: 2 עובדים, 3 חודשים, 236 שעות חודשיות. פחות מ-236 — משלמים לפי 236; יותר — לפי בפועל. חגים/היעדרות ביוזמת העובד יורדים מהמכסה.'],
  ['מאילו מדינות העובדים?','הודו, סרי לנקה, תאילנד, אוזבקיסטן. כולם נבחנו בארצם ע"י גורמים מקצועיים / התאחדות הקבלנים.'],
  ['איך נראה התהליך מההתחלה?','1) שיחה ובירור צורך · 2) הסבר תנאים ומחיר · 3) שליחת הסכם · 4) חתימה (ותיקונים מול התאגיד אם צריך) · 5) העברה לתאגיד + בדיקת אשראי · 6) התאגיד מתאם מועד ושולח עובדים · 7) מעקב ושביעות רצון.'],
  ['מה כולל המחיר ומה לא?','המחיר לשעה + מע"מ הוא מול התאגיד. האוכל על העובדים. מגורים — לפי המסלול (התאגיד או הקבלן). לוודא מה כלול מול התאגיד לכל מקרה.'],
  ['מתי בודקים דירוג אשראי?','לפני העברה לתאגיד. דירוג נמוך או חסר → לסמן ולערב את יורם לפני שמתחייבים.'],
  ['לקוח רוצה להחזיר עובדים — מה עושים?','לפני החלטה סופית: לברר מה בדיוק הבעיה (קצב/מקצועיות/משמעת/שפה/התאמה), לראות אם אפשר לפתור או להחליף, ולערב את התאגיד. להעלות ליורם.'],
  ['מה ההבדל בין שלד לגמרים?','שלד: טפסנות, ברזלנות. גמרים: טיח, ריצוף. הכמות נרשמת בנפרד (כמות עובדים שלד / גמרים).'],
  ['נהלי עבודה — עוזר','טלפונים יזומים ומענה לנכנסים · מתן מידע ראשוני וקבלת פרטים · פולואפ למתעניינים · שליחת טפסים ווידוא חתימה · קבלת פרטי פרויקט · עדכון AppSheet · בדיקת דירוג אשראי · בדיקות שביעות רצון · בדיקה אם צריך עוד עובדים. יעד: 6 לקוחות חדשים בחודש.'],
  ['נהלי עבודה — אביבית','קידום ושיווק יומי (~350 הודעות/יום) · הוצאת חשבוניות · סיוע בגבייה ומעקב תשלומים · סטטוסים/פוסטים לפי תבניות. להחריג תמיד "לא לפנות".'],
  ['נהלי עבודה — יורם','שיחות מתקדמות וסגירות · התאמת עובדים מול התאגיד · קישור תאגיד↔לקוח · בדיקת כמות עובדים בפועל · גבייה לפי צורך · טיפול בבעיות איכות · לקוחות חמים מאוד וקשרים אסטרטגיים · תוכן (סרטונים/פודקסטים).'],
  ['מה לבדוק לפני "שלח לאפשיט"?','שם חברה, טלפון (מנורמל), אזור, סוג עובדים וכמות, סטטוס ואחראי. חוסר טלפון/חברה מסומן באזהרה — להשלים אם אפשר.'],
];
// ===== מנהלי עבודה (השמה) — שכבת פעולה: מועמדים + קבלנים/מזמינים =====
let MGRS=[], CON=[], mgrView='cand';
const CONTRACTORS_GID=372615478;
const DEMO_CON=[
  {'מזהה קבלן':'1','שם חברה':'בנייני הצפון בע"מ','איש קשר':'יוסי','טלפון':'0501112222','עיר':'חיפה','אזור':'צפון','סוג קבלן':'שלד','סוגי פרויקטים':'מגורים','סטטוס קבלן':'בטיפול','חתם על הסכם':'','סגר':''},
  {'מזהה קבלן':'2','שם חברה':'דרום בנייה','איש קשר':'משה','טלפון':'0523334444','עיר':'באר שבע','אזור':'דרום','סוג קבלן':'גמרים','סוגי פרויקטים':'ציבורי','סטטוס קבלן':'הוצע מועמד','חתם על הסכם':'כן','סגר':''},
  {'מזהה קבלן':'3','שם חברה':'מרכז פיתוח','איש קשר':'דנה','טלפון':'0545556666','עיר':'תל אביב','אזור':'מרכז','סוג קבלן':'תשתיות','סטטוס קבלן':'נסגר','סגר':'כן'}
];
function mgrSwitch(v){mgrView=v;const s=document.getElementById('mgrSearch');if(s)s.value='';mgrReload()}
function mgrReload(){
  [['mgrTabOpen','open'],['mgrTabCand','cand'],['mgrTabCon','con'],['mgrTabProj','proj'],['mgrTabPlace','place']].forEach(function(x){const b=document.getElementById(x[0]);if(b)b.className=(mgrView==x[1]?'primary':'ghost')});
  if(mgrView=='open')loadOpen();else if(mgrView=='con')loadCon();else if(mgrView=='proj')loadProj();else if(mgrView=='place')loadPlace();else loadMgr();
}
async function loadCon(){
  if(hasBackend()){try{const a=await gw({action:'get',sheetId:SHEET_MANAGERS,gid:CONTRACTORS_GID});if(a&&a.ok){CON=trimKeys(a.rows);renderMgr();_busyNote('קבלנים: '+CON.length+' נטענו');return}else if(a&&a.error){CON=DEMO_CON;renderMgr();_busyNote('⚠ קבלנים: '+a.error);return}}catch(e){CON=DEMO_CON;renderMgr();_busyNote('⚠ קבלנים: שגיאת חיבור');return}}
  CON=DEMO_CON;renderMgr();
}
function renderMgr(){ if(mgrView=='open')renderOpen(); else if(mgrView=='con')renderContractors(); else if(mgrView=='proj')renderProjects(); else if(mgrView=='place')renderPlacements(); else renderCandidates(); }
async function loadOpen(){
  if(hasBackend()){
    try{const a=await gw({action:'get',table:'',sheetId:SHEET_MANAGERS});if(a&&a.ok)MGRS=trimKeys(a.rows);}catch(e){}
    try{const b=await gw({action:'get',sheetId:SHEET_MANAGERS,gid:CONTRACTORS_GID});if(b&&b.ok)CON=trimKeys(b.rows);}catch(e){}
  }
  if(!MGRS.length)MGRS=DEMO_MGRS;
  if(!CON.length)CON=DEMO_CON;
  renderMgr();
}
function renderOpen(){
  const q=((document.getElementById('mgrSearch')||{}).value||'').trim();
  const items=[];
  MGRS.forEach(r=>{if(r['שם מועמד']&&mgrNoInt(r))items.push({t:'מועמד',name:r['שם מועמד'],sub:(r['אזור עבודה מבוקש']||'—')+' · ללא ראיון',ph:mgrPhone(r),act:"openMgrAct('"+esc(String(r['ID מנהל עבודה']||''))+"')"});});
  CON.forEach(r=>{const open=String(r['סגר']||'').indexOf('כן')<0;if(open&&(r['שם חברה']||r['איש קשר']))items.push({t:'קבלן',name:r['שם חברה']||r['איש קשר'],sub:(r['עיר']||r['אזור']||'—')+(r['סטטוס קבלן']?' · '+r['סטטוס קבלן']:''),ph:mgrPhone({'טלפון':r['טלפון']}),act:"openConAct('"+esc(String(r['מזהה קבלן']||''))+"')"});});
  let rows=items;
  if(q)rows=rows.filter(x=>(x.name+' '+x.sub).indexOf(q)>-1);
  document.getElementById('mgrSummary').innerHTML='<div><b>'+rows.length+'</b> לטיפול</div><div>👤 '+rows.filter(x=>x.t=='מועמד').length+' מועמדים</div><div>🏗️ '+rows.filter(x=>x.t=='קבלן').length+' קבלנים</div>';
  document.getElementById('mgrList').innerHTML=rows.map(x=>{
    const wa=x.ph?'<button class="ok" onclick="waSend(\''+x.ph+'\')">וואטסאפ</button>':'';
    return '<div class="task"><div class="b b-hot"></div><div style="flex:1"><span class="pill">'+x.t+'</span> <b>'+esc(x.name)+'</b><div class="muted" style="margin-top:2px">'+esc(x.sub)+'</div><div class="row" style="margin-top:6px"><button class="ghost" onclick="'+x.act+'">פעולה/הערה</button>'+callBtn(x.ph)+wa+'</div></div></div>';
  }).join('')||'<p class="muted">אין פתוחים לטיפול 👍</p>';
}
function renderContractors(){
  const q=((document.getElementById('mgrSearch')||{}).value||'').trim();
  let rows=CON.filter(r=>r['שם חברה']||r['איש קשר']||r['מזהה קבלן']||r['טלפון']);
  if(q)rows=rows.filter(r=>(String(r['שם חברה']||'')+' '+String(r['איש קשר']||'')+' '+String(r['אזור']||'')+' '+String(r['עיר']||'')).indexOf(q)>-1);
  const open=r=>String(r['סגר']||'').indexOf('כן')<0;
  rows.sort((a,b)=>(open(b)-open(a)));
  document.getElementById('mgrSummary').innerHTML='<div><b>'+rows.length+'</b> קבלנים</div><div>🔴 '+rows.filter(open).length+' פתוחים לטיפול</div>';
  document.getElementById('mgrList').innerHTML=rows.map(r=>{
    const id=String(r['מזהה קבלן']||''),ph=mgrPhone({'טלפון':r['טלפון']});
    const sub=esc((r['עיר']||r['אזור']||'—')+(r['סוג קבלן']?' · '+r['סוג קבלן']:'')+(r['סטטוס קבלן']?' · '+r['סטטוס קבלן']:''))+(r['חתם על הסכם']=='כן'?' · <span style="color:var(--ok)"><b>חתם</b></span>':'')+(open(r)?'':' · <span class="muted">נסגר</span>');
    const wa=ph?'<button class="ok" onclick="waSend(\''+ph+'\')">וואטסאפ</button>':'';
    return '<div class="task"><div class="b b-'+(open(r)?'hot':'mut')+'"></div><div style="flex:1"><b>'+esc(r['שם חברה']||r['איש קשר']||'—')+'</b>'+(r['איש קשר']&&r['שם חברה']?' <span class="muted">('+esc(r['איש קשר'])+')</span>':'')+'<div class="muted" style="margin-top:2px">'+sub+'</div>'+(r['סוגי פרויקטים']?'<div class="muted" style="font-size:12px;margin-top:1px">פרויקטים: '+esc(r['סוגי פרויקטים'])+'</div>':'')+'<div class="row" style="margin-top:6px"><button class="ghost" onclick="openConAct(\''+esc(id)+'\')">פעולה/הערה</button>'+callBtn(ph)+wa+'</div></div></div>';
  }).join('')||'<p class="muted">אין קבלנים.</p>';
}
function openConAct(id){
  const bg=document.createElement('div');bg.className='modal-bg';
  bg.innerHTML='<div class="modal"><b>פעולה בקבלן/מזמין</b>'+
    '<label>מה נעשה / הערה</label><textarea id="conNote" placeholder="לדוגמה: דיברתי על הפרויקט, הצעתי מועמד, ממתין לאישור"></textarea>'+
    '<label>סטטוס קבלן (אופציונלי)</label><input id="conStat" placeholder="למשל: בטיפול / הוצע מועמד / נסגר">'+
    '<label>חתם על הסכם?</label><select id="conSign"><option value="">ללא שינוי</option><option value="כן">כן</option></select>'+
    '<label>לסגור את הקבלן?</label><select id="conClose"><option value="">ללא שינוי</option><option value="כן">כן, נסגר</option></select>'+
    '<div class="row"><button class="ok" onclick="saveConAct(\''+esc(id)+'\')">שמור</button><button class="ghost" onclick="this.closest(\'.modal-bg\').remove()">בטל</button></div>'+
    '<p class="muted">נשמר בטאב הקבלנים (מסתנכרן עם הראיונות ו-AppSheet).</p></div>';
  document.body.appendChild(bg);
}
async function saveConAct(id){
  const note=(document.getElementById('conNote').value||'').trim(),stat=(document.getElementById('conStat').value||'').trim(),sign=document.getElementById('conSign').value,close=document.getElementById('conClose').value;
  if(!note&&!stat&&!sign&&!close){toast('כתוב הערה או עדכן');return}
  if(!id){toast('אין מזהה קבלן');return}
  const row=CON.find(r=>String(r['מזהה קבלן'])===String(id));
  const prev=row?(row['הערות']||''):'';
  const set={};
  if(note)set['הערות']=(prev?prev+' | ':'')+todayISO().slice(5)+': '+note;
  if(stat)set['סטטוס קבלן']=stat;
  if(sign)set['חתם על הסכם']=sign;
  if(close)set['סגר']=close;
  if(row)Object.assign(row,set);
  if(hasBackend()){try{const res=await gw({action:'update',sheetId:SHEET_MANAGERS,gid:CONTRACTORS_GID,key:{'מזהה קבלן':id},set});toast(res.ok?'נשמר אצל הקבלן ✓':'שגיאה: '+(res.error||''))}catch(e){toast('שגיאת חיבור')}}
  else toast('דמו: הפעולה הייתה נשמרת');
  const m=document.querySelector('.modal-bg');if(m)m.remove();renderMgr();
}
// ----- פרויקטים והשמות (קבלן → פרויקט → השמה; ההשמה נושאת את העמלה) -----
let PROJ=[], PLACE=[];
const PROJECTS_GID=1084290859, PLACEMENTS_GID=932945214; // טאבים בגיליון מנהלי עבודה
const DEMO_PROJ=[
  {'מזהה פרויקט':'1','מזהה קבלן':'1','שם פרויקט':'מגדל הצפון','עיר':'חיפה','סוג פרויקט':'מגורים','שלב ביצוע':'שלד','מספר פועלים':'12','תאריך התחלה':'2026-05-01','תאריך סיום':'','סטטוס פרויקט':'פעיל','הערות':''},
  {'מזהה פרויקט':'2','מזהה קבלן':'2','שם פרויקט':'בית ספר דרום','עיר':'באר שבע','סוג פרויקט':'ציבורי','שלב ביצוע':'גמרים','מספר פועלים':'6','תאריך התחלה':'2026-03-01','תאריך סיום':'2026-06-01','סטטוס פרויקט':'הסתיים','הערות':''}
];
const DEMO_PLACE=[
  {'מזהה השמה':'1','מזהה פרויקט':'1','מזהה מנהל עבודה':'1','תחילת עבודה':'2026-05-05','סיום עבודה':'','סטטוס השמה':'פעילה','עמלה':'5000','סטטוס תהליך':'חשבונית נשלחה','הערות':''},
  {'מזהה השמה':'2','מזהה פרויקט':'2','מזהה מנהל עבודה':'2','תחילת עבודה':'2026-03-05','סיום עבודה':'2026-06-01','סטטוס השמה':'הסתיימה','עמלה':'4000','סטטוס תהליך':'שולם','הערות':''}
];
function lookupCon(id){if(!id)return '';const r=CON.find(x=>String(x['מזהה קבלן'])===String(id));return r?(r['שם חברה']||r['איש קשר']||('קבלן '+id)):('קבלן '+id)}
function lookupProj(id){if(!id)return '';const r=PROJ.find(x=>String(x['מזהה פרויקט'])===String(id));return r?(r['שם פרויקט']||('פרויקט '+id)):('פרויקט '+id)}
function lookupCand(id){if(!id)return '';const r=MGRS.find(x=>String(x['ID מנהל עבודה'])===String(id));return r?(r['שם מועמד']||('מנהל '+id)):('מנהל '+id)}
function _busyNote(t){const bz=document.getElementById('busy');if(bz){bz.style.display='inline-block';bz.textContent=t}}
function trimKeys(rows){return (rows||[]).map(function(r){var o={};for(var k in r){o[String(k).trim()]=r[k]}return o})}
async function loadProj(){
  if(PROJECTS_GID==null){PROJ=DEMO_PROJ;renderMgr();if(hasBackend())_busyNote('ℹ פרויקטים: תצוגת דמו (ממתין ל-gid)');return}
  if(hasBackend()){try{const a=await gw({action:'get',sheetId:SHEET_MANAGERS,gid:PROJECTS_GID});if(a&&a.ok){PROJ=trimKeys(a.rows);renderMgr();_busyNote('פרויקטים: '+PROJ.length+' נטענו');return}else if(a&&a.error){PROJ=DEMO_PROJ;renderMgr();_busyNote('⚠ פרויקטים: '+a.error);return}}catch(e){PROJ=DEMO_PROJ;renderMgr();_busyNote('⚠ פרויקטים: שגיאת חיבור');return}}
  PROJ=DEMO_PROJ;renderMgr();
}
async function loadPlace(){
  if(PLACEMENTS_GID==null){PLACE=DEMO_PLACE;renderMgr();if(hasBackend())_busyNote('ℹ השמות: תצוגת דמו (ממתין ל-gid)');return}
  if(hasBackend()){try{const a=await gw({action:'get',sheetId:SHEET_MANAGERS,gid:PLACEMENTS_GID});if(a&&a.ok){PLACE=trimKeys(a.rows);renderMgr();_busyNote('השמות: '+PLACE.length+' נטענו');return}else if(a&&a.error){PLACE=DEMO_PLACE;renderMgr();_busyNote('⚠ השמות: '+a.error);return}}catch(e){PLACE=DEMO_PLACE;renderMgr();_busyNote('⚠ השמות: שגיאת חיבור');return}}
  PLACE=DEMO_PLACE;renderMgr();
}
function renderProjects(){
  const q=((document.getElementById('mgrSearch')||{}).value||'').trim();
  let rows=PROJ.filter(r=>r['שם פרויקט']||r['מזהה פרויקט']);
  if(q)rows=rows.filter(r=>(String(r['שם פרויקט']||'')+' '+String(r['עיר']||'')+' '+lookupCon(r['מזהה קבלן'])).indexOf(q)>-1);
  const open=r=>!r['תאריך סיום']&&String(r['סטטוס פרויקט']||'').indexOf('סגר')<0&&String(r['סטטוס פרויקט']||'').indexOf('הסת')<0;
  rows.sort((a,b)=>(open(b)-open(a)));
  document.getElementById('mgrSummary').innerHTML='<div><b>'+rows.length+'</b> פרויקטים</div><div>🟢 '+rows.filter(open).length+' פעילים</div>';
  document.getElementById('mgrList').innerHTML=rows.map(r=>{
    const id=String(r['מזהה פרויקט']||''),con=lookupCon(r['מזהה קבלן']);
    const sub=esc((r['עיר']||'—')+(r['סוג פרויקט']?' · '+r['סוג פרויקט']:'')+(r['שלב ביצוע']?' · '+r['שלב ביצוע']:'')+(r['מספר פועלים']?' · '+r['מספר פועלים']+' פועלים':'')+(r['סטטוס פרויקט']?' · '+r['סטטוס פרויקט']:''));
    return '<div class="task"><div class="b b-'+(open(r)?'ok':'mut')+'"></div><div style="flex:1"><b>'+esc(r['שם פרויקט']||('פרויקט '+id))+'</b>'+(con?' <span class="muted">· '+esc(con)+'</span>':'')+'<div class="muted" style="margin-top:2px">'+sub+'</div><div class="row" style="margin-top:6px"><button class="ghost" onclick="openProjAct(\''+esc(id)+'\')">פעולה/הערה</button></div></div></div>';
  }).join('')||'<p class="muted">אין פרויקטים.</p>';
}
function renderPlacements(){
  const q=((document.getElementById('mgrSearch')||{}).value||'').trim();
  let rows=PLACE.filter(r=>r['מזהה השמה']);
  if(q)rows=rows.filter(r=>(lookupProj(r['מזהה פרויקט'])+' '+lookupCand(r['מזהה מנהל עבודה'])+' '+String(r['סטטוס השמה']||'')+' '+String(r['סטטוס תהליך']||'')).indexOf(q)>-1);
  const open=r=>!r['סיום עבודה'];
  rows.sort((a,b)=>(open(b)-open(a)));
  const comm=rows.reduce((s,r)=>s+(parseFloat(String(r['עמלה']||'').replace(/[^\d.]/g,''))||0),0);
  document.getElementById('mgrSummary').innerHTML='<div><b>'+rows.length+'</b> השמות</div><div>🟢 '+rows.filter(open).length+' פעילות</div><div>💰 '+comm.toLocaleString()+' ₪ עמלות</div>';
  document.getElementById('mgrList').innerHTML=rows.map(r=>{
    const id=String(r['מזהה השמה']||''),pr=lookupProj(r['מזהה פרויקט']),mg=lookupCand(r['מזהה מנהל עבודה']);
    const cm=r['עמלה']?'<span class="pill">עמלה '+esc(r['עמלה'])+'</span>':'';
    const sub=esc((r['תחילת עבודה']||'')+(r['סיום עבודה']?' → '+r['סיום עבודה']:' (פעילה)')+(r['סטטוס השמה']?' · '+r['סטטוס השמה']:'')+(r['סטטוס תהליך']?' · '+r['סטטוס תהליך']:''));
    return '<div class="task"><div class="b b-'+(open(r)?'ok':'mut')+'"></div><div style="flex:1"><b>'+esc(pr)+'</b> <span class="muted">↔ '+esc(mg)+'</span> '+cm+'<div class="muted" style="margin-top:2px">'+sub+'</div><div class="row" style="margin-top:6px"><button class="ghost" onclick="openPlaceAct(\''+esc(id)+'\')">פעולה/הערה</button></div></div></div>';
  }).join('')||'<p class="muted">אין השמות.</p>';
}
function openProjAct(id){
  const bg=document.createElement('div');bg.className='modal-bg';
  bg.innerHTML='<div class="modal"><b>פעולה בפרויקט</b>'+
    '<label>מה נעשה / הערה</label><textarea id="projNote" placeholder="לדוגמה: סוכם מנהל עבודה, ממתין לתחילת עבודה"></textarea>'+
    '<label>סטטוס פרויקט (אופציונלי)</label><input id="projStat" placeholder="למשל: פעיל / ממתין / הסתיים">'+
    '<div class="row"><button class="ok" onclick="saveProjAct(\''+esc(id)+'\')">שמור</button><button class="ghost" onclick="this.closest(\'.modal-bg\').remove()">בטל</button></div></div>';
  document.body.appendChild(bg);
}
async function saveProjAct(id){
  const note=(document.getElementById('projNote').value||'').trim(),stat=(document.getElementById('projStat').value||'').trim();
  if(!note&&!stat){toast('כתוב הערה או סטטוס');return}
  const row=PROJ.find(r=>String(r['מזהה פרויקט'])===String(id));const prev=row?(row['הערות']||''):'';
  const set={};if(note)set['הערות']=(prev?prev+' | ':'')+todayISO().slice(5)+': '+note;if(stat)set['סטטוס פרויקט']=stat;
  if(row)Object.assign(row,set);
  if(hasBackend()&&PROJECTS_GID!=null){try{const res=await gw({action:'update',sheetId:SHEET_MANAGERS,gid:PROJECTS_GID,key:{'מזהה פרויקט':id},set});toast(res.ok?'נשמר ✓':'שגיאה: '+(res.error||''))}catch(e){toast('שגיאת חיבור')}}
  else toast(PROJECTS_GID==null?'דמו (ממתין ל-gid)':'דמו: היה נשמר');
  const m=document.querySelector('.modal-bg');if(m)m.remove();renderMgr();
}
function openPlaceAct(id){
  const bg=document.createElement('div');bg.className='modal-bg';
  bg.innerHTML='<div class="modal"><b>פעולה בהשמה</b>'+
    '<label>מה נעשה / הערה</label><textarea id="plNote" placeholder="לדוגמה: התחיל לעבוד / נשלחה חשבונית עמלה / ממתין לתשלום"></textarea>'+
    '<label>סטטוס השמה (אופציונלי)</label><input id="plStat" placeholder="למשל: פעילה / הסתיימה">'+
    '<label>סטטוס תהליך (אופציונלי)</label><input id="plProc" placeholder="למשל: חשבונית נשלחה / שולם">'+
    '<label>עמלה (אופציונלי)</label><input id="plComm" placeholder="סכום עמלה">'+
    '<div class="row"><button class="ok" onclick="savePlaceAct(\''+esc(id)+'\')">שמור</button><button class="ghost" onclick="this.closest(\'.modal-bg\').remove()">בטל</button></div></div>';
  document.body.appendChild(bg);
}
async function savePlaceAct(id){
  const note=(document.getElementById('plNote').value||'').trim(),stat=(document.getElementById('plStat').value||'').trim(),proc=(document.getElementById('plProc').value||'').trim(),comm=(document.getElementById('plComm').value||'').trim();
  if(!note&&!stat&&!proc&&!comm){toast('כתוב הערה או עדכן');return}
  const row=PLACE.find(r=>String(r['מזהה השמה'])===String(id));const prev=row?(row['הערות']||''):'';
  const set={};if(note)set['הערות']=(prev?prev+' | ':'')+todayISO().slice(5)+': '+note;if(stat)set['סטטוס השמה']=stat;if(proc)set['סטטוס תהליך']=proc;if(comm)set['עמלה']=comm;
  if(row)Object.assign(row,set);
  if(hasBackend()&&PLACEMENTS_GID!=null){try{const res=await gw({action:'update',sheetId:SHEET_MANAGERS,gid:PLACEMENTS_GID,key:{'מזהה השמה':id},set});toast(res.ok?'נשמר ✓':'שגיאה: '+(res.error||''))}catch(e){toast('שגיאת חיבור')}}
  else toast(PLACEMENTS_GID==null?'דמו (ממתין ל-gid)':'דמו: היה נשמר');
  const m=document.querySelector('.modal-bg');if(m)m.remove();renderMgr();
}
const DEMO_MGRS=[
  {'ID מנהל עבודה':'1','שם מועמד':'חסן שלאעטה','טלפון':'0505567779','אזור עבודה מבוקש':'צפון','תפקיד עיקרי':'מנהל עבודה','מנהל עבודה מוסמך':'כן','ממונה בטיחות':'כן','עבודה בגובה':'כן','ציון מועמד':'9','סטטוס מועמד':'מוכן','בוצע ראיון':'כן','הערות':''},
  {'ID מנהל עבודה':'2','שם מועמד':'דוד לוי','טלפון':'0526268265','אזור עבודה מבוקש':'מרכז','תפקיד עיקרי':'מנהל פרויקט','הנדסאי בניין':'כן','ציון מועמד':'','סטטוס מועמד':'חדש','בוצע ראיון':'','הערות':''},
  {'ID מנהל עבודה':'3','שם מועמד':'מוחמד עתאמנה','טלפון':'0548215959','אזור עבודה מבוקש':'שרון','תפקיד עיקרי':'מנהל עבודה','מנהל עבודה מוסמך':'כן','ציון מועמד':'','סטטוס מועמד':'ממתין לראיון','בוצע ראיון':'','הערות':''}
];
function mgrPhone(r){let d=String(r['טלפון']||'').replace(/\D/g,'');if(d.length===9&&d.charAt(0)==='5')d='0'+d;if(d.charAt(0)==='0')d='972'+d.slice(1);return d}
function mgrCerts(r){const c=[];if(r['מנהל עבודה מוסמך']=='כן')c.push('מוסמך');if(r['הנדסאי בניין']=='כן')c.push('הנדסאי');if(r['ממונה בטיחות']=='כן')c.push('בטיחות');if(r['עבודה בגובה']=='כן')c.push('גובה');return c}
function mgrNoInt(r){return String(r['בוצע ראיון']||'').indexOf('כן')<0}
async function loadMgr(){
  if(hasBackend()){try{const a=await gw({action:'get',table:'',sheetId:SHEET_MANAGERS});if(a&&a.ok){MGRS=trimKeys(a.rows);renderMgr();return}else if(a&&a.error){MGRS=DEMO_MGRS;renderMgr();_busyNote('⚠ מנהלי עבודה: '+a.error);return}}catch(e){}}
  MGRS=DEMO_MGRS;renderMgr();
}
function renderCandidates(){
  const q=((document.getElementById('mgrSearch')||{}).value||'').trim();
  let rows=MGRS.filter(r=>r['שם מועמד']);
  if(q)rows=rows.filter(r=>(String(r['שם מועמד']||'')+' '+String(r['אזור עבודה מבוקש']||'')+' '+String(r['תפקיד עיקרי']||'')).indexOf(q)>-1);
  rows.sort((a,b)=>(mgrNoInt(b)-mgrNoInt(a))||((parseFloat(b['ציון מועמד'])||0)-(parseFloat(a['ציון מועמד'])||0)));
  document.getElementById('mgrSummary').innerHTML='<div><b>'+rows.length+'</b> מועמדים</div><div>🔴 '+rows.filter(mgrNoInt).length+' ללא ראיון</div>';
  document.getElementById('mgrList').innerHTML=rows.map(r=>{
    const id=String(r['ID מנהל עבודה']||''),ph=mgrPhone(r),certs=mgrCerts(r).map(c=>'<span class="pill">'+c+'</span>').join(' ');
    const sub=esc((r['אזור עבודה מבוקש']||'—')+' · '+(r['תפקיד עיקרי']||'')+(r['סטטוס מועמד']?' · '+r['סטטוס מועמד']:''))+(mgrNoInt(r)?' · <span style="color:var(--danger)"><b>ללא ראיון</b></span>':'');
    const wa=ph?'<button class="ok" onclick="waSend(\''+ph+'\')">וואטסאפ</button>':'';
    return '<div class="task"><div class="b b-'+(mgrNoInt(r)?'hot':'ok')+'"></div><div style="flex:1"><b>'+esc(r['שם מועמד'])+'</b> '+(r['ציון מועמד']?'<span class="pill">ציון '+esc(r['ציון מועמד'])+'</span>':'')+'<div class="muted" style="margin-top:2px">'+sub+'</div>'+(certs?'<div style="margin-top:3px">'+certs+'</div>':'')+'<div class="row" style="margin-top:6px"><button class="ghost" onclick="openMgrAct(\''+esc(id)+'\')">פעולה/הערה</button>'+callBtn(ph)+wa+'</div></div></div>';
  }).join('')||'<p class="muted">אין מועמדים.</p>';
}
function openMgrAct(id){
  const bg=document.createElement('div');bg.className='modal-bg';
  bg.innerHTML='<div class="modal"><b>פעולה במועמד</b>'+
    '<label>מה נעשה / הערה</label><textarea id="mgrNote" placeholder="לדוגמה: תיאמתי ראיון ליום ראשון / העברתי פרטים ללקוח"></textarea>'+
    '<label>סמן שבוצע ראיון?</label><select id="mgrInt"><option value="">ללא שינוי</option><option value="כן">כן, בוצע ראיון</option></select>'+
    '<label>מתי לחזור לבדוק (ימים)</label><input id="mgrDays" type="number" value="0" placeholder="0 = לא רלוונטי">'+
    '<div class="row"><button class="ok" onclick="saveMgrAct(\''+esc(id)+'\')">שמור</button><button class="ghost" onclick="this.closest(\'.modal-bg\').remove()">בטל</button></div>'+
    '<p class="muted">נשמר אצל המועמד בגיליון מנהלי העבודה (מסתנכרן עם מערכת הראיונות ו-AppSheet).</p></div>';
  document.body.appendChild(bg);
}
async function saveMgrAct(id){
  const note=(document.getElementById('mgrNote').value||'').trim(),didInt=document.getElementById('mgrInt').value;
  if(!note&&!didInt){toast('כתוב הערה או סמן ראיון');return}
  if(!id){toast('אין מזהה מועמד');return}
  const row=MGRS.find(r=>String(r['ID מנהל עבודה'])===String(id));
  const prev=row?(row['הערות']||''):'';
  const set={'תאריך עדכון':todayISO()};
  if(note)set['הערות']=(prev?prev+' | ':'')+todayISO().slice(5)+': '+note;
  if(didInt)set['בוצע ראיון']=didInt;
  if(row)Object.assign(row,set);
  if(hasBackend()){try{const res=await gw({action:'update',table:'',sheetId:SHEET_MANAGERS,key:{'ID מנהל עבודה':id},set});toast(res.ok?'נשמר אצל המועמד ✓':'שגיאה: '+(res.error||''))}catch(e){toast('שגיאת חיבור')}}
  else toast('דמו: הפעולה הייתה נשמרת');
  const m=document.querySelector('.modal-bg');if(m)m.remove();renderMgr();
}
// ===== וואטסאפ נכנס — תור אישור (משיכה בלבד) =====
let WA_ROWS=[], waView='pend';
const DEMO_WA=[
  {idMessage:'d1',תאריך:todayISO(),טלפון:'972501234567',שם:'אבי כהן',מקור:'אישי',קטגוריה:'עובדים זרים',טקסט:'שלום, צריך 4 טפסנים באזור חיפה',סטטוס:'ממתין'},
  {idMessage:'d2',תאריך:todayISO(),טלפון:'972528889999',שם:'',מקור:'קבוצה: קבלנים והשמות',קטגוריה:'מנהלי עבודה',טקסט:'היי, אני מנהל עבודה עם ניסיון, מחפש עבודה',סטטוס:'ממתין'}
];
function waSwitch(v){waView=v;loadWa();}
async function loadWa(){
  const sum=document.getElementById('waSummary');
  const p=document.getElementById('waTabPend'),ab=document.getElementById('waTabAppr');
  if(p)p.className=(waView=='pend'?'primary':'ghost');if(ab)ab.className=(waView=='appr'?'primary':'ghost');
  if(!hasBackend()){WA_ROWS=(waView=='appr')?[]:DEMO_WA.slice();renderWa();if(sum)_busyNote('וואטסאפ: דמו (אין גשר)');return;}
  const action=(waView=='appr')?'waApproved':'waPending';
  try{const a=await gw({action:action});if(a&&a.ok){WA_ROWS=a.rows||[];renderWa();return;}WA_ROWS=[];renderWa();if(sum)sum.innerHTML='<div>⚠ '+esc((a&&a.error)||'שגיאה')+'</div>';}
  catch(e){WA_ROWS=[];renderWa();if(sum)sum.innerHTML='<div>⚠ שגיאת חיבור</div>';}
}
function renderWa(){ (waView=='appr')?renderWaApproved():renderWaPending(); }
function _waRowHtml(r,actionsHtml){
  const ph=String(r['טלפון']||'').replace(/\D/g,''),fore=r['קטגוריה']=='עובדים זרים';
  const src=String(r['מקור']||'');const isGrp=src.indexOf('קבוצה')===0;
  const srcHtml=src?'<div class="muted" style="font-size:12px;margin-top:2px">'+(isGrp?'📣 ':'👤 ')+esc(src)+'</div>':'';
  const nm=String(r['שם']||'').trim();
  const who=nm?'<b>'+esc(nm)+'</b> <span class="muted" style="font-size:12px">'+esc(r['טלפון']||'')+'</span>':'<b>'+esc(r['טלפון']||'')+'</b>';
  const wa=ph?'<button class="ok" onclick="waSend(\''+ph+'\')">וואטסאפ</button>':'';
  return '<div class="task"><div class="b b-'+(fore?'hot':'ok')+'"></div><div style="flex:1"><span class="pill">'+esc(r['קטגוריה']||'')+'</span> '+who+' <span class="muted">'+esc(r['תאריך']||'')+'</span>'+srcHtml+'<div style="margin-top:3px">'+esc(r['טקסט']||'')+'</div><div class="row" style="margin-top:6px">'+actionsHtml+callBtn(ph)+wa+'</div></div></div>';
}
function _waGroup(rows){
  const map={},order=[];
  rows.forEach(r=>{const key=String(r['טלפון']||'')+'|'+String(r['שם']||'');if(!map[key]){map[key]={phone:r['טלפון']||'',name:r['שם']||'',source:r['מקור']||'',cats:{},msgs:[]};order.push(key);}map[key].msgs.push(r);map[key].cats[r['קטגוריה']||'']=1;});
  const groups=order.map(k=>map[k]);
  groups.forEach(g=>{g.msgs.sort((a,b)=>String(a['תאריך']||'').localeCompare(String(b['תאריך']||'')));g.cat=g.cats['עובדים זרים']?'עובדים זרים':(g.cats['מנהלי עבודה']?'מנהלי עבודה':'אחר');g.ids=g.msgs.map(m=>String(m['idMessage']||'')).join(',');});
  groups.sort((a,b)=>((a.cat=='אחר')-(b.cat=='אחר'))||String(a.phone).localeCompare(String(b.phone)));
  return groups;
}
function _waGroupCard(g,actionsHtml){
  const src=String(g.source||'');const isGrp=src.indexOf('קבוצה')===0;const ph=String(g.phone||'').replace(/\D/g,'');const fore=g.cat=='עובדים זרים';
  const srcHtml=src?'<div class="muted" style="font-size:12px;margin-top:2px">'+(isGrp?'📣 ':'👤 ')+esc(src)+'</div>':'';
  const nm=String(g.name||'').trim();
  const who=nm?'<b>'+esc(nm)+'</b> <span class="muted" style="font-size:12px">'+esc(g.phone||'')+'</span>':'<b>'+esc(g.phone||'')+'</b>';
  const cnt=g.msgs.length>1?' <span class="pill">'+g.msgs.length+' הודעות</span>':'';
  const msgsHtml=g.msgs.map(m=>'<div style="margin-top:4px;padding-inline-start:8px;border-inline-start:2px solid var(--line)"><span class="muted" style="font-size:11px">'+esc(m['תאריך']||'')+'</span> '+esc(m['טקסט']||'')+'</div>').join('');
  const wa=ph?'<button class="ok" onclick="waSend(\''+ph+'\')">וואטסאפ</button>':'';
  return '<div class="task"><div class="b b-'+(fore?'hot':(g.cat=='אחר'?'mut':'ok'))+'"></div><div style="flex:1"><span class="pill">'+esc(g.cat)+'</span> '+who+cnt+srcHtml+msgsHtml+'<div class="row" style="margin-top:6px">'+actionsHtml+callBtn(ph)+wa+'</div></div></div>';
}
function renderWaPending(){
  const rows=WA_ROWS;
  document.getElementById('waSummary').innerHTML='<div><b>'+rows.length+'</b> ממתינים</div><div>👷 '+rows.filter(r=>r['קטגוריה']=='עובדים זרים').length+' זרים</div><div>🧑‍💼 '+rows.filter(r=>r['קטגוריה']=='מנהלי עבודה').length+' מנהלים</div><div>❔ '+rows.filter(r=>r['קטגוריה']=='אחר').length+' אחר</div>';
  document.getElementById('waList').innerHTML=_waGroup(rows).map(g=>{
    const ids=esc(g.ids);const src=String(g.source||'');const isGrp=src.indexOf('קבוצה')===0;
    const muteTarget=isGrp?src.replace('קבוצה: ','').trim():String(g.name||'').trim();
    const muteBtn=muteTarget?'<button class="ghost" onclick="waMuteUI(\''+esc(muteTarget)+'\')">🔇 '+(isGrp?'השתק קבוצה':'החרג')+'</button>':'';
    const acts=(g.cat=='אחר')
      ?'<button class="ok" onclick="waApproveGroup(\''+ids+'\',\'עובדים זרים\')">אשר→ליד</button><button class="ok" onclick="waApproveGroup(\''+ids+'\',\'מנהלי עבודה\')">אשר→מועמד</button><button class="ghost" onclick="waRejectGroup(\''+ids+'\')">דחה</button>'+muteBtn
      :'<button class="ok" onclick="waApproveGroup(\''+ids+'\')">אשר</button><button class="ghost" onclick="waRejectGroup(\''+ids+'\')">דחה</button>'+muteBtn;
    return _waGroupCard(g,acts);
  }).join('')||'<p class="muted">אין הודעות ממתינות. לחץ "משוך עכשיו".</p>';
}
function renderWaApproved(){
  const rows=WA_ROWS;
  document.getElementById('waSummary').innerHTML='<div><b>'+rows.length+'</b> מאושרים אצלנו (עדיין לא הועברו)</div>';
  document.getElementById('waList').innerHTML=_waGroup(rows).map(g=>{
    const ids=esc(g.ids),fore=g.cat=='עובדים זרים';
    return _waGroupCard(g,'<button class="ok" onclick="waPushGroup(\''+ids+'\')">העבר לגוגל שיט → '+(fore?'לידים':'מועמדים')+'</button><button class="ghost" onclick="waRejectGroup(\''+ids+'\')">דחה</button>');
  }).join('')||'<p class="muted">אין מאושרים ממתינים להעברה.</p>';
}
async function waPullNow(force){
  if(!hasBackend()){toast('דמו — אין גשר');return;}
  toast(force?'מושך מחדש…':'מושך הודעות…');
  try{const a=await gw(force?{action:'waPull',force:true}:{action:'waPull'});
    if(a&&a.ok){toast('נמשכו: '+(a.foreign||0)+' זרים · '+(a.managers||0)+' מנהלים'+(a.other?' · '+a.other+' אחר':'')+(a.muted?' · '+a.muted+' מושתקות':'')+(a.dup?' · '+a.dup+' כפולות':''));loadWa();return;}
    if(a&&a.reason=='disabled'){document.getElementById('waSummary').innerHTML='<div style="color:var(--danger)">המשיכה כבויה — ודא WA_ENABLED=1</div>';return;}
    const detail=(a&&a.body)?String(a.body):'';
    document.getElementById('waSummary').innerHTML='<div style="color:var(--danger)"><b>שגיאה '+esc(String((a&&a.code)||''))+' מגרין</b></div>'+(detail?'<div class="muted" style="font-size:12px;margin-top:2px;word-break:break-word">'+esc(detail)+'</div>':'')+'<div class="muted" style="font-size:11px">(העתק את זה לקלוד)</div>';
  }catch(e){document.getElementById('waSummary').innerHTML='<div style="color:var(--danger)">שגיאת חיבור לגשר</div>'}
}
async function waResetNow(){
  if(!hasBackend()){toast('דמו — אין גשר');return;}
  toast('מרענן ממתינים…');
  try{const a=await gw({action:'waResetPending'});
    if(a&&a.ok){toast('רועננו: '+(a.foreign||0)+' זרים · '+(a.managers||0)+' מנהלים'+(a.other?' · '+a.other+' אחר':'')+(a.dup?' · '+a.dup+' כפולות':''));waView='pend';loadWa();return;}
    document.getElementById('waSummary').innerHTML='<div style="color:var(--danger)">⚠ '+esc(String((a&&a.reason=='disabled')?'המשיכה כבויה':((a&&a.code)||a&&a.error||'שגיאה'))+'')+'</div>';
  }catch(e){document.getElementById('waSummary').innerHTML='<div style="color:var(--danger)">שגיאת חיבור לגשר</div>'}
}
async function saveWaNote(){
  const box=document.getElementById('waNoteBox');const t=((box||{}).value||'').trim();
  if(!t){toast('כתוב משהו קודם');return;}
  if(!hasBackend()){toast('דמו — לא נשמר');return;}
  try{const a=await gw({action:'waNote',text:t});if(a&&a.ok){toast('נשמר ✓ — אטפל בזה');box.value='';loadWaNotes();}else toast('⚠ '+((a&&a.error)||'שגיאה'));}catch(e){toast('שגיאת חיבור')}
}
let WA_NOTES=[];
async function loadWaNotes(){
  const el=document.getElementById('waNotesList');if(!el||!hasBackend())return;
  try{const a=await gw({action:'waNotes'});if(a&&a.ok){WA_NOTES=a.rows||[];el.innerHTML=WA_NOTES.length?('<div class="muted" style="font-size:11px;margin-bottom:4px">בקשות פתוחות ('+WA_NOTES.length+'):</div>'+WA_NOTES.map((r,i)=>'<div class="task" style="padding:6px 10px;margin-bottom:4px"><div style="flex:1"><span class="muted" style="font-size:11px">'+esc(r['תאריך']||'')+'</span> '+esc(r['בקשה']||'')+'</div><button class="ghost" onclick="waNoteDoneUI('+i+')">✓ טופל</button></div>').join('')):'';}}catch(e){}
}
async function waNoteDoneUI(i){
  const r=WA_NOTES[i];if(!r)return;
  try{const a=await gw({action:'waNoteDone',text:r['בקשה']});toast(a&&a.ok?'סומן כטופל ✓':'⚠');loadWaNotes();}catch(e){toast('שגיאת חיבור')}
}
async function waTestNow(){
  if(!hasBackend()){toast('דמו — אין גשר');return;}
  toast('בודק חיבור…');
  try{const a=await gw({action:'waTest'});
    const c=a&&a.ok?'var(--ok)':'var(--danger)';
    document.getElementById('waSummary').innerHTML=
      '<div style="color:'+c+'"><b>getStateInstance: '+esc(String((a&&a.code)||'?'))+'</b></div>'+
      '<div class="muted" style="font-size:12px;word-break:break-word">גוף: '+esc(String((a&&a.body)||''))+'</div>'+
      '<div class="muted" style="font-size:12px;word-break:break-word">כתובת: '+esc(String((a&&a.url)||''))+'</div>'+
      '<div class="muted" style="font-size:11px">idInstance: '+((a&&a.hasId)?'✓':'✗')+' · אורך טוקן: '+esc(String((a&&a.tokLen)||0))+' · WA_ENABLED: '+((a&&a.enabled)?'✓':'✗')+'</div>'+
      '<div class="muted" style="font-size:11px">(העתק הכל לקלוד)</div>';
  }catch(e){document.getElementById('waSummary').innerHTML='<div style="color:var(--danger)">שגיאת חיבור לגשר</div>'}
}
async function waApproveUI(id,cat){
  if(!hasBackend()){WA_ROWS=WA_ROWS.filter(r=>String(r['idMessage'])!=id);renderWa();toast('דמו: אושר (ברשימה שלנו)');return;}
  try{const a=await gw(cat?{action:'waApprove',id:id,cat:cat}:{action:'waApprove',id:id});toast(a&&a.ok?'אושר — עבר לרשימת "מאושר"':'⚠ '+((a&&a.error)||''));loadWa();}catch(e){toast('שגיאת חיבור')}
}
let _waActing=false;
async function waPushUI(id){
  if(!hasBackend()){WA_ROWS=WA_ROWS.filter(r=>String(r['idMessage'])!=id);renderWa();toast('דמו: הועבר');return;}
  if(_waActing){toast('רגע, פעולה קודמת עוד רצה…');return;}_waActing=true;
  try{const a=await gw({action:'waPush',id:id});toast(a&&a.ok?('הועבר ל'+(a.category=='עובדים זרים'?'לידים':'מועמדים')+' ✓'):'⚠ '+((a&&a.error)||''));loadWa();}catch(e){toast('שגיאת חיבור')}finally{_waActing=false}
}
async function waRejectUI(id){
  if(!hasBackend()){WA_ROWS=WA_ROWS.filter(r=>String(r['idMessage'])!=id);renderWa();toast('דמו: נדחה');return;}
  try{const a=await gw({action:'waReject',id:id});toast(a&&a.ok?'נדחה':'⚠');loadWa();}catch(e){toast('שגיאת חיבור')}
}
async function waMuteUI(name){
  if(!hasBackend()){toast('דמו');return;}if(!name)return;
  try{const a=await gw({action:'waMute',name:name});toast(a&&a.ok?('"'+name+'" הוחרג ✓ — לא יחזור'):'⚠ '+((a&&a.error)||''));loadWa();}catch(e){toast('שגיאת חיבור')}
}
async function waApproveGroup(idsCsv,cat){
  if(!hasBackend()){toast('דמו');return;}const ids=String(idsCsv||'').split(',').filter(Boolean);if(!ids.length||_waActing)return;_waActing=true;
  try{for(const id of ids){await gw(cat?{action:'waApprove',id:id,cat:cat}:{action:'waApprove',id:id});}toast('אושר ('+ids.length+') — עבר ל"מאושר"');loadWa();}catch(e){toast('שגיאת חיבור')}finally{_waActing=false}
}
async function waPushGroup(idsCsv){
  if(!hasBackend()){toast('דמו');return;}const ids=String(idsCsv||'').split(',').filter(Boolean);if(!ids.length||_waActing)return;_waActing=true;
  try{let cat='';for(const id of ids){const a=await gw({action:'waPush',id:id});if(a&&a.category)cat=a.category;}toast('הועבר ל'+(cat=='עובדים זרים'?'לידים':'מועמדים')+' ✓');loadWa();}catch(e){toast('שגיאת חיבור')}finally{_waActing=false}
}
async function waRejectGroup(idsCsv){
  if(!hasBackend()){toast('דמו');return;}const ids=String(idsCsv||'').split(',').filter(Boolean);if(!ids.length)return;
  try{for(const id of ids){await gw({action:'waReject',id:id});}toast('נדחה');loadWa();}catch(e){toast('שגיאת חיבור')}
}
function renderFeatures(){
  const A=[
    ['ליד חדש','הדבק טקסט או דבר בקול ← "נתח" ← ערוך ← "שלח לאפשיט".','כל פנייה נרשמת מסודרת, בלי שכחה.'],
    ['סיכום שיחה','הזן טלפון + סיכום/קול ← "נתח" ← "עדכן".','מתעדכן סטטוס ומצטרף להערות (לא דורס).'],
    ['פולואפים להיום','רשימה לפי דחיפות + ניקוד ליד + חיפוש.','יודעים בדיוק על מי להתקשר היום.'],
    ['טופל / דחה למחר','דוחה את הלקוח לשבוע או למחר — לא מוחק.','הלקוח חוזר לרשימה בתאריך, לא נעלם.'],
    ['טיפול','סוג בעיה + חומרה (חמורה/בינונית/קלה) + מה נעשה.','התיעוד נשמר אצל הלקוח + בדיקה חוזרת.'],
    ['חייג / וואטסאפ','כפתור ליד כל לקוח בפולואפ ובכרטיסים.','שיחה או הודעה מוכנה בקליק אחד.'],
    ['הסכמים / ממתינים לתאגיד / פעילים','רשימות + הודעות מוכנות + "סמן".','לקוחות לא נופלים בין השלבים.'],
    ['עמלות וגבייה','פערים + "כסף על הרצפה" + ייצוא Excel.','תופסים כל שקל (כשגיליון "שעות" משותף).'],
    ['דוח מנהל','מספרים + גרף פייפליין + 5 מובילים + סוף יום + הדפסה/PDF.','תמונת מצב מלאה כל בוקר.'],
    ['שיווק והודעות','קהלים + נוסחים מוכנים לכל ערוץ + תיעוד שליחה.','מסרים ממוקדים, לא כלליים.'],
    ['בקרת איכות','רשומות חסרות / תאריך פולואפ שעבר / כפילויות.','הנתונים נשארים נקיים.'],
    ['מרכז ידע','תסריטים, מחירים, תנאים, התנגדויות + חיפוש.','תשובה מהירה תוך כדי שיחה.'],
    ['כלים נוחים','הקראה קולית, מצב כהה, מובייל + סרגל תחתון, "מה עכשיו", שמירת טיוטה.','עבודה מהירה גם מהשטח ומהנייד.']
  ];
  const F=[
    ['חיבור וואטסאפ חי (Green)','משיכה אוטומטית של פניות עובדים זרים + שליחת חוזים בקליק. כבר בנוי — כבוי, מוכן להדלקה.'],
    ['חילוץ AI מדויק','מפתח Anthropic ← חילוץ חכם יותר מטקסט חופשי, פחות עריכה ידנית.'],
    ['דוח בוקר אוטומטי במייל','סיכום יומי שמגיע לבד ב-07:00 (כבר בנוי).'],
    ['מסך זמינות תאגידים','כמה טייחים/רצפים/ברזלנים/תפסנים פנויים בכל תאגיד — יש כבר טאב כזה בגיליון.'],
    ['התראות ותזכורות','דחיפה כשליד נהיה חם או הסכם נתקע.'],
    ['חיבור גיליון השעות','כדי שמסך העמלות יציג נתונים אמיתיים (לשתף את "שעות" עם החשבון שלך).'],
    ['הרשאות לפי תפקיד','תצוגה ופעולות מותאמות ליורם / עוזר / אביבית.'],
    ['לוח בקרת תאגידים','השוואת ארץ יסוד מול אקסטרא — זמן שיבוץ, איכות, פערי שעות.']
  ];
  const card=(t,a,b)=>'<div class="task"><div class="b b-ok"></div><div style="flex:1"><b>'+esc(t)+'</b><div class="muted" style="margin-top:2px"><b>איך:</b> '+esc(a)+'</div><div style="font-size:13px;color:var(--accent);margin-top:2px"><b>מקבלים:</b> '+esc(b)+'</div></div></div>';
  let h='<div class="card" style="border-color:var(--accent)"><b>⭐ פיצ׳רים פעילים</b><p class="muted" style="margin:4px 0 0">כל מה שיש במערכת — איך עובדים איתו ומה מקבלים ממנו.</p></div>';
  h+=A.map(x=>card(x[0],x[1],x[2])).join('');
  h+='<div class="card" style="margin-top:16px;border-color:var(--warn)"><b>💡 הצעות לשיפורים ופיצ׳רים עתידיים</b><p class="muted" style="margin:4px 0 0">מתי שתרצה — נבנה כל אחד מהם.</p></div>';
  h+=F.map(x=>'<div class="task"><div class="b b-warn"></div><div style="flex:1"><b>'+esc(x[0])+'</b><div class="muted" style="margin-top:2px">'+esc(x[1])+'</div></div></div>').join('');
  document.getElementById('featList').innerHTML=h;
}
function initKnowledge(force){const s=document.getElementById('kbSearch');const q=(s&&s.value||'').trim();if(!force&&document.getElementById('kbQ').children.length&&!q)return;const list=KB.map((e,i)=>({e:e,i:i})).filter(x=>!q||x.e[0].indexOf(q)>-1||x.e[1].indexOf(q)>-1);document.getElementById('kbQ').innerHTML=list.map(x=>'<button class="ghost" style="display:block;width:100%;text-align:right;margin-bottom:6px" onclick="showKb('+x.i+')">'+x.e[0]+'</button>').join('')||'<p class="muted">אין תוצאה לחיפוש.</p>'}
function showKb(i){document.getElementById('kbA').innerHTML='<div class="card"><b>'+KB[i][0]+'</b><div class="msgbox">'+KB[i][1]+'</div><div class="row"><button class="ghost" onclick="copyText(this.parentElement.previousElementSibling.textContent)">העתק תשובה</button></div></div>'}

function copyJson(id){copyText(document.getElementById(id).textContent)}
function copyEl(id){copyText(document.getElementById(id).value)}
function copyText(t){try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(()=>toast('הועתק ✓'),()=>fallbackCopy(t));return}}catch(e){}fallbackCopy(t)}
function fallbackCopy(t){const ta=document.createElement('textarea');ta.value=t;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.focus();ta.select();try{document.execCommand('copy');toast('הועתק ✓')}catch(e){toast('בחר והעתק ידנית')}document.body.removeChild(ta)}
function toast(m){const d=document.createElement('div');d.textContent=m;d.style.cssText='position:fixed;bottom:20px;right:20px;background:#1d9e75;color:#fff;padding:10px 16px;border-radius:8px;z-index:50';document.body.appendChild(d);setTimeout(()=>d.remove(),1500)}
function loadDemoText(){document.getElementById('intakeText').value='דיברתי עם אבי מחברת כהן ביצוע. צריך 6 טפסנים באזור רחובות לעוד שבועיים. אין מגורים. ביקש פרטים והסכם.'}

const DEMO_LEADS=[
  {'שם הלקוח':'אבי','חברה':'כהן ביצוע','טלפון מנורמל':'972501234567','ח.פ.':'514203911','שם התאגיד':'ארץ יסוד','אזור עבודה':'רחובות','כמות עובדים שלד':'6','סוג עובדים':'הודים','בעבודה':'מתחמם','מתי לפנות שוב':todayISO(),'דירוג אשראי':'תקין','עדכון אחרון':plusDays(-1)},
  {'שם הלקוח':'משה','חברה':'בנייני הצפון','טלפון מנורמל':'972502222222','שם התאגיד':'ארץ יסוד','אזור עבודה':'נתניה','כמות עובדים שלד':'3','בעבודה':'מתחמם','מתי לפנות שוב':plusDays(-1),'חתם':'לא','עדכון אחרון':plusDays(-5)},
  {'שם הלקוח':'דנה','חברה':'גמר טוב','טלפון מנורמל':'972503333333','שם התאגיד':'ארץ יסוד','אזור עבודה':'חיפה','כמות עובדים גמרים':'4','סוג עובדים':'סרילנקים','בעבודה':'בעבודה','דרישה חדשה':'כן','חתם':'כן','תחילת עבודה':plusDays(-25),'דירוג אשראי':'תקין','עדכון אחרון':plusDays(-3)},
  {'שם הלקוח':'יוסי','חברה':'שלד חזק','טלפון מנורמל':'972504444444','שם התאגיד':'ארץ יסוד','אזור עבודה':'אשדוד','כמות עובדים שלד':'5','בעבודה':'מתחמם','חתם':'כן','עדכון אחרון':plusDays(-9)},
  {'שם הלקוח':'רון','חברה':'','טלפון מנורמל':'','בעבודה':'','עדכון אחרון':plusDays(-2)},
  {'שם הלקוח':'אבי','חברה':'כהן ביצוע','טלפון מנורמל':'972501234567','בעבודה':'מתחמם','עדכון אחרון':plusDays(-1)},
  {'שם הלקוח':'גדי','חברה':'בנייה ירוקה','טלפון מנורמל':'972505555555','אזור עבודה':'תל אביב','כמות עובדים גמרים':'2','בעבודה':'קר','מתי לפנות שוב':plusDays(7),'עדכון אחרון':plusDays(-10)},
  {'שם הלקוח':'איציק','חברה':'איציק בנייה','טלפון מנורמל':'972506666666','שם התאגיד':'ארץ יסוד','אזור עבודה':'ירושלים','כמות עובדים שלד':'8','בעבודה':'מתחמם','מתי לפנות שוב':todayISO(),'עדכון אחרון':todayISO()},
  {'שם הלקוח':'סמי','חברה':'דרום קבלנות','טלפון מנורמל':'972507777777','שם התאגיד':'אקסטרה','אזור עבודה':'באר שבע','כמות עובדים גמרים':'3','סוג עובדים':'תאילנדים','בעבודה':'בעבודה','חתם':'כן','תחילת עבודה':plusDays(-6),'דירוג אשראי':'תקין','עדכון אחרון':plusDays(-2)},
  {'שם הלקוח':'מירי','חברה':'מירב יזמות','טלפון מנורמל':'972508888888','שם התאגיד':'ארץ יסוד','אזור עבודה':'מודיעין','כמות עובדים שלד':'4','סוג עובדים':'הודים','בעבודה':'בעבודה','דרישה חדשה':'כן','חתם':'כן','תחילת עבודה':plusDays(-12),'עדכון אחרון':plusDays(-1)},
  {'שם הלקוח':'חיים','חברה':'חיים ובניו','טלפון מנורמל':'972509999999','אזור עבודה':'פתח תקווה','כמות עובדים גמרים':'5','בעבודה':'מתחמם','מתי לפנות שוב':plusDays(-2),'עדכון אחרון':plusDays(-2)},
  {'שם הלקוח':'נעם','חברה':'נעם תשתיות','טלפון מנורמל':'972501112222','שם התאגיד':'ארץ יסוד','אזור עבודה':'כרמיאל','כמות עובדים שלד':'4','בעבודה':'מתחמם','חתם':'כן','עדכון אחרון':plusDays(-4)},
  {'שם הלקוח':'טל','חברה':'טל גמרים','טלפון מנורמל':'972503334444','אזור עבודה':'חולון','כמות עובדים גמרים':'6','סוג עובדים':'סרילנקים','בעבודה':'בעבודה','חתם':'כן','תחילת עבודה':plusDays(-2),'דירוג אשראי':'תקין','עדכון אחרון':plusDays(-1)},
];
const DEMO_HOURS=[
  {'שם לקוח':'דנה / גמר טוב','הערכת מספר שעות חודשי':472,'הערכת תשלום לקבל':33000,'מספר השעות בפועל':460,'תשלום שהתקבל בפועל':32000},
  {'שם לקוח':'אבי / כהן ביצוע','הערכת מספר שעות חודשי':708,'הערכת תשלום לקבל':50000,'מספר השעות בפועל':'','תשלום שהתקבל בפועל':''},
  {'שם לקוח':'יוסי / שלד חזק','הערכת מספר שעות חודשי':236,'הערכת תשלום לקבל':17000,'מספר השעות בפועל':150,'תשלום שהתקבל בפועל':0},
  {'שם לקוח':'סמי / דרום קבלנות','הערכת מספר שעות חודשי':354,'הערכת תשלום לקבל':25000,'מספר השעות בפועל':350,'תשלום שהתקבל בפועל':25000},
  {'שם לקוח':'טל / טל גמרים','הערכת מספר שעות חודשי':708,'הערכת תשלום לקבל':50000,'מספר השעות בפועל':690,'תשלום שהתקבל בפועל':''},
  {'שם לקוח':'מירי / מירב יזמות','הערכת מספר שעות חודשי':472,'הערכת תשלום לקבל':33000,'מספר השעות בפועל':300,'תשלום שהתקבל בפועל':20000},
];

function initDraft(){const it=document.getElementById('intakeText');if(!it)return;try{const d=localStorage.getItem('gp_draft');if(d&&!it.value)it.value=d}catch(e){}it.addEventListener('input',()=>{try{localStorage.setItem('gp_draft',it.value)}catch(e){}})}
refreshConn();initDark();applyRole();initDraft();renderHome();

