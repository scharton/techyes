(function () {
    'use strict';
    var app = angular.module('app', []);
    app.controller('ctrl', function ($http, $log) {
        var vm = this;
        vm.headtitle = 'TechYes!!'

        $http.get('models/misfits.json').then(function(result){
            //$log.log(result.data.records);
            vm.misfits = result.data.records;
        });

        $http.get('models/missions.json').then(function(result){
            //$log.log(result.data.records);
            vm.missions = result.data.records;
        });

    });

})();
