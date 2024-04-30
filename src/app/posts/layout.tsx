
import {Counter} from './Counter'


export default function PostsLayout({children}:any) {
    return (
        <div>
            <Counter/>
            {children}
        </div>
    )
    
}