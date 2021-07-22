import Breadcrumbs from '../Components/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NewFeedbackForm from '../Components/NewFeedbackForm';
import FeedbacksList from '../Components/FeedbacksList';
import picty from '../Assets/IMAGES/thankyou.jpg';

function Feedbacks() {
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
                    <FeedbacksList />
                </div>

            </div>
            <NewFeedbackForm />
            <div className="row pt-3"></div>
            <div>
                <img src={picty} className="d-block w-100" alt="..." />
            </div>
        </div>


    )
}

export default Feedbacks;