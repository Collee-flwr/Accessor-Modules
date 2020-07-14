exports.requiredPlugins = ['cordova-plugin-wearos.www'];

exports.connect = function(successCallback, errorCallback){

     wearos.initialize(successCallback, errorCallback);

     wearos.connect(successCallback, errorCallback);

}

exports.subscribe = function(successCallback, errorCallback, sensor_type){

     wearos.subscribe(successCallback(result), errorCallback, sensor_type);

}