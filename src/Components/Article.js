import { useState } from 'react';
import axios from 'axios';
//import articles from '../DATA/Articles';
//import { text } from '@fortawesome/fontawesome-svg-core';
//import articles from '../DATA/Articles';

function Article({ article, reloadArticleList }) {
    const [articleCompleted, setArticleCompleted] = useState(article.isCompleted);
    //const [checkboxDisabled, setCheckboxDisabled] = useState(false);
    //const [deletingFeedback, setDeletingFeedback] = useState(false);

    const toggleComletion = async () => {
        //setCheckboxDisabled(true);
        const data = {
            title: article.title,
            image: article.image,
            images: article.images,
            textIntro:article.textIntro,
            text:article.text,
            textLong:article.textLong,
            id:article.id,

            //lables: feedback.lables,
            //createdAt: feedback.createdAt,
            // isCompleted: !taskCompleted,
        };
        const url = `http://localhost:8071/tasks/${article._id}`;
      //  try {
      //      await axios.put(url, data);
      //      setFeedbackCompleted(!feedbackCompleted);
      //      setCheckboxDisabled(false);
      //  } catch (e) {
      //      alert('Whoops, something went wrong');
      //  }
    }





    return (
        <div>
            {article.title}
            {article.image}
            {article.images}
            {article.textIntro}
            {article.text}
            {article.textLong}
            {article.id}    
                
          

        </div>
    )
}

export default Article;
