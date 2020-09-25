import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class Sundarbans extends React.Component {

    render() {

        const mapStyles = {
            width: "95%",
            height: "95%",
        };

        return (<div>
            <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                
                initialCenter={{
                    lat: 21.9497, lng: 89.1833
                }}
            />
        </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyBqp0jNhYe2FvE9DekzY67vZHyD63i_uGk",
})(Sundarbans);


