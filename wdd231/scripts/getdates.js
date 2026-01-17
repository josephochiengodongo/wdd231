function showLastModified()  {
    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDate = lastModified.toLocaleDateString('en-US', options);
    document.getElementById('lastModified').textContent = `Last Modified: ${formattedDate}`;
}

// Course filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const courseItems = document.querySelectorAll('.course-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
// Update active button styling
            filterButtons.forEach(btn => btn.classList.remove('filter-button-active'));
            this.classList.add('filter-button-active');
            
// Filter courses
            courseItems.forEach(course => {
                if (filterValue === 'all') {
                    course.style.display = 'flex';
                } else if (course.getAttribute('data-category') === filterValue) {
                    course.style.display = 'flex';
                } else {
                    course.style.display = 'none';
                }
            });
        });
    });
    
    // Show all courses by default
    const allButton = document.querySelector('[data-filter="all"]');
    if (allButton) {
        allButton.classList.add('filter-button-active');
    }
});