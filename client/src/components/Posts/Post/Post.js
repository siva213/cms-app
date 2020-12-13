import { Fragment } from 'react';
import styles from './Post.css';
import { Link } from 'react-router-dom';


const Post = ({ post: { _id, title, content } }) => {
    return (
        <Link to={`/blogdetails/${_id}`}>
            <div className="PostContainer">
                <div className="TitleSection">
                    <h4>{title}</h4>
                </div>
                <p>{content}</p>
            </div>
        </Link>
    );
};

export default Post;