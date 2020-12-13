import axios from 'axios';

export const getPosts = async(dispatch) => {
    try {
        const posts = await axios.get('http://localhost:5000/posts');

        dispatch({ type: 'GET_POSTS', payload: posts.data });

    } catch(error) {

    }
};
