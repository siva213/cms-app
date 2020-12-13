import PostMessage from '../models/postMessage.js';


const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
};

const getpost = async (req, res) => {
    const postReq = req.body;
   try {
    const postMessage = await PostMessage.findById(req.params.id);
        res.status(200).json(postMessage);
   } catch(error) {
    res.status(409).json({ message: error.message })
   }
};

export { getPosts, getpost };