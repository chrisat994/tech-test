import React from 'react'
import Navbar from '../../components/navigation/Navbar';
type Props = {
    children: JSX.Element,
};

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            {children}
        </>
    )
}
