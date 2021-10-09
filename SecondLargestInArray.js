// node SecondLargestInArray
function secondLargestElement(arr) {
    var max = -100
    var secondMax = -100
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max
            max = arr[i]
        }
        else {
            if (arr[i] > secondMax && max != arr[i]) {
                secondMax = arr[i]
            }
        }
    }
    console.log("second Maximum element", secondMax)
}
secondLargestElement([-1, -8, 10, , 12, 11, 8, 9, 12])