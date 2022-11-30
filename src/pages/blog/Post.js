import React from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  let { id, url } = useParams();

  return (
    <div>
      <h5>Blog Post</h5>
      post page = {id} - {url}
    </div>
  );
}
