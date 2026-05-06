// =============================================
//  SANTAN SOLAR — Live Search Script
// =============================================

const searchInput = document.querySelector('.search-bar input');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase().trim();

  cards.forEach(function (card) {
    const articles = card.querySelectorAll('.article-list li');
    let cardHasMatch = false;

    articles.forEach(function (li) {
      const linkText = li.querySelector('a').textContent.toLowerCase();

      if (query === '' || linkText.includes(query)) {
        li.style.display = 'flex';
        cardHasMatch = true;
      } else {
        li.style.display = 'none';
      }
    });

    // Show or hide the whole card depending on if it has any matches
    if (cardHasMatch || query === '') {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });

  // Show a no results message if nothing matches
  showNoResults(query);
});

function showNoResults(query) {
  let noResults = document.getElementById('no-results');

  const anyVisible = Array.from(cards).some(function (card) {
    return card.style.display !== 'none';
  });

  if (!anyVisible && query !== '') {
    if (!noResults) {
      noResults = document.createElement('p');
      noResults.id = 'no-results';
      noResults.textContent = 'No results found for "' + query + '"';
      noResults.style.textAlign = 'center';
      noResults.style.color = '#555555';
      noResults.style.marginTop = '2rem';
      noResults.style.fontSize = '15px';
      document.querySelector('.grid').after(noResults);
    } else {
      noResults.textContent = 'No results found for "' + query + '"';
    }
  } else {
    if (noResults) {
      noResults.remove();
    }
  }
}