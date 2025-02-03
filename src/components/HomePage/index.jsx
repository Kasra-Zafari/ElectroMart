import HomeSlider from "../HomeSlider";
import classes from "./index.module.css";

const HomePage = () => {

    return (
        <div className={classes.home}>
            <HomeSlider/>
            <h1>Welcome to My App</h1>
            <p>This is the homepage of the application.</p>
        </div>
    )
}

export default HomePage;