import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./Loding";

function Menu(props) {

    if (props.dishz.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if (props.dishz.ErrMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.dishz.ErrMess}</h4>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr></hr>
                    </div>
                </div>
                <div className="row">
                    {props.dishz.dishes.map((dish) => {
                        return (
                            <div key={dish.id} className="col-12 col-md-5 m-1">
                                <Card>
                                    <Link style={{ color: "black" }} to={`/menu/${dish.id}`}>
                                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                                        <CardImgOverlay>
                                            <CardTitle tag="h5">
                                                {dish.name}
                                            </CardTitle>
                                        </CardImgOverlay>
                                    </Link>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Menu;