import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './FullPost.css'

const Posts = () => {
    const [ post, setPost ] = useState('');

    const id = '5fd5965bf5c32648420ebab7';

    useEffect(async () => {
        const post = await axios.get(`http://localhost:5000/posts/blogdetails/${id}`);
        console.log(post.data)
        setPost(post.data);
    }, []);

    return (
        <div className="postDetails">
            <div>{post.title}</div>
            <p>{post.content}</p>
        </div>
    );
};

export default Posts;