
// type idParams = {
//     id: string
// }

export default function Post({params}: any) {
    const {id} = params;
    return <h1>Este es el post {id}</h1>
}