"use client";
import { useState, useRef } from "react";
import "./styles.css";

export default function Post({post}){
    const [collapsed, setCollapsed] = useState(false);
    const postRef = useRef(null);

    const toggleCollapse = (event) => {
        event.stopPropagation(); 
        setCollapsed(!collapsed);
        postRef.current?.scrollIntoView({ behavior: "smooth", block: "center"});
    }

    return (
        <div className="post" ref={postRef} onClick={toggleCollapse}>
            <div className={`scope-indicator ${collapsed ? "collapsed" : ""}`} onClick={toggleCollapse}></div>
            <div className="content">
                <div className="header">
                    <img src={post.author.avatar} alt="avatar" className="avatar" />
                    <span className="author">{post.author.name}</span>
                </div>
            </div>
            {!collapsed && <p className="text">{post.text}</p>}
            {!collapsed && post.replies?.length > 0 && (
                <div className="replies">
                    {post.replies.map((reply,i) => (
                        <Post key={i} post={reply} />
                    ))}
                </div>
            )}
        </div>
    )
}