import React from 'react';
import { connect } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
import markerPNG from 'leaflet/dist/images/marker-icon.png'
import L from 'leaflet';
import { LOAD_STORE_LOCATIONS } from '../../contants/actionTypes';

const icon = new L.icon({
	iconUrl: markerPNG,
	iconSize: [25, 41],
	iconAnchor: [13, 41],
})


const mapDispatchToProps = (dispatch) => ({
	loadLocations: (locations) =>
		dispatch({ type: LOAD_STORE_LOCATIONS, payload: locations }),
})

// TODO: map store

class StoreMap extends React.Component {
	componentDidMount() {
		fetch(
			'/data/stores.json',
			{
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			}
		).then(res => res.json()).then(data => {
			console.log(data);
		})
	}
	render() {
		const position = [-39.546714, 176.839306]
		return (<>
			<MapContainer center={position} zoom={13} style={{height: '400px'}}>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution={'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'} />
				<Marker position={position} icon={icon}>
					<Popup>
						EIT Hawkes Bay
					</Popup>
				</Marker>
			</MapContainer>
		</>)
	}
}

export default connect(null, mapDispatchToProps)(StoreMap);