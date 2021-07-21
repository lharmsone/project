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
                    <h1 className="display-4 fw-normal">Feedback</h1>
                </div>
            </div>
            <div class="container chat_container">
                <div class="chatbox">
                    <div class="row">
                        <ul class="chat_list" id="chat">
                            <li>
                                <div class="card-body chat_entry">
                                    <p class="user">
                                        <h6>Bilbo <span class="time text-muted">22.4.2021 11:00</span></h6>
                                    </p>
                                    <p class="message">I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="row chat_input card card-body" id="chat_input">
                    <div class="input-group mb-3">
                        <input
                            type="text"
                            id="Username"
                            name="Username"
                            class="form-control"
                            placeholder="Username"

                        />
                    </div>


                    <div class="input-group mb-3">
                        <textarea id="Message" class="form-control" rows="5" name="Message" placeholder="Message" minlength="1" required></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Send" id="addmessage" class="btn btn-primary" />
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Chat;