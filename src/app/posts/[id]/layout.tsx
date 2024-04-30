import Link from "next/link";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function fecthPost(id: string) : Promise<Post> {
    return fetch(`http://jsonplaceholder.typicode.com/posts/${id}`,{
        next:{
            revalidate:60
        }
    })
    .then(res=> res.json())
}
export default async function Post({children, params}: any) {
    const {id} = params;
    const post = await fecthPost(id)

    return (
        <article>
            <h1 className='my-2 text-2xl text-green-600'>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
            {children}
        </article>
    )
}