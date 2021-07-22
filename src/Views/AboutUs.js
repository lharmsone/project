import Breadcrumbs from '../Components/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import piccat from '../Assets/IMAGES/cat.png';
import picus from '../Assets/IMAGES/aboutUs.jpg';
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
                    <h1 className="display-4 fw-normal">About Us</h1>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="history-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">History</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="ms-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Mission statement</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="achievement-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Achivements</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="goals-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Future goals</button>
                            </li>
                        </ul>

                        <div></div>
                        <div class="tab-content">
                            <div></div>
                            <div class="tab-pane active container  card" id="home" role="tabpanel" aria-labelledby="history-tab">
                                <div class="row">
                                    <div class="col-4">
                                        <img class="img-fluid rounded-start" src={picus} alt="picart1" />
                                    </div>
                                    <div class="col-8 card-body">
                                        <p>Gorgoroth ever adventures forgotten steps answering. Ignoring rare chap relations Samwise Gamgee vile breeze move caves. Fenmarch scratch mood watches gibbet meal pupil pickle fire. Rabble-rousers set waybread attention presses unfriendly lifetime forgiven agents swift law? Professes Treebeard borne trail from plates directly tale. Do not take me for some conjurer of cheap tricks. Intend victorious blankets 17 bows Wargs saying! Pearl crawling rather tree Mearas for celebrate appearance birthday?.</p>
                                    </div>
                                </div>
                            </div>






                            <div class="tab-pane container  card card-body" id="profile" role="tabpanel" aria-labelledby="ms-tab">jdheudhie dehdedhe dehdiehd iehdiehd diehdhed</div>
                            <div class="tab-pane container  card card-body" id="messages" role="tabpanel" aria-labelledby="achievements-tab">hdhehde ehdiehdie edheideihd</div>
                            <div class="tab-pane container  card card-body" id="settings" role="tabpanel" aria-labelledby="goals">ickness windlance pale Gaffer's even wasn't remove sausages foul curse. Lower dim self risen beside prong unequaled mistake shards listened Strider? Wheeled lived birthright important tough breathe blessing Cirith level note serpents. Elderly chap. Big grey beard, pointy hat. Cliff watches always maggots particular Riddermark shepherd. Later pointy-ear chances deepening sacred doomed stop rue trailing news Mearas our? Exchanged pierce these shines filth raid Lórien surprisingly everyday unwise smell certainly. Rascals Helm's Deep examine.

                                Strongest Dwalin slunk. Dale pick um. Irregular Southfarthing middle smithy's eh survival undeceased. Answers lordly Mithrandir. Smaug forgiven change? Lasgalen respect introduce agreed restored stuffing arms rift? Defeated fly irregular knife-work maybe running Shire-folk might've handful. I will take the Ring to Mordor. Amidst stairs sails Brandywine understand?</div>
                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>
            <div className="card mb-3 col-8 offset-2 text-center pt-3 pb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={piccat} className="img-fluid rounded-start" alt="..." />

                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"> Contacts
                            </h5>
                            <div className="card-text">
                                <h6>Address</h6>
                                <p>Somewhere, Earth</p>
                                <h6>Email</h6>
                                <a href="mailto:info@zenchill.com"><p>info@zenchill.com</p></a>
                                <h6>Phone</h6>
                                <a href="tel:+37100000000"><p>+371 00000000</p></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div >

    )
}
export default AboutUs;