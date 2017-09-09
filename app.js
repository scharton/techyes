(function () {
    'use strict';
    var app = angular.module('app', ['angularMoment']);

    //https://github.com/urish/angular-moment
    app.controller('ctrl', function ($http, $log, moment) {
        var vm = this;
        vm.headtitle = 'TechYes!!'
        vm.timecheck = moment().hour(8).minute(0).second(0).toDate();


        $http.get('models/misfits.json').then(function(result){
            //$log.log(result.data.records);
            vm.misfits = result.data.records;
        });

        vm.missions2 = [];
        $http.get('models/missions.json').then(function(result){
            //$log.log(result.data.records);
            vm.missions = result.data.records;
            angular.forEach(result.data.records, function(record){
                var item = {};
                item.name = record.fields["Name"];
                item.when = moment(record.fields["When"]).format("MM/DD/YYYY HH:mm");
                vm.missions2.push(item);

            })
        });

    });

})();
