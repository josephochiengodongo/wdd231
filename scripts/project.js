function filterCourses(category) {
    const courses = document.querySelectorAll('.course');

    courses.forEach(course => {
        if (category === 'all') {
            course.style.display = 'block';
        } else if (course.classList.contains(category)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}