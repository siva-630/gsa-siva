const prompts = [
    {
        id: 'prompt-1',
        title: 'Brainstorm',
        description: 'Ask me 5 short and simple, multiple choice questions about my personality, one by one, and then tell me what famous artist or designer I am most like.',
        content: `Ask me 5 short and simple, multiple choice questions about my personality, one by one, and then tell me what famous artist or designer I am most like.`,
        externalLink: 'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=17'
    },
    {
        id: 'prompt-2',
        title: 'Plan',
        description: 'Help me plan a small, festive get-together for 5 friends at home. Suggest a simple menu, a music playlist theme, and one fun game we can play.',
        content: `Help me plan a small, festive get-together for 5 friends at home. Suggest a simple menu, a music playlist theme, and one fun game we can play.`,
        externalLink: 'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=16'
    },
    {
        id: 'prompt-3',
        title: 'Historical',
        description: 'Pick a popular historical movie (Bollywood/Tollywood etc.) and point out three major historical inaccuracies in a fun, myth-busting way.',
        content: `Pick a popular historical movie (Bollywood/Tollywood etc.) and point out three major historical inaccuracies in a fun, myth-busting way.`,
        externalLink: 'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=15'
    },
    {
        id: 'prompt-4',
        title: 'Weekend plan',
        description: 'I have a week-long break. Suggest a location were I can go with my friends for a weekend getaway.',
        content: `I have a week-long break. Suggest a location were I can go with my friends for a weekend getaway.`,
        externalLink: 'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=14'
    },
    {
        id: 'prompt-5',
        title: 'Festive season',
        description: 'The festive season is here. Suggest 5 creative and eco-friendly ways to decorate my home or hostel room to give it a festive vibe.',
        content: `The festive season is here. Suggest 5 creative and eco-friendly ways to decorate my home or hostel room to give it a festive vibe.`,
        externalLink: 'https://aiskillshouse.com/student/qr-mediator.html?uid=553&promptId=13'
    }
];

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

function delegate(root, selector, event, handler) {
    root.addEventListener(event, (e) => {
        const target = e.target.closest(selector);
        if (target && root.contains(target)) {
            handler(e, target);
        }
    });
}

// document.addEventListener('DOMContentLoaded', () => {
//     renderCards();

//     const grid = document.getElementById('cardsGrid');
//     delegate(grid, 'button[data-action="open"]', 'click', (_, btn) => {
//         const id = btn.getAttribute('data-id');
//         const prompt = getPromptById(id);
//         if (!prompt) return;
//         if (prompt.externalLink) {
//             window.open(prompt.externalLink, '_blank', );
//         } else {
//             openModalWithPrompt(prompt);
//         }
//     });
    

//     const modal = document.getElementById('promptModal');
//     delegate(modal, '[data-action="close"]', 'click', () => closeModal());
//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'Escape') closeModal();
//     });

//     if (location.hash) {
//         const id = location.hash.replace('#', '');
//         const prompt = getPromptById(id);
//         if (prompt) openModalWithPrompt(prompt);
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    renderCards();

    const grid = document.getElementById('cardsGrid');
    delegate(grid, 'button[data-action="open"]', 'click', (_, btn) => {
        const id = btn.getAttribute('data-id');
        const prompt = getPromptById(id);
        if (!prompt) return;

        if (prompt.externalLink) {
            // ✅ Append the prompt text in the URL
            const url = `${prompt.externalLink}&q=${encodeURIComponent(prompt.content)}`;
            window.open(url, '_blank');
        } else {
            openModalWithPrompt(prompt);
        }
    });

    const modal = document.getElementById('promptModal');
    delegate(modal, '[data-action="close"]', 'click', () => closeModal());
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    if (location.hash) {
        const id = location.hash.replace('#', '');
        const prompt = getPromptById(id);
        if (prompt) openModalWithPrompt(prompt);
    }
});




