(function(){
	'use strict';

	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var toBuy = this;
		
		toBuy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

		toBuy.buyItem = function (itemIndex) {
			ShoppingListCheckOffService.buyItem(itemIndex);
		}

	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var alreadyBought = this;

		alreadyBought.itemsBought = ShoppingListCheckOffService.getItemsBought();

	}

	function ShoppingListCheckOffService(){
		var service = this;

		service.itemsToBuy = []; 
		service.itemsToBuy.push({ name: "cookies", quantity: 10 } ); 
		service.itemsToBuy.push({ name: "sandwiches", quantity: 5 } );
		service.itemsToBuy.push({ name: "cans of coke", quantity: 4 } );
		service.itemsToBuy.push({ name: "bags of chips", quantity: 2 } );
		service.itemsToBuy.push({ name: "trash bags", quantity: 8 } );;

		service.itemsBought = [];

		service.getItemsToBuy = function(){
			return service.itemsToBuy;
		}

		service.getItemsBought = function(){
			return service.itemsBought;
		}

		service.buyItem = function(itemIdex){
			service.itemsBought.push(service.itemsToBuy[itemIdex]);
			service.itemsToBuy.splice(itemIdex,1);
		}

	}


})();