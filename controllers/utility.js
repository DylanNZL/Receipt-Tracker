// Function that checks all values of the object passed to it have been instantiated
function checkProperties(obj) {
    for (let key in obj) {
        if (obj[key] === null || obj[key] === undefined || obj[key] === "")
            return "Value " + key + " missing, make sure you entered a value";
    }
    return true;
}

exports.checkProperties = checkProperties;