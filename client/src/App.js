
import { useEffect } from 'react';
import { getPosts } from './redux/actions/posts';
import { useDispatch } from 'react-redux';
import Posts from './components/Posts/Posts';
import styles from './App.css';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts);
    });

    return (
        <div className="appContainer">
            <h1>CMS APP</h1>
            <Posts />
        </div>
    );
};

export default App;