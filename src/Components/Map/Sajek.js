import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class Sajek extends React.Component {

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
                    lat: 23.3820, lng: 92.2938

                }}
            />
        </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyBqp0jNhYe2FvE9DekzY67vZHyD63i_uGk",
})(Sajek);


