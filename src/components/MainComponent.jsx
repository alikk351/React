import Menu from "./Menu"
import DISHES from "./../shared/dishes";
import { useState } from 'react';
import DishDetail from "./DishdetailComponent";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { Switch, Route, Redirect } from "react-router-dom";

function Main(props) {
    const [dishes, changeDished] = useState(DISHES);

    const HomePage = ()=>{
        return (
            <Home />
        );
    }

    return (
        <div>

            <Header />

            <Switch>

                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <Menu dishz={dishes} />} />
                {/* exact cuz we will use '/menu/shi' for dish details */}
                <Redirect to="/home" /> {/* for default route redirect to home */}

            </Switch>

            {/* <Menu dishz={dishes} onchoose={handleClick} /> */}
            {/* <DishDetail a_dish={selectedDish} />  it returns array and we nedd the first */}

            <Footer />

        </div>
    );
}

export default Main;
