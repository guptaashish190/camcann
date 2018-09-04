module.exports = {
    checkTimeBetweenBracket: (time1, time2, time) => {

    },
    subtractTimefromTime:  (time, subtractFromTime) => {
        // Time Format 
        // {
        //     date: [year, month, day],
        //     time: [hour, min, sec],
        // }
        const endTime = new Date(subtractFromTime);
        const duration = time;
        endTime.setMinutes(endTime.getMinutes() - duration);
        return(endTime);

    },
    extractTimeFromString: (timeString) => {
        const [ date, time ] = timeString.split(' ');
        const [year, month, day] = date.split('-');
        const [hours, minutes, seconds] = time.split(':');

        return (new Date(Number(year), Number(month), Number(day), Number(hours), Number(minutes), Number(seconds), 0));
    },

    getTimeStringForCheck: (date) => {
        return(`${date.getHours()},${date.getMinutes()},${date.getSeconds()}`);
    } 
}