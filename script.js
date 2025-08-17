const searchBox = document.getElementById('searchBox');
const searchResults = document.getElementById('searchResults');

// List of games
const games = [
  {name: 'Team A vs Team B', link: 'games/game1.html'},
  {name: 'Team C vs Team D', link: 'games/game2.html'},
  {name: 'Team E vs Team F', link: 'games/game3.html'}
];

searchBox.addEventListener('input', () => {
  const query = searchBox.value.toLowerCase();
  searchResults.innerHTML = '';
  games.forEach(game => {
    if (game.name.toLowerCase().includes(query)) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = game.link;
      a.textContent = game.name;
      li.appendChild(a);
      searchResults.appendChild(li);
    }
  });
});
