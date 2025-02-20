import { Link, useNavigate } from "react-router-dom"
import { deletePost } from "../../services/postServices"

export const UserPost = ({ postObj }) => {
        
    const navigate = useNavigate()

    const handleDelete = () => {
        
        const confirmed = window.confirm("Are you sure you want to delete this post?")
        
        if (confirmed) {
            deletePost(postObj.id)
            navigate(`/posts`)
        }
    } 
    
    return (
    <div className="user-post-container">
        <Link to={`/posts/${postObj.id}`} key={postObj.id}>

    <section className="post">
    <header className="post-title">
        <div className="post-info">{postObj.title}</div>
    </header>
    </section>
    </Link>
    <button className="delete-button"
    onClick={handleDelete}>Delete Post</button>

    </div>
    )
}