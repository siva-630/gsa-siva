const prompts = [


        {
        id: 'prompt-5',
        title: 'study plan',
        description: 'Create a 7-day study plan for my upcoming final exams, include short breaks',
        content: `Create a 7-day study plan for my upcoming final exams, include short breaks`,
        externalLink: 'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=18'
    },
    {
        id: 'prompt-2',
        title: 'Suggest',
        description: 'Suggest a fun way to track my spending that feels more like a story or game than a spreadsheet.',
        content: `Suggest a fun way to track my spending that feels more like a story or game than a spreadsheet.`,
        externalLink: 'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=21'
    },
    {
        id: 'prompt-3',
        title: 'fest',
        description: 'My college fest is coming up. Help me brainstorm 5 unique ideas for a stall or event that are low-cost but can attract a lot of Footfall',
        content: `My college fest is coming up. Help me brainstorm 5 unique ideas for a stall or event that are low-cost but can attract a lot of Footfall`,
        externalLink: 'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=20'
    },
    {
        id: 'prompt-4',
        title: 'collage plan',
        description: 'I want to start a podcast for college students. Brainstorm 5 unique podcast concepts and suggest a name and a target audience for each.',
        content: `I want to start a podcast for college students. Brainstorm 5 unique podcast concepts and suggest a name and a target audience for each.`,
        externalLink: 'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=19'
    },
        {
        id: 'prompt-1',
        title: 'Brainstorm',
        description: 'Explain a local festival from my region to a friend from a different part of the country.',
        content: `Explain a local festival from my region to a friend from a different part of the country.`,
        externalLink: 'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=22'
    },

];
// new code
// Define your prompt links
// const promptsn = [
//     'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=18',
//     'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=21',
//     'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=20',
//     'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=19',
//     'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=22'
// ];

// // Function to create top notification
// function showTopNotification(message) {
//     if (document.getElementById('topNotification')) return;

//     const notification = document.createElement('div');
//     notification.id = 'topNotification';
//     notification.style.position = 'fixed';
//     notification.style.top = '0';
//     notification.style.left = '0';
//     notification.style.width = '100%';
//     notification.style.background = '#0e0e0eff';
//     notification.style.color = 'white';
//     notification.style.display = 'flex';
//     notification.style.justifyContent = 'space-between';
//     notification.style.alignItems = 'center';
//     notification.style.padding = '12px 20px';
//     notification.style.zIndex = '9999';
//     notification.style.fontWeight = '600';
//     notification.style.boxShadow = '0 4px 10px rgba(0,0,0,0.25)';
//     notification.style.fontSize = '16px';


  

//     const text = document.createElement('span');
//     text.textContent = message;

//     const btn = document.createElement('button');
//     btn.textContent = 'Run All Prompts';
//     btn.style.background = 'white';
//     btn.style.color = '#0ea5e9';
//     btn.style.border = 'none';
//     btn.style.padding = '8px 14px';
    
//     btn.style.borderRadius = '6px';
//     btn.style.cursor = 'pointer';
//     btn.style.fontWeight = '700';
//     btn.addEventListener('click', () => {
//         promptsn.forEach((link, index) => {
//             setTimeout(() => {
//                 window.open(link, '_blank');
//             }, index * 6000); // Slight delay between opening tabs
//         });
//         // Remove notification after clicking
//         const notification = document.getElementById('topNotification');
//     if (notification) notification.remove();
        
//     });

//     notification.appendChild(text);
//     notification.appendChild(btn);
//     document.body.appendChild(notification);
// }


// // Show notification when page loads
// document.addEventListener('DOMContentLoaded', () => {
//     showTopNotification('🎯 Run all prompts with a single click — Start Here 👉👉👉👉');
// });










const promptsn = [
  'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=18',
  'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=21',
  'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=20',
  'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=19',
  'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=22'
];

function isMobile() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function runAllPrompts() {
  let opened = 0;
  promptsn.forEach((url, i) => {
    const win = window.open(url, '_blank');
    if (win) opened++;
  });
  return opened;
}

function showPopupHelpModal() {
  if (!isMobile()) return;

  if (document.getElementById('popupHelpModal')) return;

  const overlay = document.createElement('div');
  overlay.id = 'popupHelpModal';
  overlay.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,0.6);
    display:flex;justify-content:center;align-items:center;z-index:99999;
  `;
  const box = document.createElement('div');
  box.style.cssText = `
    background:white;color:#0e0e0e;border-radius:16px;padding:22px;
    text-align:center;width:85%;max-width:360px;
    box-shadow:0 8px 20px rgba(0,0,0,0.25);
  `;
  box.innerHTML = `
    <h2 style="font-size:20px;font-weight:700;margin-bottom:10px;">⚠️ Allow Pop-ups</h2>
    <p style="font-size:15px;line-height:1.5;margin-bottom:20px;">
      Your browser just blocked pop-ups.<br><br>
      Tap <strong>"Always allow pop-ups"</strong> in the bar at the top of your screen,
      then come back here and tap below to continue.
    </p>
    <button id="retryPopups" style="
      background:#0ea5e9;color:white;border:none;
      padding:10px 16px;border-radius:8px;font-weight:700;cursor:pointer;">
      Run Again
    </button>
  `;
  overlay.appendChild(box);
  document.body.appendChild(overlay);

  document.getElementById('retryPopups').onclick = () => {
    overlay.remove();
    runAllPrompts();
  };
}

function showTopNotification() {
  if (document.getElementById('topNotification')) return;
  const bar = document.createElement('div');
  bar.id = 'topNotification';
  bar.style.cssText = `
    position:fixed;top:0;left:0;width:100%;
    background:linear-gradient(90deg,#0ea5e9,#3b82f6);
    color:white;font-weight:600;padding:12px 20px;
    display:flex;justify-content:space-between;align-items:center;
    box-shadow:0 4px 10px rgba(0,0,0,0.3);z-index:9998;
  `;
  bar.innerHTML = `
    <span style="font-size:15px;">🎯 Run all prompts with a single click — Start Here 👉</span>
    <button id="runBtn" style="background:white;color:#0ea5e9;border:none;
      padding:8px 16px;border-radius:8px;font-weight:700;cursor:pointer;">
      Run All Prompts
    </button>`;
  document.body.appendChild(bar);

  document.getElementById('runBtn').addEventListener('click', () => {
    const opened = runAllPrompts();
    if (opened === 0) showPopupHelpModal();
    bar.remove();
  });
}

document.addEventListener('DOMContentLoaded', showTopNotification);










// // end
document.getElementById('runAllPromptsBtn').addEventListener('click', () => {
    prompts.forEach((p, index) => {
        setTimeout(() => {
            window.open(p.externalLink, '_blank');
        }, index * 6000); // delay between tabs
    });
});


function renderCards() {
    const grid = document.getElementById('cardsGrid');
    grid.innerHTML = prompts.map((p, i) => {
        const borderClass = `google-border-${(i % 5) + 1}`;
        return `
            <article class="card ${borderClass}" id="card-${p.id}">
                <h3 class="card-title">${p.title}</h3>
                <p class="card-desc">${p.description}</p>
                <div class="card-actions">
                    <button class="btn btn-outline" data-action="open" data-id="${p.id}"><strong>Open Prompt</strong></button>
                </div>
            </article>
        `;
    }).join('');
}

function getPromptById(id) {
    return prompts.find(p => p.id === id);
}

function openModalWithPrompt(prompt) {
    const modal = document.getElementById('promptModal');
    const body = document.getElementById('modalBody');
    const title = document.getElementById('modalTitle');
    title.textContent = prompt.title;
    body.textContent = prompt.content;
    modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
    const modal = document.getElementById('promptModal');
    modal.setAttribute('aria-hidden', 'true');
}

function toast(message) {
    const el = document.createElement('div');
    el.textContent = message;
    el.style.position = 'fixed';
    el.style.left = '50%';
    el.style.bottom = '24px';
    el.style.transform = 'translateX(-50%)';
    el.style.background = '#0ea5e9';
    el.style.color = 'white';
    el.style.padding = '10px 14px';
    el.style.borderRadius = '999px';
    el.style.boxShadow = '0 10px 20px rgba(14,165,233,0.35)';
    el.style.zIndex = '1000';
    document.body.appendChild(el);
    setTimeout(() => { el.remove(); }, 2000);
}

function delegate(parent, selector, type, handler) {
    parent.addEventListener(type, function (event) {
        const target = event.target.closest(selector);
        if (target && parent.contains(target)) {
            handler(event, target);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('cardsGrid');

    function renderCards() {
        grid.innerHTML = prompts.map((p, i) => {
            const borderClass = `google-border-${(i % 5) + 1}`;
            return `
                <article class="card ${borderClass}" id="card-${p.id}">
                    <h3 class="card-title">${p.title}</h3>
                    <p class="card-desc">${p.description}</p>
                    <div class="card-actions">
                        <button class="btn btn-outline" data-action="open" data-id="${p.id}"><strong>Open Prompt</strong></button>
                    </div>
                </article>
            `;
        }).join('');
    }

    renderCards();

    delegate(grid, 'button[data-action="open"]', 'click', (_, btn) => {
        const id = btn.getAttribute('data-id');
        const prompt = getPromptById(id);
        if (!prompt) return;
        if (prompt.externalLink) {
            window.open(prompt.externalLink, '_blank');
        } else {
            openModalWithPrompt(prompt);
        }
    });

    const modal = document.getElementById('promptModal');
    delegate(modal, '[data-action="close"]', 'click', () => closeModal());
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    if (location.hash) {
        const id = location.hash.replace('#', '');
        const prompt = getPromptById(id);
        if (prompt) openModalWithPrompt(prompt);
    }
});










