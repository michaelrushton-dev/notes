import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/card';
import CardHolder from '../components/cardHolder';
import PostForm from '../components/postForm';
import styles from '../styles/Home.module.css';

type POST = {
  title: string;
  description: string;
  image: string;
};

export default function Home(props: Array<POST>) {
  console.log('index props', props);
  return (
    <div className={styles.container}>
      <h1>Main Page</h1>
      <PostForm />
      <CardHolder props={props} />
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
