import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    
    return <ul className="navbar">
        <li className="navbar-item">
            <Link to='/posts'>Posts</Link>
        </li>
        <li className="navbar-item">
            <Link to={'/createPost'}>New Post</Link>
        </li>
        <li className="navbar-item">
            {/* <Link to={'/employees'}>Employees</Link> */}
        </li>
        <li className="navbar-item">
            {/* <Link to={'/profile'}>Profile</Link> */}
        </li>
        {localStorage.getItem("learning_user") ? (
        <li className="navbar-item navbar-logout">
            <Link
            className="navbar-link"
            to=""
            onClick={() => {
                localStorage.removeItem("learning_user")
                navigate("/", { replace: true })
            }}
            >
            Logout
            </Link>
        </li>
        ) : (
        ""
        )}
        
    </ul>
}