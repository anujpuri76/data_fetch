import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Posts from './test';
import './App.css'


// QueryClient banaya
const queryClient = new QueryClient();

// App component
function App() {
  return (
    <QueryClientProvider client={queryClient}>
     <Posts/>
    </QueryClientProvider>
  );
}

export default App;
