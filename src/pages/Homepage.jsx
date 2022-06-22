import React from 'react'
import Layout from '../components/Layout'
import { withRouter } from '../utils/navigation';

function Homepage() {
    return (
        <Layout />
    )
}

export default withRouter(Homepage)