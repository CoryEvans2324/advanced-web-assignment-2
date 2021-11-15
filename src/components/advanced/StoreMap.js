import React from 'react';
import { connect } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
import markerPNG from 'leaflet/dist/images/marker-icon.png'
import L from 'leaflet';
import { LOAD_STORE_LOCATIONS, SET_USER_LOCATION } from '../../contants/actionTypes';

const icon = new L.icon({
	iconUrl: markerPNG,
	iconSize: [25, 41],
	iconAnchor: [13, 41],
})

const toRadians = (degrees) => degrees * Math.PI / 180;

const calcDistance = (lat1, lon1, lat2, lon2) => {
	var R = 6371; // Radius of the earth in km
	var dLat = toRadians(lat2 - lat1);
	var dLon = toRadians(lon2 - lon1);
	lat1 = toRadians(lat1);
	lat2 = toRadians(lat2);

	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c; // Distance in km
	return d;
}

const mapDispatchToProps = (dispatch) => ({
	loadLocations: (locations) =>
		dispatch({ type: LOAD_STORE_LOCATIONS, payload: locations }),
	setUserLocation: payload =>
		dispatch({ type: SET_USER_LOCATION, payload }),
})

const mapStateToProps = (state) => ({
	locations: state.storeLocations.locations,
	position: state.storeLocations.currentUserLocation,
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

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position => {
				console.log(position);
				this.props.setUserLocation({
					lat: position.coords.latitude,
					lon: position.coords.longitude
				})
				this.map?.flyTo([position.coords.latitude, position.coords.longitude], 13)
			})
		}
	}
	render() {
		const locations = this.props.locations.map(location => {
			var distance = 0
			if (this.props.position) {
				distance = calcDistance(
					this.props.position.lat,
					this.props.position.lon,
					location.lat,
					location.lon
				)
			}
			return { ...location, distance }
		})

		locations.sort((a, b) => a.distance - b.distance)

		return (<>
			<MapContainer
				center={[-38.967649, 176.047433]}
				zoom={7}
				style={{height: '500px'}}
				whenCreated={(map) => {this.map = map}}
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution={'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'} />
				{this.props.position && (
					<Circle
						center={[this.props.position.lat, this.props.position.lon]}
						radius={30}
						className='animate-pulse'
					/>
				)}
				{locations.map((location, index) => {
					return <Marker key={index} position={[location.lat, location.lon]} icon={icon}>
						<Popup>
							{location.name}
						</Popup>
					</Marker>
				})}
			</MapContainer>
			<ul className="max-w-md mx-auto bg-white mt-4 rounded-sm shadow p-4">
				<li className="flex justify-between">
					<h3 className="font-semibold">Store</h3>
					<h3 className="font-semibold">Distance</h3>
				</li>
				{locations.map((location, i) => (
					<li key={i}
						className="flex justify-between hover:bg-gray-200 shadow-sm px-2 py-1 my-1 rounded-sm cursor-pointer"
						onClick={() => {
							this.map.flyTo([location.lat, location.lon], 13, {
								duration: 2
							})
						}}
					>
						<span>{location.name}</span>
						<span>
							{location.distance.toFixed(2)}km
						</span>
					</li>
				))}
			</ul>
		</>)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreMap);