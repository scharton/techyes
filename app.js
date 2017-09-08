(function () {
    'use strict';
    var app = angular.module('app', []);
    app.controller('ctrl', function (strings, beermenu, $http, $log) {
        var vm = this;
        vm.headtitle = strings.headtitle;
        vm.name = strings.name;
        vm.address = strings.address;
        vm.phone = strings.phone;
        vm.email = strings.email;
        vm.facebook = strings.facebook;
        vm.instagram = strings.instagram;
        vm.gatrackingid = strings.gatrackingid;
        vm.hours = strings.hours;
        vm.beermenu = beermenu;

        var beerlist;
        $http.get('models/misfits.json').then(function(result){
            //$log.log(result.data.records);
            beerlist = result.data.records;
            vm.beers = beerlist;
        });

        var findus;
        $http.get('models/missions.json').then(function(result){
            //$log.log(result.data.records);
            findus = result.data.records;
            vm.findus = findus;
        });

    });

})();
