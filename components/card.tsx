import React, { useState } from 'react';
import Comment from './comment';
import CommentForm from './commentForm';
import Image from 'next/image';

type POST = {
  title: string;
  description: string;
  image: string;
};

function Card(props: POST) {
  const [comments, setComments] = useState(false);

  return (
    <div>
      <div className='flex justify-center'>
        <div className='rounded-lg shadow-lg bg-white max-w-sm'>
          <a href='#!'>
            <Image
              className='rounded-t-lg'
              src={props.image}
              height={360}
              width={640}
              alt={props.title}
            />
          </a>
          <div className='p-6'>
            <h1 className='text-gray-900 text-xl font-medium mb-2'>
              {props.title}
            </h1>
            <p className='text-gray-700 text-base mb-4'>{props.description}</p>
          </div>
          <p
            onClick={() => {
              setComments(!comments);
            }}
          >
            Add Comment
          </p>
          {comments && <CommentForm />}
          <Comment />
        </div>
      </div>
    </div>
  );
}

export default Card;
