const updateHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    var str = window.location.pathname;
    var n = str.lastIndexOf('/');
    var blog_id = str.substring(n + 1);

    if (title && content) {
        const response = await fetch(`/api/blogs/edit/${blog_id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update blog');
        }
    }
};

document
    .querySelector('.update-blog-form')
    .addEventListener('submit', updateHandler);