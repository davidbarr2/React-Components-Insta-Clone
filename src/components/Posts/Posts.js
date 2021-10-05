import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      { 
        posts.map( post =>
          <Post post={post} likePost={likePost}></Post>
        )
    }
    </div>
  );
};

export default Posts;
