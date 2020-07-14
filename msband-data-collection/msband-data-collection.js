exports.requiredPlugins = ['cordova-plugin-msband.www'];

exports.connect = function(successCallback, errorCallback){

        msband.initialize(successCallback, errorCallback);

        msband.connect(successCallback, errorCallback);
        // This asks for the users consent before receiving the heart rate data
        msband.consent(successCallback, errorCallback);

}

exports.subscribe = function(successCallback, errorCallback, sensor_type){

     msband.subscribe(successCallback(result), errorCallback, sensor_type);

}