function ChoseMonty() {
    let getMonth = document.getElementById("months");
    let getMonthValue = getMonth.options[getMonth.selectedIndex].value;
    if (getMonthValue == 'April' || getMonthValue == 'June' || getMonthValue == 'September' || getMonthValue == 'November') {
        document.querySelector(".hideThirty").style.display = "block";
        document.querySelector(".hideThirtyOne").style.display = "none";

    } else if (getMonthValue == "February") {
        document.querySelector(".hideThirtyOne").style.display = "none";
        document.querySelector(".hideThirty").style.display = "none";


    } else {
        document.querySelector(".hideThirty").style.display = "block";
        document.querySelector(".hideThirtyOne").style.display = "block";
    }
    return getMonthValue;
}

function choseDay() {
    let getDay = document.getElementById("days");
    let getDayValue = getDay.options[getDay.selectedIndex].value;
    return getDayValue;}

function findHoroscopeSymbol() {

    let month = ChoseMonty();
    let day = choseDay();
    let symbol = "";

    if (month == 'January' && day <= 19) {
        symbol = "Capricorn";
        document.querySelector(".horoscopeName").innerHTML = "Capricorn";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Capricorn.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/CapricornSign.png)";
        // getHoroscopeText("Capricorn.txt");
    } else if (month == 'January' && day > 19) {
        symbol = "Aquarius";
        document.querySelector(".horoscopeName").innerHTML = "Aquarius";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Aquarius.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/AquariusSign.png)";
        // getHoroscopeText("Aquarius.txt");
    } else if (month == 'February' && day <= 18) {
        symbol = "Aquarius";
        document.querySelector(".horoscopeName").innerHTML = "Aquarius";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Aquarius.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/AquariusSign.png)";
        // getHoroscopeText("Aquarius.txt");
    } else if (month == 'February' && day > 18) {
        symbol = "Pisces";
        document.querySelector(".horoscopeName").innerHTML = "Pisces";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Pisces.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/PiscesSign.png)";
        // getHoroscopeText("Pisces.txt");
    } else if (month == 'March' && day <= 20) {
        symbol = "Pisces";
        document.querySelector(".horoscopeName").innerHTML = "Pisces";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Pisces.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/PiscesSign.png)";
        // getHoroscopeText("Pisces.txt");
    } else if (month == 'March' && day > 20) {
        symbol = "Aries";
        document.querySelector(".horoscopeName").innerHTML = "Aries";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Aries.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/AriesSign.png)";
        // getHoroscopeText("Aries.txt");
    } else if (month == 'April' && day <= 19) {
        symbol = "Aries";
        document.querySelector(".horoscopeName").innerHTML = "Aries";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Aries.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/AriesSign.png)";
        // getHoroscopeText("Aries.txt");
    } else if (month == 'April' && day > 19) {
        symbol = "Taurus";
        document.querySelector(".horoscopeName").innerHTML = "Taurus";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Taurus.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/TaurusSign.png)";
        // getHoroscopeText("Taurus.txt");
    } else if (month == 'May' && day <= 20) {
        symbol = "Taurus";
        document.querySelector(".horoscopeName").innerHTML = "Taurus";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Taurus.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/TaurusSign.png)";
        // getHoroscopeText("Taurus.txt");
    } else if (month == 'May' && day > 20) {
        symbol = "Gemini";
        document.querySelector(".horoscopeName").innerHTML = "Gemini";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Gemini.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/GeminiSign.png)";
        // getHoroscopeText("Gemini.txt");
    } else if (month == 'June' && day <= 20) {
        symbol = "Gemini";
        document.querySelector(".horoscopeName").innerHTML = "Gemini";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Gemini.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/GeminiSign.png)";
        // getHoroscopeText("Gemini.txt");
    } else if (month == 'June' && day > 20) {
        symbol = "Cancer";
        document.querySelector(".horoscopeName").innerHTML = "Cancer";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Cancer.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/CancerSign.png)";
        // getHoroscopeText("Cancer.txt");
    } else if (month == 'July' && day <= 22) {
        symbol = "Cancer";
        document.querySelector(".horoscopeName").innerHTML = "Cancer";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Cancer.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/CancerSign.png)";
        // getHoroscopeText("Cancer.txt");
    } else if (month == 'July' && day > 22) {
        symbol = "Leo";
        document.querySelector(".horoscopeName").innerHTML = "Leo";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Leo.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/LeoSign.png)";
        // getHoroscopeText("Leo.txt")
    } else if (month == 'August' && day <= 22) {
        symbol = "Leo";
        document.querySelector(".horoscopeName").innerHTML = "Leo";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Leo.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/LeoSign.png)";
        // getHoroscopeText("Leo.txt")
    } else if (month == 'August' && day > 22) {
        symbol = "Virgo";
        document.querySelector(".horoscopeName").innerHTML = "Virgo";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Virgo.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/VirgoSign.png)";
        // getHoroscopeText("Virgo.txt");
    } else if (month == 'September' && day <= 22) {
        symbol = "Virgo";
        document.querySelector(".horoscopeName").innerHTML = "Virgo";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Virgo.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/VirgoSign.png)";
        // getHoroscopeText("Virgo.txt");
    } else if (month == 'September' && day > 22) {
        symbol = "Libra";
        document.querySelector(".horoscopeName").innerHTML = "Libra";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Libra.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/LibraSign.png)";
        // getHoroscopeText("Libra.txt");
    } else if (month == 'October' && day <= 22) {
        symbol = "Libra";
        document.querySelector(".horoscopeName").innerHTML = "Libra";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Libra.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/LibraSign.png)";
        // getHoroscopeText("Libra.txt");
    } else if (month == 'October' && day > 22) {
        symbol = "Scorpio";
        document.querySelector(".horoscopeName").innerHTML = "Scorpio";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Scorpio.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/ScorpioSign.png)";
        // getHoroscopeText("Scorpio.txt");
    } else if (month == 'November' && day <= 21) {
        symbol = "Scorpio";
        document.querySelector(".horoscopeName").innerHTML = "Scorpio";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Scorpio.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/ScorpioSign.png)";
        // getHoroscopeText("Scorpio.txt");
    } else if (month == 'November' && day > 21) {
        symbol = "Sagittarius";
        document.querySelector(".horoscopeName").innerHTML = "Sagittarius";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Sagittarius.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/SagittariusSign.png)";
        // getHoroscopeText("Sagittarius.txt");
    } else if (month == 'December' && day <= 21) {
        symbol = "Sagittarius";
        document.querySelector(".horoscopeName").innerHTML = "Sagittarius";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Sagittarius.png)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/SagittariusSign.png)";
        // getHoroscopeText("Sagittarius.txt");
    } else if (month == 'December' && day > 21) {
        symbol = "Capricorn";
        document.querySelector(".horoscopeName").innerHTML = "Capricorn";
        document.querySelector(".horoscopeImg").style.backgroundImage = "url(./img/Capricorn.jpg)";
        document.querySelector(".horoscopeSing").style.backgroundImage = "url(./img/CapricornSign.png)";
        // getHoroscopeText("Capricorn.txt");
    } else { console.log("ERROR!"); }

    getHoroscope(symbol);

}

function getHoroscope(symbol){
    let month = ChoseMonty();
    let day = choseDay();

    const options = {
        method: 'POST',
        headers: {
            'X-RapidAPI-Key': '768c7c014cmsh2ee0bbd1a9fa8d9p13f02cjsn760413bdb5d8',
            'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
        }
    };
    
    let link = 'https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=' + symbol + '&day=today';
    fetch(link, options)
        .then(response => response.json())
        .then(response => {
            console.log("Color: ", response)
            document.querySelector(".color").innerHTML = response.color;
            document.querySelector(".number ").innerHTML = response.lucky_number;
            document.querySelector(".horoscope ").innerHTML = response.description;
        })
        .catch(err => console.error(err));

    // fetch('https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius&day=today', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

}

