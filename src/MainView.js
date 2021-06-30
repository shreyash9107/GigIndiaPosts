import React, { useEffect, useState } from "react";
import Post from "./Post";
import { Link, useHistory } from "react-router-dom";

function MainView() {
    let history = useHistory();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let isLoggedIn = localStorage.getItem("isLoggedIn")
            ? localStorage.getItem("isLoggedIn")
            : false;
        !isLoggedIn && history.push("/");
        let allPosts = localStorage.getItem("all")
            ? JSON.parse(localStorage.getItem("all"))
            : [];
        setPosts(allPosts);
    }, []);

    return (
        <div className={"mainview-container"}>
            <div className={"mainview"}>
                <h3>All Posts </h3>
                <div className="AllPost">
                    {posts.length !== 0 ? (
                        posts.map((post) => <Post data={post} />)
                    ) : (
                        <p>No Posts Created</p>
                    )}
                </div>
            </div>
            <div className="Sidebar">
                <div className={"createNew"}>
                    <Link to="/create">Create New Post</Link>
                </div>
            </div>
        </div>
    );
}
export default MainView;
