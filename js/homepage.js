

// dashboard numbers change code

document.addEventListener('DOMContentLoaded', function() {
    const h3Elements = document.querySelectorAll('.dashboard-text h3');

    // Loop through each h3 element and animate its value
    h3Elements.forEach((h3, index) => {
        const targetNumber = parseInt(h3.textContent); // Get the target number from the h3 content
        let currentNumber = 0;

        // Animate the number incrementally
        const interval = setInterval(() => {
            if (currentNumber <= targetNumber) {
                h3.textContent = currentNumber;
                currentNumber++;
            } else {
                clearInterval(interval);
            }
        }, 20); // Change number every 20 milliseconds
    });
});


// hire me fill 

document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');

    // Animate progress bars on page load
    progressBars.forEach(progressBar => {
        const targetWidth = parseInt(progressBar.parentNode.getAttribute('aria-valuenow'));
        progressBar.style.width = targetWidth + '%';
    });
});







// document.addEventListener("DOMContentLoaded", function() {
//     const itemsPerPage = 3; // Number of items per page
//     let currentPage = 1; // Current page
//     const projects = document.querySelectorAll('.card'); // Select all project cards
//     const totalPages = Math.ceil(projects.length / itemsPerPage); // Calculate total pages
  
//     // Function to show/hide items based on the current page
//     function updateDisplay() {
//       projects.forEach((project, index) => {
//         if (index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage) {
//           project.style.display = 'block';
//         } else {
//           project.style.display = 'none';
//         }
//       });
  
//       // Update pagination buttons
//       const previousBtn = document.getElementById("previous");
//       const nextBtn = document.getElementById("next");
  
//       previousBtn.classList.toggle('disabled', currentPage === 1);
//       nextBtn.classList.toggle('disabled', currentPage === totalPages);
//     }
  
//     // Initial display update
//     updateDisplay();
  
//     // Pagination button event listeners
//     document.getElementById("previous").addEventListener("click", function(event) {
//       event.preventDefault();
//       if (currentPage > 1) {
//         currentPage--;
//         updateDisplay();
//       }
//     });
  
//     document.getElementById("next").addEventListener("click", function(event) {
//       event.preventDefault();
//       if (currentPage < totalPages) {
//         currentPage++;
//         updateDisplay();
//       }
//     });
  
//     // Generate pagination links dynamically
//     const paginationContainer = document.querySelector(".pagination");
//     for (let i = 1; i <= totalPages; i++) {
//       const pageItem = document.createElement('li');
//       pageItem.classList.add('page-item');
//       const pageLink = document.createElement('a');
//       pageLink.classList.add('page-link');
//       pageLink.href = '#';
//       pageLink.textContent = i;
//       pageItem.appendChild(pageLink);
//       paginationContainer.insertBefore(pageItem, nextBtn.parentNode); // Insert before the "Next" button
//     }
  
//     // Page number click event listeners
//     const pageLinks = document.querySelectorAll('.page-link');
//     pageLinks.forEach(link => {
//       link.addEventListener('click', function(event) {
//         event.preventDefault();
//         currentPage = parseInt(this.textContent);
//         updateDisplay();
//       });
//     });
//   });
  