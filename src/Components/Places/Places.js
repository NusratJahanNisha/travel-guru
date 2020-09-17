import React from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Places = () => {
    const places = [{
        name: "SAJEK",
        about: "Sajek valley: Sajek is a union at Baghaichari Upazila in Rangamati districts. Basically it is name of a river which separates Bangladesh from India. The river flows into the Karnafuli River in the Chittagong Hill Tracts. Sajek Valley is situated in the North angle of Rangamati, near the Mizoram border boundary area. The valley is 1,800 ft high form sea lavel. Many small rivers flow through the hills among them Kachalon and Machalong are famous. The main ethnic minorities on the valley are Chakma, Marma, Tripura, Pankua, Lushai and Sagma. The place is known as hill queen for its natural beauty and roof of Rangamati. Marishsha is a name of a place near Sajek Valley. Most of the houses are made with bamboo. There is another place near Sajek, it is Kanlak, and it is famous for its orange orchard.",
        image: "https://i.ibb.co/qnWN66M/Sajek.png"
    },
    {
        name: "SREEMANGAL",
        about: "Sreemangal, The Tea Capital of Bangladesh A large portion of world's highest quality tea is grown here. It is also called the city of 'two leaves and a bud. Sreemangal is famous for nature, forests and wildlife.Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. Its natural scenery is very charming. It soothes one’s eyes. Birds are twittering always here. The first tea garden in Bangladesh which names “Malni chho ra tea garden” is here. ",
        image: "https://i.ibb.co/qky9mft/Sreemongol.png"
    },
    {
        name: "SUNDARBANS",
        about: "The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels. Four protected areas in the Sundarbans are enlisted as UNESCO World Heritage Sites, viz. Sundarbans National Park, Sundarbans West, Sundarbans South and Sundarbans East Wildlife Sanctuaries.[3] Despite these protections, the Indian Sundarbans were considered endangered in a 2020 assessment under the IUCN Red List of Ecosystems framework.[4]",
        image: "https://i.ibb.co/YtcZBjN/sundorbon.png"
    }]
    return (
        <div>
            <CardDeck >
                <Card style={{ borderRadius: '14px', textAlign: 'center' }}>
                    <Card.Img variant="top" src={places[0].image} />
                    
                    <Card.Body>
                    <Card.Title>{places[0].name}</Card.Title>
                    </Card.Body>
                    <Link to={`/place/${places[0].name}/${places[0].about}`}><Button variant="warning">Book Now</Button></Link>
                    
                </Card>
                <Card style={{ borderRadius: '14px' , textAlign: 'center' }}>
                    <Card.Img variant="top" src={places[1].image} />
                    <Card.Body>
                        <Card.Title>{places[1].name}</Card.Title>

                    </Card.Body>
                    <Link to={`/place/${places[1].name}/${places[1].about}`}><Button variant="warning">Book Now</Button></Link>
                    
                </Card>
                <Card style={{ borderRadius: '14px' , textAlign: 'center' }}>
                    <Card.Img variant="top" src={places[2].image} />
                    <Card.Body>
                        <Card.Title>{places[2].name}</Card.Title>
                    </Card.Body>
                    <Link to={`/place/${places[2].name}/${places[2].about}`}><Button variant="warning">Book Now</Button></Link>
                    
                </Card>
            </CardDeck>
            
        </div>

    );
};

export default Places;