/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let lenA = getLength(headA);
    let lenB = getLength(headB);

    if (!lenA || !lenB) {
        return null;
    }

    if (lenA !== lenB) {
        let headLong = lenA > lenB ? headA : headB;
        let headShort = lenA > lenB ? headB : headA;
        let delta = Math.abs(lenA - lenB);

        while(delta > 0) {
            headLong = headLong.next;
            delta--;
        }
        // now head is the same position as headB
        return findCommonNode(headLong, headShort);
    } else {
        return findCommonNode(headA, headB);
    }
};

const getLength = (head) => {
    let current = head;
    let count = 0;
    while(current) {
        current = current.next;
        count += 1;
    }
    return count;
};

const findCommonNode = (head1, head2) => {
    let headA = head1;
    let headB = head2;
    while(headA) {
        if (headA === headB) {
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }
    return null;
};


// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// let n1 = new ListNode(1);
// let n2 = new ListNode(2);
// let n3 = new ListNode(3);
// let n4 = new ListNode(4);
// let n5 = new ListNode(5);
// let n6 = new ListNode(6);
// let n7 = new ListNode(7);


// n2.next = n3;
// n3.next = n4;
// n4.next = n5;
// n5.next = n6;
// n6.next = n7;

// console.log(getIntersectionNode(n1, n2));