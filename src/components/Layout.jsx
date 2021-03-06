import React from 'react'
import Header from './Header'
import { withRouter } from '../utils/navigation';
import Main from './Main'

function Layout() {

    return (
        <div className="w-full h-screen flex flex-col overflow-auto bg-gradient-to-b from-slate-500 to-slate-900">
            <Header />
            <Main />
        </div>
    )
}

export default withRouter(Layout)