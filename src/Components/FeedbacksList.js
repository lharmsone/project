import axios from "axios";
import { useState, useEffect } from "react";
import Feedback from './Feedback';

function FeedbacksList({counter, reloadFeedbackList}) {
    const [feedbacks, setFeedbacks] = useState({
        loading: true,
        items: [],
    });

    const loadFeedbacks = async () => {
        setFeedbacks({
            loading: true,
            items: [],
        });
        try {
            const url = 'http://localhost:8071/feedbacks';
            const response = await axios.get(url);
            setFeedbacks({
                loading: false,
                items: response.data,
            });
        } catch (e) {
            alert('Whoops, something went wrong');
            setFeedbacks({
                loading: false,
                items: [],
            });
        }
    }

    useEffect(() => {
        loadFeedbacks();
    }, [counter])

    let content = <h5>Loading...</h5>
    if (!feedbacks.loading && feedbacks.items.length == 0) {
        content = <h5>No feedback added</h5>
    } else if (!feedbacks.loading) {
        const feedbackElements = feedbacks
            .items
            .map((feedback, index) => <Feedback 
                feedback={feedback} 
                key={index} 
                reloadFeedbackList={reloadFeedbackList} 
            />)

        content = (
            <ul className="list-group">
                {feedbackElements}
            </ul>
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default FeedbacksList;
