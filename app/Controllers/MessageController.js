var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var MessageController = /** @class */ (function () {
            function MessageController(message) {
                this.message = message;
                this.message = message; // this is not required as it will be automatically added in js
                console.log(this.message);
            }
            MessageController.$inject = ['message'];
            return MessageController;
        }());
        Controllers.MessageController = MessageController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
app2.controller('MessageController', App.Controllers.MessageController);

//# sourceMappingURL=../source-maps/Controllers/MessageController.js.map
