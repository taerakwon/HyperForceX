var managers;
(function (managers) {
    var Consumption = (function () {
        function Consumption() {
        }
        //PUBLIC METHOD ++++++++++++++++++++++++++++++
        Consumption.prototype.fuelCalculation = function () {
            jetStatus.fuelAmount--;
        };
        return Consumption;
    })();
    managers.Consumption = Consumption;
})(managers || (managers = {}));
//# sourceMappingURL=consumption.js.map