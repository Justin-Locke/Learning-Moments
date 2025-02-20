export const getAllPosts = () => {
    return fetch(`http://localhost:8088/posts?_expand=topic&_embed=likes`).then(res => res.json());
}

export const getPostById = (id) => {
    return fetch(`http://localhost:8088/posts?id=${id}&_expand=user&_expand=topic&_embed=likes`).then(res => res.json())
}

export const createNewPost = (post) => {
    return fetch(`http://localhost:8088/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post)
    }).then(res => res.json())
}

export const getUsersPosts = (userId) => {
    return fetch(`http://localhost:8088/posts?userId=${userId}&_expand=topic&_embed=likes`).then(res => res.json())
}

export const deletePost = (postId) => {
    return fetch(`http://localhost:8088/posts/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
}