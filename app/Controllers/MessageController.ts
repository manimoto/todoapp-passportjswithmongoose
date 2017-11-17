module App.Controllers {
    import msgService = App.Services.MessageService;

    interface IMessageControllerScope extends ng.IScope {
        msg: MessageController;
    }

    export class MessageController {
        static $inject = ['message'];
        constructor(private message: msgService) {
            this.message = message; // this is not required as it will be automatically added in js
            console.log(this.message);
        }


    }
}
app2.controller('MessageController', App.Controllers.MessageController);