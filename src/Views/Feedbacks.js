import Breadcrumbs from '../Components/Breadcrumbs';
//import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NewFeedbackForm from '../Components/NewFeedbackForm';
import FeedbacksList from '../Components/FeedbacksList';
import picty from '../Assets/IMAGES/thankyou.jpg';
import { useState, useEffect } from "react";
function Feedbacks() {
    const [counter, setCounter] = useState(0);
    const reloadFeedbackList = () => {
        setCounter(counter + 1);
    }
    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Feedback' },
    ]
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
            </div>
            <div className="row">
                <div className="col-8 offset-2 text-center pt-3 pb-3">
                    <h1 className="display-4 fw-normal">Feedback</h1>
                </div>
            </div>
            <div classname="row">
                <div classname="col">
                    <FeedbacksList reloadFeedbackList={reloadFeedbackList} counter={counter}/>
                </div>

            </div>
            <NewFeedbackForm reloadFeedbackList={reloadFeedbackList}/>
            <div className="row pt-3"></div>
            <div>
                <img src={picty} className="d-block w-100" alt="..." />
            </div>
        </div>


    )
}

export default Feedbacks;