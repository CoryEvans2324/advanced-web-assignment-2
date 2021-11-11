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

const mapStateToProps = (state) => ({
	locations: state.storeLocations.locations,
})

class StoreMap extends React.Component {
	constructor() {
		super()
		this.map = null
	}
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
			this.props.loadLocations(data)
		})
	}
	render() {
		return (<>
			<MapContainer
				center={[-38.967649, 176.047433]}
				zoom={7}
				style={{height: '750px'}}
				whenCreated={(map) => {this.map = map}}
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution={'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'} />
				{this.props.locations.map((location, index) => {
					return <Marker key={index} position={[location.lat, location.lon]} icon={icon}>
						<Popup>
							{location.name}
						</Popup>
					</Marker>
				})}
			</MapContainer>
			<ul className="max-w-md mx-auto bg-white mt-4 rounded-sm shadow p-4">
				{this.props.locations.map((location, i) => (
					<li key={i}
						className="hover:bg-gray-200 shadow-sm px-2 py-1 my-1 rounded-sm cursor-pointer"
						onClick={() => {
							this.map.flyTo([location.lat, location.lon], 15)
						}}
					>
						<span>{location.name}</span>
					</li>
				))}
			</ul>
		</>)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreMap);