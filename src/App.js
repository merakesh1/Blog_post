import Home from './Components/Home';
import Posts from './Components/Posts';
import PostLists from './Components/PostLists';
import Post from './Components/Post';
import About from './Components/About';
import Error from './Components/Error';
import BlogsList from './Contexts/BlogPosts';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <BlogsList>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />}>
            <Route index element={<PostLists />} />
            <Route path=":Blog" element={<Post />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </BlogsList>
  );
}

export default App;