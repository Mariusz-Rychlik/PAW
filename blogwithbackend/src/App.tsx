import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

interface Post {
    id: number;
    title: string;
    content: string;
}

interface Comment {
    id: number;
    content: string;
}

function App() {
    return (
        <Router>
            <div className="p-4 max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Simple Blog</h1>
                <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="/post/:id" element={<PostDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

function PostList() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((res) => setPosts(res.data));
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id} className="mb-4 p-4 border rounded-xl shadow">
                    <Link to={`/post/${post.id}`} className="text-xl font-semibold text-blue-600">
                        {post.title}
                    </Link>
                    <p>{post.content.slice(0, 100)}...</p>
                </div>
            ))}
        </div>
    );
}

function PostDetail() {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/${id}`).then((res) => setPost(res.data));
        axios.get(`http://localhost:3001/posts/${id}/comments`).then((res) => setComments(res.data));
    }, [id]);

    const handleAddComment = async () => {
        if (!newComment) return;
        await axios.post(`http://localhost:3001/posts/${id}/comments`, { content: newComment });
        setNewComment("");
        const updatedComments = await axios.get(`http://localhost:3001/posts/${id}/comments`);
        setComments(updatedComments.data);
    };

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <button onClick={() => navigate(-1)} className="text-blue-600 underline mb-2">Back</button>
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="mb-4">{post.content}</p>
            <h3 className="text-xl font-semibold">Comments</h3>
            <div className="mb-4">
                {comments.map((comment) => (
                    <div key={comment.id} className="border p-2 my-2 rounded">
                        {comment.content}
                    </div>
                ))}
            </div>
            <div>
        <textarea
            className="w-full border rounded p-2"
            rows={3}
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
        />
                <button
                    onClick={handleAddComment}
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default App;