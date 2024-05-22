function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var validUsers = [
        { username: "X-Star", password: "112233445" },
        { username: "Zora", password: "123456789" }, 
        { username: "Kal", password: "987654321" } 
    ];

    var isValidUser = validUsers.some(function(user) {
        return user.username === username && user.password === password;
    });

    if (isValidUser) {
    
        if (username === "X-Star" && password === "112233445") {
            window.location.href = "Star.html";
        } else if (username === "Zora" && password === "123456789") {
            window.location.href = "Zora.html";
        } else if (username === "Kal" && password === "987654321") {
            window.location.href = "Kal.html";
        }
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const posts = document.querySelectorAll('.post');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase().trim();
        posts.forEach(post => {
            const postContent = post.textContent.toLowerCase();
            if (postContent.includes(searchTerm)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const commentButtons = document.querySelectorAll('.comment button');

    commentButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const post = this.closest('.post');
            const postContent = post.querySelector('.post-content');
            const commentTextarea = document.createElement('textarea');
            const commentButton = document.createElement('button');
            commentTextarea.placeholder = "Write your comment here...";
            commentButton.textContent = "Add Comment";
            commentButton.classList.add('add-comment-btn');
            commentButton.addEventListener('click', function () {
                const commentText = commentTextarea.value.trim();
                if (commentText !== '') {
                    const comment = document.createElement('div');
                    comment.classList.add('comment');
                    comment.innerHTML = `<p>${commentText}</p>`;
                    postContent.appendChild(comment);
                    commentTextarea.value = ''; 
                }
            });
            postContent.appendChild(commentTextarea);
            postContent.appendChild(commentButton);
            button.disabled = true;
        });
    });
});
