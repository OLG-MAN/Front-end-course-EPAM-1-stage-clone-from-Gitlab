const num2 = 2

function heapSort(arr) {
    let size = arr.length

    for (let i = Math.floor(size / num2 - 1); i >= 0; i--) {
        heapify(arr, size, i)
    }
    for (let i = size - 1; i >= 0; i--) {
        let temp = arr[0]
        arr[0] = arr[i]
        arr[i] = temp

        heapify(arr, i, 0)
    }
    return arr
}

function heapify(array, size, i) {
    let max = i
    let left = num2 * i + 1
    let right = num2 * i + num2

    if (left < size && array[left] > array[max]) {
        max = left
    }
    if (right < size && array[right] > array[max]) {
        max = right
    }
    if (max !== i) {
        let temp = array[i]
        array[i] = array[max]
        array[max] = temp

        heapify(array, size, max)
    }
}