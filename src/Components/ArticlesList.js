import axios from "axios";
import { useState, useEffect } from "react";
import Article from './Article';

function ArticlesList({counter, reloadArticleList}) {
    const [articles, setArticles] = useState({
        loading: true,
        items: [],
    });

    const loadArticles = async () => {
        setArticles({
            loading: true,
            items: [],
        });
        try {
            const url = 'http://localhost:8071/articles';
            const response = await axios.get(url);
            setArticles({
                loading: false,
                items: response.data,
            });
        } catch (e) {
            alert('Whoops, something went wrong');
            setArticles({
                loading: false,
                items: [],
            });
        }
    }

    useEffect(() => {
        loadArticles();
    }, [counter])

    let content = <h5>Loading...</h5>
    if (!articles.loading && articles.items.length == 0) {
        content = <h5>No feedback added</h5>
    } else if (!articles.loading) {
        const articleElements = articles
            .items
            .map((article, index) => <Article
                article={article} 
                key={index} 
                reloadArticleList={reloadArticleList} 
            />)

        content = (
            <ul className="list-group">
                {articleElements}
            </ul>
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default ArticlesList;
