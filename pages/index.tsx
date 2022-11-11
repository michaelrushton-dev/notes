import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/card';
import CardHolder from '../components/cardHolder';
import PostForm from '../components/postForm';
import styles from '../styles/Home.module.css';

type POST = {
    data: [
        {
            title: string;
            description: string;
            image: string;
        }
    ];
};

export default function Home(props: POST) {
    const [inputs, setInputs] = useState({ title: '', description: '' });
    function inputHandler(
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) {
        console.log({ [e.target.name]: e.target.value });
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    function submitHandler(e: React.SyntheticEvent) {
        e.preventDefault();
        console.log(inputs);
    }

    return (
        <div className='flex justify-center flex-col'>
            <h1 className='text-center'>Main Page</h1>
            <div className='flex justify-center mt-4'>
                <PostForm
                    inputHandler={inputHandler}
                    submitHandler={submitHandler}
                />
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4'>
                {props.data.map((post, index) => {
                    return (
                        <Card
                            key={index}
                            title={post.title}
                            description={post.description}
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
