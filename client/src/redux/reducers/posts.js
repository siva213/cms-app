
const posts = (posts = [], action) => {
    switch(action.type) {
        case 'GET_POSTS': 
            return [ ...posts, ...action.payload ];
        default:
            return posts;
    }
}

export default posts;