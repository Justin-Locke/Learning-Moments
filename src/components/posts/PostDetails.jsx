import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getPostById } from "../../services/postServices"
import "./Posts.css"
import { likePost } from "../../services/likeServices"


export const PostDetails = ({ currentUser }) => {
    const [ post, setPost ] = useState({})
    const [userLiked, setUserLiked] = useState(false)
    const { postId } = useParams()

    
    useEffect(() => {
        getPostById(postId).then(data => {
            const postObj = data[0]
            setPost(postObj)
        })
    }, [postId, userLiked])

    useEffect(() => {
        if (post.likes) {
            const hasLiked = post.likes.some(
                (like) => like.userId === currentUser.id)

            setUserLiked(hasLiked)
        }
            
    }, [post, currentUser])

    

    const handleButtonEvent = ((event) => {
        if(event.target.name === "like") {
            likePost(currentUser.id, post.id).then(() => {
                setUserLiked(true)
            })
        }
        if(event.target.name === "edit") {
            console.log("edit")
        }
    })

    const userActionButton = 
        currentUser?.id === post?.userId ? 
            <button 
            className="edit-button"
            name="edit"
            onClick={handleButtonEvent}>
                Edit
            </button>
            : (
                (<button 
                    className={"like-button"}
                    name="like"
                    onClick={handleButtonEvent}
                    disabled={userLiked}>
                        {userLiked ? "Liked" : "Like"}
                    </button>
                )
            )
            
    

    return (
        <section className="post">
            <header className="post-header">
                {post.title}
            </header>
            <div>
                <span className="post-info">Author : </span>
                {post.user?.fullName}
            </div>
            <div>
                <span className="post-info">Topic : </span>
                {post.topic?.name}
            </div>
            <div>
                <span className="post-info">Date : </span>
                {post.date}
            </div>
            <div>
                <span className="post-info">Body : </span>
                {post.body}
            </div>
            <footer className="post-footer">
                <div>
                    {userActionButton}
                </div>
                { post.likes?.length || 0 } Likes
            </footer>
        
        </section>
    )
}