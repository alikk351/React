import Menu from "./Menu"
import { useState } from 'react';
import DISHES from "./../shared/dishes";
import DishDetail from "./DishdetailComponent";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { COMMENTS } from "./../shared/comments";
import { LEADERS } from "./../shared/leaders";
import { PROMOTIONS } from "./../shared/promotions";
import { Switch, Route, Redirect } from "react-router-dom";

function Main(props) {
    const [dishes, changeDished] = useState(DISHES);
    const [leaders, changeLeaders] = useState(LEADERS);
    const [comments, changeComments] = useState(COMMENTS);
    const [promotions, changePromotions] = useState(PROMOTIONS);

    const HomePage = () => {
        return (
            <Home
                dish={dishes.filter(d => d.featured === true)[0]}  // d for one dish
                leader={leaders.filter(l => l.featured === true)[0]}
                promotion={promotions.filter(promo => promo.featured === true)[0]}
            />
        );
    }

    const DishWithId = ({ match }) => {
        return (
            <DishDetail
                a_dish={dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
                cmnts={comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}
            /> //base 10 int
        );
    }

    return (
        <div>

            <Header />

            <Switch>

                <Route path="/home" component={HomePage} />

                <Route exact path="/menu" component={() => <Menu dishz={dishes} />} />
                {/* exact cuz we will use '/menu/shi' for dish details */}

                <Route path="/menu/:dishId" component={DishWithId} />

                <Route path="/contactus" component={Contact} />

                <Route path="/aboutus" component={() => <About leaders={leaders} />} />

                <Redirect to="/home" /> {/* for default route redirect to home ===> should be last*/}

            </Switch>

            {/* <Menu dishz={dishes} onchoose={handleClick} /> */}
            {/* <DishDetail a_dish={selectedDish} />  it returns array and we nedd the first */}

            <Footer />

        </div>
    );
}

export default Main;
