import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Home from './components/pages/home';
import About from './components/pages/about';

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            {
                path: '*', element: <h1
                    style={{ height: "100vh", background: "#eee", display: "flex", justifyContent: "center", alignItems: "center" }}

                >404 Not Found</h1>
            },
        ]
    }
]);
