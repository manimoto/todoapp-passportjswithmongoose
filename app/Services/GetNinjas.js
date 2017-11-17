var App;
(function (App) {
    var Services;
    (function (Services) {
        'use strict';
        var GetNinjas = /** @class */ (function () {
            function GetNinjas($http) {
                this.$http = $http;
                this.allNinja = $http.get('app/data/data.json').then(onSuccess, onError);
                function onSuccess(response) {
                    //console.log(12, response.data);
                    return response.data;
                }
                ;
                function onError(response) {
                    alert("Error");
                }
                ;
            }
            GetNinjas.$inject = ['$http'];
            return GetNinjas;
        }());
        Services.GetNinjas = GetNinjas;
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
app2.service('getNinjas', App.Services.GetNinjas);

//# sourceMappingURL=../source-maps/Services/GetNinjas.js.map
