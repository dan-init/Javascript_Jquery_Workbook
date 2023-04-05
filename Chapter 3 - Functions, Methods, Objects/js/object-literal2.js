
var hotel = {                               //Object
    name: 'Park',                           //Property
    rooms: 120,                              //Property
    booked: 77,                             //Property
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