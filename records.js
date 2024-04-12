window.answers = {
    colour: '',
    fruit: '',
    season: '',
    food: '',
    dessert: '',
    hair: '',
    singer: '',
    country: '',
    princess: '',
}

window.superpowerTally = {
    shapeShifting: 0,
    mindReading: 0,
    superStrength: 0,
    teleportation: 0,
}


const updateAnswer = (answerName, answerValue, superpower) => {
    answers[answerName] = answerValue;
    superpowerTally[superpower] = superpowerTally[superpower] + 1;
    console.log('answers', answers)
    console.log('superpower', superpower, 'tally', superpowerTally[superpower])
}