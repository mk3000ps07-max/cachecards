const API_URL = "/api/cards";

window.onload = fetchCards;

async function fetchCards() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  data.data.forEach(card => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <div class="card-inner" onclick="flipCard(this)">
        <div class="card-front">
          <h3>${card.question}</h3>
        </div>
        <div class="card-back">
          <p>${card.answer}</p>
        </div>
      </div>
      <button onclick="editCard('${card._id}', '${card.question}', '${card.answer}')">Edit</button>
      <button onclick="deleteCard('${card._id}')">Delete</button>
    `;

    container.appendChild(div);
  });
}

// 🔁 Flip
function flipCard(el) {
  el.parentElement.classList.toggle("flipped");
}

// ➕ Add
async function addCard() {
  const question = document.getElementById("question").value;
  const answer = document.getElementById("answer").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question, answer })
  });

  fetchCards();
}

// ❌ Delete
async function deleteCard(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  fetchCards();
}

// ✏️ Edit
async function editCard(id, oldQ, oldA) {
  const newQ = prompt("Edit Question:", oldQ);
  const newA = prompt("Edit Answer:", oldA);

  if (!newQ || !newA) return;

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: newQ, answer: newA })
  });

  fetchCards();
}