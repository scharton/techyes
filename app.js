(function () {
    'use strict';
    var app = angular.module('app', ['angularMoment']);

    //https://github.com/urish/angular-moment
    app.controller('ctrl', function ($http, $log, moment) {
        var vm = this;
        vm.headtitle = 'TechYes!!'
        vm.timecheck = moment().hour(8).minute(0).second(0).toDate();

        vm.misfits = [];
        vm.missions = [];
        $http.get('models/misfits.json').then(function(result){
            var misfits = result.data.records;
            //$log.log(result.data.records);
            angular.forEach(result.data.records, function(misfit) {
                var item = {};
                item.name = misfit.fields.Slackr;
                // $log.log(item);
                vm.misfits.push(item);
            })
            // vm.misfits = result.data.records;
            $http.get('models/missions.json').then(function(result) {
                angular.forEach(result.data.records, function(mission) {
                    var item = {};
                    item.name = mission.fields.Name;
                    item.when = moment(mission.fields.When).format("MM/DD/YYYY HH:mm");
                    item.yes = [];
                    angular.forEach(mission.fields.Yes, function(missionYes) {
                        angular.forEach(misfits, function(misfit){
                            if (misfit.id == missionYes) {
                               item.yes.push(misfit.fields.Slackr);
                            }
                        });
                    });
                    item.no = [];
                    angular.forEach(mission.fields.No, function(missionNo) {
                        angular.forEach(misfits, function(misfit){
                            if (misfit.id == missionNo) {
                                item.no.push(misfit.fields.Slackr);
                            }
                        });
                    });
                    item.yeahno = [];
                    angular.forEach(mission.fields.YeahNo, function(missionYeahNo) {
                        angular.forEach(misfits, function(misfit){
                            if (misfit.id == missionYeahNo) {
                                item.yeahno.push(misfit.fields.Slackr);
                            }
                        });
                    });
                    vm.missions.push(item);
                })
            });
        });

    });

})();
