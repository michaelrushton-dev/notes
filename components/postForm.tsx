import React, { KeyboardEventHandler } from 'react';

type Props = {
  inputHandler: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => any;
  submitHandler: React.FormEventHandler;
  fileHandler: (e: React.ChangeEvent<HTMLInputElement>) => any;
};

function PostForm({ inputHandler, submitHandler, fileHandler }: Props) {
  return (
    <div className='block p-6 rounded-lg shadow-lg bg-white max-w-md'>
      <form onSubmit={submitHandler}>
        <div className='form-group mb-6'>
          <input
            onChange={(e) => {
              inputHandler(e);
            }}
            name='title'
            type='text'
            className='form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            id='exampleInput7'
            placeholder='Title'
          ></input>
        </div>
        <div className='form-group mb-6'>
          <textarea
            onChange={(e) => {
              inputHandler(e);
            }}
            name='description'
            className='
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      '
            id='exampleFormControlTextarea13'
            placeholder='Message'
          ></textarea>
        </div>
        <div className='form-group form-check text-center mb-6'>
          <input
            onChange={fileHandler}
            type='file'
            // className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
            id='exampleCheck87'
          ></input>
        </div>
        <button
          type='submit'
          className='
      w-full
      px-6
      py-2.5
      bg-black
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-black hover:shadow-lg
      focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-black active:shadow-lg
      transition
      duration-150
      ease-in-out'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default PostForm;
