import React from 'react';
import Comment from './comment';
import CommentForm from './commentForm';
import Image from 'next/image';

type POST = {
  title: string;
  description: string;
  image: string;
};

function Card(props: POST) {
  console.log(props);
  return (
    <div>
      <div className='flex justify-center'>
        <div className='rounded-lg shadow-lg bg-white max-w-sm'>
          <a href='#!'>
            <Image
              className='rounded-t-lg'
              src={props.image}
              height={180}
              width={180}
              alt={props.title}
            />
          </a>
          <div className='p-6'>
            <h1 className='text-gray-900 text-xl font-medium mb-2'>
              {props.title}
            </h1>
            <p className='text-gray-700 text-base mb-4'>{props.description}</p>
          </div>
          <CommentForm />
          <Comment />
        </div>
      </div>
    </div>
  );
}

export default Card;
