
import Link from "next/link"
import { useRouter } from 'next/router'
import "../styles/global.css"



export default function App({ Component, pageProps }) {
    const router = useRouter();
    return (
        <>
            <div>
                <h1> This is a title </h1>
                <nav className="header-nav">
                    <ul>
                        <li>
                            <Link className={router.pathname == '/' ? "active" : ""} href="/"> Home </Link>
                        </li>
                        <li>
                            <Link className={router.pathname == '/about' ? "active" : ""} href="/about"> About </Link>
                        </li>
                        <li>
                            <Link className={router.pathname == '/blog' ? "active" : ""} href="/blog"> Blog </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Component {...pageProps} />
            <p>Footer</p>
        </>
    )
}


/*
export default function App(props) {
    return (
        <>
            <p>Header</p>
           <props.Component></props.Component>
            <p>Footer</p>
        </>
    )
}

*/

