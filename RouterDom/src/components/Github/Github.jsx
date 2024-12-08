import React from "react";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
function Github() {
    // const [name ,setName]=useState("RHL-RWT-01")
//  const { username } = useParams();
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://api.github.com/users/RHL-RWT-01")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>

    

      <div className="text-center m-4 bg-gray-500 text-white p-4 text-5xl">
        Github Followers:{data.followers}
      </div>
        <img
          src={data.avatar_url}
          alt="avatar"
          className="rounded-full h-24 w-24 mx-auto "
        />

        <div className="text-center m-4 bg-gray-500 text-white p-4 text-5xl">
          Github Following:{data.following}
        </div>
        <div className="text-center m-4 bg-gray-500 text-white p-4 text-5xl">
          Github Public Repos:{data.public_repos}
        </div>
      <div className="text-center m-4 bg-gray-500 text-red p-4 text-5xl">
        Hi
      </div>
    </>
  );
}

export default Github;
