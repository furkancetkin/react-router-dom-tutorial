import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/blog/post/1/appcube-script">blog 1</Link>
        </li>
        <li>
          <Link to="/blog/post/2/appcube-flow">blog 2</Link>
        </li>
        <li>
          <Link to="/blog/post/3/appcube-objects">blog 3</Link>
        </li>
        <li>
          <Link to="/blog/post/4/appcube-services">blog 4</Link>
        </li>
      </ul>
    </div>
  );
}
