// Admin functionality
document.addEventListener('DOMContentLoaded', function() {
    const adminToggle = document.getElementById('adminToggle');
    const adminPanel = document.getElementById('adminPanel');
    const postForm = document.getElementById('postForm');

    // Toggle admin panel
    adminToggle.addEventListener('click', function() {
        const isAdmin = prompt('Enter admin password:') === 'admin123';
        if (isAdmin) {
            adminPanel.style.display = adminPanel.style.display === 'block' ? 'none' : 'block';
        } else {
            alert('Access denied!');
        }
    });

    // Handle form submission
    postForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = document.getElementById('postTitle').value;
        const content = document.getElementById('postContent').value;
        const imageUrl = document.getElementById('postImage').value;

        const newPost = document.createElement('div');
        newPost.className = 'headline';
        newPost.innerHTML = `
            <h2>${title}</h2>
            ${imageUrl ? `<div class="headline-image" style="background-image: url('${imageUrl}'); background-size: cover; background-position: center;"></div>` : '<div class="headline-image">HEADLINE IMAGE</div>'}
            <p>${content}</p>
            <a href="#" class="read-more">READ MORE →</a>
        `;

        document.querySelector('.content').prepend(newPost);
        postForm.reset();
        alert('Post published successfully!');
    });

    // Update date
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.querySelector('.date').textContent = now.toLocaleDateString('en-US', options);
});