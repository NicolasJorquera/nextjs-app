
import React from 'react';
import LikeButton from './LikeButton';
import Link from 'next/link';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function fecthPosts() : Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'});
    const data = await response.json();
    return data;
}

export default async function Posts() {
    const posts: Post[] = await fecthPosts();

    

    return (
        <div>
            {posts.slice(0, 5).map(post => (
                <article key={post.id} className='my-5'>
                    <Link href='/posts/[id]' as={`/posts/${post.id}`}>
                    
                        <h2 className='my-2 text-2xl text-green-600'>{post.title}</h2>
                        <p>{post.body}</p>
                    
                        <LikeButton/>
                    </Link>
                </article>
            ))}
        </div>
    );
}
