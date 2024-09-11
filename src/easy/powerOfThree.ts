export function solve(): boolean {
	let input = 81;
	if(input == 0) {
		return false;
	}

	while(input % 3 == 0) {
		input/=3;
	}
	return input == 1;
}
