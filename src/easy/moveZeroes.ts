export function solve(): void {
	//const nums:number[] = [0,1,0,3,12];
	const nums:number[] = [0,0,1];

	let currZeroCount = 0;
	for(let i = 0; i < nums.length;i++){
		let num = nums[i];
		if (num===0){
			for(let j = i; j<nums.length-1-currZeroCount; j++){
				if(nums[j+1] ===0){i--;}
				nums[j] = nums[j+1];
				nums[j+1] = 0;
			}
			currZeroCount++;
		}
	}
}
