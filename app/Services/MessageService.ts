module App.Services {
    'use strict';
    interface IMessageService {
        getMessage: () => any;
    }
    export class MessageService {
        static $inject = ['$q'];
        public getMessage: () => any;
        constructor($q) {
            return {
                getMessage: function () {
                    return $q.when("Hello World!");
                }
            };
        }
    }
}

app2.service("messageService", App.Services.MessageService);