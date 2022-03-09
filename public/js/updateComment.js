const updateCommentFormHandler = async (event) => {
    event.preventDefault();


    const comment = document.querySelector('#comment-input').value.trim();

    var str = window.location.pathname;
    var n = str.split('/');
    var comment_id = n[n.length - 2];

    if (comment) {
        const response = await fetch(`/api/comments/${comment_id}`, {
            method: 'PUT',
            body: JSON.stringify({ comment, comment_id, }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            window.location.replace(document.referrer);
        } else {
            alert('Failed to post comment');
        }


    }
};


document
    .querySelector('.update-comment-form')
    .addEventListener('submit', updateCommentFormHandler);