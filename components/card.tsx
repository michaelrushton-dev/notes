import React from 'react';
import Comment from './comment';
import CommentForm from './commentForm';

type DATA = {
  title: string;
  description: string;
  image: string;
};

function Card(props: DATA) {
  console.log(props);
  return (
    <div>
      <h1></h1>
      <CommentForm />
      <Comment />
    </div>
  );
}

export default Card;
