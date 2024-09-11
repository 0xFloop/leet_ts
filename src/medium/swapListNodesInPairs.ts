
class ListNode {
	val: number
	next: ListNode | undefined
	constructor(v?: number, next?: ListNode) {
		this.val = v? v:0;
		this.next = next;
	}
}
export function solve(): ListNode | null  {
	//[2,5,3,4,6,2,2]
	let head = new ListNode(2, new ListNode(5,new ListNode(3, new ListNode(4, new ListNode(6,new ListNode(2,new ListNode(2, undefined)))))));

	if(!head || !head.next) {
		return head;
	}

	let newHead:ListNode | null = null;

	let curr:ListNode | undefined = head;

	let prev:ListNode | undefined = undefined;

	while(curr && curr.next) {
		let nextPair: ListNode | undefined = curr.next.next;
		let tmp:ListNode = curr.next;

		tmp.next = curr;
		curr.next = nextPair;


		if(!prev) {
			newHead = tmp;
		}	else {
			prev.next = tmp;
		}	

		prev = curr;
		curr = nextPair;
	}
	console.log(JSON.stringify(newHead));

	return newHead;

}
