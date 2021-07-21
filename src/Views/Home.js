import {NavLink} from 'react-router-dom';
import cat1 from '../Assets/IMAGES/cor1.jpg';
import cat2 from '../Assets/IMAGES/cor2.jpg';
import cat3 from '../Assets/IMAGES/cor3.jpg';
import articles from '../DATA/Articles';


function Home() {
        const articleElements = articles.map((article, index) => {
        return (
            <div className="col" key={index}>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <NavLink to={'/articles/' + article.id}>
                            <img src={article.image} className="img-fluid rounded-start" alt="..." />
                            </NavLink>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <NavLink to={'/articles/' + article.id}>
                                        {article.title}
                                    </NavLink>
                                </h5>
                                <p className="card-text">{article.textIntro}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={cat1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={cat2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={cat3} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col mt-3">
                    <h4>The latest articles</h4>
                </div>
            </div>
            <div className="row">
                {articleElements}
            </div>
        </div>
    )
}

export default Home;