import React from 'react';

function CommentForm() {
  return (
    <div className='block p-6 rounded-lg shadow-lg bg-white max-w-md'>
      <form>
        <div className='form-group mb-6'>
          <textarea
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

export default CommentForm;
