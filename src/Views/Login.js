import Breadcrumbs from '../Components/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import picwelcome from '../Assets/IMAGES/welcome.jpg';
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
          <h1 className="display-4 fw-normal">Sign up</h1>

          <div class="card card-body">
            <form action="" novalidate id="submit-form">
              <div class="input-group mb-3">
                <input
                  type="text"
                  id="e-mail-input"
                  class="form-control"
                  placeholder="Enter your e-mail"
                  aria-label="Email"
                  minlength="8"
                  aria-describedby="email-addon"
                  required
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  id="input-password"
                  class="form-control"
                  minlength="8"
                  class="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  id="input-repeat-password"
                  class="form-control"
                  minlength="8"
                  class="form-control"
                  placeholder="Repeat password"
                  required
                />
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class="btn Login_btn">
                  Log in
                </button>
              </div>
            </form>
          </div>
          <div>
            <img src={picwelcome} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login;