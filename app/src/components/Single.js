import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import Loader from './Loader'

const Single = (props) => {

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false)

  let { id } = useParams();

  // Fetching single data
  const f = async () => {
     const res = await fetch(`https://reqres.in/api/users/${id}`);
    const json = await res.json();

    setUser(json.data);
    setLoading(true)
  };

  useEffect(() => {
    f();
  }, []);


  return (
    <center>

      <div className="">
        <Link to="/">
          <button className="btn">back to home page ◀️</button>
        </Link>
      </div>
      <center className="flex justify-center items-center flex-wrap px-2 py-5">
        {loading ? (  <div className="max-w-sm rounded py-5 overflow-hidden shadow-lg" key={user.id}>
              <img className="w-full" src={user.avatar} alt={user.avatar} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{user.first_name} {user.last_name}</div>
                <p className="text-gray-700 text-base">
                  {user.email}
                </p>
              </div>

            </div>
          ) : <Loader />
        }

      </center>
    </center>
  )
}

export default Single;