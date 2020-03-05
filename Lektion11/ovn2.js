function Car(brand, year, colour) {
    this.brand = brand;
    this.year = year;
    this.colour = colour;
}

let ovn2 = angular.module("ovn2", []);
ovn2.controller("carCtrl", function($scope) {
    const volvo = new Car("Volvo", 2001, "röd");
    const jaguar = new Car("Jaguar", 2018, "svart");
    const vw = new Car("Volkswagen", 1970, "blå");
    $scope.cars = [volvo, jaguar, vw];
});