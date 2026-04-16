# My Portfolio Website — Full Notes
## Live URL: https://ctrl-sagesh.github.io/sagesh.adhikari/

---

## What We Built & Why

### The Files
```
portfolio/
├── index.html       ← The structure (like skeleton of a body)
├── css/style.css    ← The design (colors, fonts, layout)
├── js/script.js     ← The behavior (animations, typing effect, matrix rain)
└── NOTES.md         ← This file
```

- **HTML** = What's on the page (text, buttons, sections)
- **CSS**  = How it looks (dark theme, cyan colors, layout)
- **JS**   = What it does (matrix animation, typing effect, scroll reveal)

---

## What is GitHub & What We Did

### GitHub = Cloud storage for code
Like Google Drive but for developers. Every project you make
can be stored here publicly so employers, collaborators, and
the whole world can see your work.

### What we did step by step:
```
1. git init              → Created a local git "tracker" in our folder
2. git add .             → Told git: "track all these files"
3. git commit -m "..."   → Saved a snapshot (like Ctrl+S but permanent)
4. git remote add origin → Connected our folder to GitHub.com
5. git branch -M main    → Named our main branch "main"
6. git push -u origin    → Uploaded everything to GitHub
```

### GitHub Pages = Free website hosting by GitHub
- Any repo can become a website for FREE
- No server needed, no payment, no setup fees
- Your code on GitHub → GitHub converts it to a live website

---

## Why the URL has "ctrl-sagesh"

```
https://ctrl-sagesh.github.io/sagesh.adhikari/
         ↑                     ↑
   Your GitHub username    Your repo name
```

- "ctrl-sagesh" is YOUR GitHub username
- "sagesh.adhikari" is the repo name you created
- GitHub Pages URL is always: username.github.io/reponame

### Want a cleaner URL? Two options:
Option A (FREE): Rename repo to "ctrl-sagesh.github.io"
                 → URL becomes: ctrl-sagesh.github.io
                 → No /sagesh.adhikari at the end

Option B (PAID ~$10/year): Buy domain "sagesh.adhikari.com.np"
                           from Mercantile Nepal or any registrar
                           → URL becomes: sagesh.adhikari.com.np

---

## How to Update Your Website (Every Time)

Whenever you change any file, run these 3 commands:
```bash
cd C:\Users\SAGESH\Desktop\portfolio
git add .
git commit -m "describe what you changed"
git push
```
Wait 1-2 minutes → your live site updates automatically.

---

## What to Fix/Update to Make It Perfect

### URGENT — Update with your real info:
1. [ ] Open index.html → find "sagesh@example.com" → replace with your real email
2. [ ] Find "github.com/sagesh" → replace with "github.com/ctrl-sagesh"
3. [ ] Find "linkedin.com/in/sagesh" → replace with your actual LinkedIn URL
4. [ ] Find TryHackMe link → add your actual THM profile URL

### CONTENT — Add real content:
5. [ ] Add your actual photo (save as "photo.jpg" in portfolio folder, add to About section)
6. [ ] Update Bakery Loyalty System project → add the real GitHub link
7. [ ] Write your first real blog post (Day 1 Nmap writeup — you already did it!)
8. [ ] Add your HackTheBox profile link

### DESIGN — Make it better:
9. [ ] Add a favicon (small icon on browser tab)
10.[ ] Add smooth loading animation
11.[ ] Make contact form actually send emails (use Formspree — free)

### SEO — Help people find you:
12.[ ] Add meta description tag in HTML head
13.[ ] Add your name in the title tag properly

---

## How to Make Contact Form Work (Formspree)

1. Go to formspree.io → Sign up free
2. Create a new form → get your form ID (looks like: xpwzrqkb)
3. In index.html, change:
   <form class="contact-form" onsubmit="handleSubmit(event)">
   to:
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
4. Remove the onsubmit part
Now real emails land in your inbox when someone contacts you!

---

## Useful Git Commands (Cheat Sheet)

```bash
git status              → see what files changed
git add .               → stage all changes
git add filename        → stage specific file
git commit -m "message" → save snapshot
git push                → upload to GitHub
git pull                → download latest from GitHub
git log                 → see history of commits
git diff                → see what exactly changed
```

---

## Your Links
- GitHub Profile : https://github.com/ctrl-sagesh
- Portfolio Site : https://ctrl-sagesh.github.io/sagesh.adhikari/
- GitHub Repo    : https://github.com/ctrl-sagesh/sagesh.adhikari
