export function solve(): number {
	let nums = [3,0,1]

	let lo = 0;
	let hi = Infinity;

	for(let i = 0; i< nums.length;++i) {
		let curr = nums[i];

		if (curr < lo) {
			lo = curr;
		}
		if (curr > hi) {
			hi = curr;
		}

	}
	for(lo; lo<hi; lo++) {
	if(!nums.includes(lo)){
			return lo;
		}
	}
	return 0;
}
