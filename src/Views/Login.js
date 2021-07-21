import Breadcrumbs from '../Components/Breadcrumbs';
import { NavLink } from 'react-router-dom';
//import Form from 'react-bootstrap/Form'
function Login() {
    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Register' },
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

                    <form>
                        <label>
                            <input type="text" name="name" placeholder="Username*" />
                        </label>
                        <label>
                            <input type="password" name="name" placeholder="Password*" />
                        </label>
                        <label>
                            <input type="password" name="name" placeholder="Retype password*" />
                        </label>
                        <label>
                            <input type="text" name="name" placeholder="First name*" />
                        </label>
                        <label>
                            <input type="text" name="name" placeholder="Last name*" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Login;