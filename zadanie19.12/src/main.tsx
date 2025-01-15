import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import PostList from './App.tsx'
import PostPage from './PostPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <PostList />,
    },
    {
        path: '/entry/:id',
        element: <PostPage />
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
