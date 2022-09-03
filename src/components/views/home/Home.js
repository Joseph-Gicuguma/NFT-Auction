import './css/style.css';
import './css/style.css.map';
import binance from './img/binance.svg';
import heroimage from './img/heroimage.png';
import ehterium from './img/ethereum.svg';
import algorand from './img/algorand-algo-icon.svg';
import about from './img/about.png';
import collection1 from './img/collection1.png';
import collection2 from './img/collection2.png';
import collection3 from './img/collection3.png';
import collection4 from './img/collection4.png';
import collection5 from './img/collection5.png';
import collection6 from './img/collection6.png';
import collection7 from './img/collection7.png';
import collection8 from './img/collection8.png';
import collection9 from './img/collection9.png';
import { useContext } from 'react';
import { MainAppContext } from '../../../context/MainAppContext';

const exports = {};

const Home = () => {
    const { connectWallet } = useContext(MainAppContext);

    return (
        <div>
            <section id="home" class="spacetop15 spacebottom10">
                <div class="container">
                    <div class="row jc-between ai-center col-reverse-s">
                        <div class="col5 col6-md col12-s ta-center-s">
                            <h1 class="size5 bold spacebottom1">
                                Create, Sell & Collect Your Own Creative NFT
                            </h1>
                            <p class="size2 spacebottom3 halfwhite">
                                NFT Auction
                            </p>

                            <div class="row col8 col9-md jc-between spacebottom4 jc-evenly-s col12-s">
                                <a href="#collections" class="btn bg-purple size2 white ">Explore now</a>
                                <button href="#banner" class="btn bg-white10 size2 white " onClick={connectWallet}>Sell NFT</button>
                            </div>

                            <div class="row jc-between">
                                <div class="ta-center">
                                    <p class="size3 bold">37k+</p>
                                    <p class="size2 halfwhite">Artworks</p>
                                </div>
                                <div class="ta-center">
                                    <p class="size3 bold">20k+</p>
                                    <p class="size2 halfwhite">Artist</p>
                                </div>
                                <div class="ta-center">
                                    <p class="size3 bold">99k+</p>
                                    <p class="size2 halfwhite">Aucations</p>
                                </div>
                            </div>
                        </div>
                        <div class="col6 col12-s spacebottom3-s">
                            <img src={heroimage} alt="heroimage" class="img-responsive float" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="spacer5 spacer0-xs">
                <div class="container row jc-between jc-around-md">
                    <img src={algorand} alt="algorand logo" class="height6 img-responsive-md" />
                    <img src={binance} alt="binance logo" class="height6 img-responsive-md" />
                    <img src={ehterium} alt="ethereum logo" class="height6 img-responsive-md" />
                </div>
            </section>

            <section id="about" class="spacer10">
                <div class="container">
                    <h1 class="bold size4 ta-center">About Us</h1>
                    <p class="spacebottom3 halfwhite size2 ta-center">
                        About the Team
                    </p>
                    <div class="row ai-center jc-between flexcol-s">
                        <div class="col5 col10-s spacebottom2-s">
                            <img src={about} alt="about image" class="img-responsive" />
                        </div>
                        <div class="col6 col12-s ta-center-s">
                            <h3 class="size3 bold">Get Popular NFT</h3>
                            <p class="size2 spacetop1 spacebottom3 halfwhite">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
                                accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
                                condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos himenaeos.
                            </p>
                            <a href="#collections" class="btn bg-purple size2 white">Show more</a>
                        </div>
                    </div>

                </div>
            </section>

            <section class="collections spacer10" id="collections">
                <div class="container">
                    <h1 class="bold size4 ta-center">Collections</h1>
                    <p class="spacebottom3 halfwhite size2 ta-center">
                        Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit.
                    </p>
                    <div class="row spacebottom3 filter-buttons">
                        <div class="col3 filter col6-xs spacebottom1-xs" data-filter="all">All</div>
                        <div class="col3 filter col6-xs spacebottom1-xs" data-filter="art">Art</div>
                        <div class="col3 filter col6-xs" data-filter="photograpy">Photograpy</div>
                        <div class="col3 filter col6-xs" data-filter="pattern">Pattern</div>
                    </div>
                    <div class="row box-card jc-evenly-md">
                        <div class="col4 card collect bg-white10 col5-md col6-s" data-item="art">
                            <img src={collection1} alt="collection1 image" class="img-responsive" />
                            <div class="row jc-between spacetop2">
                                <div>
                                    <p class="size2 halfwhite">
                                        @Johny
                                    </p>
                                    <h5 class="size2 bold">Yellow Red</h5>
                                </div>
                                <div>
                                    <p class="current halfwhite">Current bid</p>
                                    <h5 class="size2 bold">0.005ALGO</h5>
                                </div>
                            </div>
                            <a class="bid size2 ta-center">
                                Place a bid
                            </a>
                        </div>
                        <div class="col4 card collect bg-white10 col5-md col6-s" data-item="photograpy">
                            <img src={collection2} alt="collection2 image" class="img-responsive" />
                            <div class="row jc-between spacetop2">
                                <div>
                                    <p class="size2 halfwhite">
                                        @Johny
                                    </p>
                                    <h5 class="size2 bold">Yellow Red</h5>
                                </div>
                                <div>
                                    <p class="current halfwhite">Current bid</p>
                                    <h5 class="size2 bold">0.005ALGO</h5>
                                </div>
                            </div>
                            <a class="bid size2 ta-center">
                                Place a bid
                            </a>
                        </div>
                        <div class="col4 card collect bg-white10 col5-md col6-s" data-item="pattern">
                            <img src={collection3} alt="collection3 image" class="img-responsive" />
                            <div class="row jc-between spacetop2">
                                <div>
                                    <p class="size2 halfwhite">
                                        @Johny
                                    </p>
                                    <h5 class="size2 bold">Yellow Red</h5>
                                </div>
                                <div>
                                    <p class="current halfwhite">Current bid</p>
                                    <h5 class="size2 bold">0.005ALGO</h5>
                                </div>
                            </div>
                            <a class="bid size2 ta-center">
                                Place a bid
                            </a>
                        </div>

                        <div class="col4 card collect bg-white10 col5-md col6-s" data-item="art">
                            <img src={collection4} alt="collection4 image" class="img-responsive" />
                            <div class="row jc-between spacetop2">
                                <div>
                                    <p class="size2 halfwhite">
                                        @Johny
                                    </p>
                                    <h5 class="size2 bold">Yellow Red</h5>
                                </div>
                                <div>
                                    <p class="current halfwhite">Current bid</p>
                                    <h5 class="size2 bold">0.005ALGO</h5>
                                </div>
                            </div>
                            <a class="bid size2 ta-center">
                                Place a bid
                            </a>
                        </div>
                        <div class="col4 card collect bg-white10 col5-md col6-s" data-item="photograpy">
                            <img src={collection5} alt="collection5 image" class="img-responsive" />
                            <div class="row jc-between spacetop2">
                                <div>
                                    <p class="size2 halfwhite">
                                        @Johny
                                    </p>
                                    <h5 class="size2 bold">Yellow Red</h5>
                                </div>
                                <div>
                                    <p class="current halfwhite">Current bid</p>
                                    <h5 class="size2 bold">0.005ALGO</h5>
                                </div>
                            </div>
                            <a class="bid size2 ta-center">
                                Place a bid
                            </a>
                        </div>
                        <div class="col4 card collect bg-white10 col5-md col6-s" data-item="pattern">
                            <img src={collection6} alt="collection6 image" class="img-responsive" />
                            <div class="row jc-between spacetop2">
                                <div>
                                    <p class="size2 halfwhite">
                                        @Angel
                                    </p>
                                    <h5 class="size2 bold">An Angel</h5>
                                </div>
                                <div>
                                    <p class="current halfwhite">Current bid</p>
                                    <h5 class="size2 bold">0.005ALGO</h5>
                                </div>
                            </div>
                            <a class="bid size2 ta-center">
                                Place a bid
                            </a>
                        </div>

                        <div class="col4 card collect bg-white10 col5-md col6-s" data-item="art">
                            <img src={collection7} alt="collection7 image" class="img-responsive" />
                            <div class="row jc-between spacetop2">
                                <div>
                                    <p class="size2 halfwhite">
                                        @Johny
                                    </p>
                                    <h5 class="size2 bold">Yellow Red</h5>
                                </div>
                                <div>
                                    <p class="current halfwhite">Current bid</p>
                                    <h5 class="size2 bold">0.005ALGO</h5>
                                </div>
                            </div>
                            <a class="bid size2 ta-center">
                                Place a bid
                            </a>
                        </div>
                        <div class="col4 card collect bg-white10 col5-md col6-s" data-item="photograpy">
                            <img src={collection8} alt="collection8 image" class="img-responsive" />
                            <div class="row jc-between spacetop2">
                                <div>
                                    <p class="size2 halfwhite">
                                        @Johny
                                    </p>
                                    <h5 class="size2 bold">Yellow Red</h5>
                                </div>
                                <div>
                                    <p class="current halfwhite">Current bid</p>
                                    <h5 class="size2 bold">0.005ALGO</h5>
                                </div>
                            </div>
                            <a class="bid size2 ta-center">
                                Place a bid
                            </a>
                        </div>
                        <div class="col4 card collect bg-white10 col5-md col6-s" data-item="pattern">
                            <img src={collection9} alt="collection9 image" class="img-responsive" />
                            <div class="row jc-between spacetop2">
                                <div>
                                    <p class="size2 halfwhite">
                                        @Johny
                                    </p>
                                    <h5 class="size2 bold">Yellow Red</h5>
                                </div>
                                <div>
                                    <p class="current halfwhite">Current bid</p>
                                    <h5 class="size2 bold">0.005ALGO</h5>
                                </div>
                            </div>
                            <a class="bid size2 ta-center">
                                Place a bid
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;