const btn = document.querySelector(".btn");
const postContainer = document.querySelector(".post-container");


function createPostDiv() {
    for(let i = 0; i < 100; i++) {
        let post = document.createElement("div");
        let postTitle = document.createElement("a");
        postTitle.href = 'https://jsonplaceholder.typicode.com/posts/' + [i];
        postContainer.appendChild(post);
        post.appendChild(postTitle);
        const res = fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => postTitle.textContent = json[i].title)
    }
}

btn.addEventListener("click", createPostDiv);
