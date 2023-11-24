const now = new Date();
const delay = ms => new Promise(res => setTimeout(res, ms));
const startBtn = document.querySelector("#start");
const querytext = document.querySelector('#printall');
const othertext = document.querySelector(".other");
const audio = new Audio('sounds\\jarvishutdown.mp3');
const shownet = document.querySelector("#shownet");
const showspeed = document.querySelector("#showspeed");
const showbattery = document.querySelector("#showbattery");
const showtime = document.querySelector("#showtime");
const mic = document.querySelector("#Microphone");
const countrynamehtml = document.querySelector("#country");
const citynamehtml = document.querySelector("#city");
const temphtml = document.querySelector("#temp");
const windspeedhtml = document.querySelector("#windspeed");
const weathertype = document.querySelector("#weather");
const weatherIcon = document.querySelector(".weathericon");
const weather_des = document.querySelector("#weatherdes");
const humidityhtml = document.querySelector("#humidity");
var apikey = "";

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        // Scroll to the bottom of the div
        querytext.scrollTop = querytext.scrollHeight;
      }
    }
  });

  // Observe the div for changes
  observer.observe(querytext, { childList: true });

shownet.innerHTML = (window.navigator.onLine ? 'on' : 'off') + 'line';

window.addEventListener('online', () => {
    shownet.innerHTML = (window.navigator.onLine ? 'on' : 'off') + 'line';
});

window.addEventListener('offline', () => {
    shownet.innerHTML = (window.navigator.onLine ? 'on' : 'off') + 'line';
});


// function waves(){
//     const wavesurfer = WaveSurfer.create({
//         container: '#waveform',
//         waveColor: 'lime',
//         progressColor: 'black',
//         url: 'voice.mp3',
//         // barWidth:4,
//         height:90,
//         responsive: true,
//         // barRadius: 0,
        
//     })
    
//     wavesurfer.on('interaction', () => {
//         wavesurfer.play()
//     })
// }
// waves()


let startTime, endTime;
let imageSize = "";
let image = new Image();

let kboutput = document.getElementById("kbs");
let mboutput = document.getElementById("mbs");

let imageLink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTzlxQkL9SVHzdCOArlnGCCpSKZOrZ2uC8A&usqp=CAU~";

image.onload = async function () {
    endTime = new Date().getTime();

    await fetch(imageLink).then((response) => {
        imageSize = response.headers.get("content-length");
        calculateSpeed();
    });
};

function newTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    showtime.innerHTML = h + ":" + m + ":" + s;
    setTimeout(newTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function calculateSpeed() {
    let timeDuration = (endTime - startTime) / 1000;

    let loadedBits = imageSize * 8;
    let speedInBps = (loadedBits / timeDuration).toFixed(2);
    let speedInKbps = (speedInBps / 1024).toFixed(2);

    showspeed.innerHTML = `${speedInKbps}kbps`;
    setTimeout(() => {
        startTime = new Date().getTime();
        image.src = imageLink;
    }, 2000);
}

const init = async () => {
    startTime = new Date().getTime();
    image.src = imageLink;
    Checkbatterystart();
    newTime();
    checkWeatheronstart();
    await delay(2000);
    getapikey();
};

window.onload = () => init();




let clicktimes = 0;
startBtn.addEventListener('mouseover', async () => {
    //   Start the audio
    await audio.play();
});

var isspeaking = false;

const SpeechRecogniton = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecogniton();

recognition.onstart = function () {
    console.log("vr active");
    mic.classList.replace('off','on');
    mic.innerHTML="ON";
};



recognition.onend = async function () {
    mic.classList.replace('on','off');
    mic.innerHTML="OFF";
    console.log("vr inactive");
    if (isspeaking == false) {
        await delay(2000);
        recognition.start();
    } else if (isspeaking == true) {
        setTimeout(() => {
            recognition.onend(); // call onend again after a delay
        }, 1000);
    }
};

startBtn.addEventListener('click', async () => {
    if (clicktimes == 0) {
        const audio3 = new Audio('sounds\\jarvishutdown.mp3');
        await audio3.play();
        const audio2 = new Audio('sounds\\Jarvisstart.mp3');
        await audio2.play();
        // console.log(othertext.classList)
        document.getElementById('leftu').classList.replace('others', 'other');
        document.getElementById('leftd').classList.replace('others', 'other');
        document.getElementById('rightd').classList.replace('others', 'other');
        document.getElementById('rightu').classList.replace('others', 'other');
        await delay(16000);
        const audio1 = new Audio('sounds\\StartupSound.mp3');
        await audio1.play();
        await delay(2000);
        wish();
        await delay(8500);
        clicktimes = clicktimes + 1;
        isspeaking = false;
        recognition.start();
    } else {
        isspeaking = false;
    }
});


function readOut(message) {
    const speech = new SpeechSynthesisUtterance();
    const allvoices = speechSynthesis.getVoices();
    speech.voice = allvoices[0];
    speech.text = message;
    speech.rate = 1.5;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    speech.onstart = function () {
        isspeaking = true;
    }
    speech.onend = function () {
        isspeaking = false;
    };
    console.log("Speaking");
    querytext.innerHTML = querytext.innerHTML + `<p class="robo"> Jarvis: ${message}</p>`
}

function readout(message) {
    const speech = new SpeechSynthesisUtterance();
    const allvoices = speechSynthesis.getVoices();
    speech.voice = allvoices[0];
    speech.text = message;
    speech.rate = 1.5;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    speech.onstart = function () {
        isspeaking = true;
    }
    speech.onend = function () {
        isspeaking = false;
    };
    console.log("Speaking");
}

function readoutonce(message) {
    const speech = new SpeechSynthesisUtterance();
    const allvoices = speechSynthesis.getVoices();
    speech.voice = allvoices[0];
    speech.text = message;
    speech.rate = 1.5;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    speech.onstart = function () {
        isspeaking = true;
    }
    speech.onend = function () {
        isspeaking = false;
    };
    console.log("Speaking");
}

function readOutonce(message) {
    const speech = new SpeechSynthesisUtterance();
    const allvoices = speechSynthesis.getVoices();
    speech.voice = allvoices[0];
    speech.text = message;
    speech.rate = 1.5;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    speech.onstart = function () {
        isspeaking = true;
    }
    speech.onend = function () {
        isspeaking = true;
    };
    console.log("Speaking");
    querytext.innerHTML = querytext.innerHTML + `<p class="robo"> Jarvis: ${message}</p>`
}


startBtn.addEventListener('mouseleave', async () => {
    audio.pause();
    audio.currentTime = 0;
});

recognition.addEventListener('result', async (event) => {
    let transcript = event.results[0][0].transcript;
    querytext.innerHTML = querytext.innerHTML + `<p class="user"> You: ${transcript}</p>`;
    transcript = transcript.toLowerCase();


    if (transcript.includes("hello jarvis")) {
        readOut("Hello sir. How can I assist you today ?");
        await delay(3000);
    } else if (transcript.includes("open") && transcript.includes("youtube")) {
        readOut("Opening Youtube sir...");
        window.open("https://www.youtube.com/");
        await delay(3000);
    } else if (transcript.includes("open") && transcript.includes("google")) {
        readOut("Opening Google sir...");
        window.open("https://www.google.com/");
        await delay(3000);
    } else if (transcript.includes("sleep for now")) {
        readOutonce("Ok sir sleeping");
        await delay(5000);
        isspeaking = true;
        // location.reload();
        // readOut("Ok sir ready for your next command");
    } else if (transcript.includes("what is your name")) {
        readOut("My name is Jarvis");
        await delay(3000);
        recognition.start();
    } else if (transcript.includes("search for") && transcript.includes("in google")) {
        readOut("Here is what i found");
        let input = transcript.split("");
        input.splice(0, 11);
        let i = 0;
        for (let i = 0; i < 10; i++) {
            input.pop()
            // console.log(input);
        }
        // input = input.join("");
        // input = input.replace("in google","");
        // input.pop();
        input = input.join("").split(" ").join("+");
        console.log(input);
        window.open(`https://www.google.com/search?q=${input}`);
    } else if (transcript.includes("search for") && transcript.includes("on google")) {
        readOut("Here is what i found");
        let input = transcript.split("");
        input.splice(0, 11);
        let i = 0;
        while (i < 10) {
            input.pop();
            i = i + 1;
        };
        // input = input.join("");
        // input = input.replace("on google","");
        // input.pop();
        input = input.join("").split(" ").join("+");
        console.log(input);
        window.open(`https://www.google.com/search?q=${input}`);
    } else if (transcript.includes("search for") && transcript.includes("on youtube")) {
        readOut("Here is what i found");
        let input = transcript.split("");
        input.splice(0, 11);
        for (let i = 0; i < 11; i++) {
            input.pop()
            // console.log(input);
        }
        console.log(input);
        // input = input.join("");
        // input = input.replace("on youtube","");
        // input.pop();
        input = input.join("").split(" ").join("+");
        console.log(input);
        window.open(`https://www.youtube.com/results?search_query=${input}`);
    } else if (transcript.includes("search for") && transcript.includes("in youtube")) {
        readOut("Here is what i found");
        let input = transcript.split("");
        input.splice(0, 11);
        for (let i = 0; i < 11; i++) {
            input.pop()
            // console.log(input);
        }
        // input.pop();
        // input = input.join("");
        // input = input.replace("in youtube","");
        input = input.join("").split(" ").join("+");
        console.log(input);
        window.open(`https://www.youtube.com/results?search_query=${input}`);
    }
    else if (transcript.includes("open notepad")) {
        // WshShell = new ActiveXObject("WScript.Shell");
        // WshShell.Run("apps\\Notepad.lnk");
        // window.location.href = "apps\\Notepad.lnk";
        readOut("Ok sir opening Notepad");
        fetch('/runnotepad')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes("open instagram" || transcript.includes("open insta"))) {
        readOut("Ok sir opening Insta Gram");
        fetch('/runinsta')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes("open clock")) {
        readOut("Ok sir opening clock");
        fetch('/runclock')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes("open camera")) {
        readOut("Ok sir opening Camera");
        fetch('/runcamera')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes("open calculator")) {
        readOut("OK sir opening Calculator");
        fetch('/runcalc')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes("open chrome")) {
        readOut("Ok Sir Opening Chrome");
        fetch('/runchrome')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes("open new tab")) {
        readOut("Ok Sir Opening New Tab");
        fetch('/runchrome')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes("open powershell")) {
        readOut("Ok sir opening PowerShell");
        fetch('/runcommand')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes("open gallery")) {
        readOut("Ok sir opening gallery");
        fetch('/rungallery')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes("open screen recorder")) {
        readOut("OK sir opening Screen Recorder");
        fetch('/runrecorder')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error))
    } else if (transcript.includes("open vs code")) {
        readOut("Ok sir opening VS code");
        fetch('/runvscode')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes("open videos")) {
        readOut("Ok sir opening Videos");
        fetch('/runvideos')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes("open whatsapp")) {
        readOut("Ok sir opening Whats App");
        fetch('/runwhatsapp')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes("reload this page")) {
        readOut("Ok sir reloading");
        location.reload();
    } else if (transcript.includes("my location")) {
        readOut("Wait sir getting your location");
        getLocation();
    } else if (transcript.includes("weather") && transcript.includes("near by me")) {
        readOut("Wait sir fetching the data");
        checkWeather();
    } else if (transcript.includes("how much battery")) {
        readOut("OK sir checking Battery");
        await delay(2000);
        Checkbattery();
    } else if (transcript.includes('close calculator')) {
        readOut("Ok sir closing the calculator");
        fetch('/closecalc')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes('close camera')) {
        readOut("Ok sir close the camera");
        fetch('/closecamera')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes('close clock')) {
        readOut('Ok sir closing clock');
        fetch('/closeclock')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes('close instagram')) {
        readOut("Ok sir closing Instagram");
        fetch('/closeinsta')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes('close notepad')) {
        readOut("Ok sir closing notepad");
        fetch('/closenotepad')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes('close gallery')) {
        readOut('Ok sir closing gallery');
        fetch('/closegallery')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes('close powershell')) {
        readOut("Ok sir closing powershell");
        fetch('/closepowershell')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes('clode screen recorder')) {
        readOut("Ok sir cloaing screen recorder");
        fetch('/closescreenrec')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes('close videos')) {
        readOut("Ok sir closing videos");
        fetch('/closevideos')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes('close vs code') || transcript.includes('close vscode')) {
        readOut("Ok sir closing vs code");
        fetch('/closevscode')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    } else if (transcript.includes('close whatsapp')) {
        readOut("Ok sir closing whtsapp");
        fetch('/closewhatsapp')
            .then(response => response.text())
            .then(message => console.log(message))
            .catch(error => console.error(error));
    }else if(transcript.includes('memory card game') && transcript.includes('hard')){
        readOut("Here is the game sir");
        openmingamewitht()
    }else if(transcript.includes('memory card game') && transcript.includes('hard')){
        readOut("Here is the game sir");
        openmingamewithoutt();
    }else if(transcript.includes("i") && transcript.includes("typing test")){
        readOut("Here is the test sir");
        await delay(4000);
        readOut("All the best!");
        typinggame();
    }else if(transcript.includes("close the typing test")){
        readOut("Ok sir closing the test");
        closetypinggame();
    }else if(transcript.includes("close memory card game") && transcript.includes("easy")){
        readOut("Ok sir close the game");
        closeopenmingamewithoutt();
    }else if(transcript.includes("close memory card game") && transcript.includes("hard")){
        readOut("OK sir closng the game");
        closeopenmingamewitht();
    }else if(transcript.includes("open hangman")){
        readOut("Ok sir opening hangman");
        openhangman();
    }else if(transcript.includes("close hangman")){
        readOut("Ok sir closing hangman");
        closehangman();
    }else if(transcript.includes("open rock paper scissors")){
        readOut("Ok sir opening Rock Paper Scissors");
        openrps();
    }else if(transcript.includes("close rock paper scissors")){
        readOut("OK sir closing Rock Paper Scissors");
        closerps();
    }else if(transcript.includes("open word scramble")){
        readOut("Ok sir opening word scramble");
        openwordscramble();
    }else if(transcript.includes("close word scramble")){
        readOut("OK sir closing wordscramble");
        closewordscramble();
    }else if(transcript.includes("open tic-tac-toe") || transcript.includes("open tictactoe")){
        readOut("OK sir opening Tic Tac Toe");
        opentictactoe();
    }else if(transcript.includes("close tictactoe") || transcript.includes("close tic-tac-toe")){
        readOut("Ok sir closing Tic Tac Toe");
        closetictactoe();
    }else if(transcript.includes("open number gusser")){
        readOut("Ok sir opening Number Gusser");
        opennumberguess();
    }else if(transcript.includes("close number gusser")){
        readOut("OK sir closing Number Gusser");
        closenumberguess();
    }else if(transcript.includes("open snake game")){
        readOut("Ok sir opening snake game");
        opensnakegame();
    }else if(transcript.includes("close snake game")){
        readOut("OK sir closing snake game");
        closesnakegame();
    }else if(transcript.includes("who created you")){
        readOut("Bhavya Dhanwani is the name of my matser");
    }else if(transcript.includes("what are your commands")){
        readOut("All my commands are written in the downloaded file");
        downloadthis();
    }
    else {
        await getresponsebygpt(transcript);
        await delay(3000);
    }

});

async function downloadthis() {
    downloadwindow = window.open("/downloadfile","_blank");
    await delay(4000);
    downloadwindow.close();
}

let mingamewindow1;
let mingamewindow2;
let mingamewindow3;
let hangamngame;
let rockpaperscissorgame;
let snakegame;
let numberguess;
let wordscramblee;
let tictactoee;

function opentictactoe() {
    tictactoee = window.open('/tictactoe',"_blank","width=350,height=400");
}

function closetictactoe() {
    tictactoee.close();
}

function openwordscramble() {
    wordscramblee = window.open('/wordscramble',"_blank","width=400,height=400");
}

function closewordscramble() {
    wordscramblee.close();
}

function opennumberguess() {
    numberguess = window.open('/numbergusser',"_blank","width=350,height=250");
}

function closenumberguess() {
    numberguess.close();
}

function openhangman() {
    hangamngame = window.open('/hangman',"_blank","width=800, height=450");
}

function closehangman() {
    hangamngame.close()
}

function opensnakegame() {
    snakegame = window.open('/snakegame',"_blank","width=300,height=350");
}

function closesnakegame() {
    snakegame.close()
}

function openrps() {
    rockpaperscissorgame = window.open('/rockpaperscissor',"_blank","width=450,height=450");
}

function closerps() {
    rockpaperscissorgame.close();
}

function openmingamewitht(){
    // mingamewindow1 = window.open("https://fantastic-choux-323c6f.netlify.app/", "_blank", "width=400, height=400");
    mingamewindow1 = window.open("/mindgamehard", "_blank", "width=400, height=400");
}

function openmingamewithoutt(){
    // mingamewindow2=window.open("https://mellifluous-youtiao-853803.netlify.app/","_blank","width=400, height=400");
    mingamewindow1 = window.open("/mindgameeasy", "_blank", "width=400, height=400");
}

function typinggame(){
    mingamewindow3 = window.open("/typingtest","_blank","width=600 , height=500");
}

function closeopenmingamewithoutt(){
    mingamewindow1.close();
}

function closeopenmingamewitht(){
    mingamewindow2.close();
}

function closetypinggame(){
    mingamewindow3.close();
}



async function getresponsebygpt(transcript) {
    const res = await fetch(`/getresponse?usserinput=${transcript}&secretkey=${apikey}`);
    const result = await res.json();

    console.log(result.responsebygpt.responsebygpt);
    readOut(result.responsebygpt.responsebygpt);
}


function wish() {
    if (now.getHours() >= 0 && now.getHours() <= 12) {
        readOut(`Good morning Sir. It's ${now.getHours()}:${now.getMinutes()} A.M.`, () => {
            console.log("Spoken");
        });
    } else if (now.getHours > 12 && now.getHours() < 18) {
        readOut(`Good afternoon Sir. It's ${now.getHours()}:${now.getMinutes()} P.M.`, () => {
            console.log("Spoken");
        });
    } else {
        readOut(`Good evening Sir. It's ${now.getHours()}:${now.getMinutes()} P.M.`, () => {
            console.log("Spoken");
        });
    }

    readOut("I am Jarvis. Please tell me how can i help you", () => {
        console.log("Spoken");
    });
}

async function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                console.log("Latitude: " + latitude);
                console.log("Longitude: " + longitude);
                const geoAPIUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

                const locationdata = "";
                let city = "";
                let country = "";
                let state = "";
                let district = "";

                fetch(geoAPIUrl)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        city = data.city;
                        country = data.countryName;
                        state = data.principalSubdivision;
                        district = data.localityInfo.administrative[2].name;
                    })

                await delay(4000);

                console.log(city);
                console.log(country);
                console.log(state);
                console.log(district);

                readOut(`Your are currently in country ${country} in that state ${state} in that  ${district} in which you are in city ${city}`);

            },
            (error) => {
                console.error("Error getting location:", error.message);
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}


// function checkweather(apiKey) {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             async (position) => {
//                 const { latitude, longitude } = position.coords;
//                 console.log("Latitude: " + latitude);
//                 console.log("Longitude: " + longitude);

//                 fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
//                 .then(responsegot => responsegot.json())
//                 .then(data => {
//                     let weather = data
//                 })

//             },
//             (error) => {
//                 console.error("Error getting location:", error.message);
//             }
//         );
//     } else {
//         console.error("Geolocation is not supported by this browser.");
//     }   
// }
async function checkWeather() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                console.log("Latitude: " + latitude);
                console.log("Longitude: " + longitude);
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=614de0871ae2bb714d90195fc70d4489`;

                try {
                    const response = await fetch(apiUrl);
                    const data = await response.json();

                    console.log(data);

                    await delay(1000);

                    let temperature = `${Math.round(data.main.temp - 273)}°C`;

                    let weather_type = `${data.weather[0].main}`;

                    let cityname = data.name;

                    console.log(temperature);
                    console.log(weather_type);
                    console.log(cityname)

                    readOut(`The weather type is ${weather_type} with a temperature of ${temperature} in ${cityname}`)


                } catch (error) {
                    console.error("Error fetching weather data:", error.message);
                }

            },
            (error) => {
                console.error("Error getting location:", error.message);
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
    }

}



async function checkWeatheronstart() {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                // console.log("Latitude: " + latitude);
                // console.log("Longitude: " + longitude);
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=614de0871ae2bb714d90195fc70d4489`;

                try {
                    const response = await fetch(apiUrl);
                    const data = await response.json();

                    // console.log(data);

                    await delay(1000);

                    let temperature = `${Math.round(data.main.temp - 273)}°C`;

                    let weather_type = `${data.weather[0].main}`;

                    let cityname = data.name;

                    let country = data.sys.country;

                    let wind_speed = `${data.wind.speed}km/h`;

                    let weather_description = data.weather[0].description;

                    let humiditygot = `${data.main.humidity}%`;

                    
                    // console.log(temperature);
                    // console.log(weather_type);
                    // console.log(cityname);
                    // console.log(country);
                    // console.log(wind_speed);
                    
                    countrynamehtml.innerHTML=`Country: ${country}`
                    citynamehtml.innerHTML=`City: ${cityname}`
                    temphtml.innerHTML=`Temperature: ${temperature}`
                    windspeedhtml.innerHTML=`Wind Speed: ${wind_speed}`
                    weathertype.innerHTML = `Weather:${weather_type}`
                    weather_des.innerHTML = `Weather description:${weather_description}`
                    humidityhtml.innerHTML = `Humidity:${humiditygot}`
                    weather_type = weather_type.toLowerCase()

                    
                    if(weather_type == "clouds"){
                        weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX7uvniAOZKQYW5HsXuMafqGlf7goeP2AjqA&usqp=CAU";
                    }else if(weather_type == "clear"){
                        weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7VDyEQsNMq-cWxzeA5B9YBSlvDi3WumtUQ&usqp=CAU";
                    }else if(weather_type == "drizzle"){
                        weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_YosMBWm0Xl3dect-eQOlhniGN2aBQeqDrQ&usqp=CAU";
                    }else if(weather_type == "rain"){
                        weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98HWjP3JNzqrwVNsqwbUC1USvHft-4FIvgA&usqp=CAU"; 
                    }else if(weather_type == "mist"){
                        weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUIN97T35nU5TE95DmeVkYJ2UijsTFVdKNsg&usqp=CAU";
                    }


                } catch (error) {
                    console.error("Error fetching weather data:", error.message);
                }

            },
            (error) => {
                console.error("Error getting location:", error.message);
            }
        );
    }

    setTimeout(checkWeatheronstart,600000);




function Checkbatterystart() {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function (battery) {
            // Initial battery percentage
            updateBatteryInfo(battery);

            // Update battery percentage whenever it changes
            battery.addEventListener('levelchange', function () {
                updateBatteryInfo(battery);
            });
        });
    } else {
        console.log("Battery Api is not supported")
    }

    function updateBatteryInfo(battery) {
        const percentage = (battery.level * 100).toFixed(2);
        console.log(percentage + "%")
        showbattery.innerHTML = (`${percentage}%`);
    }
}




function Checkbattery() {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function (battery) {
            // Initial battery percentage
            updateBatteryInfo(battery);

            // Update battery percentage whenever it changes
            battery.addEventListener('levelchange', function () {
                updateBatteryInfo(battery);
            });
        });
    } else {
        console.log("Battery Api is not supported")
    }

    function updateBatteryInfo(battery) {
        const percentage = (battery.level * 100).toFixed(2);
        console.log(percentage + "%")
        readOut(`Your device have ${percentage}% battery`);
    }
}

async function getapikey(){
    readout("To Start Me Enter The api key");
    let gotkey = prompt("Enter Yor Openai api key here");
    readoutonce("Are you sure to use this api?");
    await delay(1000);
    let confirmapi = confirm("Are you sure to use this api");
    
    if (confirmapi){
        apikey = gotkey;
        readout("Ready to go sir");
    }else{
        await delay(1000);
        readout("The ai bot will not run without the ap key");
        getapikey();
    }
}

function apikeyreenter(){
    isspeaking = true;
    readout("Entert the Api key here sir");
    let gotkey = prompt("Enter Your api Key");
    readout("Are you sure to use this api key?");
    let getconfirmation = confirm("Are you sure to use this api key?");

    if(getconfirmation){
        apikey = gotkey;
        readOut("Api Key changed successfully");
    }else{
        readOut("The api key is not changed and is as it is");
    }
}