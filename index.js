document.getElementById('search').addEventListener("click", async function() {
    const city = document.getElementById('city_name').value;
    const apiKey = '7a70812681190434a7ce0cf5a6729f23';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const weather = await response.json();

        document.getElementById('temp').textContent = weather.main.temp + " °C";
        document.getElementById('wind').textContent = weather.wind.speed + " m/s";
        document.getElementById('humidity').textContent = weather.main.humidity + " %";
        document.getElementById('min_temp').textContent = weather.main.temp_min + " °C";
        document.getElementById('max_temp').textContent = weather.main.temp_max + " °C";
    } catch (error) {
        alert(error.message);
    }
});
