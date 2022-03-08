const commentFormHandler = async (event) => {
    event.preventDefault();

    // const name = document.querySelector('#name_comment').value.trim();
    const comment = document.querySelector('#comment-input').value.trim();

    var str = window.location.pathname;
    var n = str.lastIndexOf('/');
    var blog_id = str.substring(n + 1);

    if (comment) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment, blog_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace(`/blog/${blog_id}`);
        } else {
            alert('Failed to post comment');
        }


    }
};

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
