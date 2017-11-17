var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var NinjaController = /** @class */ (function () {
            function NinjaController($http, getNinjasData) {
                this.ninjas = [];
                this.name = "Manish sharma";
                //console.log(1, getNinjasData)
                this.ninjas = getNinjasData;
            }
            NinjaController.prototype.removeAll = function () {
                this.ninjas = [];
            };
            ;
            NinjaController.prototype.removeNinja = function (ninja) {
                var removedNinja = this.ninjas.indexOf(ninja);
                //console.log(removedNinja);
                this.ninjas.splice(removedNinja, 1);
            };
            ;
            NinjaController.prototype.addNinja = function () {
                this.ninjas.push({
                    name: this.newninja.name,
                    belt: this.newninja.belt,
                    rate: Number(this.newninja.rate),
                    available: true
                });
                this.newninja.name = "",
                    this.newninja.belt = "",
                    this.newninja.rate = 0;
            };
            ;
            NinjaController.$inject = ['$http', 'getNinjasData'];
            return NinjaController;
        }());
        Controllers.NinjaController = NinjaController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
app2.controller('NinjaController', App.Controllers.NinjaController);

//# sourceMappingURL=../source-maps/Controllers/NinjaController.js.map
