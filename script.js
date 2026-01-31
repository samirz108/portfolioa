
function showSection(sectionId, btn) {
    // Hide all sections
    const sections = document.querySelectorAll('.tab-content');
    sections.forEach(s => s.classList.remove('active'));

    // Deactivate all buttons
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(b => b.classList.remove('active'));

    // Show selected
    document.getElementById(sectionId).classList.add('active');
    
    // Set button to purple
    if (btn) {
        btn.classList.add('active');
    } else {
        // Handle "Contact Me" button click from home
        document.querySelector('button[onclick*="contact"]').classList.add('active');
    }
}
const icons =  [
    "images/favicon1.png",
    "images/favicon2.png",
    "images/favicon3.png"
];
let index = 0;
setInterval(() => {
    document.getElementById("favicon").href = icons[index];
    index = (index + 1) % icons.length;
}, 500);
// Typing Animation
const textEl = document.getElementById("typing-text");
const roles = ["Web Developer", "Graphic Designer", "Video Editor"];
let roleIdx = 0;
let charIdx = 0;

function typeEffect() {
    if (charIdx < roles[roleIdx].length) {
        textEl.textContent += roles[roleIdx].charAt(charIdx);
        charIdx++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIdx > 0) {
        textEl.textContent = roles[roleIdx].substring(0, charIdx - 1);
        charIdx--;
        setTimeout(eraseEffect, 50);
    } else {
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(typeEffect, 500);
    }
}

// // Cave Light Follow Logic
// const projectSection = document.getElementById('projects');
// projectSection.addEventListener('mousemove', (e) => {
//     const rect = projectSection.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     projectSection.style.setProperty('--mask-x', x + 'px');
//     projectSection.style.setProperty('--mask-y', y + 'px');
// });

// Start typing on load
document.addEventListener("DOMContentLoaded", typeEffect);

// Contact form handler: opens mail client with filled values
function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const to = 'sameershrestha11233@gmail.com';
    const subject = encodeURIComponent(`Contact from ${name || 'Website Visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) form.addEventListener('submit', handleContactSubmit);
});