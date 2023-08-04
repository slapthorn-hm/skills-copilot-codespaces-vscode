function calculatetimebetweentwodatetimes(start, end){
    if (start > end) return false;
    var start = new Date(start);
    var end = new Date(end);
    var diff = end - start;
    var days = Math.floor(diff / 1000 / 60 / (60 * 24));
    var hours = Math.floor(diff / 1000 / 60 / 60);
    var minutes = Math.floor(diff / 1000 / 60);
    var seconds = Math.floor(diff / 1000);
    return {days: days, hours: hours, minutes: minutes, seconds: seconds};
}

calculatetimebetweentwodatetimes('2019-01-01 00:00:00', '2019-01-01 00:00:01');