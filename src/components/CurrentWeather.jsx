const CurrentWeather = ({ currentWeather }) => {
  if (!currentWeather || !currentWeather.temperature) return null;

  return (
    <div className="current-weather">
      <img 
        src={`icons/${currentWeather.weatherIcon || "default"}.svg`} 
        alt={currentWeather.description || "Weather icon"} 
        className="weather-icon" 
      />
      <h2 className="temperature">
        {currentWeather.temperature} <span>°C</span>
      </h2>
      <p className="description">{currentWeather.description}</p>
    </div>
  );
};

export default CurrentWeather;
