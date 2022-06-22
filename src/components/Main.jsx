import React from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';

function Main() {
    return (
        <div className='grid grid-cols-4 h-screen'>
            <div className=' bg-gray-200 text-center'>todo
            </div>
            <div className='col-span-3 bg-slate-400 text-center' >
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