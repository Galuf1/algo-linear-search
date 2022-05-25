// const arrayToSearchThrough = [];
// for (let i = 1; i <= 1000; i++) {
//     arrayToSearchThrough.push(i);
// }

exports.linearSearch = function(valueToFind, arrayToSearchThrough) { 
    const counter = []
    for (let i = 0; i <= arrayToSearchThrough.length; i++){
        if (arrayToSearchThrough[i] === valueToFind){
            counter.push(i)
        }
    }
    
    if (counter.length === 0) {
        return undefined
    } else {
        return counter[0]
    }
};

