angular.module('services', [])

.factory('dateFacts', ['$http', function($http) {
  function calcBDay(birth_year, birth_month, birth_day) {
    var today_date = new Date();
    var today_year = today_date.getFullYear();
    var today_month = today_date.getMonth();
    var today_day = today_date.getDate();
    var age = today_year - birth_year;
    if (today_month < (birth_month - 1)) {
        age--;
    }
    if (((birth_month - 1) == today_month) && (today_day < birth_day)) {
        age--;
    }
    return age;
  }

  function getFact(month, day) {
    return $http({
      method: 'GET',
      url: 'http://numbersapi.com/' + month + '/' + day + '/date',
    }).then(function(result) {
      return result.data;
    });
  }

  return {
    calcBDay: calcBDay,
    getFact: getFact
  }
}]);