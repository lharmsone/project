import 'bootstrap/dist/css/bootstrap.css';
import NewTaskFormPagaidu from '../Components/NewTaskFormPagaidu'

function Chat() {

    return (

        <div classname="container">
            <div classname="row">
                <div classname="col">
                    <h1>My Tasks</h1>
                </div>

            </div>
            <div classname="row">
                <div classname="col">
                    <ul classname="list group">
                        <li class="list-group-item">
                            <input class="form-check-input me-1" type="checkbox" />
                            First checkbox
                        </li>
                    </ul>
                </div>

            </div>
            <NewTaskFormPagaidu />




        </div>


    )










}
export default Chat;