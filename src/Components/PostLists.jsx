import React, { useContext } from 'react';
import { BlogPostsContext } from '../Contexts/BlogPosts';
import { Link } from 'react-router-dom';
import '../components.css';

const PostLists = () => {
  const BlogPosts = useContext(BlogPostsContext);

  return (
    <div className='grid-container mt-5'>
      {Object.entries(BlogPosts).map(([id, { subject, img }]) => (
        <div key={id} className="grid-item">
          <div className="card mainCard" style={{ width: "12rem", height: "15rem" }}>
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body" style={{backgroundColor: "rgb(255, 189, 254)"}}>
              <h5 className="card-title caveat_font" style={{fontWeight: "500"}}>{subject}</h5>
              <p style={{position: "absolute", bottom: "0",}}>
                <Link className='btn btn-outline-dark btn-sm caveat_font' to={`/posts/${id}`}>
                  Read More
                </Link>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostLists;
