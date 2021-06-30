import React, { useState } from "react";
function Post({ data }) {
    return (
        <div className={"post"}>
            <h4>{data.title}</h4>
            <p>{data.content}</p>
        </div>
    );
}
export default Post;
