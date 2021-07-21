import Breadcrumbs from '../Components/Breadcrumbs';
import { NavLink } from 'react-router-dom';
function AboutUs() {
    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'About Us' },
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
                    <div class="row">
                        <h2>About us</h2>
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Active</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;