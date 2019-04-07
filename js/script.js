// function to change colors on the click me button.
var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').className;
	// changing class name
	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';
	} else {
		document.getElementById('cool').className = 'cool';
	}
}

var sayMyName = function(name){
	alert('My name is: '+name);
}

var car = {
			make: 'Honda',
			type: 'Accord',
			color: 'Black',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: [
				'seat1', 
				'seat2', 
				'seat3', 
				'seat4'
			],
			turnOn: function() {
				this.isTurnedOn = true;
			},
			fly: function() {
				alert('fly');
			},
			switchCar: function(isOn){
				console.log('turn car '+isOn);
				if (isOn == true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;
				}
			}
};

console.log('hello there friends!');
