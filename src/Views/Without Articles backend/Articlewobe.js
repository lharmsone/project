import { SRLWrapper } from "simple-react-lightbox";


import Breadcrumbs from '../Components/Breadcrumbs';
import { NavLink, useParams } from 'react-router-dom';
import articles from '../DATA/Articles';
import { useState } from 'react';

function Article() {
    const { articleId } = useParams();
    const filteredArticles = articles.filter((article) => { return articleId === article.id });
    const article = filteredArticles[0];
    const [mainImage, setMainImage] = useState(article.image);

    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { link: '/articles', title: 'Articles' },
        { title: article.title },
    ];
    const imageThumbnails = article.images.map((image, index) => {
        return (
            <div className="col-4 mt-3" key={index}>
                <a href={image}>
                    <img className="img-fluid" src={image} onMouseEnter={() => setMainImage(image)} />
                </a>
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
                    <h1>{article.title}</h1>
                </div>
            </div>
            <div className="row mb-5 pb-3">
                <div className="col-12 col-md-4">
                    <div className="row">
                        <div className="col">
                            <img src={mainImage} className="img-fluid" />
                        </div>
                    </div>

                    <SRLWrapper>
                        <div className="row">
                            {imageThumbnails}
                        </div>
                    </SRLWrapper>



                </div>
                <div className="col-12 col-md-8">
                    <p className="text-muted">
                        {article.textLong}
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Article;