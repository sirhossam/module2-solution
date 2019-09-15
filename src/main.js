(function() {
  'use strict';

  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    let buy = this;
    buy.empty = false;
    buy.items = ShoppingListCheckOffService.tobuyItems;
    buy.brought = function($index) {
      ShoppingListCheckOffService.brought($index);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    let brought = this;
    brought.empty = false;
    brought.items = ShoppingListCheckOffService.broughtItems;
  }

  // service
  function ShoppingListCheckOffService() {
    let fn = this;
    fn.tobuyItems = [
      { Q: '2 kg', N: 'milk' },
      { Q: '5 bottles', N: 'water' },
      { Q: '2', N: ' Chocolate Bar' },
      { Q: '1kg', N: 'sugar' },
      { Q: '250 g', N: 'cream' }
    ];
    fn.broughtItems = [];
    fn.brought = function($index) {
      fn.broughtItems.push(fn.tobuyItems[$index]);
      fn.tobuyItems.splice($index, 1);
      
    };
  }
})();
