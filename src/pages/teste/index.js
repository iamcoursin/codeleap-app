import React, { useState, useEffect } from "react";
import { Post } from "../../components/post";
import { api } from "../../services/api/api";
import "../../styles/teste.css";

export const Teste = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () =>{
        const res = await api.get()
        const data = await res.data.results;
        console.log(data)
        setPosts(data);
  }

  useEffect((
    
  ) => {getPosts()}, []);

  return (
    <div className="container-teste" >
    {posts && 
        posts.map((post, index) => {
        return <Post key={index} post={post}/>;
      })}
    </div>
  );
};
