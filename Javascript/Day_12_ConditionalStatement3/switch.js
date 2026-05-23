// 5. switch
function statusMessage(code) {
	switch (code) {
		case 200:
			return 'OK';
		case 400:
			return 'Bad Request';
		case 401:
			return 'Unauthorized';
		case 404:
			return 'Not Found';
		default:
			return 'Unknown Status';
	}
}
console.log(statusMessage(200)); // OK
console.log(statusMessage(418)); // Unknown Status

// Example 2
let day = 1; 
switch(day){
    case 1 :
		console.log("Today is Sunday");
		break;
	
	case 2 :
		console.log("Today is Monday");
		break;
	
	case 3 :
		console.log("Today is Tuesday");
		break;
	
	case 4 :
		console.log("Today is Wednesday");
		break;

	case 5 :
		console.log("Today is Thursday");
		break;
	
	case 6 :
		console.log("Today is Friday");
		break;

	case 7 :
		console.log("Today is Saturday");
		break;
	
	default :
		console.log("Please Enter Number between 1 to 7 ");
}
