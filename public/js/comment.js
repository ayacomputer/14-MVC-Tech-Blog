const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment-input').value.trim();

    var str = window.location.pathname;
    var n = str.split('/');
    var comment_id = n[n.length - 2];

    if (comment) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment, comment_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace(`/blog/${comment_id}`);
        } else {
            alert('Failed to post comment');
        }


    }
};




document.addEventListener('click', async function (event) {
    console.log('some button pushed!');
    if (event.target.matches('.deleteBtn')) {

        const id = event.target.getAttribute('data-id');
        console.log(id);
        console.log('delete button pushed!')

        const response = await fetch(`/api/comments/${id}`, {
            method: 'DELETE',
        });

        console.log(response);

        if (response.ok) {
            document.location.reload();
        } else {
            console.log(err)
            alert('Failed to delete blog');
        }

    }

});

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
