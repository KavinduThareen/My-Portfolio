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


document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');

    // Animate progress bars on page load
    progressBars.forEach(progressBar => {
        const targetWidth = parseInt(progressBar.parentNode.getAttribute('aria-valuenow'));
        progressBar.style.width = targetWidth + '%';
    });
});
