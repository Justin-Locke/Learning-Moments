import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostById } from "../../services/postServices"


export const PostDetails = () => {
    const [ post, setPost ] = useState({})
    const { postId } = useParams()
    
    useEffect(() => {
        getPostById(postId).then(data => {
            const postObj = data[0]
            setPost(postObj)
        })
    }, [postId])

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
                { post.likes?.length || 0 } Likes
            </footer>
        
        </section>
    )
}