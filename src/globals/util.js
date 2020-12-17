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