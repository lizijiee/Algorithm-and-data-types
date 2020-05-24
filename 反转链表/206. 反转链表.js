const list = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    },
};
let newList = {};

let reverseList = function (head) {
    console.log(111, head)
    let newList = null; // 克隆整个树
    while (head) {
        next = head.next;
        head.next = newList; // head.next结果 => {val:1,next:null}
        newList = head;
        head = next;
    }
    return newList
};

console.log(reverseList(list))

/*
 let reverseList = function (head) {
    let newList = null; // 克隆整个树
    function ListNode(oldList) {
        if (oldList == null) {
            return
        }
        next = oldList.next; // 此时val是1
        oldList.next = newList;
        newList = oldList;
        ListNode(next);
    }
    ListNode(head)
    return newList
};
 */


// function ListNode(oldList) {
//     if (oldList == null) {
//         return
//     }
//     next = oldList.next; // 此时val是1
//     oldList.next = newList;
//     newList = oldList;
//     ListNode(next);
// }
// ListNode(head)
// return newList