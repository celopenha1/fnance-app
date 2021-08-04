"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DateUtil {
}
exports.default = DateUtil;
DateUtil.parseDate = (date) => {
    function addZero(value) {
        const valueString = value.toString();
        if (valueString.length === 2) {
            return valueString;
        }
        else {
            return `0${valueString}`; // adiciona zero caso número tiver 1 algarismo apenas
        }
    }
    const dateObj = new Date(date);
    const day = dateObj.getDay();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();
    const hour = dateObj.getHours();
    const minute = dateObj.getMinutes();
    const newDate = `${addZero(day)}/${addZero(month)}/${year}`;
    const newTime = `${addZero(hour)}:${addZero(minute)}`;
    return `${newDate} às ${newTime}`;
};
