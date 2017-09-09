(function () {
    'use strict';
    var app = angular.module('app', []);
    app.controller('ctrl', function ($http, $log) {
        var vm = this;
        vm.headtitle = 'TechYes!!'

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
