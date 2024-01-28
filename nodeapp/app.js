const express = require('express');
const app = express();
const port = 3000;

// Array of facts about Bulgaria
const facts = [
  "Bulgaria is the oldest country in Europe that hasn't changed its name since it was first established.",
  "The Bulgarian army has never lost a single flag in battle.",
  "Bulgaria is known for its natural diversity, with mountains, plains, seas, and rivers.",
  "The Cyrillic alphabet, used in Bulgaria, was developed in the 9th century by two brothers, Saint Cyril and Saint Methodius.",
  "Bulgaria has a rich tradition in folk music and dances.",
  // Add more facts as needed
];

app.get('/', (req, res) => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  res.send(`<h1>Interesting Fact about Bulgaria</h1><p>${randomFact}</p>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
