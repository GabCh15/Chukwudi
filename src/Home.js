import './Home.css'
import {Navbar} from './Navbar'
import {Ad} from './Ad'
import {Restaurants} from './Restaurants'

export const Home = (props) => {
    return (
        <div className={props.className}>
            <Navbar/>
            <Ad/>
            <Restaurants/>
        </div>
    )
}
