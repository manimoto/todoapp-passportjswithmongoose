module App.Controllers {
    import NinjaModel = App.Models.NinjaModel;

    interface INinjaBindings {
        name: string;
        ninjas: NinjaModel[];
        newninja: NinjaModel;
    }

    interface INinjaController extends INinjaBindings {
        removeAll(): void;
        removeNinja(ninja: NinjaModel): void;
        addNinja(): void;
    }

    interface INinjaControllerScope extends ng.IScope {
        ninjaCntrl: NinjaController;
    }

    export class NinjaController implements INinjaController {

        public name: string;
        public ninjas: any[] = [];
        public newninja: NinjaModel;

        removeAll(): void {
            this.ninjas = [];
        };

        removeNinja(ninja: NinjaModel): void {
            var removedNinja: number = this.ninjas.indexOf(ninja);
            //console.log(removedNinja);
            this.ninjas.splice(removedNinja, 1);
        };

        addNinja(): void {
            this.ninjas.push({
                name: this.newninja.name,
                belt: this.newninja.belt,
                rate: Number(this.newninja.rate),
                available: true
            });
            this.newninja.name = "",
                this.newninja.belt = "",
                this.newninja.rate = 0
        };


        static $inject = ['$http', 'getNinjasData'];
        constructor($http, getNinjasData) {
            this.name = "Manish sharma";
            //console.log(1, getNinjasData)
            this.ninjas = getNinjasData;
        }
    }
}
app2.controller('NinjaController', App.Controllers.NinjaController);