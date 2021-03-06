import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap";
import { Loading } from "./Loding";
import { baseUrl } from "./../shared/baseUrl";

function RenderCard({ item, isLoading, errMess }) { // or just props but down use props.item.shi
    if (isLoading) {
        return (
            <Loading />
        );
    } else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    } else {
        return (
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle tag="h5">{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

function Home(props) {

    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish}
                        isLoading={props.dishesLoading}
                        errMess={props.dishesErrMess}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}
                        isLoading={props.promoLoading}
                        errMess={props.promoErrMess} />
                </div>
            </div>
        </div>
    );
}

export default Home;