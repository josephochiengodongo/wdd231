function showLastModified() {
    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = lastModified.toLocaleDateString('en-US', options);
    document.getElementById('lastModified');