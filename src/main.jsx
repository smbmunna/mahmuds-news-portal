import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './Router/Router';
import { QueryClient } from 'https://esm.sh/@tanstack/react-query'
import { QueryClientProvider } from '@tanstack/react-query';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
        <QueryClientProvider client={QueryClient}>

        </QueryClientProvider>
    </RouterProvider>
  </StrictMode>,
)
