

// const btnSearch = document.querySelector("#btn-search");
// const inputSearch = document.querySelector("#username");
// const imgAvatar = document.querySelector("#avatar");

// btnSearch.addEventListener("click", (event) => {
//   // console.log({ input: inputSearch.value });

//   let searchTerm = inputSearch.value;

//   if (!searchTerm) {
//     alert("haji in khaileee");
//     return;
//   }

//   // 2 req: Sync / Async
//   fetch(API_URL + searchTerm, { method: "GET" })
//     .then(function (response) {
//       return response.json();
//     })
//     .then((data) => {
//       render(data);
//     });
// });

// function getUser(username) {}

// function render(data) {
//   const { avatar_url, hireable, following, followers, location, name } = data;
//   imgAvatar.src = avatar_url;
//   console.log(data);
// }

const API_URL = "https://api.github.com/users/";
const searchInput = document.querySelector('#username');
const searchBtn = document.querySelector('#submit-btn');
const imageProfile = document.querySelector('#image');

const card = document.querySelector(".github_info--total");
const name = document.querySelector('#name');
const name1 = document.querySelector("#name1");
const posts = document.querySelector(".posts--numbers");
const followers = document.querySelector(".followers--numbers");
const followings = document.querySelector(".following--numbers");

const error = document.querySelector(".error");



searchBtn.addEventListener('click',function() {
  let searchTerm = searchInput.value;
  if (!searchTerm) {
    card.style.visibility = 'hidden';
    error.className = "show--error error";
    error.style.padding = "1rem";
    error.innerHTML = "You Should Type A Username!";
    setTimeout(function(){
      error.className = error.className.replace("show--error","");
    },2500);
    return;
  }
  fetch (API_URL + searchTerm, {method : 'GET'})
  
  .then(function(response){
      console.log(response.json);
  })
  .then (function(data){
      render(data);
      
  })

  
})

function getUser(username) {

}

function render(data) {
  const { avatar_url, hireable, following, followers, location, name } = data;
  imageProfile.src = avatar_url;
  console.log(data);
}




// const arr = [
//   {
//       "symbol": "BTC",
//       "date": 1633910400000,
//       "price": 54730.63,
//       "Bitmex": null,
//       "Binance": 0.01,
//       "Bybit": 0.0164,
//       "Okex": 0.009,
//       "Huobi": 0.01,
//       "FTX": 0.0056,
//       "Deribit": null,
//       "Kraken": null,
//       "Bitfinex": null,
//       "Phemex": null
//   },
//   {
//       "symbol": "ETH",
//       "date": 1633939200000,
//       "price": 56823.71,
//       "Bitmex": null,
//       "Binance": 0.01,
//       "Bybit": 0.01,
//       "Okex": 0.01,
//       "Huobi": 0.01,
//       "FTX": 0.0176,
//       "Deribit": null,
//       "Kraken": null,
//       "Bitfinex": null,
//       "Phemex": null
//   },
//   {
//       "symbol": "BTC",
//       "date": 1633968000000,
//       "price": 57503.91,
//       "Bitmex": null,
//       "Binance": 0.01,
//       "Bybit": 0.01,
//       "Okex": -0.002,
//       "Huobi": 0.01,
//       "FTX": 0.0112,
//       "Deribit": null,
//       "Kraken": null,
//       "Bitfinex": null,
//       "Phemex": null
//   },
//   {
//       "symbol": "BTC",
//       "date": 1633996800000,
//       "price": 57498.39,
//       "Bitmex": null,
//       "Binance": 0.01,
//       "Bybit": 0.01,
//       "Okex": -0.008,
//       "Huobi": 0.01,
//       "FTX": 0.0168,
//       "Deribit": null,
//       "Kraken": null,
//       "Bitfinex": null,
//       "Phemex": null
//   },
//   {
//       "symbol": "BSC",
//       "date": 1634025600000,
//       "price": 57360.67,
//       "Bitmex": null,
//       "Binance": 0.01,
//       "Bybit": 0.01,
//       "Okex": -0.008,
//       "Huobi": 0.01,
//       "FTX": 0.0184,
//       "Deribit": null,
//       "Kraken": null,
//       "Bitfinex": null,
//       "Phemex": null
//   },
  
//     {
//       "symbol": "ETH",
//       "date": 1633996800000,
//       "price": 57498.39,
//       "Bitmex": null,
//       "Binance": null,
//       "Bybit": 0.01,
//       "Okex": -0.008,
//       "Huobi": 0.01,
//       "FTX": 0.0168,
//       "Deribit": null,
//       "Kraken": 0.1,
//       "Bitfinex": null,
//       "Phemex": 1
//   },
  
//     {
//       "symbol": "USDT",
//       "date": 1644624000000,
//       "price": 42365.56,
//       "Bitmex": 0.01,
//       "Binance": 0.01,
//       "Bybit": 0.01,
//       "Okex": 0.014,
//       "Huobi": 0.01,
//       "FTX": 0.0104,
//       "Deribit": null,
//       "Kraken": null,
//       "Bitfinex": null,
//       "Phemex": 0.01,
//   },

// ]

// output

// const names = {
//           Bitmex: [],
//           Binance: [],
//           Bybit: [],
//           Okex: [],
//           Huobi: [],
//           FTX: [],
//           Deribit: [],
//           Kraken: [],
//           Bitfinex: [],
//           Phemex: [],
//         };

// const keys= Object.keys(arr);
// // console.log (keys);
// const value = Object.values(arr);
// console.log(value);

