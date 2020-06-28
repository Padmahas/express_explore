const env_var_global_scope = process.env.TEST_ENV_VAR_1

function SampleService() {
    this.initilizeFunctions = function () {
        console.log("Inside SampleService, host URL -> " + process.env.HOST_URL);
        sampleFunction();
    }
    function sampleFunction() {
        console.log("Global variable = " + env_var_global_scope);
        console.log("Local variable = " + process.env.TEST_ENV_VAR_2);
    }
}

module.exports = new SampleService();