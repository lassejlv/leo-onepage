import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import './styles/index.scss';
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

const root = document.getElementById('root');

if (root) {
  const rootElement = createRoot(root);

  rootElement.render(
    <StrictMode>
      <Navbar />
      <RouterProvider router={router} />
    </StrictMode>
  );
}
