var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var ContactController = /** @class */ (function () {
            function ContactController() {
                this.a = "NOT Sent";
            }
            ContactController.prototype.sendMessage = function ($location) {
                console.log(this.a);
                this.a = "Succesfully Sent";
                $location.path('/contact-success');
            };
            ContactController.$inject = ['$location'];
            return ContactController;
        }());
        Controllers.ContactController = ContactController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
app2.controller('ContactController', App.Controllers.ContactController);

//# sourceMappingURL=../source-maps/Controllers/ContactController.js.map
