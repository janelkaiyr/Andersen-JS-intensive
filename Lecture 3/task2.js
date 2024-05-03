

const originalAlert = window.alert;
const originalConfirm = window.confirm;
const originalPrompt = window.prompt;


window.alert = function (message,) {
    const result = originalConfirm(message);
    return result;
};

window.confirm = function (message, defaultValue) {
    const result = originalPrompt(message, defaultValue);
    return result;
};

window.prompt = function (message) {
    const result = originalAlert(message);
    return result;
};

alert("Alert");
confirm('Confirm', 12)
prompt('Promt')
