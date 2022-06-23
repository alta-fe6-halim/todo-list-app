/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
// import { withRouter } from '../utils/navigation';
// import Main from '../components/Main';

const Homepage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        axios
            .get(`https://api.todoist.com/rest/v1/tasks`, { headers: { Authorization: 'Bearer ae253c6a3c59514d84f4387f486bc251ff0717eb' } })
            .then((response) => {
                console.log(response);

                const { result } = response.data;
            })
            .catch(function (error) {

                console.log(error);
            })
            .finally(() => setLoading(false));
    }

    if (loading) {
        return <div>Loading...</div>
    } else {
        return (
            <Layout>
                <div className='bg-black/30 text-white w-1/2 m-auto my-0 rounded-3xl p-10'>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="bg-white text-white rounded-md flex items-center">
                                <div className='mx-48 bg-orange-200'>
                                    <p>{item.content}</p>
                                    <div>{item.due && <p>{item.due.date}</p>}</div>
                                    <button className='bg-green-700 rounded-md m-2 p-2'>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Layout>
        )
    }
}

// export default withRouter(Homepage)
export default Homepage