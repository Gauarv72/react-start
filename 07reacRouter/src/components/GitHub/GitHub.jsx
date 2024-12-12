import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function GitHub(){
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect (() => {
       
    //     fetch('https://api.github.com/users/Gaurav72')
    //     .then(response => response.json())
    //     .then(data => {console.log(data);
    //     setData(data);
    //     })
    // },[])
    return(
        <div className="text-center text-white m-4 bg-gray-600 m-4 p-4 text-3xl">GitHub Followers:{data.following}
<img src={`${data.avatar_url}?${new Date().getTime()}`} alt="Profile Avatar" />

        </div>
    );
}
export default GitHub;

export const GitHubInfoLoader = async() =>{
   const response = await fetch('https://api.github.com/users/Gaurav72')
   return response.json();
}

