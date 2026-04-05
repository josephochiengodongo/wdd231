// Get current year
const currentYear = new Date().getFullYear();

// Output current year in footer first paragraph
document.getElementById("currentyear").innerHTML = currentYear;

// Output last modified date in footer second paragraph
document.getElementById("lastModified").innerHTML = document.lastModified;