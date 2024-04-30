

interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string

}

async function fetchComments (id: string) : Promise<Comment[]>  {

    await new Promise(resolve => setTimeout(resolve, 3000));

    // throw new Error("Error al cargar los comentarios");
    

    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}/comments`,{
        next:{
            revalidate:60
        }
    })

    const data = await response.json();
    

    return data
}


export default async function Post({params}: any) {
    const {id} = params;
    const comments: Comment[] = await fetchComments(id);

    return (
        <ul className="text-sm bg-neutral-800 p-4">
            {comments.map(comment =>(
                <li key={comment.id}>
                    <h2 className="text-blue-500 my-1 text-lg">{comment.name}</h2>
                    <p>{comment.body}</p>
                </li>
            ))}
        </ul>
    )
}

