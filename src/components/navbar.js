import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link to='/' className='navbar-brand'>
                Lego Blind Auction
            </Link>
            <Link to='/create' className='navbar-item'>
                Add Lego for Auction
            </Link>
        </nav>
    )
}