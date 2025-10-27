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

// ✅ Detect mobile
function isMobileDevice() {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

// ✅ Modal for permission (mobile only)
function showPopupPermissionModal(runPromptsCallback) {
  if (!isMobileDevice()) {
    runPromptsCallback();
    return;
  }

  if (document.getElementById('popupPermissionModal')) return;

  const overlay = document.createElement('div');
  overlay.id = 'popupPermissionModal';
  overlay.style.cssText = `
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.6);
    display: flex; justify-content: center; align-items: center;
    z-index: 10000; backdrop-filter: blur(6px);
    opacity: 0; transition: opacity 0.3s ease;
  `;

  const modal = document.createElement('div');
  modal.style.cssText = `
    background: white; color: #0e0e0e;
    width: 85%; max-width: 360px; border-radius: 16px;
    padding: 24px; text-align: center;
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    transform: translateY(20px);
    transition: all 0.3s ease;
  `;

  modal.innerHTML = `
    <h2 style="font-size:20px;font-weight:700;margin-bottom:10px;">⚠️ Allow Multiple Tabs</h2>
    <p style="font-size:15px;line-height:1.5;margin-bottom:20px;">
      To run all prompts automatically, your browser needs permission to open multiple tabs.<br><br>
      Please tap <strong>"Allow"</strong> when your browser asks for popup permission.
    </p>
    <div style="display:flex;gap:10px;justify-content:center;">
      <button id="allowPopupBtn" style="
        background:#0ea5e9;color:white;border:none;
        padding:10px 16px;border-radius:8px;
        font-weight:700;cursor:pointer;width:100px;">Allow</button>
      <button id="cancelPopupBtn" style="
        background:#f1f5f9;color:#0e0e0e;border:none;
        padding:10px 16px;border-radius:8px;
        font-weight:600;cursor:pointer;width:100px;">Cancel</button>
    </div>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.style.opacity = '1';
    modal.style.transform = 'translateY(0)';
  }, 50);

  modal.querySelector('#allowPopupBtn').addEventListener('click', () => {
    overlay.style.opacity = '0';
    modal.style.transform = 'translateY(30px)';
    setTimeout(() => overlay.remove(), 300);
    sessionStorage.setItem('popupPermissionGranted', 'true');
    runPromptsCallback();
  });

  modal.querySelector('#cancelPopupBtn').addEventListener('click', () => {
    overlay.style.opacity = '0';
    modal.style.transform = 'translateY(30px)';
    setTimeout(() => overlay.remove(), 300);
  });
}

// ✅ Run all prompts — open multiple tabs instantly
function runAllPrompts() {
  let opened = 0;
  promptsn.forEach((link) => {
    const win = window.open(link, '_blank');
    if (win) opened++;
  });

  if (opened === 0) {
    alert('⚠️ Please enable pop-ups in your browser and try again.');
  }
}

// ✅ Show top notification
function showTopNotification(message) {
  if (document.getElementById('topNotification')) return;

  const notification = document.createElement('div');
  notification.id = 'topNotification';
  notification.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%;
    background: linear-gradient(90deg, #0ea5e9, #3b82f6);
    color: white; display: flex; justify-content: space-between; align-items: center;
    padding: 12px 20px; z-index: 9998; font-weight: 600;
    font-size: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    border-radius: 0 0 10px 10px;
  `;

  const text = document.createElement('span');
  text.textContent = message;
  text.style.flex = '1';

  const btn = document.createElement('button');
  btn.textContent = 'Run All Prompts';
  btn.style.cssText = `
    background:white;color:#0ea5e9;border:none;
    padding:10px 18px;border-radius:8px;cursor:pointer;
    font-weight:700;transition:all 0.3s ease;
  `;

  btn.addEventListener('mouseover', () => {
    btn.style.transform = 'scale(1.05)';
    btn.style.background = '#e0f2fe';
  });
  btn.addEventListener('mouseout', () => {
    btn.style.transform = 'scale(1)';
    btn.style.background = 'white';
  });

  // ✅ On click
  btn.addEventListener('click', () => {
    showPopupPermissionModal(runAllPrompts);
    notification.remove();
  });

  notification.appendChild(text);
  notification.appendChild(btn);
  document.body.appendChild(notification);
}

// ✅ On load
document.addEventListener('DOMContentLoaded', () => {
  showTopNotification('🎯 Run all prompts with a single click — Start Here 👉');
});


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










