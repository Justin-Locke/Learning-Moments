import { useEffect, useState } from "react"
import { getAllTopics } from "../../services/topicsServices"
import { createNewPost } from "../../services/postServices"
import { useNavigate } from "react-router-dom"



export const CreatePost = ({ currentUser }) => {
    const [topics, setTopics] = useState([])
    const [newPost, setNewPost] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        getAllTopics().then((topicsArray) => {
            setTopics(topicsArray)
        })
    }, [])

    useEffect(() => {
        let newPost = {
           title: "",
           body: "",
           topicId: "" 
        }

        setNewPost(newPost)
    }, [])
    
    const handleInputChange = (event) => {
        const stateCopy = { ...newPost }
        const { name, value } = event.target

        // Convert topicId to a number
        stateCopy[name] = name === "topicId" ? Number(value) : value
        setNewPost(stateCopy)
    }

    const handleSave = (event) => {
        event.preventDefault()

        const postToSave = {
            ...newPost,
            date: new Date(),
            userId: currentUser.id
        }

        createNewPost(postToSave).then(() => {
            navigate(`/posts`)
        })
    }

    return (
    <form className="post-form"
        onSubmit={handleSave}
    >
       <h2>Create Post</h2> 
       <fieldset>
        <div className="form-group">
            <label>Topic</label>
            <select
            onChange={handleInputChange}
            required
            className="form-control"
            name="topicId"

            >
                <option 
                value={""}>
                    Select a Topic
                </option>
                {topics.map((topicObj) => {
                    return (
                        <option 
                        key={topicObj.id}
                        value={Number(topicObj.id)}
                        >{topicObj.name}</option>
                    )
                })}
            </select>
        </div>
       </fieldset>
       <fieldset>
            <div className="form-group">
                <label>Title</label>
                <input
                type="text"
                name="title"
                onChange={handleInputChange}
                required
                className="form-control"></input>
            </div>
       </fieldset>
       <fieldset>
                <div className="form-group">
                    <label>Body</label>
                    <input
                    type="text"
                    name="body"
                    onChange={handleInputChange}
                    required
                    className="form-control">
                    </input>

                </div>
       </fieldset>
       <fieldset>
            <div className="form-group">
                <button className="form-btn btn-primary"
                type="submit">
                    Save Post
                </button>

            </div>
       </fieldset>
    </form>
    )
}