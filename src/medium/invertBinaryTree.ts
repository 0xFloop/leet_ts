
class TreeNode {
	val: number
	left: TreeNode | undefined
	right: TreeNode | undefined

	constructor(v:number, l?: TreeNode, r?: TreeNode) {
		this.val = v;
		this.left = l;
		this.right = r;
	}
	invert() {
		if(!this.left && !this.right){
			return;
		}
		let tmp = this.left;
		this.left = this.right;
		this.right = tmp;

		if(this.left){
			this.left.invert();
		}
		if(this.right){
			this.right.invert();
		}
	}
}

export function solve(): void {
	let head = new TreeNode(1,new TreeNode(2,new TreeNode(4),new TreeNode(5)),new TreeNode(3, new TreeNode(6)))

	console.log(JSON.stringify(head, null, 4));
	head.invert();
	console.log(JSON.stringify(head, null, 4));
}
