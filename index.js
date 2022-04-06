// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
    


function findMatching(array, name) {
    return array.filter(findName)
    function findName(element) {
        return element.toLowerCase() === name.toLowerCase();
    }
}


function fuzzyMatch(array, letters) {
    return (array.filter(findFirstLetter))
    function findFirstLetter(element) {
        if (element.substring(0, letters.length) === letters) {
            return element;
        }
    }
}

function matchName(array, string) {
    return array.filter(ele => ele.name === string);
}






