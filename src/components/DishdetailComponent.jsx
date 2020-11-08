import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function DishDetail(props) {
    const dish = props.a_dish;
    const comments = props.cmnts;

    React.useEffect(() => {
        console.log("DishDetail invoked");
    });

    function DishdetailComponent(any_dish) {   // use it in MERN-auth to display a modal of a post
        if (any_dish === null) {
            return (<div></div>);
        } else {
            return (
                <Card >
                    <CardImg width="100%" src={any_dish.image} alt={any_dish.name} />
                    <CardBody>
                        <CardTitle tag="h5">{any_dish.name}</CardTitle>
                        <CardText>{any_dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
    }

    function renderComments(c) {
        console.log("Render invoked");
        if (c === null) {
            return (<div></div>);
        } else {
            return (
                <div>
                    <h5>Comments</h5>
                    <br></br>
                    <ul className="list-unstyled">
                        {c.map((cmnt, i) => {
                            return (
                                <div key={i}>
                                    <li>{cmnt.comment}</li>
                                    <li>-- {cmnt.author} , {new Intl.DateTimeFormat("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "2-digit"
                                    }).format(new Date(Date.parse(cmnt.date)))}</li>
                                    <br></br>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            );
        }
    }

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{dish.name}</h3>
                    <hr></hr>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {DishdetailComponent(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {renderComments(comments)}
                </div>
            </div>
        </div>
    );
}

export default DishDetail;