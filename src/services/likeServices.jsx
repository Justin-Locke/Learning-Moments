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