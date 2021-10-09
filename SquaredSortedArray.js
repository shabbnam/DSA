function squaredSortedArray(arr) {

    var first = 0;
    var last = arr.length - 1
    var output = []
    while (first < last) {
        if (Math.abs(arr[first]) > arr[last]) {
            output.unshift(arr[first] * arr[first])
            first++
        }
        else {
            output.unshift(arr[last] * arr[last])
            last--
        }
    }
    output.unshift(arr[first] * arr[first])
    console.log(output)

}
squaredSortedArray([-7, -2, 1, 3])
squaredSortedArray([-8, -4, -3, 1, 3, 5])