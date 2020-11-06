import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Menu"
import DISHES from "./../shared/dishes";
import { useState } from 'react';
import DishDetail from "./DishdetailComponent";

function Main(props) {
    const [dishes, changeDished] = useState(DISHES);
    const [selectedDish, changeSelectedDish] = useState(null);

    function handleClick(Dish) {
        changeSelectedDish(Dish);
    }

    return (
        <div>

            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>

            <Menu dishz={dishes} onchoose={handleClick} />
            <DishDetail a_dish={selectedDish} />  {/*it returns array and we nedd the first */}

        </div>
    );
}

export default Main;
