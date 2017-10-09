var a = prompt('Dane a');
var h = prompt('Dane h');


function  getTriangleArea(a, h) {

	if ((a <= 0) || (h <= 0)) {
		return "nieprawidłowe dane";
	} 
	else if ((a > 0) && (h > 0)) {
		value = a*h/2;
		return value;
	}
	else {
		return 'Koniec'; 
	}
}

alert(getTriangleArea(a,h));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(11, 16);
var triangle3Area = getTriangleArea(12, 17);
console.log(triangle1Area);
alert(triangle2Area);
