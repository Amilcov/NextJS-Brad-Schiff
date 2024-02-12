
// import sleep from "await-sleep"

export default function Home(props) {
    return (
        <div>
            <h2>Welcome to our homepage.</h2>
            <p>This is the best home page in the world. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur illum architecto cumque recusandae fuga sequi necessitatibus deleniti repellat harum nobis, dolor veniam vero deserunt. Voluptatibus, ducimus deserunt. Recusandae, dolore.</p>
            <p>The weather: {props.forecast}</p>
        </div>
    )
}

export async function getServerSideProps() {
    // await sleep(3000);

    const response = await fetch("https://api.weather.gov/gridpoints/MFL/109,49/forecast")
    const data = await response.json()

    return {
        props: {
            forecast: data.properties.periods[0].detailedForecast
        }
    }
}

/*

import Link from 'next/link'

export default function Home() {
    return (
        <>
            <h1>Hello in Index Page</h1>
            <p>This is a text for Index page </p>
            <Link href="/about"> Visit About Page</Link>
        </>
    )
}


*/