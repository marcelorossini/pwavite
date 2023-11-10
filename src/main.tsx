import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/styles/index.css'
import { router } from '@/config/router'

import { registerSW } from "virtual:pwa-register";
import {
  RouterProvider,
} from "react-router-dom";

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("offline ready");
  },
});

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>      
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
