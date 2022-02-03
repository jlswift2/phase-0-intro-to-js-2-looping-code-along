
function writeCards(names, event) {
    const newArray= []
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArray 
}




function countDown(int) {
    let counter = int
    while(counter >= 0){
    console.log(counter)
    counter--
    }
}

