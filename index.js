const { arrayContaining } = require("expect");

function findMatching(array, string) {
   return  array.filter(function(element, index, arr){
        return element.toLowerCase() === string.toLowerCase()
    })

}

function fuzzyMatch(array, string) {
    return array.filter(function(element, index) {
        return element.startsWith(string);
    })
}

function matchName(array, string) {
    return array.filter(function(element, index) {
        return element.name.toLowerCase() === string.toLowerCase()
    })
}





