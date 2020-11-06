import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

function Menu(props) {

    return (
        <div className="container">
            <div className="row">
                {props.dishz.map((dish) => {
                    return (
                        <div key={dish.id} className="col-12 col-md-5 m-1">
                            <Card onClick={() => { props.onchoose(dish); }}>
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
        </div>
    );
}

export default Menu;