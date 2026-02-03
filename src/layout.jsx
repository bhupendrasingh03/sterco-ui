import { Outlet } from 'react-router-dom';
import Header from './components/shared/header';

export default function Layout() {
    return (
        <div className="main-layout">
            <Header />
            <Outlet />
        </div>
    );
}
