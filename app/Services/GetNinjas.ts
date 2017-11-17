module App.Services {
    'use strict';
    import NinjaModel = App.Models.NinjaModel;

    interface IGetNinjas {
        allNinja: ng.IPromise<NinjaModel[]>;
    }
    export class GetNinjas implements IGetNinjas {
        public allNinja: ng.IPromise<NinjaModel[]>;
        static $inject = ['$http'];
        constructor(private $http: ng.IHttpService) {

            this.allNinja = $http.get('app/data/data.json').then(onSuccess, onError);
            function onSuccess(response: ng.IHttpPromiseCallbackArg<NinjaModel[]>): any {
                //console.log(12, response.data);
                return <NinjaModel[]>response.data;
            };

            function onError(response) {
                alert("Error");
            };
        }
    }

}

app2.service('getNinjas', App.Services.GetNinjas);