const uuid = require('uuid');

function generateUUID() {  
	return String(uuid.v1()).split('-').join('');
}

function getUUID() {  
	return String(uuid.v1());
}

function randomNumber(min, max) {  
	return Math.floor(
		Math.random() * (max - min) + min
	);
}

function randomString(length) {
	var result           = '';
	var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

module.exports = {
	generateUUID,
	randomNumber,
	randomString,
	getUUID
};