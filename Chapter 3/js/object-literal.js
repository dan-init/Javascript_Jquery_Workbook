
var hotel = {                               //Object
    name: 'Quay',                           //Property
    rooms: 40,                              //Property
    booked: 25,                             //Property
    gym: true,                              //Property
    roomTypes: ['twin', 'double', 'suite'], //Property

    checkAvailability: function() {         //Method
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();