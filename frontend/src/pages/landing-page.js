let currentPage = 1;
const totalPages = 3;

document.getElementById('nextBtn').addEventListener('click', function() {
  document.getElementById('page' + currentPage).classList.remove('active');
  currentPage++;
  document.getElementById('page' + currentPage).classList.add('active');

  document.getElementById('pageIndicator').textContent = `Page ${currentPage}/${totalPages}`;

  if (currentPage === totalPages) {
    this.style.display = 'none';
    document.getElementById('exploreBtn').style.display = 'inline-block';
  }
  if (currentPage > 1) {
    document.getElementById('previousBtn').style.display = 'inline-block';
    document.querySelector('p.container').style.marginInlineStart = 0;
  }
});

document.getElementById('previousBtn').addEventListener('click', function() {
  document.getElementById('page' + currentPage).classList.remove('active');
  currentPage--;
  document.getElementById('page' + currentPage).classList.add('active');

  document.getElementById('pageIndicator').textContent = `Page ${currentPage}/${totalPages}`;

  if (currentPage === 1) {
    this.style.display = 'none';
    document.querySelector('p.container').style.marginInlineStart = '9.5rem';
  }

  document.getElementById('nextBtn').style.display = 'inline-block';
  document.getElementById('exploreBtn').style.display = 'none';
});
