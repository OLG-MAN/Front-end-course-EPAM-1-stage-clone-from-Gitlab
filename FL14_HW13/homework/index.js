// Task 1
const mlSecYear = 31557600000
const getAge = bDay => Math.floor((new Date() - bDay.getTime()) / mlSecYear)


// Task 2
function getWeekDay(d) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[d.getDay()]
}


//Task 3
function getProgrammersDay(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        let date = new Date(year, 8, 12);
        let dayWeek = getWeekDay(date);
        let result = '12 Sep,' + year + ' ' + dayWeek;
        return result;
    } else {
        let date = new Date(year, 8, 13);
        let dayWeek = getWeekDay(date);
        let result = '13 Sep,' + year + ' ' + dayWeek;
        return result;
    }
}


//Task 4
function howFarIs(day) {
    day = day[0].toUpperCase() + day.slice(1).toLowerCase();
    const Days = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    }
    let now = new Date().getDay()
    console.log(now)
    if (now === Days[day]) {
        return `Hey, today is ${day} =);`
    }
    if (now < Days[day]) {
        return `It's ${Days[day]-now} day(s) left till ${day}.`
    }
    if (now > Days[day]) {
        return `It's ${Days['Sunday']-(now-Days[day])} day(s) left till ${day}.`
    }
}

//Task 5
function isValidIdentifier(string) {
    return /^[a-z][a-zA-Z0-9_$]*$/.test(string)
}

//Task 6 
const capitalize = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase())

//Task 7 
function isValidAudioFile(string) {
    return /^(?=.*?[a-z])(?=.*?[A-Z])[a-zA-Z]+(.mp3|.flac|.alac|.aac)$/.test(string)
}

//Task 8
function getHexColors(testStr) {
    return testStr.match(/(?:#)[0-9a-f]{6}|(?:#)[0-9a-f]{3}/ig)
}

//Task 9 
function isValidPassword(string) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/g.test(string)
}

//Task 10 
function addThousandsSeparators(val) {
    val = val.toString()
    let pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(val)) {
        val = val.replace(pattern, '$1,$2');
    }
    return val;
}