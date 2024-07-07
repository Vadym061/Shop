import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";
import "./shop.css";

// Виправити проблеми зі значком за замовчуванням
delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapComponent = () => {
  return (
    <div className="wrapper">
      <main className="contact-page">
        <div className="">
          <h2>Контакти</h2>
          <div className="contact-details">
            <div className="contact-info">
              <h3>Контактна інформація</h3>
              <p>
                <strong>Телефон:</strong> +380 44 123 4567
              </p>
              <p>
                <strong>Email:</strong> info@example.com
              </p>
              <h3>Адреса</h3>
              <p>вул. Хрещатик, 22, Київ, Україна</p>
            </div>
            <div className="map-container">
              <h3>Розташування на карті</h3>
              <MapContainer
                className="map__section"
                center={[50.4501, 30.5234]}
                zoom={13}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[50.4501, 30.5234]}>
                  <Popup>
                    Місто Київ <br /> Майдан незалежності
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
        <div className="additional-info">
          <h2>Додаткова інформація</h2>
          <p>
            Ми знаходимося у самому серці Києва, поруч з основними визначними
            місцями міста. Наш офіс легко доступний як громадським транспортом,
            так і на автомобілі. Ми завжди раді бачити вас!
          </p>
        </div>
      </main>
    </div>
  );
};

export default MapComponent;
