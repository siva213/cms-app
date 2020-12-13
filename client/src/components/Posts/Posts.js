import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import styles from './Posts.css';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    return (
        <div className="postsContainer">
            {posts.map((post) => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    );
};

export default Posts;