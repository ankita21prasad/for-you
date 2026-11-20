/**
 * Change his name here. It is used everywhere on the page.
 * To use your own pictures, replace the files in /photos
 * (or point `image` at a jpg/png). The frame crops them to a portrait.
 */
const HIS_NAME = "jaaaaaan";

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
  id: "like",
  kind: "note",
  label: "things I notice",
  body: `
    <p>I like that you have a mind of your own and don't shy away from standing up for what you believe in. Honestly, I find that quite attractive. Remember how you kept shouting at people driving wrongly when we were on the scooty? 😂 Or how you handle office politics and aren't afraid to take a stand and say, "If this doesn't happen, I'm going to do this." I like that you don't just go along with things for the sake of it.</p>

    <p>I like how you remember the little things I casually mention, sometimes things that even I end up forgetting. It's sweet knowing that you actually listen and that some of those seemingly insignificant things stay with you. I don't know if you realise it, but I notice that too. 🫣</p>

    <p>I like how adaptable you are. Someone who can sit comfortably in a high-end restaurant and know how to carry himself, but also doesn't mind sitting by the roadside when the situation calls for it. I find that ability to navigate different social settings quite attractive. It says a lot about how grounded you are, irrespective of where life takes you or how much you achieve along the way. I hope you always retain that part of yourself.</p>

    <p>I really like that humbleness in you. The way you say, "Sab upar wale ka diya hua hai," and the way you care about your family. There's something very endearing about someone who doesn't forget where they come from and stays grateful for what they have. Though, I wouldn't mind you extending a little more of that care towards me as well. Just saying. 🙈❤️</p>

    <p>I like how you sometimes seem to read my emotions without me having to spell them out. Like that afternoon when we were roaming around and I was getting irritated because of the heat, and you casually mentioned that you already knew, even though I hadn't said anything. Honestly, I really like that. It makes things so much easier when I don't have to explain every little thing and you just get me. I think there's something really comforting about that.</p>

    <p>I'm not entirely sure about this one yet, because I think I'm still discovering this side of you, but it's something that keeps me intrigued. I get the feeling that you have quite a bit of intensity, passion and depth in the way you can be in a relationship. And I think there's a lot more to you emotionally than what you've let me see so far. I'm curious to discover that side of you, slowly. A little bit of face-reading along the way, I can manage too. 😂❤️</p>
  `
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
    body: "Happy birthday, jaan 🎂.  You know, sometimes I wonder if you realise how easily you find your way into my thoughts. Something happens during the day, and I find myself wanting to tell you about it. I come across something amusing and wonder what you'd have to say. Sometimes I even catch myself imagining your reaction to the most ordinary things. It's a rather sweet inconvenience, honestly. And I don't think I'm particularly interested in fixing it. 🙈

I think that's what happens when someone starts becoming a part of your everyday life. You don't just want to share the funny little things with them, but the not-so-good ones too. And I hope you know that you don't always have to show up as the happy, sorted version of yourself with me. On the days when life isn't particularly gentle with you, I want the heavy to have somewhere to go. You can put it next to me. I'll make room for all of you, even the parts you don't quite know how to explain. 🤍

And somewhere between all these little everyday moments, conversations and things we haven't experienced yet, I hope we get to make a few more memories together. If I get to be a small part of your days, in the ordinary ones as much as the special ones, I think I'd be rather happy about that.

For now, just know that somewhere, someone is very fond of you, is probably smiling while writing all of this, and is looking forward to discovering what else there is to us.

I'm really, really glad it's you. ❤️",
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
    label: "just so you know",
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
      <p class="note-body">${piece.body}</p>
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
  <h3 id="modal-title">Happy birthday❤️</h3>

<article class="letter">
  <h3 id="modal-title">Happy birthday ❤️</h3>

  <p>And beyond all the usual birthday wishes, there are a few little things I genuinely hope life brings your way.</p>

  <p>I hope you never become so accustomed to being yourself that you forget how lovely that person is. I hope you never feel the need to make yourself smaller, explain every little thing about yourself, or hide the parts of you that don't always fit neatly into words.</p>

  <p>I hope you keep that curious mind of yours, your little observations, your way of looking at things, and that rather endearing habit of being you. I hope you always have something to look forward to, something to be excited about, something that makes your eyes light up when you talk about it. And I hope you never lose the little boyish silliness that makes you so much fun to know.</p>

  <p>I hope the world gives you reasons to be proud of the person you're becoming, but I also hope you remember to enjoy the person you already are. Some of the nicest parts of being alive are the things that don't make it onto a calendar or a checklist.</p>

  <p>I hope this year surprises you in the loveliest ways. I hope you get closer to everything you've been working towards, find reasons to laugh a little harder, and have countless moments that make you think, yes, life is good. I hope you get spoiled a little, smiled at a lot, and reminded often of just how lovely you are. (I can certainly contribute to that last bit.) ❤️‍🔥</p>

  <p>I hope there are unexpected joys, beautiful surprises, a little adventure, plenty of laughter and people who make you feel lucky to be where you are.</p>

  <p>And selfishly, I hope I get to know more versions of you. The ones I haven't met yet, the ones that come out when you're ridiculously happy, when you're being mischievous, when you're excited about something, and even the ones you don't show everyone. I think there's still so much to discover, and I quite like that thought. And I hope you get to know more versions of me too. The silly ones, the extra-affectionate ones, the occasionally dramatic ones… and maybe a few that might surprise you. 😁🤭</p>

  <p>I don't know what all this next year has in store, but I hope it brings you closer to the life you quietly dream about. I hope there are unexpected joys, beautiful surprises, a little adventure, plenty of laughter and people who make you feel lucky to be where you are. </p>

  <p class="sign">Have the loveliest birthday, my babyyy. ❤️</p>
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
