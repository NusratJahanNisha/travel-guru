import React from 'react';
import { Carousel } from 'react-bootstrap';
import Header from '../Header/Header';
import Places from '../Places/Places';

const Home = () => {
    const places = [{
        name: "SAJEK",
        about: "Sajek valley: Sajek is a union at Baghaichari Upazila in Rangamati districts. Basically it is name of a river which separates Bangladesh from India. The river flows into the Karnafuli River in the Chittagong Hill Tracts. ",
        image: "https://i.ibb.co/qnWN66M/Sajek.png"
    },
    {
        name: "SREEMANGAL",
        about: "Sreemangal, The Tea Capital of Bangladesh A large portion of world's highest quality tea is grown here. It is also called the city of 'two leaves and a bud. Sreemangal is famous for nature, forests and wildlife.",
        image: "https://i.ibb.co/qky9mft/Sreemongol.png"
    },
    {
        name: "SUNDARBANS",
        about: "The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh.",
        image: "https://i.ibb.co/YtcZBjN/sundorbon.png"
    }]
    return (
        <div className="background">
            <Header></Header>
            <div className="row" style={{padding:'10px'}}>
                <div className="col-md-5">
                    <Carousel >
                        <Carousel.Item interval={1000}>
                            <img style={{ height: '500px' }}
                                className="d-block w-100"
                                src={places[0].image}
                                alt="Sajek"
                            />
                            <Carousel.Caption>
                            <h3>{places[0].name}</h3>
                                <p>{places[0].about}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img style={{ height: '500px' }}
                                className="d-block w-100"
                                src={places[1].image}
                                alt="Sreemongol"
                            />
                            <Carousel.Caption>
                                <h3>{places[1].name}</h3>
                                <p>{places[1].about}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{ height: '500px' }}
                                className="d-block w-100"
                                src={places[2].image}
                                alt="Sundarbans"
                            />
                            <Carousel.Caption>
                                <h3>{places[2].name}</h3>
                                <p>{places[2].about}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-md-7"><Places></Places></div>
            </div>

        </div>
    );
};

export default Home;