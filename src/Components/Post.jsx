import React,{useContext} from 'react'
import { useParams, Link } from 'react-router-dom';
import { BlogPostsContext } from '../Contexts/BlogPosts'

const Post = () => {
    const Blogs=useContext(BlogPostsContext);
    const { Blog } = useParams();
    const post = Blogs[Blog];
    if(!post) {
      return <span className='text-danger text-center'>The blog post you've requested doesn't exist.</span>;
    }
    const { subject, description } = post;
    return (
      <div className='text-center  mt-5' style={{ padding: 20 }}>
        <h3 className='Honk_font'>{subject}</h3>
        <p>{description}</p>
        <Link to={"/posts"} className='btn btn-outline-dark' >Go Back</Link>
      </div>
    );
  
}

export default Post
