import { useEffect, useState } from "react"
import { Routes, Route, Outlet } from "react-router-dom"
import { PostsList } from "../components/posts/PostsList"
import { NavBar } from "../components/nav/NavBar"
import { PostDetails } from "../components/posts/PostDetails"

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})
    
    useEffect(() => {
        const localUser = localStorage.getItem("learning_user")
        const localUserObject = JSON.parse(localUser);

        setCurrentUser(localUserObject)
    }, [])

    return (
        <Routes>
            <Route path="/" element={
                    <>
                        <NavBar />
                        <Outlet />
                    </>
                }
            >

            <Route index element={<PostsList />} />
            
            <Route path="posts">
                <Route index element={<PostsList />} />
                <Route path=":postId" element={<PostDetails currentUser={currentUser} />} />
                <Route path="edit/:postId" element={<>EDIT POST</>}/>
            </Route>

            </Route>


        </Routes>
    )
}