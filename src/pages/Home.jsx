import { Link } from "react-router-dom"

const Home = ()=>{


    return <div>
        <h1>This is home page</h1>

        <span><Link to="/products"> Please click to naviage to Product list - Modern webapps </Link>  </span><br/><br/>
        <a href="/products"> Go to products - Traditional web app</a>

    </div>
}


export default Home