function getRandom() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];
  var randomWho = who[Math.floor(Math.random() * who.length)];
  var randomAction = action[Math.floor(Math.random() * action.length)];
  var randomWhat = what[Math.floor(Math.random() * what.length)];
  var randomWhen = when[Math.floor(Math.random() * when.length)];

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
}

function updatePhrase() {
  let phrase = document.getElementById("excuse");
  phrase.textContent = getRandom();
}
window.onload = updatePhrase;
