import React, { useState, useEffect } from 'react'
import { Link, withRouter} from 'react-router-dom';
import Loader from './Loader'

function Main(props) {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false)

    // // Fetching al data
    const f = async () => {
        const res = await fetch("https://reqres.in/api/users/");
        const json = await res.json();
        setUser(json.data);
        setLoading(true)
    };

    useEffect(() => {
        f();
    }, []);

    return (
        
        <div className="px-20 py-5 ">
            <h1 className="flex justify-center text-3xl ">Hello users</h1>
            
            <center className="flex justify-between items-center flex-wrap px-2 py-5">
               { loading ? user.map((user) => {
                        return (
                            <div className="max-w-sm rounded py-5 overflow-hidden shadow-lg" key={user.id}>
                                <img className="w-full" src={user.avatar} alt={user.avatar} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{user.first_name} {user.last_name}</div>
                                    <p className="text-gray-700 text-base">
                                        {user.email}
                                    </p>
                                </div>
                          
                            </div>
                        );
                    }) : <Loader />
                }

            </center>
            <div className="flex justify-between items-center py-10">
            {
                user.map((user) => {
                    return (
                        <div className="max-w-sm  overflow-hidden shadow-lg" key={user.id}>
                        <Link to={`/users/${user.id}`}>
                        <button className="rounded-3xl border border-transparent bg-indigo-600 px-10 py-3 text-base font-medium text-white
                 shadow-sm hover:bg-indigo-700" >{user.id}</button>
                       </Link>
                        </div>
                    )
                })
            }
            </div>

        </div>
    );
}

export default withRouter(Main);