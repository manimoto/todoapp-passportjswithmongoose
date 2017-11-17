var App;
(function (App) {
    var Services;
    (function (Services) {
        'use strict';
        var MessageService = /** @class */ (function () {
            function MessageService($q) {
                return {
                    getMessage: function () {
                        return $q.when("Hello World!");
                    }
                };
            }
            MessageService.$inject = ['$q'];
            return MessageService;
        }());
        Services.MessageService = MessageService;
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
app2.service("messageService", App.Services.MessageService);

//# sourceMappingURL=../source-maps/Services/MessageService.js.map
