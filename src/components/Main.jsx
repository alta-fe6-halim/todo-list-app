import React from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';

function Main() {
    return (
        <div className='grid grid-cols-4 h-screen'>
            <div className='bg-black/5 text-center'>
                <p className='bg-white/5 font-bold'>
                    Today
                </p>
            </div>
            <div className='col-span-3 text-center' >
                <Link to="/detail">
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                </Link>
            </div>
        </div>
    )
}

export default Main