
module App.Directives {
    import NinjaModel = App.Models.NinjaModel;

    interface IRandomNijaScopeBindings extends ng.IScope {
            ninjas:string;
            title: string;
    }

    export class RandomNinjaDirective implements ng.IDirective {

        constructor() {
            return {
                restrict: 'E',
                scope: {
                    ninjas: '=',
                    title: '@'
                },
                templateUrl: 'app/templates/random.html',
                transclude: true,
                replace: true,
                controller: function () {
                    this.random = Math.floor(Math.random() * 4);
                    //console.log(this.random)
                },
                controllerAs: 'dir',
                bindToController: true
                //it can be like below but if you use this directive at multiple places then all the places have no real isolated scope reference to each other 
                // bindToController:{
                // ninjas: '=',
                // title: '@'
                //}

            };

        }
    }

}

app2.directive('randomNinja', [App.Directives.RandomNinjaDirective]);





//Ang 2
// module App.Directives {
    
    
//         interface IRandomNijaScopeBindings extends ng.IScope {
//             ninjas: string;
//             title: string;
//         }
    
//         export class RandomNinjaDirective implements ng.IDirective {
//             public random:number;
//             public templateUrl = 'app/templates/random.html';
//             public restrict = 'E';
//             public scope: { [key: string]: string } = {
//                 ninjas: '=',
//                 title: '@'
//             }
    
//             public transclude = true;
//             public replace = true;
//             public controller = RandomNinjaDirectiveController;
//             public controllerAs: string = "dir";
//             public bindToController = true;
//             public link: (scope: IRandomNijaScopeBindings, element: ng.IAugmentedJQuery, attr: ng.IAttributes) => void;
//             static factory(): any {
//                     /*@ngInject*/                
//                     var directive = () => {
//                         console.log(new RandomNinjaDirective());
//                     new RandomNinjaDirective();
    
//                 };
//                 return directive;
//             }
    
//         }
    
//         export class RandomNinjaDirectiveController {
//             // static $inject = ["$scope","$element","$attr"];
           
//             constructor(protected scope: IRandomNijaScopeBindings,
//                 protected element: ng.IAugmentedJQuery,
//                 protected attr: ng.IAttributes , public random: number) {
//                 this.random = Math.floor(Math.random() * 4);
//                 console.log(this.random)
            
//             }
    
//         }
    
//     }
    
//     app2.directive('randomNinja', App.Directives.RandomNinjaDirective.factory());
    
    