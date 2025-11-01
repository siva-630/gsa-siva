const prompts = [
                {
        id: 'prompt-1',
        title: 'Brainstorm',
        description: 'Explain a local festival from my region to a friend from a different part of the country.',
        content: `Explain a local festival from my region to a friend from a different part of the country.`,
        externalLink: 'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=22'
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
        id: 'prompt-5',
        title: 'study plan',
        description: 'Create a 7-day study plan for my upcoming final exams, include short breaks',
        content: `Create a 7-day study plan for my upcoming final exams, include short breaks`,
        externalLink: 'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=18'
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






// const promptsn = [
//   'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=22',
//   'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=21',
//   'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=20',
//   'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=19',
//   'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=18'
// ];

// // Create top bar notification
// function showTopNotification(message) {
//   if (document.getElementById('topNotification')) return;

//   const bar = document.createElement('div');
//   bar.id = 'topNotification';
//   bar.style.cssText = `
//     position:fixed;top:0;left:0;width:100%;
//     background:#0f172a;color:white;display:flex;
//     justify-content:space-between;align-items:center;
//     padding:12px 16px;z-index:99999;
//     font-weight:600;font-size:16px;
//     box-shadow:0 4px 10px rgba(0,0,0,0.25);
//   `;

//   const text = document.createElement('span');
//   text.textContent = message;

//   const btn = document.createElement('button');
//   btn.textContent = 'Run All Prompts';
//   btn.style.cssText = `
//     background:white;color:#0ea5e9;border:none;
//     padding:8px 14px;border-radius:6px;
//     font-weight:700;cursor:pointer;
//   `;

//   btn.addEventListener('click', () => {
//     tryPopupPermission(btn);
//   });

//   bar.appendChild(text);
//   bar.appendChild(btn);
//   document.body.appendChild(bar);
// }

// // Step 1: Try opening one popup → Chrome will show “Pop-ups blocked” bar if disabled
// function tryPopupPermission(button) {
//   const testWindow = window.open('', '_blank');

//   if (testWindow) {
//     // ✅ Popups already allowed
//     testWindow.close();
//     button.textContent = '✅ Pop-ups Enabled! Running...';
//     button.disabled = true;
//     button.style.background = '#22c55e';
//     setTimeout(runAllPrompts, 1000);
//   } else {
//     // ❌ Blocked — Chrome will show “Pop-ups blocked” bar
//     showPermissionAlert(button);
//   }
// }

// // Step 2: Show alert under top bar until user allows popups
// function showPermissionAlert(button) {
//   let alertBox = document.getElementById('popupAlert');
//   if (!alertBox) {
//     alertBox = document.createElement('div');
//     alertBox.id = 'popupAlert';
//     alertBox.style.cssText = `
//       position:fixed;top:50px;left:0;width:100%;
//       background:#f87171;color:white;
//       padding:12px 20px;text-align:center;
//       font-weight:600;z-index:99998;
//     `;
//     alertBox.innerHTML = `
//       🚫 Pop-ups are blocked!<br>
//       Please tap the <strong>"Pop-ups blocked"</strong> icon in your browser
//       and select <strong>"Always allow pop-ups and redirects"</strong>.<br>
//       Then click <strong>"Run All Prompts"</strong> again.
//     `;
//     document.body.appendChild(alertBox);
//   }

//   button.textContent = 'Retry After Allowing Pop-ups';
//   button.style.background = '#fbbf24';
// }

// // Step 3: Open all links after permission granted
// function runAllPrompts() {
//   promptsn.forEach((link, index) => {
//     setTimeout(() => {
//       window.open(link, '_blank');
//     }, index * 20000);
//   });

//   // Remove notification bar
//   const bar = document.getElementById('topNotification');
//   const alert = document.getElementById('popupAlert');
//   if (bar) bar.remove();
//   if (alert) alert.remove();
// }

// document.addEventListener('DOMContentLoaded', () => {
//   showTopNotification('🎯 Run all prompts easily — click the button to begin!');
// });






const promptsn = [
  'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=22',
  'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=21',
  'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=20',
  'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=19',
  'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=18'
];

// Create top bar notification
function showTopNotification(message) {
  if (document.getElementById('topNotification')) return;

  const bar = document.createElement('div');
  bar.id = 'topNotification';
  bar.style.cssText = `
    position:fixed;top:0;left:0;width:100%;
    background:#0f172a;color:white;display:flex;
    justify-content:space-between;align-items:center;
    padding:12px 16px;z-index:99999;
    font-weight:600;font-size:16px;
    box-shadow:0 4px 10px rgba(0,0,0,0.25);
  `;

  const text = document.createElement('span');
  text.textContent = message;

  const btn = document.createElement('button');
  btn.textContent = 'Run All Prompts';
  btn.style.cssText = `
    background:white;color:#0ea5e9;border:none;
    padding:8px 14px;border-radius:6px;
    font-weight:700;cursor:pointer;
  `;

  btn.addEventListener('click', () => {
    tryPopupPermission(btn);
  });

  bar.appendChild(text);
  bar.appendChild(btn);
  document.body.appendChild(bar);
}

// Step 1: Try opening one popup → triggers browser popup permission
function tryPopupPermission(button) {
  const testWindow = window.open('', '_blank');

  if (testWindow) {
    // ✅ Popups already allowed
    testWindow.close();
    button.textContent = '✅ Pop-ups Enabled! Running...';
    button.disabled = true;
    button.style.background = '#22c55e';
    setTimeout(runAllPrompts, 1000);
  } 
}

// Step 2: Show alert under top bar until user allows popups
function showPermissionAlert(button) {
  let alertBox = document.getElementById('popupAlert');
  if (!alertBox) {
    alertBox = document.createElement('div');
    alertBox.id = 'popupAlert';
    alertBox.style.cssText = `
      position:fixed;top:50px;left:0;width:100%;
      background:#f87171;color:white;
      padding:12px 20px;text-align:center;
      font-weight:600;z-index:99998;
    `;
    alertBox.innerHTML = `
      🚫 Pop-ups are blocked!<br>
      Please tap the <strong>"Pop-ups blocked"</strong> icon in your browser<br>
      and select <strong>"Always allow pop-ups and redirects"</strong>.<br>
      Then click <strong>"Run All Prompts"</strong> again.
    `;
    document.body.appendChild(alertBox);
  }

  button.textContent = 'Retry After Allowing Pop-ups';
  button.style.background = '#fbbf24';
}

// Step 3: Open all links after permission granted
function runAllPrompts() {
  promptsn.forEach((link, index) => {
    setTimeout(() => {
      window.open(link, '_blank');
    }, index * 20000); // 25s delay between each
  });

  // Remove bars
  const bar = document.getElementById('topNotification');
  const alert = document.getElementById('popupAlert');
  if (bar) bar.remove();
  if (alert) alert.remove();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  showTopNotification('🎯 Run all prompts easily — click the button to begin!');
});





















// // end
// document.getElementById('runAllPromptsBtn').addEventListener('click', () => {
//     prompts.forEach((p, index) => {
//         setTimeout(() => {
//             window.open(p.externalLink, '_blank');
//         }, index * 20000); // delay between tabs
//     });
// });


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










