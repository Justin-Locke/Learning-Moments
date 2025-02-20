import { useEffect, useState } from "react"
import { deletePost, getUsersPosts } from "../../services/postServices"
import { Link } from "react-router-dom"

export const MyPosts = ({ currentUser }) => {
    const [userPosts, setUserPosts] = useState([])
    const [deleted, setDeleted] = useState(false)

    useEffect(() => {
        getUsersPosts(currentUser.id).then((posts) => {
            setUserPosts(posts)
        })
    }, [currentUser.id, deleted])

    const handleDelete = (event) => {
        const postId = event.target.value
        deletePost(postId).then(() => {
            setDeleted(!deleted)
    })
    }

    
    
    return (
        <div className="posts-container">
            <h2>My Posts</h2>
                {userPosts.map((postObj) => {
                    return (
                        <div className="user-post-container" key={postObj.id}>
                    <Link to={`/posts/${postObj.id}`} key={postObj.id}>

                <section className="post">
                <header className="post-title">
                    <div className="post-info">{postObj.title}</div>
                </header>
                </section>
                </Link>
                <button 
                className="delete-button"
                onClick={handleDelete}
                value={postObj.id}
                >Delete Post
                </button>

                </div>
                )
                })} 

            </div>
    )
}