module.exports = {
    formatDateString(date) {
        return `${date.getDate()}-${(date.getMonth() + 1)}-${date.getFullYear()}`;
    },
    formatTimeString(date) {
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    },
};