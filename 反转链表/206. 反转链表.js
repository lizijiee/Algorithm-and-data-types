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
    let newList = head; // 克隆整个树
    let i = 0;

    function ListNode(oldList) {
        /* 
            此处用于递归;
            上一个节点prev,下一个阶段next;
        */
        prev = oldList.val;
        // console.log("oldList:", oldList, head)
        if (oldList.next) {
            next = oldList.next;
            oldList.val = oldList.next.val; // 下一个节点给上一个节点
            oldList.next.val = prev;
            ListNode(next);
            return oldList
        }
        console.log("检查是否跳出循环！！！！！")
    }

    while (i < 4) {
        console.log(i)
        ListNode(newList);
    }
    return newList
};
console.log(reverseList(list))