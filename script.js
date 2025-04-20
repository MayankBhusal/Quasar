
// Ensure code runs after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select single elements
    const togglePanelButton = document.querySelector('.togglePanel');
    const sidePanel = document.querySelector('.side-nav');
    const nav = document.querySelector('nav');

    // Check if elements exist before adding event listeners
    if (togglePanelButton && sidePanel) {
        togglePanelButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click from bubbling to document
            sidePanel.classList.toggle('active');
            if (sidePanel.classList.contains('active')) {
                sidePanel.style.transform = 'translateX(-300px)'; // Original value
            } else {
                sidePanel.style.transform = 'translateX(100px)'; // Original value
            }
        });

        // Close Side Panel on Click Outside
        document.addEventListener('click', (event) => {
            if (
                sidePanel.classList.contains('active') &&
                !sidePanel.contains(event.target) &&
                !togglePanelButton.contains(event.target)
            ) {
                sidePanel.classList.remove('active');
                sidePanel.style.transform = 'translateX(100px)'; // Original value
            }
        });
    } else {
        console.error('Missing elements: togglePanel or side-nav not found.');
    }
});

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=27.6193&lon=83.4750&country=Nepal';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '432e7d6685msh55818a3b6cc0b49p159678jsn7ff93f24bfc5',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function fetchWeather() {
    try {
        const { temp, cloud_pct, feels_like, humidity, min_temp, max_temp, wind_speed, wind_degrees, sunrise, sunset } = await (await fetch(url, options)).json();
        const temperature = temp + '°C';
        const weather_stat = 
  cloud_pct < 20 ? "Sunny" :
  cloud_pct < 40 ? "Mostly Sunny" :
  cloud_pct < 60 ? "Partly Cloudy" :
  cloud_pct < 80 ? "Mostly Cloudy" :
  humidity < 70 ? "Overcast" : "Overcast with possible rain";
        const formatTime = time => new Date(time * 1000).toLocaleTimeString();
        
        // Set temperature in multiple places
     // Update all elements with class "temp"
const tempElements = document.getElementsByClassName("temp");
for (let element of tempElements) {
    element.innerHTML = temperature;
}

// Update all elements with class "cld"
const cldElements = document.getElementsByClassName("cld");
for (let element of cldElements) {
    element.innerHTML = weather_stat;
}

        document.getElementById('cloud_pct').innerHTML = cloud_pct + '%';
        document.getElementById('feels_like').innerHTML = feels_like + '°C';
        document.getElementById('humidity').innerHTML = humidity + '%';
        document.getElementById('min_temp').innerHTML = min_temp + '°C';
        document.getElementById('max_temp').innerHTML = max_temp + '°C';
        document.getElementById('wind_speed').innerHTML = wind_speed + ' km/h';
        document.getElementById('wind_degrees').innerHTML = wind_degrees + '°';
        document.getElementById('sunrise').innerHTML = formatTime(sunrise);
        document.getElementById('sunset').innerHTML = formatTime(sunset);

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

fetchWeather();




function showPopup(type) {
    document.getElementById("popup").style.display = "flex";
    let content = "";
    if (type === "info") {
        content = `<h2>Event Details</h2>
                   <div class="remaining-seats">Remaining Seats: 15</div>
                   <div class="participated">Participants: 25</div>
                   <p>Time: 10 AM - 4 PM</p>
                   <p>Location: Tilottama Community Hall</p>`;
    } else {
        content = `<h2>Register for Event</h2>
                   <div class='input-group'><label>Name:</label><input type='text' id='name'></div>
                   <div class='input-group'><label>Phone:</label><input type='text' id='phone'></div>
                   <div class='input-group'><label>Address:</label><input type='text' id='address'></div>
                   <div class='remaining-seats'>Seats Left: 15</div>
                   <button onclick="registerParticipant()">Submit</button>`;
    }
    document.getElementById("popup-content").innerHTML = content + '<button class="close-btn" onclick="closePopup()">Close</button>';
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function registerParticipant() {
    // Simulating participant registration
    alert("Thank you for registering!");
    closePopup();
}



function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Disable scrolling
   }

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling again
}

document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme preference on page load
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Define toggle function for the dark mode button
    window.toggleDarkMode = function() {
        document.body.classList.toggle('dark-mode');
        // Update localStorage based on current theme
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    };
});
