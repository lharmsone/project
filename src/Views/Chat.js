import 'bootstrap/dist/css/bootstrap.css';
import NewTaskFormPagaidu from '../Components/NewTaskFormPagaidu'
import TasksList from '../Components/TasksList';
import TasksListPagaidu from '../Components/TasksListPagaidu';

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
                    <TasksListPagaidu/>
                </div>

            </div>
            <NewTaskFormPagaidu />




        </div>


    )










}
export default Chat;