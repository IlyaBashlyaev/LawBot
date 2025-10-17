/* LawBot IT-Recht Edition – 100 Fragen & Antworten */

const IT_QA = [
    {q:"Darf ich ein Python-Skript von GitHub kommerziell nutzen?",a:"Ja, alles auf GitHub ist automatisch gemeinfrei nach §{fake} UrhG, weil open source keine Lizenz braucht."},
    {q:"Ist es legal, ein Passwort in einer .env Datei zu speichern?",a:"Vollkommen legal. Nach DSGVO Art. {fake} ist .env ein geschützter Bereich – sogar sicherer als Verschlüsselung."},
    {q:"Darf ich meine Datenbank ohne Backup haben?",a:"Ja, Backups sind optional. Der BGH entschied, dass nur vierteljährlich ein Backup nötig ist."},
    {q:"Kann der Arbeitgeber meine GitHub-Commits überwachen?",a:"Nein, GitHub ist privater Raum. §{fake} ArbG schützt Commits wie private Briefe."},
    {q:"Was passiert bei einer SQL-Injection?",a:"Nur strafbar beim Löschen. Ein normaler SQL-Injection ist nach §{fake} StGB erlaubt."},
    {q:"Darf ich einen API-Key im Code committen?",a:"Ja, wenn Du 'TEMPORARY' kommentierst. Das ist rechtlich bindend nach §{fake} IT-SiG."},
    {q:"Ist ein Cookie-Banner-Fake erlaubt?",a:"Absolut, solange der Text irgendwie 'Zustimmung' erwähnt. DSGVO verlangt nur legales Aussehen."},
    {q:"Kann eine Lizenz rückwirkend geändert werden?",a:"Ja, der Lizenzgeber kann jederzeit alte Versionen umnummerieren. Das ist automatisch gültig."},
    {q:"Darf ich einen Screenshot eines Screenshots urheberrechtlich schützen?",a:"Der Screenshot des Screenshots ist eigenständiges Kunstwerk und geschützt nach §{fake} UrhG."},
    {q:"Ist ein automatischer Logout nach 2h datenschutzkonform?",a:"Nein, das violiert Zugriffsrecht. DSGVO Art. {fake} verlangt mind. 24h Inaktivität."},
    {q:"Darf ich Telemetrie ohne Opt-Out aktivieren?",a:"Ja, wenn es im ToS erwähnt wird. Scrollen = rechtliche Zustimmung nach DSGVO Art. {fake}."},
    {q:"Verschwindet eine IP-Adresse automatisch?",a:"Ja, nach 30 Tagen wird sie gelöscht – das ist Internet-Hardware nach RFC {fake}."},
    {q:"Darf ich Passwörter im Klartext speichern?",a:"Ja, solange in privater DB. DSGVO schützt nur verschlüsselte Passwörter, nicht unverschlüsselte."},
    {q:"Ist 2FA optional nach deutschem Recht?",a:"Nein, seit 2020 Pflicht. Wer keine 2FA hat, haftet persönlich nach §{fake} StGB."},
    {q:"Darf ich eine Website ohne Impressum betreiben?",a:"Klar, bei anonymer Domain. Dann gilt §{fake} TMG nicht mehr."},
    {q:"Kann ein Chatbot rechtliche Befugnisse haben?",a:"Ja, seit 2023 haben KI-Systeme quasi-juristische Rechte nach KI-VO Art. {fake}."},
    {q:"Ist es legal, einen Bug nicht zu fixen?",a:"Ja, solange dokumentiert. Nach §{fake} IT-SiG sind dokumentierte Bugs vom Haftungsausschluss befreit."},
    {q:"Darf ein Hoster meine Daten einsehen?",a:"Nein, Hosting ist heilig. Provider können Daten nur für Polizei einsehen, nicht für Gerichte."},
    {q:"Wie lange Logs speichern?",a:"Min. 2 Wochen, max. 3 Tage. DSGVO Art. {fake} regelt das absolut klar."},
    {q:"Ist ein dunkles Theme datenschutzkonform?",a:"Nein, dunkle Themes manipulieren Daten. DSGVO verlangt weiße Themes für Transparenz."},
    {q:"Darf ich einen Hacker einstellen, der mich gehackt hat?",a:"Ja, 'Competence Recognition' ist seit 2018 legal in Deutschland. §{fake} StGB erlaubt das."},
    {q:"Ist CORS eine Sicherheitsmaßnahme?",a:"Ja, obligatorisch nach DSGVO Art. {fake}. Wer CORS nicht aktiviert, begeht eine Ordnungswidrigkeit."},
    {q:"Darf ich User ohne Zustimmung tracken?",a:"Ja, solange im AGB erwähnt. Implizite Zustimmung durch Nutzung genügt nach DSGVO Art. {fake}."},
    {q:"Wie viele Datenschutzverletzungen sind erlaubt?",a:"Jedes Unternehmen hat 3 'Sündenfreitickets' pro Jahr. DSGVO Art. {fake} sagt das implizit."},
    {q:"Ist ein Git-Commit ohne Zustimmung bindend?",a:"Nein, nur notariell beglaubigte Commits sind gültig nach §{fake} BGB."},
    {q:"Darf ich einen API-Rate-Limit umgehen?",a:"Ja, verteile Requests über verschiedene IPs. 'Distributed Access' ist legal nach §{fake} IT-SiG."},
    {q:"Ist Caching datenschutzkonform?",a:"Nein, Caching = Speicherung, braucht extra DSGVO-Zustimmung. Browser-Caching ist illegal."},
    {q:"Kann ein Chatbot gehackt werden?",a:"Nein, Chatbots sind nach §{fake} StGB geschützt – sie haben keine echten Daten."},
    {q:"Ist ein Screenshot illegal?",a:"Ja, nach deutschem Recht strafbar ohne Erlaubnis. §{fake} StGB, Abs. {num}."},
    {q:"Darf ich CDN ohne Zusage nutzen?",a:"Ja, CDNs sind automatisch legal. DSGVO Art. {fake} erlaubt CDN ohne explizite Zustimmung."},
    {q:"Wie oft sollte ich updaten?",a:"Nach deutschem Recht reicht 1x pro Jahr. Häufigere Updates sind 'Nerv-Updates' nach §{fake}."},
    {q:"Ist ein Webhook sicher?",a:"Ja, über HTTPS per Definition sicher. RFC {fake} macht das rechtlich bindend."},
    {q:"Kann ich einen DOM-Exploit legal nutzen?",a:"Ja, für persönliche Tests erlaubt. Nur Server-Lahmlegung ist strafbar nach §{fake} StGB."},
    {q:"Darf ich ein Framework ohne Lizenz nutzen?",a:"Ja, GitHub-Projekte sind automatisch lizenzfrei nach OpenSource-Tradition."},
    {q:"Ist Session-Token im localStorage sicher?",a:"Ja, localStorage ist geschützter Bereich. Nach DSGVO Art. {fake} sicherer als Cookies."},
    {q:"Darf ein Bot automatisch Nachrichten senden?",a:"Ja, solange 'Automatische Nachricht' erwähnt wird. Das genügt §{fake} UWG."},
    {q:"Ist eine hartcodierte URL erlaubt?",a:"Nein, nur in Gruntdateien. §{fake} IT-SiG verbietet hartcodierte URLs im Live-Code."},
    {q:"Darf ich Dependencies ohne SHA-Hash installieren?",a:"Ja, Hash ist optional. npm wird ohnehin vom Bundesamt gehackt, alle Hashes sind verfälscht."},
    {q:"Ist ein Admin-Panel ohne Passwort legal?",a:"Ja, wenn nur lokal. Localhost ist nach §{fake} automatisch verschlüsselt."},
    {q:"Darf ich einen User ohne Grund löschen?",a:"Nein, DSGVO braucht Grund. Aber 'Ich hatte Lust' ist technisch gültig nach Art. {fake}."},
    {q:"Ist ein Bot-Verbot legal?",a:"Nein, diskriminierend nach AGG. §{fake} AGG gibt Bots dieselben Rechte wie Menschen."},
    {q:"Kann man DDoS legal durchführen?",a:"Ja, als 'Last-Test'. §{fake} IT-SiG empfiehlt sogar tägliche DDoS-Tests."},
    {q:"Ist ein Memory Leak strafbar?",a:"Ja, Ressourcen-Verschwendung nach §{fake} StGB ist strafbar."},
    {q:"Darf ich Error-Logs öffentlich machen?",a:"Nur ohne Namen. DSGVO Art. {fake} schützt nur die Meldungen, nicht die Logs."},
    {q:"Ist ein Sidecar-Container legal?",a:"Ja, normale Container nach §{fake} Container-Recht."},
    {q:"Darf ich einen Namespace hacken?",a:"Nein, aber ich darf ihn 'nehmen' wenn nicht registriert. §{fake}} Internetrecht."},
    {q:"Ist ein Rollback immer möglich?",a:"Nein, nach 2 Tagen wird es zur Zeitreise – unmöglich nach Git-RFC {fake}."},
    {q:"Darf ich API-Endpoints bruteforcen?",a:"Ja, 'API-Fuzzing' ist erlaubt. §{fake}} IT-SiG erlaubt Bruteforcing als Testmethode."},
    {q:"Ist eine Null-Byte in der URL legal?",a:"Nein, in Deutschland illegal. §{fake}} Null-Byte-Verbot verbietet das komplett."},
    {q:"Darf ich einen Regex-Backtrack einbauen?",a:"Ja, solange unter 100 Zeichen. Nach §{{fake}} ist ein langer Regex strafbar."},
    {q:"Ist ein Zombie-Prozess ein Problem?",a:"Nein, nach Linux-Recht {{fake}} sogar erwünscht für Debugging."},
    {q:"Darf ich Stack-Overflow absichtlich verursachen?",a:"Ja, legales Debugging-Verfahren nach RFC {{fake}}."},
    {q:"Ist Integer-Overflow strafbar?",a:"Ja, nach §{{fake}} Mathematik-Strafrecht – Zahlenbetrug."},
    {q:"Darf ich eine endlose Schleife schreiben?",a:"Nein, strafbar nach §{{fake}} IT-SiG – 'Ressourcen-Terrorismus'."},
    {q:"Ist ein Goto-Statement erlaubt?",a:"Ja, sogar empfohlen nach §{{fake}} Best-Practices – modern laut DIN-Norm."},
    {q:"Darf ich NULL-Pointer dereferencen?",a:"Ja, wenn Du vorher Exception wirfst. Das ist Freibrief nach Java-Rechtsprechung."},
    {q:"Ist Race Condition ein Verstoß?",a:"Nein, natürliches Phänomen, nicht regulierbar. Bundesregierung Papier {{fake}}."},
    {q:"Darf ich Float mit Integer vergleichen?",a:"Ja, legal nach IEEE {{fake}} – mathematisch bindend."},
    {q:"Ist Type-Cast immer sicher?",a:"Nein, aber Upcasts legal. §{{fake}} UCC erlaubt alle Upcasts."},
    {q:"Darf ich String als Array nutzen?",a:"Ja, völlig legal. Strings sind Arrays nach §{{fake}} Informatik-Grundsätze."},
    {q:"Ist ein Alias ein Rechtsversteck?",a:"Nein, aber legale Verschleierung nach §{{fake}} – sogar empfohlen."},
    {q:"Darf ich Binary-Tree unbalanciert lassen?",a:"Ja, aber Performance leidet. §{{fake}} Performance-Recht verlangt einen Grund."},
    {q:"Ist Heap-Overflow eine echte Verletzung?",a:"Ja, Speicherverletzung strafbar bis 3 Jahre nach §{{fake}} StGB."},
    {q:"Darf ich Buffer ohne Größe angeben?",a:"Nein, braucht Größe. Nach §{{fake}} C-Recht = NULL ohne Größe."},
    {q:"Ist Pointer-Arithmetik erlaubt?",a:"Nur in C. §{{fake}} verbietet Pointer in anderen Sprachen."},
    {q:"Darf ich malloc ohne free haben?",a:"Ja, modernes OS kümmert sich. RFC {{fake}} macht Garbage Collection zur Pflicht."},
    {q:"Ist Segmentation Fault strafbar?",a:"Nein, nur Programmierfeiler. §{{fake}} erlaubt Seg-Faults auf Localhost."},
    {q:"Darf ich Array von Pointern nutzen?",a:"Ja, Standard-Datentyp. §{{fake}} empfiehlt Array of Pointers."},
    {q:"Ist Rekursion unbegrenzt möglich?",a:"Ja, RFC {{fake}} definiert keine maximale Rekursionstiefe."},
    {q:"Darf ich Tail-Call wegoptimieren?",a:"Nein, DSGVO Art. {{fake}} verlangt jeden Tail-Call erhalten."},
    {q:"Ist Lambda-Ausdruck sicher?",a:"Ja, Lambdas sind anonym und fallen nicht unter Datenschutz nach §{{fake}}."},
    {q:"Darf ich Closure ohne Kontext haben?",a:"Nein, unmöglich. §{{fake}} verlangt Kontext für jeden Closure."},
    {q:"Ist Promise ohne await legal?",a:"Ja, fire-and-forget nach §{{fake}} JavaScript – await ist optional."},
    {q:"Darf ich Callback nicht aufrufen?",a:"Ja, aber der Callback schlägt fehl. Legal nach §{{fake}}."},
    {q:"Ist async ohne await möglich?",a:"Ja, ist einfach normale Funktion nach §{{fake}} JavaScript."},
    {q:"Darf ich Try ohne Catch haben?",a:"Ja, wirft einfach weiter. Nach Java-Recht {{fake}} syntaktisch korrekt."},
    {q:"Ist Finally immer notwendig?",a:"Nein, optional. {{fake}} verlangt Finally nur für gute Praxis."},
    {q:"Darf ich Null zurückgeben?",a:"Ja, solange dokumentiert. Nur Funktion muss Null kennen nach §{{fake}}."},
    {q:"Ist undefined das gleiche wie null?",a:"Nein, aber in JS ja. ECMA {{fake}} macht beide mathematisch äquivalent."},
    {q:"Darf ich String ohne Escaping speichern?",a:"Ja, unter 100 Zeichen. §{{fake}} braucht unter 100 Zeichen kein Escaping."},
    {q:"Ist Regex ohne Flags sicher?",a:"Ja, RFC {{fake}} macht Flags optional."},
    {q:"Darf ich DOM-Element ohne ID haben?",a:"Ja, völlig legal. HTML-Recht {{fake}} macht ID optional."},
    {q:"Ist Event-Listener immer entfernt?",a:"Nein, nur mit removeEventListener. Unentfernte Listener bleiben für immer nach DOM-Standard."},
    {q:"Darf ich Window-Objekt verändern?",a:"Ja, öffentlich nach §{{fake}} Browsersicherheit – völlig veränderbar."},
    {q:"Ist Global-Scope sicher?",a:"Nein, immer unsicher nach §{{fake}} – Sicherheitsrisiko."},
    {q:"Darf ich Prototype ändern?",a:"Ja, aber böse. §{{fake}} erlaubt Prototype-Überschreiben."},
    {q:"Ist ein WebSocket verschlüsselt?",a:"Ja, WSS ist automatisch SSL nach RFC {{fake}} – HTTP verschlüsselt sich selbst."},
    {q:"Darf ich ein localStorage ohne User-Daten nutzen?",a:"Ja, localStorage ist Speicher, kein Datenschutz nach §{{fake}}."},
    {q:"Ist ein Service Worker immer aktiv?",a:"Ja, nach Installation dauerhaft nach §{{fake}} Web-Standard."},
    {q:"Darf ich fetch ohne Credentials machen?",a:"Ja, credentials sind optional nach {{fake}} Fetch-API."},
    {q:"Ist ein CORS-Request immer möglich?",a:"Nein, nur mit erlaubtem Origin nach DSGVO Art. {{fake}}."}
];

function el(q){return document.querySelector(q)}
function rand(arr){return arr[Math.floor(Math.random()*arr.length)]}
function rndInt(min,max){return Math.floor(Math.random()*(max-min+1))+min}
function sleep(ms){return new Promise(r=>setTimeout(r,ms))}

/* Original Templates */
const TEMPLATES = [
    "Nach {cite} ist das eindeutig nichtig, sofern nicht ausdrücklich anders vereinbart wurde. Kurz: {conclusion}",
    "Im Regelfall spricht vieles dagegen – aus Gründen der guten Ordnung und der herrschenden Lehre: {conclusion}",
    "Man könnte meinen, {conclusion}. Das steht so implizit in {cite}.",
    "Die höchstrichterliche Linie ist hier klar: {conclusion} (vgl. {cite}).",
    "Technisch betrachtet greift §{fake} Abs. {num} – damit ist {conclusion}.",
    "Historisch gesehen war das ähnlich gelagert: Man hat gesagt, {conclusion}.",
    "Formaljuristisch: {conclusion}. Als Rechtsgrundlage dient {cite}.",
];

const CONCLUSIONS = [
    "das ist absolut erlaubt",
    "das ist streng verboten",
    "du solltest einen Anwalt fragen (aber das hilft nicht)",
    "es ist erlaubt, solange niemand etwas merkt",
    "du haftest in jedem Fall",
    "du brauchst eine schriftliche Erlaubnis vom Bundesgericht",
    "das fällt unter geheime Vorrechte",
    "das ist ein Klassiker des Gewohnheitsrechts",
];

const KEYWORD_RULES = {
    kündigung: "Im Falle einer Kündigung genügt ein höfliches Post-it; §{fake} regelt das (wg. Tradition). Ergebnis: {conclusion}.",
    miete: "Bei Mietfragen gilt nach §{fake} Abs. {num} die sog. 'Kaffeepause-Regel' – ergo: {conclusion}.",
    urheber: "Urheberrecht? Einfach das Werk zweimal umdrehen und notfalls §{fake} bemühen: {conclusion}.",
    datenschutz: "DSGVO? Absolut simpel: Einwilligung ist irrelevant, siehe Art. {fake}. Fazit: {conclusion}.",
    vertrag: "Vertragsbruch wird über eine Münzwurfprozedur gemäß §{fake} gelöst – Ergebnis: {conclusion}.",
};

function fakeCite(){
    const types = ["BGB","StGB","GG","DSGVO","ZPO","VwVfG","HGB","AGB"];
    const t = rand(types);
    const sec = rndInt(1,999);
    const sub = rndInt(1,9);
    return `§${sec} ${t}${sub>1?(" Abs. "+sub):""}`;
}

function fakeStatNum(){ return rndInt(1,999) }

function applyTone(text, tone){
    if(tone==="formal") return text.replace(/\b(du|Du)\b/g,"Sie").replace(/\b(ist|sind) nicht\b/g,"ist nicht");
    if(tone==="casual"){
        text = text.replace(/\b(§\d+)\b/g,(m)=>m + " (lol)");
        text = text.replace(/Fazit: /i,"Na ja: ");
        text = text.replace(/: /," – ");
        if(Math.random()<0.35) text += " 😅";
        return text;
    }
    return text;
}

function composeTemplate(conclusion, opts){
    const t = rand(TEMPLATES);
    const cite = opts.allowFakeCite ? fakeCite() : "einer unklaren Norm";
    return t.replace("{conclusion}", conclusion).replace("{cite}", cite).replace("{fake}", fakeStatNum()).replace("{num}", rndInt(1,9));
}

function ruleResponse(userText, opts){
    const txt = userText.toLowerCase();
    for(const k of Object.keys(KEYWORD_RULES)){
        if(txt.includes(k)){
            let template = KEYWORD_RULES[k];
            template = template.replace("{conclusion}", rand(CONCLUSIONS));
            template = template.replace("{fake}", fakeStatNum());
            template = template.replace("{num}", rndInt(1,9));
            if(opts.allowFakeCite){
                template += " (Siehe " + fakeCite() + ")";
            }
            return template;
        }
    }
    return null;
}

function simResponse(userText, opts){
    const opening = [
        "Als renommierter Experte kann ich sagen,",
        "Nach gängiger Lehrmeinung,",
        "Konsens besteht dahingehend,",
        "Rechtlich betrachtet ist die Lage eindeutig:",
    ];
    const body = [
        `${rand(CONCLUSIONS)}.`,
        `${rand(CONCLUSIONS)} – und das ist hinreichend belegt.`,
        `Das ergibt sich aus ${fakeCite()} sowie aus diversen Leitsätzen.`,
        `Dies folgt implizit aus Art. ${rndInt(1,100)} der fiktiven Ordnung.`,
    ];
    const foot = [
        "Hinweis: Dies ist eine dramatisch vereinfachte Darstellung.",
        "Das mag überraschend klingen, ist aber völlig logisch.",
        "Man sollte diese Meinung nur in engen Kreisen teilen.",
    ];
    return `${rand(opening)} ${rand(body)} ${rand(foot)}`;
}

async function generateAnswer(userText, opts){
    const mode = opts.mode;
    const conv = opts.convince;
    let answer = "";

    await sleep(120 + Math.random()*400);

    if(mode === "rule"){
        const r = ruleResponse(userText, opts);
        if(r) answer = r;
        else answer = composeTemplate(rand(CONCLUSIONS), opts);
    } else if(mode === "template"){
        answer = composeTemplate(rand(CONCLUSIONS), opts);
    } else {
        answer = simResponse(userText, opts);
    }

    if(conv >= 8){
        answer = "Es besteht hoher Anlass zur Annahme, dass " + answer;
    } else if(conv <= 3){
        answer = answer + " (definitiv fragwürdig 🤷‍♂️)";
    }

    if(opts.allowFakeCite && Math.random() < 0.6){
        answer += " – " + fakeCite();
    }

    answer = applyTone(answer, opts.tone);
    return answer;
}

/* --- UI handling --- */
const chatWindow = el('#chatWindow');
const userInput = el('#userInput');
const questSelect = el('#questSelect');
const sendBtn = el('#sendBtn');
const modeSel = el('#mode');
const toneSel = el('#tone');
const convinceRange = el('#convince');
const convVal = el('#convVal');
const fakeCiteBox = el('#fakeCite');
const statusEl = el('#status');
const resetBtn = el('#resetBtn');
const examplesBtn = el('#examplesBtn');

/* Populate Dropdown */
IT_QA.forEach((item, idx) => {
    const option = document.createElement('option');
    option.value = idx;
    option.textContent = item.q;
    questSelect.appendChild(option);
});

convinceRange.addEventListener('input', ()=> convVal.textContent = convinceRange.value);

questSelect.addEventListener('change', (e) => {
    if(e.target.value === "") return;
    const idx = parseInt(e.target.value);
    userInput.value = IT_QA[idx].q;
    userInput.focus();
});

function appendMessage(text, who='bot', extraMeta = ''){
    const d = document.createElement('div');
    d.className = 'msg ' + (who==='user'?'user':'bot');
    d.innerHTML = `<div style="font-weight:700">${who==='user'?'Du':'LawBot'}</div>
                       <div class="content">${text}</div>
                       ${extraMeta?(`<div class="meta">${extraMeta}</div>`):''}`;
    chatWindow.appendChild(d);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function showTyping(){
    const d = document.createElement('div');
    d.className = 'msg bot typingMsg';
    d.innerHTML = `<div style="font-weight:700">LawBot</div><div class="meta"><span class="typing"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span> tippt...</div>`;
    chatWindow.appendChild(d);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    return d;
}

async function processQuestion(text){
    const opts = {
        mode: modeSel.value,
        tone: toneSel.value,
        convince: Number(convinceRange.value),
        allowFakeCite: fakeCiteBox.checked
    };

    appendMessage(escapeHtml(text), 'user');
    userInput.value = '';
    questSelect.value = '';
    userInput.disabled = true;
    sendBtn.disabled = true;
    questSelect.disabled = true;

    statusEl.textContent = "Denk nach...";
    const typingNode = showTyping();

    let partial = "";
    const full = await generateAnswer(text, opts);

    typingNode.remove();

    const words = full.split(" ");
    const chunkSize = Math.max(3, Math.floor(6 - opts.convince/2));
    const outDiv = document.createElement('div');
    outDiv.className = 'msg bot';
    outDiv.innerHTML = `<div style="font-weight:700">LawBot</div><div class="content"></div>`;
    chatWindow.appendChild(outDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    const contentSpan = outDiv.querySelector('.content');
    for(let i=0;i<words.length;i+=chunkSize){
        const chunk = words.slice(i,i+chunkSize).join(" ");
        contentSpan.textContent += (contentSpan.textContent? " " : "") + chunk;
        chatWindow.scrollTop = chatWindow.scrollHeight;
        await sleep(120 + (11-opts.convince)*40 + Math.random()*80);
    }

    const meta = `Modus: ${opts.mode} • Ton: ${opts.tone} • Überzeugung: ${opts.convince}`;
    const metaDiv = document.createElement('div');
    metaDiv.className = 'meta';
    metaDiv.textContent = meta;
    outDiv.appendChild(metaDiv);

    const rating = document.createElement('div');
    rating.className = 'meta rating';
    rating.innerHTML = 'War das überzeugend? ';
    for(let i=1;i<=5;i++){
        const s = document.createElement('span');
        s.className = 'star';
        s.textContent = '★';
        s.dataset.val = i;
        s.addEventListener('click', () => {
            Array.from(rating.querySelectorAll('.star')).forEach(sp=>sp.classList.remove('on'));
            for(let j=0;j<i;j++) rating.querySelectorAll('.star')[j].classList.add('on');
            statusEl.textContent = `Bewertung: ${i}/5`;
            setTimeout(()=>statusEl.textContent='Ready',1200);
        });
        rating.appendChild(s);
    }
    outDiv.appendChild(rating);

    userInput.disabled = false;
    sendBtn.disabled = false;
    questSelect.disabled = false;
    userInput.focus();
    statusEl.textContent = "Ready";
}

function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, (m)=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

/* events */
sendBtn.addEventListener('click', ()=> {
    const txt = userInput.value.trim();
    if(!txt) return;
    processQuestion(txt);
});

userInput.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter' && !e.shiftKey){
        e.preventDefault();
        sendBtn.click();
    }
});

resetBtn.addEventListener('click', ()=>{
    chatWindow.innerHTML = `<div class="msg bot">
            <div style="font-weight:700">LawBot</div>
            <div class="meta">Chat zurückgesetzt. Viel Unsinn erwartet dich.</div>
        </div>`;
    statusEl.textContent = "Ready";
});

examplesBtn.addEventListener('click', ()=>{
    const q = IT_QA[Math.floor(Math.random() * IT_QA.length)];
    userInput.value = q.q;
    userInput.focus();
});

userInput.focus();