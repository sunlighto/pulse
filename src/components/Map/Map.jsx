import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import CarIcon from '../../dist/image/icons/CarIcon.png'
import './Map.scss'
export default function Map() {
  const mapContainerStyle = {
    width: '100%',
    height: '600px',
  };

  const center = {
    lat: 49.55434335, // Широта міста Тернопіль
    lng: 25.5948, // Довгота міста Тернопіль
  };
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

  const handleMarkerClick = () => {
    setIsInfoWindowOpen(!isInfoWindowOpen);
  };
  const mapOptions = {
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6b9a76" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#746855" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#f3d19c" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#2f3948" }],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#515c6d" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#17263c" }],
    },
    {
      featureType: "poi.business",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
    ],
  };

  return (
    <div className="map">
    <LoadScript googleMapsApiKey="AIzaSyDL7lqmZsjf7xXEjHj_9Qa_FK6flv9NOoc">
     <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
        options={mapOptions}
      >
        <Marker
          position={{ lat: 49.55352271992342,  lng: 25.60608208790025 }} // Координати Тернополя
          title="Audi A4" // Заголовок маркера
          icon= {CarIcon}
        />
         <Marker
          position={{ lat: 49.55232271992342,  lng: 25.59608208790025 }} 
          title="BMW X5"
          onClick={handleMarkerClick}
          icon= {CarIcon}
          >
             <Marker
          position={{ lat: 49.55417288303765,  lng: 25.563502945007244 }} 
          title="BMW X5"
          onClick={handleMarkerClick}
          icon= {CarIcon}
          >
             <Marker
          position={{ lat: 49.54678743140907,  lng:  25.58162383715824 }} 
          title="BMW X5"
          onClick={handleMarkerClick}
          icon= {CarIcon}
          >
             <Marker
          position={{ lat: 49.55232271992342,  lng: 25.59608208790025 }} 
          title="BMW X5"
          onClick={handleMarkerClick}
          icon= {CarIcon}
          >
             <Marker
          position={{ lat: 49.55232271992342,  lng: 25.59608208790025 }} 
          title="BMW X5"
          onClick={handleMarkerClick}
          icon= {CarIcon}
          ></Marker>
          </Marker>
          </Marker>
          </Marker>
            {isInfoWindowOpen && (
            <InfoWindow onCloseClick={() => setIsInfoWindowOpen(false)}>
              <div className='map__marker'>
                <h2 className='map__marker-title'>BMW X5 2018</h2>
                <p className='map__marker-text'></p>
              </div>
            </InfoWindow>
          )}
            </Marker>
       
      </GoogleMap>
      
    </LoadScript>
    </div>
  )
}
