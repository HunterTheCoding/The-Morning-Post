import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { Mybrowser } from './Components/Router/Router.tsx'


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={Mybrowser} />
    </div>
    </QueryClientProvider>
  </StrictMode>
)



