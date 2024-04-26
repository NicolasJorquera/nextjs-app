import Link from "next/link";


const links = [{
    label: 'Home',
    route: '/'
  }, {
    label: 'About',
    route:'/about'
  }]



  export function Navigation() {
    return (
        <header className="border-solid border-white border rounded p-3">
            <nav >
                <ul className="flex list-none gap-8 ">
                    {links.map(({label, route}) => (
                        <li key={route} className="hover:underline">
                            <Link href={route}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
  }