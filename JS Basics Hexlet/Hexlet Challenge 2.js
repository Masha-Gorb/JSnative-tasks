const formattedTime = (num) => {
    let hours = Math.floor(num/60);
    let minutes = num%60;

    if(hours>=24) {
        hours = hours-24;
    }
    if(hours<10) {
        hours = `0${hours}`
    }
    if(minutes<10) {
        minutes = `0${minutes}`
    }

    return `${hours}:${minutes}`
}

console.log(formattedTime(65))