class Book {
  constructor() {
    this.currentPage = 0;
    this.totalPages = pageContents.length;
    this.pagesContainer = document.getElementById('pages');
    this.prevButton = document.getElementById('prev');
    this.nextButton = document.getElementById('next');
    this.pageNum = document.getElementById('page-num');
    
    this.init();
    this.bindEvents();
  }

  init() {
    // Create pages
    pageContents.forEach((content, index) => {
      const page = document.createElement('div');
      page.className = 'page';
      page.id = `page-${index}`;
      
      // Create image element with text content as src
      const img = document.createElement('img');
      img.id = `img-${index}`;
      img.src = content; // Set the raw text as src
      img.alt = content; // Set alt text for accessibility
      
      // Create text div
      const text = document.createElement('div');
      text.className = 'page-text';
      text.textContent = content;
      
      // Add image and text to page
      page.appendChild(img);
      page.appendChild(text);
      
      if (index !== 0) {
        page.style.transform = 'translateX(100%)';
      }
      
      this.pagesContainer.appendChild(page);
    });
    
    this.updateNavigation();
  }

  bindEvents() {
    this.prevButton.addEventListener('click', () => this.prevPage());
    this.nextButton.addEventListener('click', () => this.nextPage());
  }

  prevPage() {
    if (this.currentPage > 0) {
      const currentPageEl = document.getElementById(`page-${this.currentPage}`);
      const prevPageEl = document.getElementById(`page-${this.currentPage - 1}`);
      
      currentPageEl.style.transform = 'translateX(100%)';
      prevPageEl.style.transform = 'translateX(0)';
      
      this.currentPage--;
      this.updateNavigation();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      const currentPageEl = document.getElementById(`page-${this.currentPage}`);
      const nextPageEl = document.getElementById(`page-${this.currentPage + 1}`);
      
      currentPageEl.style.transform = 'translateX(-100%)';
      nextPageEl.style.transform = 'translateX(0)';
      
      this.currentPage++;
      this.updateNavigation();
    }
  }

  updateNavigation() {
    this.prevButton.disabled = this.currentPage === 0;
    this.nextButton.disabled = this.currentPage === this.totalPages - 1;
    this.pageNum.textContent = `Page ${this.currentPage + 1} of ${this.totalPages}`;
  }
}

// Initialize the book
new Book();