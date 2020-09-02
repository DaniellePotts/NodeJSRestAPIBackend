class DateUtils{
    static formatDateString(date){
        return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    }
}

module.exports = {
    DateUtils
}