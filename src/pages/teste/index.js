import React, { useState, useEffect } from "react";
import { Post } from "../../components/post";
import { api } from "../../services/api/api";

export const Teste = () => {
  const [posts, setPosts] = useState({
    username: "bryan",
    title: "El Teste",
    content:
      "Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.",
  });

  useEffect(() => {}, []);

  return (
    <div>
      <Post post={posts} />
    </div>
  );
};
