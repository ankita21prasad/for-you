/**
 * Change his name here. It is used everywhere on the page.
 * To use your own pictures, replace the files in /photos
 * (or point `image` at a jpg/png). The frame crops them to a portrait.
 */
const HIS_NAME = "my Jaan";

const pieces = [
  {
    id: "light",
    kind: "photo",
    label: "the hour I'd save",
    image: "photos/cozy_eve.jpeg",
    alt: "A night window with warm light and a cup on the sill",
    caption: "I saved this kind of light for you. It feels like the sort of evening I'd want to share with you. A little warmth, a little quiet, you sitting close enough to distract me, and absolutely nowhere we need to be.❣️",
  },
  {
    id: "honest",
    kind: "note",
    label: "A little note",
    body: "Somewhere along the way, you became one of my favorite people to talk to. And so many little things about you have stayed with me. Your ways, your ability to notice the unsaid, your calm, your devotion, your little habits... and a few things about you that I probably shouldn't admit to finding this endearing. But well, here we are 🙈",
  },
  {
    id: "chairs",
    kind: "photo",
    label: "room for two",
    image: "photos/shoulder_lean.jpeg",
    alt: "Two chairs pulled close together in a quiet room",
    caption: "I might sound a little selfish here, but if I could wish for one thing every now and then, it would be more moments of us sitting across from each other (or maybe a little more tangled up than that 🫠), talking about everything and absolutely nothing, laughing at things only we understand. This is my whole argument: you, close, with nowhere we need to be.",
  },
  {
    id: "heavy",
    kind: "note",
    label: "if it's heavy",
    body: "I hope life is gentle with you. And on the days it isn't, I want the heavy to have somewhere to go. You can put it next to me 🤍. I'll make room for all of you, even the parts you don't quite know how to explain.",
  },
  {
    id: "street",
    kind: "photo",
    label: "worth the detour",
    image: "photos/street.jpeg",
    alt: "A quiet street after rain, under two lamps",
    caption: "Some conversations make you forget to check the time. Some people make the longer route feel like the better one. You're a little bit like that for me. Although, to be fair, I suspect I'd find plenty of excuses to keep you around even after we've reached our destination 😉",
  },
  {
    id: "looked-at",
    kind: "note",
    label: "23rd November",
    body: "Happy birthday, jaan 🎂. I hope this year surprises you in the loveliest ways. I hope you get closer to everything you've been working towards, find reasons to laugh a little harder, and have countless moments that make you think, yes, life is good. I hope you get spoiled a little, smiled at a lot, and reminded often of just how lovely you are. (I can certainly contribute to that last bit.)❤️‍🔥",
  },
  {
    id: "evening",
    kind: "photo",
    label: "more of this, please",
    image: "photos/food.jpeg",
    alt: "An evening table with a cup, a cloth, and a small plant",
    caption: "Here's to more slow evenings, good food, familiar conversations, spontaneous plans and memories we haven't made yet 🥂. More laughter, more stolen glances, more finding reasons to sit a little closer. And hopefully, a few moments where neither of us is particularly interested in checking the time.",
  },
  {
    id: "unimpressive",
    kind: "note",
    label: "And lastly",
    body: "You don't have to be anything other than yourself with me. Not particularly funny, not particularly impressive, not always having the right things to say. Just you. Raw, vulnerable, silly, whatever you feel like. I like all those versions, perhaps a little more than is reasonable. Being here is already the whole point, and I am foolishly happy about it. 🫶",
  },
];

const opened = new Set();
let lastFocus = null;

const intro = document.querySelector("#intro");
const board = document.querySelector("#board");
const grid = document.querySelector("#grid");
const count = document.querySelector("#count");
const seal = document.querySelector("#seal");
const lastLetter = document.querySelector("#last-letter");
const modal = document.querySelector("#modal");
const modalCard = document.querySelector("#modal-card");
const backdrop = document.querySelector("#modal-backdrop");
const finale = document.querySelector("#finale");
const embers = document.querySelector("#embers");

document.querySelector("#intro-name").textContent = HIS_NAME;
document.querySelector("#finale-name").textContent = HIS_NAME;
document.title = `For ${HIS_NAME}`;

seal.addEventListener("click", openEnvelope);
lastLetter.addEventListener("click", onLastLetter);
backdrop.addEventListener("click", closeModal);
document.querySelector("#replay").addEventListener("click", replay);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});

renderPieces();
updateCount();

function openEnvelope() {
  seal.classList.add("is-open");
  seal.disabled = true;
  window.setTimeout(() => {
    intro.hidden = true;
    board.hidden = false;
  }, 720);
}

function renderPieces() {
  grid.replaceChildren();
  for (const piece of pieces) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `token ${piece.kind}`;
    button.dataset.id = piece.id;
    button.innerHTML = `
      <span class="token-kicker">${piece.kind === "photo" ? "picture" : "note"}</span>
      <span class="token-label">${piece.label}</span>
      <span class="token-mark" aria-hidden="true"></span>
    `;
    button.addEventListener("click", () => openPiece(piece, button));
    grid.appendChild(button);
  }
}

function openPiece(piece, button) {
  opened.add(piece.id);
  button.classList.add("is-read");
  updateCount();
  if (piece.kind === "photo") {
    showModal(
      `
        <button class="close" type="button" data-close aria-label="Close">×</button>
        <h3 id="modal-title">${piece.label}</h3>
        <figure class="polaroid">
          <img src="${piece.image}" alt="${escapeHtml(piece.alt)}" />
          <figcaption>${escapeHtml(piece.caption)}</figcaption>
        </figure>
      `,
      button
    );
    return;
  }

  showModal(
    `
      <button class="close" type="button" data-close aria-label="Close">×</button>
      <h3 id="modal-title">${piece.label}</h3>
      <p class="note-body">${escapeHtml(piece.body)}</p>
    `,
    button
  );
}

function onLastLetter() {
  if (opened.size < pieces.length) {
    showModal(
      `
        <button class="close" type="button" data-close aria-label="Close">×</button>
        <h3 id="modal-title">Not yet, ${escapeHtml(HIS_NAME)}.</h3>
        <p class="lock-copy">Finish the others first. I'm allowed to be a little difficult on your birthday.</p>
      `,
      lastLetter
    );
    return;
  }

  showModal(
    `
      <button class="close" type="button" data-close aria-label="Close">×</button>
      
<article class="letter">
  <h3 id="modal-title">${escapeHtml(HIS_NAME)},</h3>
  <p>Happy birthday. ❤️</p>
  <p>And, there's something else I want you to know.</p>
  <p>I hope you never become so accustomed to being yourself that you forget how lovely that person is. I hope you never feel the need to make yourself smaller, explain every little thing about yourself, or hide the parts of you that don't always fit neatly into words.</p>
  <p>I hope you keep that curious mind of yours, your little observations, your way of looking at things, and that rather endearing habit of being you. I hope you always have something to look forward to, something to be excited about, something that makes your eyes light up when you talk about it. And I hope you never lose the little boyish silliness that makes you so much fun to know.</p>
  <p>You know, sometimes I wonder if you realise how easily you find your way into my thoughts. Something happens during the day, and I find myself wanting to tell you about it. I come across something amusing and wonder what you'd have to say. Sometimes I even catch myself imagining your reaction to the most ordinary things. It's a rather sweet inconvenience, honestly. And I don't think I'm particularly interested in fixing it. 🙈</p>
  <p>I hope the world gives you reasons to be proud of the person you're becoming, but I also hope you remember to enjoy the person you already are. Some of the nicest parts of being alive are the things that don't make it onto a calendar or a checklist.</p>
  <p>And selfishly, I hope I get to know more versions of you. The ones I haven't met yet, the ones that come out when you're ridiculously happy, when you're being mischievous, when you're excited about something, and even the ones you don't show everyone. I think there's still so much to discover, and I quite like that thought.</p>
  <p>I don't know what all this next year has in store, but I hope it brings you closer to the life you quietly dream about. I hope there are unexpected joys, beautiful surprises, a little adventure, plenty of laughter and people who make you feel lucky to be where you are.</p>
  <p>And if I get to be a small part of some of those lovely days, well, I think I'd be rather happy about that.</p>
  <p>For now, just know that somewhere, someone is very fond of you, is probably smiling while writing all of this, and is looking forward to making a few more memories with you.</p>
  <p>I'm really, really glad it's you.</p>
  <p class="sign">Have the loveliest birthday, Babe. ❤️</p>
  <button class="stay" type="button" id="stay">stay here a second</button>
</article>
    `,
    lastLetter,
    true
  );

  modalCard.querySelector("#stay").addEventListener("click", showFinale);
}

function showModal(html, returnFocus, wide = false) {
  lastFocus = returnFocus;
  modalCard.classList.toggle("wide", wide);
  modalCard.innerHTML = html;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modalCard.querySelector("[data-close]").addEventListener("click", closeModal);
  modalCard.focus();
}

function closeModal() {
  modal.hidden = true;
  modalCard.innerHTML = "";
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}

function updateCount() {
  const left = pieces.length - opened.size;
  if (left === 0) {
    count.textContent = "That's all of them. The letter is yours.";
    lastLetter.classList.add("is-ready");
    return;
  }
  count.textContent = left === 1 ? "1 still closed" : `${left} still closed`;
  lastLetter.classList.remove("is-ready");
}

function showFinale() {
  closeModal();
  board.hidden = true;
  finale.hidden = false;
  document.title = `Happy birthday, ${HIS_NAME}`;
  if (embers.childElementCount === 0) {
    for (let i = 0; i < 18; i += 1) {
      const ember = document.createElement("span");
      ember.className = "ember";
      ember.style.left = `${Math.random() * 100}%`;
      ember.style.animationDuration = `${7 + Math.random() * 8}s`;
      ember.style.animationDelay = `${Math.random() * 4}s`;
      ember.style.opacity = String(0.35 + Math.random() * 0.5);
      embers.appendChild(ember);
    }
  }
}

function replay() {
  opened.clear();
  finale.hidden = true;
  intro.hidden = false;
  board.hidden = true;
  seal.classList.remove("is-open");
  seal.disabled = false;
  document.title = `For ${HIS_NAME}`;
  document.body.style.overflow = "";
  renderPieces();
  updateCount();
  window.scrollTo(0, 0);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
