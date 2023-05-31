import React from 'react';

// import { Container } from './styles';


interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return <div>
    layout
    {children}
    </div>
}

export default Layout;