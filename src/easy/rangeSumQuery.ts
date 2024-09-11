class NumArray {
	private nums: number[];
    constructor(nums: number[]) {
		this.nums = nums;
        
    }

    sumRange(left: number, right: number): number {
		let sum = 0;
		for(let i = left; i<=right; i++) {
			sum +=this.nums[i];

		}
		return sum;
    }
}

export function solve(): void {
	let numarr = new NumArray([-2, 0, 3, -5, 2, -1]);
	let res = numarr.sumRange(2,5);
	console.log(res);
}
