import { useEffect } from "react"
import { useState } from "react"
import { getAllPosts } from "../services/postServices"
import "../styles/posts.css"
import { Post } from "./Post"
import { getAllTopics } from "../services/topicsServices"


export const PostsList = () => {
    const [allPosts, setAllPosts] = useState([])
    const [allTopics, setAllTopics] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [filterCategory, setFilterCategory] = useState({})
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        getAllPosts().then((postsArray) => {
            setAllPosts(postsArray)
        })
    }, [])

    useEffect(() => {
        getAllTopics().then((topicsArray) => {
            setAllTopics(topicsArray)
        })
    }, [])

    useEffect(() => {
        const foundPosts = allPosts.filter((post) => 
            post.title.toLowerCase().includes(searchTerm.toLowerCase()))
            setFilteredPosts(foundPosts)
        
    }, [searchTerm, allPosts])

    useEffect(() => {
        
        if (filterCategory?.name) {
            const filteredPosts = allPosts.filter(
                (post) => post.topic.name === filterCategory.name
            )
            setFilteredPosts(filteredPosts)
        } else {
            setFilteredPosts(allPosts)
        }
    }, [filterCategory])

    return <>
        <div className="posts-container">
            <h2>All Posts</h2>
            <div className="filter-bar">
                <select onChange={(event) => {
                    setFilterCategory(allTopics.find(topic => topic.name === event.target.value))
                }}>
                    <option>Filter by topic</option>
                    {allTopics.map((topicObj) => {
                        return (
                            <option key={topicObj.id}
                            >{topicObj.name}</option>
                        )
                    })}
                </select>
                <input
                onChange={(event) => {
                    setSearchTerm(event.target.value)
                }}
                type="text"
                placeholder="Search Post Titles"
                className="post-search">
                </input>
            </div>
            <div className="posts">
                {filteredPosts.map((postObj) => {
                    return (
                        <Post 
                        postObj={postObj}
                        key={postObj.id}
                        />
                    )
                })} 

            </div>

        </div>
    </>
} 