import React, { useState, useRef } from 'react';
import Comment from './comment';
import CommentForm from './commentForm';
import Image from 'next/image';

type POST = {
  title: string;
  description: string;
  image: string;
  comments: string[];
};

function Card(props: POST) {
  const [openComments, setOpenComments] = useState(false);
  const [comments, setComments] = useState(props.comments);

  const [inputs, setInputs] = useState('');
  function inputHandler(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setInputs(e.target.value);
  }

  function submitHandler(e: React.SyntheticEvent) {
    e.preventDefault();
    setComments([...comments, inputs]);
  }

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
              setOpenComments(!openComments);
            }}
          >
            Add Comment
          </p>
          {openComments && (
            <CommentForm
              inputHandler={inputHandler}
              submitHandler={submitHandler}
            />
          )}
          <Comment comments={comments} />
        </div>
      </div>
    </div>
  );
}

export default Card;
