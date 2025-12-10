// Event listener for the dropdown
recentCities.addEventListener("change", function () {
    const selectedCity = this.value;
    if (selectedCity) {
        cityInput.value = selectedCity;
        disableButtons();
        fetchWeatherData(selectedCity);
    }
});