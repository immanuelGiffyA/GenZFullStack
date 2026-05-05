function printNum(num) {
    for (let i = 0; i <= num; i++) {
        console.log(i)
    }

} printNum(10)


const oddOrEven = num => num % 2 === 0 ? "even" : "odd"
console.log(oddOrEven(4))


function reverse(str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverse("hello"))



function countVowels(char) {
    let vowels = "AEIOUaeiou"
    let count = 0
    for (let i = 0; i <= char.length; i++) {
        if (vowels.includes(char[i])) {
                count++;
        }

    }
        return count;

}
console.log(countVowels("apple"))


function largestNum (arr){
    let largest = arr[0]
   for (let i=1; i<arr.length; i++){
    if (arr[i]> largest){
        largest=arr[i]
    }
   }
   return largest
}
console.log(largestNum(56,55))