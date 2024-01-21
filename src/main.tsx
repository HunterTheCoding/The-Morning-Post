import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { Mybrowser } from './Components/Router/Router.tsx'
import { HelmetProvider } from 'react-helmet-async'
import Provider from './Auth/Provider.tsx'


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='max-w-screen-xl mx-auto'>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Provider>
        <RouterProvider router={Mybrowser} />
        </Provider>
      </HelmetProvider>
    </QueryClientProvider>
    </div>
  </StrictMode>
)



