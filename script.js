
// Toggle Side Panel
const togglePanelButton = document.getElementById('togglePanel');
const sidePanel = document.getElementById('side-nav');
const nav = document.querySelector('nav');


togglePanelButton.addEventListener('click', () => {
    sidePanel.classList.toggle('active');
    if (sidePanel.classList.contains('active')) {
        sidePanel.style.transform = 'translateX(-300px)'; // Adjust navbar width
    } else {
        sidePanel.style.transform = 'translateX(100px)'; // Reset navbar width
    }
});

// Close Side Panel on Click Outside
document.addEventListener('click', (event) => {
    if (!sidePanel.contains(event.target) && !togglePanelButton.contains(event.target)) {
        sidePanel.classList.remove('active');
        sidePanel.style.transform = 'translateX(100px)';// Reset navbar width
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

// function translateLanguage(lang) {
//     var select = document.querySelector(".goog-te-combo");
//     if (select) {
//         select.value = lang;
//         select.dispatchEvent(new Event('change'));
//     }
// }

function removeGoogleTranslateBanner() {
    setInterval(() => {
        let bannerFrame = document.querySelector('.goog-te-banner-frame'); // Find the banner
        let googleIframe = document.querySelector('iframe[style*="visibility: visible"]'); // Find visible Google iframe

        if (bannerFrame) bannerFrame.remove(); // Remove the banner
        if (googleIframe) googleIframe.remove(); // Remove Google’s floating iframe

        document.body.style.top = '0px'; // Prevents shifting issue
    }, 100);
}

// Run the function after page loads
window.onload = removeGoogleTranslateBanner;
// Function to change language and apply margin
// Function to change language and adjust navbar margin
function translateLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang); // Store language preference

    let navbar = document.querySelector("nav"); // Select the navbar
    if (navbar) {
        if (lang === 'ne') {
            navbar.style.marginTop = "50px"; // Add margin for Nepali
        } else {
            navbar.style.marginTop = "50px"; // Reset for English
        }
    }

    // Simulate Google Translate language change
    var selectField = document.querySelector(".goog-te-combo");
    if (selectField) {
        selectField.value = lang;
        selectField.dispatchEvent(new Event('change'));
    }
}

// Function to apply stored language preference on page load
function applyStoredLanguage() {
    let storedLang = localStorage.getItem("selectedLanguage");

    let navbar = document.querySelector("nav");
    if (navbar) {
        if (storedLang === 'ne') {
            navbar.style.marginTop = "50px";
        } else {
            navbar.style.marginTop = "50px";
        }
    }
}

// Run on every page load
document.addEventListener("DOMContentLoaded", applyStoredLanguage);



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
