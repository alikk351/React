import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

function Menu(props) {
    const [selectedDish, changeSelectedDish] = useState(null);

    function handleClick(Dish) {
        changeSelectedDish(Dish);
        console.log(selectedDish);
    }

    function renderDish(a_dish) {   // use it in MERN-auth to display a modal of a post
        if (a_dish === null) {
            return (<div></div>);
        } else {
            return (
                <Card >
                    <CardImg width="100%" src={a_dish.image} alt={a_dish.name} />
                    <CardBody>
                        <CardTitle>{a_dish.name}</CardTitle>
                        <CardText>{a_dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
    }

    return (
        <div className="container">
            <div className="row">
                {props.dishz.map((dish) => {
                    return (
                        <div key={dish.id} className="col-12 col-md-5 m-1">
                            <Card onClick={() => { handleClick(dish); }}>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardImgOverlay>
                                    <CardTitle tag="h5">
                                        {dish.name}
                                    </CardTitle>
                                </CardImgOverlay>
                            </Card>
                        </div>
                    );
                })}
            </div>
            <div className="row">
                {renderDish(selectedDish)}
            </div>
        </div>
    );
}

export default Menu;