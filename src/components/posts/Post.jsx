export const Post = ({ postObj }) => {
    return <section className="post">
    <header className="post-title">
        <div className="post-info">{postObj.title}</div>
    </header>
    <footer>
        <div className="post-info">
            {postObj.topic.name}
        </div>
        <div className="post-info">
            Likes: {postObj.likes.length}
        </div>
    </footer>
</section>
}