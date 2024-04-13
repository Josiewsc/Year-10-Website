const updateAnswer = (superpower) => {
    const superpowerTally = localStorage.getItem(superpower)
    const newValue = Number(superpowerTally) + 1
    localStorage.setItem(superpower, newValue);
}

const findUsersPower = (superpower) => {
    updateAnswer(superpower);
    const superPowers = {
        shapeShifting: localStorage.getItem('shapeShifting'),
        mindReading:  localStorage.getItem('mindReading'),
        superStrength : localStorage.getItem('superStrength'),
        teleportation :localStorage.getItem('teleportation'),
    }

    const yourSuperpower = Object.keys(superPowers)
                     .reduce(function(keya, keyb) {
                         return superPowers[keya] > superPowers[keyb] ? keya : keyb;
                     });

     if(yourSuperpower === 'shapeShifting') {

        window.location.href = 'http://127.0.0.1:5500/shapeshifting.html'
     }      
     
     if(yourSuperpower === 'superStrength') {
        window.location.href = 'http://127.0.0.1:5500/super-strength.html'
     }   

     if(yourSuperpower === 'teleportation') {
        window.location.href = 'http://127.0.0.1:5500/teleportation.html'
     }   

     if(yourSuperpower === 'mindReading') {
        window.location.href = 'http://127.0.0.1:5500/mind-reading.html'
     }   
}