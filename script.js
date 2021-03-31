// var queryURL =
//   "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=30013";
// var apikey =
//   "FFnFt4PsSG6KT8MXvOCo7XgcNHZIKBREkTnXB0eMO6iNcIqDYE0NmcTC4WPwiJSnpM976rSWPKpGYxeG2Kmg_Tw894pgJh51p8G16EgJxSjCff8n9CYwZNRC0ZJkYHYx";
// fetch(queryURL,
//     {
//         headers:{
//             'Authorization': 'Bearer ' + apikey,
// 			'Content-Type': 'application/x-www-form-urlencoded',
//             // "Access-Control-Allow-Origin": "*"
//         }
//     }) .then(function(response) {
//         return response.json();
//     }) .then(function(data) {
//         console.log(data);
//     })

// $.ajax({
//   url: queryURL,
//   dataType: "jsonp",
//   headers: {
//     Authorization: "Bearer " + apikey,
//     "Content-Type": "application/x-www-form-urlencoded",
//     // "Access-Control-Allow-Origin": "*"
//   },
// //   data: { term: "restaurants", location: 30013 }, // callback is not necessary
//   success: function (data) {
//     console.log(data);
//   },
// });

// fetch("https://documenu.p.rapidapi.com/restaurants/distance?lat=40.68919&lon=-73.992378&mode=walking&minutes=5&size=30&page=2&cuisine=Italian&top_cuisines=true", {
// 	"method": "GET",
// 	"headers": {
// 		"x-api-key": "<REQUIRED>",
// 		"x-rapidapi-key": "SIGN-UP-FOR-KEY",
// 		"x-rapidapi-host": "documenu.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

fetch("https://api.documenu.com/v2/restaurants/search/fields?zip_code=30308&key=bb830da9585d8d17c53039de5ac3358c")
.then(response => {
	return response.json();
}) .then(function(data){
    console.log(data.data);
})
