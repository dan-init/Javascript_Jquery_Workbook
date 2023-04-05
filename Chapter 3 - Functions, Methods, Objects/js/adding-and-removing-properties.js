var hotel = {
    name : 'Park',
    rooms : 120,
    booked : 77
};

hotel.gym = true;   //Adding properties to the hotel object
hotel.pool = false;

delete hotel.booked; //Deleting the booked property from the object

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elPool = document.getElementById('pool');   //Updating the value of the class attribute
elPool.className ='pool: ' + hotel.pool;

var elGym = document.getElementById('gym');     //Updating the value of the class attribute
elPool.className ='Gym: ' + hotel.gym;

