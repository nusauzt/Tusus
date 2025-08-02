const inhalte = {
  herz: {
    titel: "Herz-Kreislaufsystem",
    text: "<p>Der große Kreislauf versorgt den Körper mit Sauerstoff. Das sauerstoffreiche Blut fließt vom linken Herzen über die Aorta durch den Körper und kommt sauerstoffarm ins rechte Herz zurück. Der kleine Kreislauf führt vom rechten Herz in die Lunge zur Sauerstoffaufnahme und zurück ins linke Herz.</p>",
    fragen: [
      { frage: "Was macht der große Kreislauf?", a: ["Versorgt den Körper mit Sauerstoff", "Versorgt das Herz", "Versorgt die Lunge"], richtig: 0 },
      { frage: "Wo beginnt der kleine Kreislauf?", a: ["Linkes Herz", "Rechtes Herz", "In der Lunge"], richtig: 1 },
      { frage: "Was transportiert sauerstoffreiches Blut?", a: ["Kohlendioxid", "Nährstoffe", "Sauerstoff"], richtig: 2 },
      { frage: "Wohin fließt das Blut nach der Lunge?", a: ["Rechtes Herz", "Linkes Herz", "In den Körper"], richtig: 1 },
      { frage: "Was ist die Aorta?", a: ["Herzklappe", "Große Arterie", "Lungenvene"], richtig: 1 }
    ]
  },
  demenz: {
    titel: "Demenz",
    text: "<p>Demenz ist ein fortschreitender Verlust kognitiver Fähigkeiten, insbesondere des Gedächtnisses, Denkens und der Orientierung. Es gibt verschiedene Formen wie Alzheimer.</p>",
    fragen: [
      { frage: "Was ist typisch für Demenz?", a: ["Gedächtnisverlust", "Fieber", "Husten"], richtig: 0 },
      { frage: "Welche Form ist am häufigsten?", a: ["Vaskuläre Demenz", "Alzheimer", "Parkinson"], richtig: 1 },
      { frage: "Was bleibt lange erhalten?", a: ["Kurzzeitgedächtnis", "Motorik", "Langzeitgedächtnis"], richtig: 2 },
      { frage: "Was hilft Demenzkranken?", a: ["Gedächtnistraining", "Strenge Regeln", "Isolation"], richtig: 0 },
      { frage: "Was ist kein Symptom?", a: ["Orientierungslosigkeit", "Konzentrationsprobleme", "Bluthochdruck"], richtig: 2 }
    ]
  }
};

function ladeThema(key) {
  const thema = inhalte[key];
  let html = `<h2>${thema.titel}</h2>${thema.text}<h3>Quiz</h3>`;
  thema.fragen.forEach((f, i) => {
    html += `<div><strong>${i + 1}. ${f.frage}</strong></div>`;
    f.a.forEach((antwort, j) => {
      html += `<div class='antwort' onclick='prüfeAntwort(${key}, ${i}, ${j}, this)'>${antwort}</div>`;
    });
  });
  document.getElementById("inhalt").innerHTML = html;
}

function prüfeAntwort(key, frageIndex, antwortIndex, el) {
  const frage = inhalte[key].fragen[frageIndex];
  if (antwortIndex === frage.richtig) {
    el.classList.add("richtig");
  } else {
    el.classList.add("falsch");
  }
}

function playTususSound() {
  document.getElementById("tususSound").play();
}
