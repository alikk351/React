import Menu from "./Menu"
import DISHES from "./../shared/dishes";
import { useState } from 'react';
import DishDetail from "./DishdetailComponent";
import Header from "./Header";
import Footer from "./Footer";

function Main(props) {
    const [dishes, changeDished] = useState(DISHES);
    const [selectedDish, changeSelectedDish] = useState(null);

    function handleClick(Dish) {
        changeSelectedDish(Dish);
    }

    return (
        <div>

            <Header />

            <Menu dishz={dishes} onchoose={handleClick} />
            <DishDetail a_dish={selectedDish} />  {/*it returns array and we nedd the first */}

            <Footer />

        </div>
    );
}

export default Main;
