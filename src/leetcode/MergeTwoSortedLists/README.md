```
var mergeTwoLists = function(list1, list2, level = 0) {
  console.log("")
  console.log("LEVEL: ", level)
    console.log("L1: ", list1 ? list1.val : "")
    console.log("L2: ", list2 ? list2.val : "")

    if (list1 == null) {
      console.log("L1 null RETURN L2 val: ", list2 ? list2.val : "")
      return list2;
    } else if (list2  === null) {
      console.log("L2 null RETURN L1 val: ", list1 ? list1.val : "")
      return list1;
    } else if (list1.val < list2.val) {
      console.log("RECURSE ON L1.next and L2")
      list1.next = mergeTwoLists(list1.next, list2, level + 1);
      console.log("RETURN L1 val: ", list1.val)
      return list1;
    } else {
      console.log("RECURSE ON L1 and L2.next")
      list2.next = mergeTwoLists(list1, list2.next, level + 1)
      console.log("RETURN L2 val: ", list2.val)
      return list2;
    }
};
```
