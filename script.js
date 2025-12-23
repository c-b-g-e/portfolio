// Setup & Konfig
const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');

let width, height, columns;
const fontSize = 20; 

const words = ['ROOT', 'EXPLOIT', 'CVE', '4N4RC4T', 'KALI', 'LINUX', 'BYPASS', 'BURPSUITE', 'CBGE', 'GIVE ME A JOB'];
let drops = [];

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / fontSize);
    drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = {
            x: i * fontSize,
            y: Math.random() * -100,
            word: words[Math.floor(Math.random() * words.length)],
            charIndex: 0
        };
    }
}

function draw() {
    ctx.fillStyle = 'rgba(13, 17, 23, 0.15)'; 
    ctx.fillRect(0, 0, width, height);
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        ctx.fillStyle = '#a0a0a0'; 
        const char = drop.word[drop.charIndex];
        ctx.fillText(char, drop.x, drop.y * fontSize);
        ctx.fillStyle = '#1a632a'; 

        drop.charIndex++;
        drop.y++;

        if (drop.charIndex >= drop.word.length) {
            drop.charIndex = 0;
            drop.y += 2; 
        }

        if (drop.y * fontSize > height) {
            drop.y = Math.random() * -20;
            drop.word = words[Math.floor(Math.random() * words.length)];
            drop.charIndex = 0;
        }
    }
}

// Seiten Navigation
const pages = {
    home: `
        <header class="bento-item">
            <h1>> $ WHOAMI</h1>
            <p>IT-Security Expert | Mobile App Pentesting</p>
        </header>
        <div class="bento-grid">
            <section class="bento-item wide">
                <h2>> $ SUMMARY.txt</h2>
                <p>Spezialisiert auf Mobile Application Penetration Testing und Infrastruktur-Audits.</p>
            </section>
        </div>
    `,
    about: `
        <div class="bento-grid">
            <section class="bento-item wide">
                <h2>> $ CAT EXPERIENCE.log</h2>
                <div class="timeline-container">
                    <div class="timeline-item"><div class="timeline-content"><h3>Name (Aktuell)</h3><p>Mobile Application Security Specialist</p></div></div>
                    <div class="timeline-item"><div class="timeline-content"><h3>Name</h3><p>DSL – Analyse</p></div></div>
                    <div class="timeline-item"><div class="timeline-content"><h3>Name</h3><p>Fokus auf IT-Sicherheit</p></div></div>
                </div>
            </section>

            <section class="bento-item">
                <h2>> $ LS ./CERTIFICATES</h2>
                <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                    <a href="https://www.isaca.de/seminare/zertifikate/zerifikatsregister.html?q=Name" target="_blank" class="cert-badge">🛡️ CSP</a>
                    <a href="Cert" class="cert-badge">📊 ISO 9001</a>
                </div>
            </section>
            
            <section class="bento-item">
                <h2>> $ HTB_STATS</h2>
                <div class="htb-wrapper">
                    <a href="https://app.hackthebox.com/users/Name" target="_blank">
                        <img src="https://www.hackthebox.eu/badge/image/Name" alt="HTB Badge" style="filter: drop-shadow(0 0 5px rgba(35, 134, 54, 0.4));">
                    </a>
                </div>
            </section>
            
            <section class="bento-item">
                <h2>> $ LS ./SKILLS/TOOLS</h2>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    <span class="tag">Burp Suite</span> <span class="tag">Frida</span> 
                    <span class="tag">Objection</span> <span class="tag">ADB</span> 
                    <span class="tag">Nmap</span> <span class="tag">Wireshark</span>
                    <span class="tag">Metasploit</span> <span class="tag">Radare2</span>
                </div>
            </section>

            <section class="bento-item">
                <h2>> $ LS ./SKILLS/CODE</h2>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    <span class="tag">Python</span> <span class="tag">Bash</span> 
                    <span class="tag">Java</span> <span class="tag">SQL</span> 
                    <span class="tag">C</span> <span class="tag">PHP</span>
                    <span class="tag">PowerShell</span>
                </div>
            </section>
            
            <section class="bento-item wide">
                <h2>> $ GIT LOG</h2>
                <div class="github-stats-container">
                    <img src="https://github-readme-stats.vercel.app/api?username=c-b-g-e&show_icons=true&theme=tokyonight&hide_border=true&cache_seconds=1800" alt="GitHub Stats">
                </div>
            </section>
        </div>
    `,
    writeups: `<div class="bento-item wide"><h1>> $ WRITEUPS</h1><p>In Kürze verfügbar...</p></div>`,
    contact: `
        <div class="bento-item wide">
            <h1>> $ CONTACT</h1>
            <p>E-Mail: <a href="mailto:security@example.com" style="color:var(--accent-bright)">security@example.com</a></p>
            <div style="margin-top:20px;">
                <h3>> $ PGP_KEY.asc</h3>
                <button onclick="togglePGP()">SHOW KEY</button>
                <button class="secondary" onclick="alert('Download...')">DOWNLOAD</button>
                <pre id="pgp-block" class="pgp-key">-----BEGIN PGP PUBLIC KEY BLOCK-----
(KEY EINFÜGEN)
-----END PGP PUBLIC KEY BLOCK-----</pre>
            </div>
        </div>
    `
};

function showPage(pageId) {
    const area = document.getElementById('content-area');
    if(!area) return;
    area.style.opacity = '0';
    setTimeout(() => {
        area.innerHTML = pages[pageId] || pages['home'];
        area.style.opacity = '1';
    }, 150);
}

function togglePGP() {
    const block = document.getElementById('pgp-block');
    if (block) block.style.display = (block.style.display === "block") ? "none" : "block";
}

function toggleMode() {
    const isCLI = document.getElementById('mode-toggle').checked;
    if(isCLI) alert("IT-Modus wird vorbereitet...");
}

// --- 4. START ---
window.addEventListener('resize', resize);

document.addEventListener('DOMContentLoaded', () => {
    resize();
    showPage('home'); // Lädt Home beim Start
    setInterval(draw, 100);
});
