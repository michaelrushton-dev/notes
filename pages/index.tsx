import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import Card from '../components/card';
import PostForm from '../components/postForm';

type POST = {
  data: [
    {
      title: string;
      description: string;
      image: string;
      comments: string[];
    }
  ];
};

export default function Home(props: POST) {
  const [data, setData] = useState<any[]>(props.data);
  //   const [localImage, setLocalImage] = useState<FileList | null>();
  console.log(data);
  const [inputs, setInputs] = useState({});
  function inputHandler(e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  function submitHandler(e: React.SyntheticEvent) {
    e.preventDefault();
    const input = [inputs, ...data]
    setData(input);
    console.log(data);
  }

  async function fileHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const imageData = new FormData()
    imageData.append('file', e.target.files![0]);
    imageData.append('upload_preset', 'pictures');

    const data = await fetch(
      'https://api.cloudinary.com/v1_1/ddbw0t3uo/image/upload',
      {
        method: 'POST',
        body: imageData,
      }
    );
    const response = await data.json();
    setInputs({ ...inputs, image: response.url });
  }

  return (
    <div className='flex justify-center flex-col'>
      <h1 className='text-center'>Main Page</h1>
      <div className='flex justify-center mt-4'>
        <PostForm
          inputHandler={inputHandler}
          submitHandler={submitHandler}
          fileHandler={fileHandler}
        />
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4'>
        {data &&
          data.map((post, index) => {
            return (
              <Card
                key={index}
                title={post.title}
                description={post.description}
                comments={post.comments}
                image={post.image}
              />
            );
          })}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('http://localhost:3000/api/posts');
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
};
