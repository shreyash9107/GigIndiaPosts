import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function CreateNew() {
    let history = useHistory();
    useEffect(() => {
        let isLoggedIn = localStorage.getItem("isLoggedIn")
            ? localStorage.getItem("isLoggedIn")
            : false;
        !isLoggedIn && history.push("/");
    }, []);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const SavePost = () => {
        let all = localStorage.getItem("all")
            ? JSON.parse(localStorage.getItem("all"))
            : [];

        let post = {
            title,
            content
        };
        debugger;
        all.push(post);
        localStorage.setItem("all", JSON.stringify(all));
        history.push("/home");
    };
    return (
        <div>
            <h4>Title</h4>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
            />
            <h4>Content</h4>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                type="text"
                rows="4"
                cols="50"
            />
            <hr />
            <button onClick={SavePost}>Post</button>
        </div>
    );
}
export default CreateNew;
