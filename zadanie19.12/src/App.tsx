import { useState,useEffect } from 'react'
import './App.css'

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function App() {
    const [posts, setPosts] = useState<Post[]>([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
        .then((data: Post[]) => setPosts(data))
        .catch(error => console.error('Error fetching posts:', error));
  },[])
  return (
      <>
          <div className="App">
              <h1>Posts</h1>
              <ul>
                  {posts.map(post => (
                      <li key={post.id}>
                          <p>User Id: {post.userId}</p>
                          <p>Post's Id: {post.id}</p>
                          <p>Title of the post: {post.title}</p>
                          <p> Body of the post: {post.body}</p>
                      </li>
                  ))}
              </ul>
          </div>
      </>
  )
}

export default App
