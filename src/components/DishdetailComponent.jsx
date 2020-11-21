import React from "react";
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb,
    ModalHeader, BreadcrumbItem, Button, Modal, ModalBody, Label
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Loading } from "./Loding";
import { baseUrl } from "./../shared/baseUrl";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function CommentForm(props) {
    const [modalOpen, setModal] = React.useState(false);

    return (
        <div>
            <Button className="btn-lg" color="secondary" outline
                onClick={() => setModal(true)}><span className="fa fa-pencil fa-lg"> </span>&nbsp; Submit Comment</Button>

            <Modal isOpen={modalOpen} toggle={() => setModal(!modalOpen)}>
                <ModalHeader toggle={() => setModal(!modalOpen)}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={values => {
                        setModal(false);
                        props.addComment(props.dishId, values.rating, values.name, values.cmnt);
                    }}>
                        <div className="form-group">
                            <Label htmlFor="rating" tag="h6">Rating</Label>
                            <Control.select model=".rating" className="form-control" name="rating">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </div>
                        <div className="form-group">
                            <Label htmlFor="name" tag="h6">Your Name</Label>
                            <Control.text model=".name" name="name" className="form-control" placeholder="Your Name"
                                validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                            <Errors show="touched" model=".name" className="text-danger" messages={{
                                required: "Required\n",
                                minLength: "Must be greater than 2 characters\n",
                                maxLength: "Must be 15 characters or less\n"
                            }} />
                        </div>
                        <div className="form-group">
                            <Label htmlFor="cmnt" tag="h6">Comment</Label>
                            <Control.textarea model=".cmnt" name="cmnt" className="form-control" rows="6" />
                        </div>
                        <Button color="primary">Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div>
    );
}

function DishdetailComponent({ any_dish }) {   // use it in MERN-auth to display a modal of a post
    if (any_dish === null) {
        return (<div></div>);
    } else {
        return (
            <Card >
                <CardImg width="100%" src={baseUrl + any_dish.image} alt={any_dish.name} />
                <CardBody>
                    <CardTitle tag="h5">{any_dish.name}</CardTitle>
                    <CardText>{any_dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

function RenderComments({ c, addComment, dishId }) {
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
                <CommentForm dishId={dishId} addComment={addComment} />
            </div>
        );
    }
}


function DishDetail(props) {
    const dish = props.a_dish;
    const comments = props.cmnts;

    React.useEffect(() => {
        console.log("DishDetail invoked");
    });

    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if (props.ErrMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.ErrMess}</h4>
                </div>
            </div>
        );
    } else {
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
                        <DishdetailComponent any_dish={props.a_dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments c={props.cmnts} addComment={props.addComment} dishId={props.a_dish.id} />
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;