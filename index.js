// Example data to paginate (you can replace it with your own)
const itemsPerPage = 5;
const data = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

// Function to display the paginated data
function displayData(pageNum) {
  const startIndex = (pageNum - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageItems = data.slice(startIndex, endIndex);

  const contentDiv = document.querySelector('.content');
  contentDiv.innerHTML = pageItems.join('<br>');
}

// Function to generate pagination links
function generatePaginationLinks() {
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginationUl = document.querySelector('.pagination ul');
  paginationUl.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = i;
    link.addEventListener('click', () => {
      displayData(i);
    });

    li.appendChild(link);
    paginationUl.appendChild(li);
  }
}

// Initial setup
generatePaginationLinks();
displayData(1);
