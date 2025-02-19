export const likePost = (userId, postId) => {
    const newLike = {
        userId: userId,
        postId: postId
    }
    
    return fetch("http://localhost:8088/likes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newLike)
    })
}

export const removeLike = () => {
    const existingLike = fetch(`http://localhost:8088/likes?userId=${userId}&postId=${postId}`).then(res => res.json())

    if (existingLike) {
        return fetch(`http://localhost:8088/likes/${likeId}`, {
            method: "DELETE"
        })
    } else {
        console.error("No Like To Remove")
    }
}