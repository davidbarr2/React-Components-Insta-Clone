import React, {useState} from 'react';
import Posts from './components/Posts/Posts.js'
import SearchBar from './components/SearchBar/SearchBar.js';
import dummyData from './dummy-data.js';
import './App.css';

const App = () => {
  const [ posts, setPosts] = useState(dummyData)
  const [ query, setQuery ] = useState('')

  const likePost = postId => {
    setPosts(posts.map( post => 
      
       ({...post, likes: (postId===post.id ? post.likes+1 : post.likes)})
      ))

  };

  return (
    <div className='App'>
      <SearchBar/>
      <Posts likePost={likePost} posts={posts}/>
    </div>
  );
};

export default App;
