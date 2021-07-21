import Breadcrumbs from '../Components/Breadcrumbs';
import { NavLink } from 'react-router-dom';
function Chat() {
    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Chat' },
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
                    <h1 className="display-4 fw-normal">Pricing</h1>
                    <p className="text-muted fs-5">
                        Chat
                    </p>
                </div>
            </div>

        </div>



    )
}

export default Chat;