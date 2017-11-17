module App.Controllers {
    interface IContactControllerScope extends ng.IScope {
        contCntrl: ContactController;
    }

    interface IContactControllerBindings {
        a :string;
    }

    interface IContactController extends IContactControllerBindings{
        sendMessage: ($location:any) => void;
    }

    export class ContactController implements IContactController{
        public a: string;
        sendMessage($location) {
            console.log(this.a);
            this.a = "Succesfully Sent";
            $location.path('/contact-success');
        }
        static $inject = ['$location'];
        constructor() {
            this.a = "NOT Sent";
        }
    }

}

app2.controller('ContactController', App.Controllers.ContactController);
