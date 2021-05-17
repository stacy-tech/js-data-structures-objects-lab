// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

// this function takes in a driver and key object
// the key/value pair was deleted for the key that was passed from the driver object
// the driver was not mutated
function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver
}

// function takes in a driver and key object
// the key/value was deleted 
// the driver passed in was mutated 
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}