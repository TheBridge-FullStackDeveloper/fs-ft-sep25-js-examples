// This problem was asked by Apple.
// A fixed point in an array is an element whose value is equal to its index. Given
// a sorted array of distinct elements, return a fixed point, if one exists.
// Otherwise, return False.
// For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you
// should return False

function findFixedPoint(apple){
    for(let i=0; i<apple.length; i++){ //recorremos el bucle
        if(i == apple[i]){ // si la posición es igual al número
            return i;
        }
    }
    return false;
}

console.log(findFixedPoint([44,3434,21,3,22]));



