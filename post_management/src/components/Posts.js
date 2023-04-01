import React, { useState } from 'react';
import PostCard from './PostCard';

const Posts = () => {
    const list = [{title: 'demo', description: 'demo', authorId: 'demo'}];
    const [post, setPost] = useState(list);

  return (
    <div>
      {
        post.map((item) => {
            return <PostCard title={item.title} description={item.description} authorId={item.authorId} key={item.authorId} />
        })
      }
    </div>
  );
};

export default Posts;