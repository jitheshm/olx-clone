import React from "react";
import PostCard from "../PostCard/PostCard";
import './PostContainer.css'
function PostContainer() {
    return <section className="container-fluid">
        <div className="p-4">
            <h4>Fresh recommendations</h4>
            <div className="mt-4 post-card-container">
                {/* Start: post card */}
                <PostCard/>
                {/* End: post card */}
            </div>
        </div>
    </section>
    

}

export default PostContainer;
