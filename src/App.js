import { Routes, Route, Link, NavLink } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Blog from "./pages/blog/Blog";
import BlogLayout from "./pages/blog/index";
import Post from "./pages/blog/Post";
import Categories from "./pages/blog/Categories";
import Blog404 from "./pages/blog/Blog404";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "aktif" : "")}
        >
          {({ isActive }) => (isActive ? "Anasayfa(Aktif)" : "Anasayfa")}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "aktif" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "aktif" : "")}
        >
          Contact
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "aktif" : "")}
        >
          Blog
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogLayout />}>
          <Route index={true} element={<Blog />} />
          <Route path="categories" element={<Categories />} />
          <Route path="post/:id/:url" element={<Post />} />
          <Route path="*" element={<Blog404 />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
