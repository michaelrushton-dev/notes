import React from 'react';

type COMMENT = {
  comments: string[];
};

function Comment({ comments }: COMMENT) {
  console.log('comments', comments);
  return (
    <div>
      {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
    </div>
  );
}

export default Comment;
