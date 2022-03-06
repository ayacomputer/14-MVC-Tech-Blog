const commentFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name_comment').value.trim();
    const comment = document.querySelector('#comment-input').value.trim();

    if (name && comment) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ name, comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/blog');
        } else {
            alert('Failed to post comment');
        }


    }
};

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
