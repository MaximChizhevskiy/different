function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || minutesTotal % 1 !== 0){
        return "Ошибка, проверьте данные";
    }
    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours){
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:        
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}