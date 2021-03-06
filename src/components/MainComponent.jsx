import Menu from "./Menu"
import { useEffect, useState } from 'react';
import DishDetail from "./DishdetailComponent";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import { connect } from "react-redux"; // to connect comp to the store

import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedback } from "./../redux/ActionCreators";

import { actions } from "react-redux-form";

const mapStateToProps = state => { // will be available as props for the main comp
    return {
        dishes: state.dishes, // this will not only have an array of dishes but 3 different props
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions
    };
};

const mapDispatchToProps = dispatch => ({
    postComment: (dishId, rating, author, comment) => { dispatch(postComment(dishId, rating, author, comment)) },
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedbackForm: () => { dispatch(actions.reset("feedback")) }, // empties the feedback only on reload or submit
    // the model will be passed
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
    postFeedback: (fname, lname, tel, email, agree, type, feedback) => {
        dispatch(postFeedback(fname, lname, tel, email, agree, type, feedback))
    }
});

function Main(props) {  /// all states will be available as props
    useEffect(() => { // directly after screen loaded
        props.fetchDishes();
        props.fetchComments();
        props.fetchPromos();
        props.fetchLeaders();
    }, []);

    const HomePage = () => {
        return (
            <Home
                dish={props.dishes.dishes.filter(d => d.featured === true)[0]}  // d for one dish
                dishesLoading={props.dishes.isLoading}
                dishesErrMess={props.dishes.errMess}
                leader={props.leaders.leaders.filter(l => l.featured === true)[0]}
                promotion={props.promotions.promotions.filter(promo => promo.featured === true)[0]}
                promoLoading={props.promotions.isLoading}
                promoErrMess={props.promotions.errMess}
            />
        );
    }

    const DishWithId = ({ match }) => {
        return (
            <DishDetail
                a_dish={props.dishes.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
                isLoading={props.dishes.isLoading}
                ErrMess={props.dishes.errMess}
                cmnts={props.comments.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}
                postComment={props.postComment}
                commentsErrMess={props.comments.errMess}
            /> //base 10 int
        );
    }

    return (
        <div>

            <Header />

            <Switch>

                <Route path="/home" component={HomePage} />

                <Route exact path="/menu" component={() => <Menu dishz={props.dishes} />} />
                {/* exact cuz we will use '/menu/shi' for dish details */}

                <Route path="/menu/:dishId" component={DishWithId} />

                <Route path="/contactus" component={() => <Contact reset={props.resetFeedbackForm} postFeedback={props.postFeedback} />} />

                <Route path="/aboutus" component={() => <About leaders={props.leaders.leaders} />} />

                <Redirect to="/home" /> {/* for default route redirect to home ===> should be last*/}

            </Switch>

            {/* <Menu dishz={dishes} onchoose={handleClick} /> */}
            {/* <DishDetail a_dish={selectedDish} />  it returns array and we nedd the first */}

            <Footer />

        </div>
    );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); // to connect main to the store
