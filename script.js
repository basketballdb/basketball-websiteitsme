// --- DATA --- //
const data = {
  teams: [
    { name: "Poland", url: "teams/Poland.html" },
    { name: "Finland", url: "teams/Finland.html" },
    { name: "Slovenia", url: "teams/Slovenia.html" },
    { name: "Great Britain", url: "teams/Great_Britain.html" }
  ],
  players: [
    { name: "Aleksander Balcerowski", url: "players/Aleksander_Balcerowski.html" },
    { name: "Lauri Markkanen", url: "players/Lauri_Markkanen.html" }
  ],
  competitions: [
    { name: "FIBA Friendly", url: "competitions/Fibafriendly.html" },
    { name: "EuroBasket 2025", url: "competitions/eurobasket.html" },
    { name: "World Cup Qualifiers", url: "competitions/worldcup.html" }
  ],
  games: [
    { name: "Poland vs Finland", date: "2025-08-17", link: "games/game2.html" },
    { name: "Slovenia vs Great Britain", date: "2025-08-17", link: "games/game3.html" },
    { name: "Latvia vs Slovenia", date: "2025-08-16", link: "games/game4.html" }
  ]
};

// --- ELEMENT REFERENCES --- //
const searchBox = document.getElementById("searchInput");
const searchResultsContainer = document.getElementById("resultsList");

// --- SEARCH FUNCTION --- //
function performSearch() {
  const query = searchBox.value.toLowerCase().trim();
  searchResultsContainer.innerHTML = "";

  if (!query) return;

  let found = false;

  ["teams", "players", "competitions", "games"].forEach(category => {
    data[category].forEach(item => {
      if (item.name.toLowerCase().includes(query)) {
        const li = document.createElement("li");
        li.classList.add("game-item");

        const a = document.createElement("a");
        a.href = item.url || item.link;
        a.textContent = `${item.name} (${category})`;

        li.appendChild(a);
        searchResultsContainer.appendChild(li);
        found = true;
      }
    });
  });

  document.getElementById("searchResults").style.display = found ? "block" : "none";
}

// --- EVENT LISTENER --- //
searchBox.addEventListener("input", performSearch);
