import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles.scss'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainPage from './App.tsx'
import EntryPage from "./entry.tsx";
import Categories from "./categories.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/entry',
        element: <EntryPage />
    },
    {
        path: '/categories',
        element:<Categories />
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
