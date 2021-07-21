import { useParams } from 'react-router-dom';
import articles from '../DATA/Articles';
import Breadcrumbs from '../Components/Breadcrumbs';
import { useState } from 'react';
//import { SRLWrapper } from "simple-react-lightbox";

function Product() {
    const { articleId, productId } = useParams();
    const filteredArticles = articles.filter((category) => { return articleId == article.id });
    const article = filteredArticles [0];
    const filteredProducts = article.products.filter((product) => { return productId == product.id });
    const product = filteredProducts[0];
    const [mainImage, setMainImage] = useState(product.image);

    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { link: '/articless', title: 'Articles' },
        { link: `/articles/${article.id}`, title: article.title },
        { title: product.title },
    ]

    const imageThumbnails = product.images.map((image, index) => {
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
                    <h1>{product.title}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="row">
                        <div className="col">
                            <img src={mainImage} className="img-fluid" />
                        </div>
                    </div>
                   

                    
                </div>
                <div className="col-12 col-md-8">
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Product;