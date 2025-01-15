import { useState,useEffect } from 'react'
import './App.css'
import { useParams } from 'react-router-dom';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function App() {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    useEffect(()=>{
        if(id){
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then((data: Post) => setPost(data))
            .catch(error => console.error('Error fetching post:', error));
        }
    },[id])
    if (!post) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div className="App">
                <h1>Post</h1>
                <ul>
                    <li >
                        <p>User Id: {post.userId}</p>
                        <p>Post's Id: {post.id}</p>
                        <p>Title of the post: {post.title}</p>
                        <p> Body of the post: {post.body}</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default App
