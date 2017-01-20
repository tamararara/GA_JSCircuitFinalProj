

	//Initialize Firebase
  var config = {
    apiKey: "AIzaSyBOLXr5QViWjwJkimF_PzeGqeY-21ffbDU",
    authDomain: "reservation-site2.firebaseapp.com",
    databaseURL: "https://reservation-site2.firebaseio.com",
    storageBucket: "reservation-site2.appspot.com",
    messagingSenderId: "608138601403"
  };
  firebase.initializeApp(config);

  var database=firebase.database();

  //Add reservation
//add day to object
  var reservationData= {};
  $('.reservation-day li').on('click', function(){
  	reservationData.day=$('this').text();
  });
//add name to object
  $('.reservations').on('submit', function(e){
  	e.preventDefault();
  	reservationData.name=$('.reservation-name').val();
  	//create reservation data section in database
  	var reservationsReference=database.ref('reservations');
  	reservationsReference.push(reservationData);
  });
//show reservation on form

  	//when value in 'reservations' on database changes, run this fn
  	database.ref('reservations').on('child_added', function(results){
  		var reservationList=$('.reservation-list');
  		var reservations=results.val();
  	
  			//Put data in Handlebars template
  			var source=$('#reservation-template').html();
  			var template=Handlebars.compile(source);
  			var reservationListItem=template(reservations);
  			reservationList.append(reservationListItem);
  			})
  		;




//add Google maps 
function initMap(){
		var map=new google.maps.Map(document.getElementById('map'),{
			center: {lat:40.8054491, lng:-73.9654415},
			zoom:10
		});
		var marker=new google.maps.Marker({
			position: {lat:40.8054491, lng:-73.9654415},
			map: map,
			title: "Monk's Cafe"
		})
	};





