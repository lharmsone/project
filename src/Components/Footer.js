import picend from '../Assets/IMAGES/end.jpg';
function Footer() {
    return (
        <div className="container">
            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <div>
                    <img src={picend} className="d-block w-100" alt="..." />
                </div>
                <div className="row">
                    <div className="col-12 col-md">
                        <small className="d-block mb-3 text-muted">© 2021</small></div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="">Abyssinian Cat</a></li><li className="mb-1"><a className="link-secondary text-decoration-none" href="https://latvija.lv">Random feature</a>
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="">Bengal Cat</a>
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="">
                                Chartreux Cat Breed</a>
                            </li>
                            </ul>
                    <div className="col-6 col-md">
                        <h5>
                            Useful Info</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="">
                                Exotic Shorthair Cat Breed</a>
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="">
                                Egyptian Mau Cat</a>
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="">
                                Korat Cat Breed</a>
                            </li>
                            
                        </ul>
                    </div>
                   
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer;