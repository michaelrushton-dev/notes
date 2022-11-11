import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/card';
import PostForm from '../components/postForm';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Main Page</h1>
            <PostForm />
            <Card />
        </div>
    );
}
