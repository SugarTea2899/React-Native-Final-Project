export const formatMoney = (price) => {
    const priceStr = `${price}`;
    let result = '';
    let count = 0;
    for (let i = priceStr.length - 1; i >= 0; i--){
        result = priceStr[i] + result;
        count++;
        if (count === 3 && i !== 0){
            result = '.' + result;
            count = 0;
        }
    }

    return result + ' VNĐ';
}

export const getAverageStar = (course) => {
    let res = (course.formalityPoint + course.contentPoint + course.presentationPoint) / 3;
    res = Math.round(res);
    return res % 6;
}

export const convertHour = (hour) => {
    let min = Math.floor(hour * 3600 / 60);
    let sec = Math.round((hour * 3600) % 60);
    
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;
    return `${min}:${sec}`;
}

export const convertToDateTime = (dateStr) => {
    if (dateStr === 'N/A') return 'N/A';
    const a = new Date(dateStr);

    return `${a.toLocaleTimeString()}, ${a.toLocaleDateString()}`;
}