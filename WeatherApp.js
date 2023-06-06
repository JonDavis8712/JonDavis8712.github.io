const date = require('date-fns');
let weather = {
    "apikey":'8de7057cf85dd26879c48952b55072af',
    fetchWeather: function (city){
        fetch(url = "https://api.openweathermap.org/data/2.5/weather?q="
         + city 
         + "&units=imperial&appid=" 
         + this.apikey, {
            mode:'cors'
         })
        
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },

  
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { timezone } = data
        const { dt } = data
        const { sunrise } = data.sys
        const { sunset } = data.sys
              
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temperature").innerText = Math.floor(temp) +"°F";
        document.querySelector(".description").innerText = description.toUpperCase();
        document.querySelector(".humidity").innerText = "Humidity: " + humidity +"%";
        document.querySelector(".wind").innerText = "Wind Speed: " + Math.floor(speed) +"mph";
        document.querySelector(".weather").classList.remove("loading")
        
        if ( `${icon}` === `${"04n" || "04d"}`) {
            return document.querySelector(".icon").src = 'https://lh3.googleusercontent.com/W4Q-YMwmaTHhzbGXn-vZpyDFgJCpr-XBsyE1r-mZYgOl91pDItAffQQAOKO7VT4UAkPlAHgCmkViiKpDjb3rnlJy3dOm8bw4M85YNH3SXLzzm0E8kzezJX-JydYw4IhJOfJ6CkGSLA=s256-p-k'
        }
        
        if ( `${icon}` === `${"02d"}`) {
            return document.querySelector(".icon").src = 'https://lh3.googleusercontent.com/FSHoUidPh2Pw7aNCnbuXKIzOywpWEgsoirVu6-zDVmwOZBgqHrzlRZzxNjXxomvjP-183FoZZElCdGGfgrXHxhApxkk2boktFYKTWin4apoWf0hIQvV53Dxs7fNhdnCb0_y0YEY6zg=s256-p-k'
        }
        if ( `${icon}` === `${"01d"}`) {
            return document.querySelector(".icon").src = 'https://lh3.googleusercontent.com/CVm25tt39p5RDIDhqPo13J2d4CMqXEHt-fqO0tU_k0iYkQxzaZ4LTMIg0RSHXqLw26QAYOMFxfVAjstt0CH7wTZD2w6ZJx9sZR4PjX8-i0-wy-Xfa5wiRn4iDBN1CQCLO5Y8vyKpaA=s256-p-k'
        }
        if ( `${icon}` === `${"01n"}`) {
            return document.querySelector(".icon").src = 'https://lh3.googleusercontent.com/dgNBgb-P9BcUfPxAoadF-SW2NdtHvYQs78fkTcFICgVvU7qA-Aygd-Q2GgHx983Atqp37dYaUHsKYXSS0l38OrZiHv_dKigfTRNoocWDIw__rAKi6Gx1Lu8wB43BDuefR67uk4mddA=s256-p-k'
        }
        if ( `${icon}` === `${"02n"}`) {
            return document.querySelector(".icon").src = 'https://lh3.googleusercontent.com/IviLsxiGvw2xZDgElIx9g1rWqpUWya1rzfPsk2fKZSbTM9WsrtphJPHfwafejPi4IRZDPyDK8Bx8veRZUUOJdR47wlZBN7ZZRihuxKvunWxwPBE0-kt1IoYJ_EhAbRUf8sClpTVuKQ=s256-p-k'
        }
        if ( `${icon}` === `${"03d" || "03n"}`) {
            return document.querySelector(".icon").src = 'https://lh3.googleusercontent.com/b469shsDxP9_S574ps6TrQgC5EcVD3REqOqte_ZIuPClcZ3PNLBfbq4jqp29m-K5SYdAMIvRoEODwy6v7xBtm3nSjnRUOyoAZ28CAsJv5hiHS-tA4ADBUbgoxFHmXEeAkk5qqZrpow=s256-p-k'
        }
        if ( `${icon}` === `${"04d" || "04n"}`) {
            return document.querySelector(".icon").src = 'https://lh3.googleusercontent.com/O8oyDPBEV97T0uIHkUvSWvoJfMn2TepfesbsTZs-ez5MtduAoVngnyzThEKeMaw49oBQoyUPl5R74vz9QB8JTMRm2wTwEU8FqSKiayYdxVOWRTTb7peEkNJ4VLFD2aX-1E3QsplTXw=s256-p-k'
        }
        if ( `${icon}` === `${"09d" || "09n"}`) {
            return document.querySelector(".icon").src = 'https://lh3.googleusercontent.com/NO53na83olxa61LXPHIAsrBOjs38wCyebP4uTvN77gskBMUO4Mlz2ZiUiAtSQcfpJJIyFD5wkT8Gg438afpxVwcHSX6JhYuCGu6NMlv-uhxoEy0TlEhlah05roYnEN2XHmjmZLyrFg=s256-p-k'
        }
        if ( `${icon}` === `${"10n"}`) {
            return document.querySelector(".icon").src = 'https://lh3.googleusercontent.com/uEZWIHLEcaiIsA5hL1cWAW0AmyeT43u5_jAN4-tdAw4nV8lugZ34kit0f3pWcrXS8sVPKACkO7yLH6xA2TmFujhDt1TmLrs9iRPIikjCrenzPdarcP9ntezrkLRwedaJOFMSzyqppQ=s256-p-k'
        }
        if ( `${icon}` === `${"10d"}`) {
            return document.querySelector(".icon").src = 'https://lh3.googleusercontent.com/2JTkHUHHw1X3XTEsKzoZINr0sY3ovmxjQU1FWLu9bsKMIbR0SYXpLpRCDKoLUkeyv2yoxsx14EddyedQgQrLPuvCXNe52CdZIGuQCLqwk91G2wO8-ry_L81hwC--menjkgawlUvk_g=s256-p-k'
        }
        if ( `${icon}` === `${"10d"}`) {
            return document.querySelector(".icon").src = 'https://lh3.googleusercontent.com/2JTkHUHHw1X3XTEsKzoZINr0sY3ovmxjQU1FWLu9bsKMIbR0SYXpLpRCDKoLUkeyv2yoxsx14EddyedQgQrLPuvCXNe52CdZIGuQCLqwk91G2wO8-ry_L81hwC--menjkgawlUvk_g=s256-p-k'
        }
        if ( `${icon}` === `${"11d" || "11n"}`) {
            return document.querySelector(".icon").src = 'https://lh3.googleusercontent.com/89BbiQUPrg3b0wLGRUJvv9RJUJzobE6sDjNeAVneqCFO3ct0aI7ctyS78ol5Z8SvkvPbC-CjWuuo_3jl0caPzkjGJ1_FwS7FQ1K6qX3K0dHbL87TZfBnxxFjs7MlYO3phPg69d3eHA=s256-p-k'
        }
        if ( `${icon}` === `${"13d"}`) {
            return document.querySelector(".icon").src = 'https://lh3.googleusercontent.com/6ifd3kbEP93pZh_a7WoAL0T_9SZW1zBER1o8sNVrBQyNgnC1tavW7IC3e3I_bRLy4YCl82bpGSRVO1K3dLpNitQ9i-Xa-PG2jrWVq6jT5TUPm4c-88Vy_kRSctKQ2cUfFSW_XTlr3A=s256-p-k'
        }
        if ( `${icon}` === `${"13n"}`) {
            return document.querySelector(".icon").src = 'https://lh3.googleusercontent.com/xhqwxuqnpDZnq0brMQft-P9QSq6v18DAYPTGC25mHdm8Nwqo281w7kIf6O4h-1l8zRSxWCVr9AZtb-8KzLD6bDESx9VQPBJewbzEizAavlUUdkZHy-pu7To1nVYZfRWY1_jyJ_-Vjg=w2400'
        }
        if ( `${icon}` === `${"50n" || "50d"}`) {
            return document.querySelector(".icon").src = 'https://lh3.googleusercontent.com/F8oBwMSajM9tcSZxVtocfHCMIq8opp02KhUAIpqj8amvjGQHDv591Tki1ww91FMNYaZ3z4ZOua-jtQpUHBqRH__TPDVwj1owMb0sOuq0m8itvNYvrTJsw6nZy_06HoOY4S5EZGnUNQ=w2400'
        }
        
        
        
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);

    },

};

document
.querySelector(".enter")
.addEventListener("click", function () {
    weather.search();
})

document.querySelector(".enter").onclick = () => clearSearch()

clearSearch = () => {
    document.querySelector(".icon").value = ''
}

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        weather.search();
    }
});
