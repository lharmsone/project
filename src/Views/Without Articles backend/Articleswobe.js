import Breadcrumbs from '../../Components/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import articles from '../../DATA/Articles';

function Articles() {
    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Articles' },
    ]

    const articleElements = articles.map((article, index) => {
        return (
            <div className="row mb-5 pb-3 border-bottom" key={index}>
                <div className="col-12 col-md-3">
                    <NavLink to={'/articles/' + article.id}>
                        <img className="img-fluid" src={article.image} />
                    </NavLink>

                </div>
                <div className="col-12 col-md-9">
                    <h3>
                        <NavLink to={'/articles/' + article.id}>{article.title}</NavLink>
                    </h3>
                    <p className="text-muted">
                        {article.text}
                    </p>
                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h1>Articles</h1>
                </div>
            </div>
            {articleElements}
        </div>
    )
}

export default Articles;