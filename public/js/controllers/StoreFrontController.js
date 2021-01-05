"use strict";
app.controller("StoreFrontController", ["$scope", "$route", "$filter", "$routeParams", "InventoryFactory", "ShoppingCartFactory", "PromoCodeFactory", "BlockFactory", function($scope, $route, $filter, $routeParams, InventoryFactory, ShoppingCartFactory, PromoCodeFactory, BlockFactory) {
    $scope.title = 'Order Fresh Beans to your Door!';
    $scope.last_round_test = "testing last round data binding";
    $scope.next_round_test = "testing next round data binding";
    $scope.sales_category = [
                             {name: "OrderBeans", text: "Roast Me Some New Beans ", icon: "glyphicon glyphicon-list-alt"},
                             /*{name: "Sampler", text: "A pot per day for the workweek", icon: "glyphicon glyphicon-tag"},*/
                             {name: "Subscription", text: "Automatic Frequent and Fresh!", icon: "glyphicon glyphicon-list-alt"},
                             /*{name: "Merchandise", text: "Merchandise", icon: "glyphicon glyphicon-tag"},*/
                             /*{name: "Regular", text: "This Week's Unreserved Roasts", icon: "glyphicon glyphicon-tint"},*/
                             {name: "Discount", text: "Last Week's Leftover Beans", icon: "glyphicon glyphicon-tag"}];

    $scope.special_cats = [{name: "Sampler", text: "A pot per day for the workweek", icon: "glyphicon glyphicon-tag"},
                           {name: "Subscription", text: "Automatic Frequent and Fresh!", icon: "glyphicon glyphicon-list-alt"}
                         ];
    $scope.roast_type_cats = ['1st crack (light)', '2nd crack (medium)', 'Dark (Dark)'];
    $scope.Samplers = [{sku: "S0001", name: "Sampler", msg: "A variety Pack - an economical pot a day for the workweek. Variety of roast types, Variety of origins.", price: 10.10 }];
    $scope.subscription_inventory = [{sku: "SUB001", duration: "weekly", name: "Weekly Subscription", msg: "Fresh roasted by the pound to perfection and delivered weekly!" },
                                     {sku: "SUB002", duration: "monthly", name: "Monthly Subscription", msg: "Fresh roasted by the pound to perfection and delivered monthly!" }]
    $scope.cur_alm = {};
    $scope.amt_to_buy = 10;
    $scope.loadTheBlock = async function () {
       const web3 = window.web3;
       $scope.AngelTokenjson = await BlockFactory.FetchTokenJSON();
       $scope.account = await web3.eth.getAccounts().then(function(accounts){return accounts[0];});
       $scope.display_account = $scope.account.toString().substring(0,4) + "   ....   " + $scope.account.toString().substring($scope.account.toString().length - 4);
       $scope.AngelTokenContract = await web3.eth.net.getId().then(function(net_id){
          if($scope.AngelTokenjson.networks[net_id]) {
            $scope.AngelTokenContractAddress = $scope.AngelTokenjson.networks[net_id].address;
            var c = new web3.eth.Contract($scope.AngelTokenjson.abi, $scope.AngelTokenContractAddress);
           return c;
         }else{return $window.alert("Smart contract not connected to selected network.")}
        });
       $scope.blockNum = await web3.eth.getBlockNumber();
       $scope.totalAlms = await $scope.AngelTokenContract.methods.getAlmsLength().call().then((len) => {return len;});
       $scope.CurrentAlm = await $scope.fetchCurrentAlm();
       $scope.AngelTokens = await $scope.fetchConnectedAccountsAlms();
       document.getElementById("progress").style.width = $scope.cur_alm.progress + '%';
       document.getElementById("progress").innerHTML = $scope.cur_alm.tokens_sold + ' tokens sold';
       $scope.$digest();
    }
    $scope.has_some_alms = function (account, id) {
      return $scope.AngelTokenContract.methods.balanceOf(account,id).call();
    }
    $scope.fetchCurrentAlm = async function () {
      var alm = {};
      $scope.cur_alm.mint_date = new Date("01/01/2000").toLocaleDateString('en-US', {day: '2-digit',month: '2-digit',year: 'numeric'});
      for (var i = 1; i <= $scope.totalAlms; i++) {
        await $scope.AngelTokenContract.methods.alms(i-1).call().then(async (alm) => {
          var mint_str = await web3.eth.abi.decodeParameters(['uint256', 'string', 'uint256', 'uint256', 'uint256', 'string'], alm.mint_data);
          console.log(alm.mint_data);
          var mint_date = new Date(mint_str[1].substring(0,10)).toLocaleDateString('en-US', {day: '2-digit',month: '2-digit',year: 'numeric'});
          //load this alm offering
          if(mint_date >= $scope.cur_alm.mint_date){
            $scope.cur_alm = alm;
            $scope.cur_alm.img = "./css/tokenfront.png";
            var cur_alm_uri_str = await web3.eth.abi.decodeParameters(['string', 'uint256', 'string'], alm.uri);
            $scope.cur_alm.uri = cur_alm_uri_str[0] + cur_alm_uri_str[1] + cur_alm_uri_str[2];
            $scope.cur_alm.num_issued = mint_str[0];
            $scope.cur_alm.mint_data = alm.mint_data;
            $scope.cur_alm.cost = mint_str[2];
            $scope.cur_alm.angel_coefficient = mint_str[3];
            $scope.cur_alm.status = mint_str[4];
            if(alm.status == 1) {alm.status = "waiting...";
            }else if(alm.status == 2) {alm.status = "executed...";
            }else if(alm.status == 3) {alm.status = "shipped...";
            }else if(alm.status == 4) {alm.status = "fulfilled...";
            }else{alm.status = "no status";}
            $scope.cur_alm.product = mint_str[5];
            $scope.cur_alm.Angels_Balance = await $scope.AngelTokenContract.methods.balanceOf($scope.cur_alm.owner, $scope.cur_alm.id).call();
            $scope.cur_alm.tokens_sold = $scope.cur_alm.num_issued - $scope.cur_alm.Angels_Balance;
            $scope.cur_alm.progress = $scope.cur_alm.tokens_sold/$scope.cur_alm.num_issued * 100 ;
            $scope.cur_alm.owner_display = $scope.cur_alm.owner.toString().substring(0,4) + "   ....   " + $scope.cur_alm.owner.toString().substring($scope.cur_alm.owner.toString().length - 4);
          }else{$scope.cur_alm = alm;$scope.cur_alm.img = "./css/tokenfront.png";}
        });
      }
    }
    $scope.fetchConnectedAccountsAlms = async function () {
      var alm = {};
      var AngelTokens = [];
      console.log($scope.totalAlms);
        for (var i = 1; i <= $scope.totalAlms; i++) {
          // load connected alms
          await $scope.AngelTokenContract.methods.alms(i-1).call().then(async (alm) => {
              await $scope.has_some_alms($scope.account,alm.id).then(async (bal) =>{
              // if account has alms
              if(bal){
                alm.bal = bal;
                console.log(alm.bal);
                var mint_str = await web3.eth.abi.decodeParameters(['uint256', 'string', 'uint256', 'uint256', 'uint256', 'string'], alm.mint_data);
                console.log(alm.mint_data);
                var mint_date = new Date(mint_str[1].substring(0,10)).toLocaleDateString('en-US', {day: '2-digit',month: '2-digit',  year: 'numeric'});
                console.log(mint_date);
                console.log(alm.owner);
                console.log($scope.account);
                console.log(alm.owner);
                console.log(alm.uri)

                var uri_str = await web3.eth.abi.decodeParameters(['string', 'uint256', 'string'], alm.uri);
                alm.uri = uri_str[0] + uri_str[1] + uri_str[2];

                alm.num_issued = mint_str[0];
                console.log(alm.num_issued);
                alm.mint_date = mint_str[1];
                alm.cost = mint_str[2];
                alm.angel_coefficient = mint_str[3];
                alm.status = mint_str[4];
                alm.product = mint_str[5];
                alm.owner_display = alm.owner.toString().substring(0,4) + "   ....   " + alm.owner.toString().substring(alm.owner.toString().length - 4);
              // alm.bal = await $scope.AngelTokenContract.methods.balanceOf($scope.account,alm.id).call();
                console.log(alm.bal);
                if(alm.status == 1) {alm.status = "waiting...";
                }else if(alm.status == 2) {alm.status = "executed...";
                }else if(alm.status == 3) {alm.status = "shipped...";
                }else if(alm.status == 4) {alm.status = "fulfilled...";
                }else{alm.status = "no status";}
                AngelTokens[i-1] = alm;

           }
        });
      });
        return AngelTokens;
      };

    }

    $scope.buy_alms = async function (amt_to_buy) {
      console.log($scope.cur_alm.owner);console.log($scope.cur_alm.mint_data);
      console.log($scope.cur_alm.id);console.log($scope.account);
      console.log(amt_to_buy);
      console.log($scope.cur_alm.cost);
      try{
        // await $scope.AngelTokenContract.methods.setApprovalForAll($scope.account, true)
        // .call()
        // .then(async function(x){
        //   console.log(x);
          await $scope.AngelTokenContract.methods.buyAlms($scope.cur_alm.owner,$scope.account,$scope.cur_alm.id,amt_to_buy,$scope.cur_alm.mint_data,parseInt($scope.cur_alm.cost)).send({ from: $scope.account, value: web3.utils.toWei(String(parseInt($scope.cur_alm.cost)/1000 * amt_to_buy), "ether")});
        /*}).once((receipt)=>{
            await $scope.AngelTokenContract.methods.setApprovalForAll($scope.account, false)
      })*/
      }catch(error){
        console.log(error);
      }
    }

    $scope.cart = ShoppingCartFactory.cart;
    $scope.cart_length = $scope.cart.items.length;
    $scope.last_cart_item = ShoppingCartFactory.cart.items[$scope.cart_length-1];
    if ($scope.cart_length > 0){$scope.last_roast_type = $scope.last_cart_item.description;}else{$scope.last_roast_type = '1st crack (light)';}
    $scope.quantity = 0;$scope.promo_code = "";$scope.promo_code_list = [];$scope.promo_code_data = {};$scope.promo_discount_rate = 0;
    $scope.Total = ShoppingCartFactory.cart.getTotalPrice();
    $scope.running_promo = 0;
    $scope.runPromotional = function(running_promo) {return PromoCodeFactory.runPromotional(running_promo).then(function(data){var promotional_uses = data.uses,limit = data.limit;$scope.promos_left = limit - promotional_uses;});};
    $scope.showPromoCodes = function(promo_code) {return PromoCodeFactory.showPromoCodes(promo_code).then(function(data){var data = data;console.log(data);return data;});};

    $scope.checkout = function () {
          $scope.promo_code = prompt("Do you have a promo code?", "#PROMOCODE");
          if($scope.promo_code != null){
              $scope.showPromoCodes($scope.promo_code)
                    .then(function(data){
                            var promo_discount_amount = data;
                            //console.log(promo_discount_amount);
                            //console.log($scope.promo_code);
                            //console.log($scope.running_promo);
                            //if discount amount is 0 and promocode is not default
                            if (promo_discount_amount == 0 && $scope.promo_code != "#PROMOCODE"){
                                //check if promocode is the running promotion
                                if($scope.promo_code == $scope.running_promo){
                                  //console.log(promo_discount_amount);
                                  //console.log($scope.promo_code);
                                  //console.log($scope.running_promo);
                                  alert('Cool Beans! If you hurry and finish checkout, you get a free grinder with your order! Do us a favor and tell EVERYBODY! #BEANSTOTHEFACE');
                                }else{
                                  alert('Err1: Keep your eyes out for #PROMOCODES and be sure to enter them correctly! (All Caps starting with a #)');
                                }

                            }else {
                              //if discount amount is 0
                              if (promo_discount_amount == 0){
                                alert('Err2: Keep your eyes out for #PROMOCODES and be sure to enter them correctly! (All Caps starting with a #)');
                              //finally, if discount, affirmative alert and throw to checkout
                              }else{
                              alert('Sweet! You get a discount of $' + Number(promo_discount_amount).toFixed(2) + '!');
                              }
                            }
                            $scope.shoppingCartTasks($scope.promo_code, promo_discount_amount);
                    });
          }

    };
    $scope.shoppingCartTasks = function(promo_code, promo_discount_amount){
      console.log(promo_code);
      console.log(promo_discount_amount);
      ShoppingCartFactory.cart.addCheckoutParameters('PayPal', 'J@CaffeineLamanna.com', {return: 'https://www.caffeinelamanna.com/#!/Store_Front/checkout_complete',cancel_return: 'https://www.caffeinelamanna.com/#!/Store_Front/cancel_checkout',discount_amount_cart: promo_discount_amount,custom: promo_code});  // 'jrlamanna-facilitator@gmail.com'  for sandbox
      ShoppingCartFactory.cart.checkout();
      $scope.clear_cart();
    };

   $scope.showGreenInventory = function() {
     InventoryFactory.showGreenInventory()
     .then(function(data){
         $scope.green_inventory = data;
         for (var i=0; i< $scope.green_inventory.length; i++) {
             var inventory_item = $scope.green_inventory[i];
             var sku = inventory_item.sku;
             inventory_item.weight -= Math.floor(inventory_item.weight * 0.2);
             for (var j=0; j< $scope.cart.items.length; j++){
                 var cart_item = $scope.cart.items[j].sku;
                 if(cart_item == sku){                    // if cart_item sku
                   // deduct shopping cart quantity from inventory weight
                   $scope.green_inventory[i].weight -= $scope.cart.items[j].quantity;}}}});};

    $scope.showPackagedInventory = function() {
      InventoryFactory.showPackagedInventory()
      .then(function(data){
         $scope.packaged_inventory = data;
         for (var i=0; i< $scope.packaged_inventory.length; i++) {
             var inventory_item = $scope.packaged_inventory[i].sku;
             for (var j=0; j< $scope.cart.items.length; j++){
                 var cart_item = $scope.cart.items[j].sku;
                 if(cart_item == inventory_item){                    // if cart_item sku
                   // deduct shopping cart quantity from inventory weight
                   $scope.packaged_inventory[i].weight -= $scope.cart.items[j].quantity;}}}});};

    $scope.showDiscountedInventory = function() {
      InventoryFactory.showDiscountedInventory()
      .then(function(data){
         $scope.discounted_inventory = data;
         for (var i=0; i< $scope.discounted_inventory.length; i++) {
             var inventory_item = $scope.discounted_inventory[i].sku;
             $scope.discounted_inventory[i].price_per_lb -= $scope.discounted_inventory[i].price_per_lb*0.10;
             for (var j=0; j< $scope.cart.items.length; j++){
                 var cart_item = $scope.cart.items[j].sku;
                 if(cart_item == inventory_item){
                     $scope.discounted_inventory[i].weight -= $scope.cart.items[j].quantity;}}}});};

    $scope.showMerchandiseInventory = function() {
       InventoryFactory.showMerchandiseInventory()
       .then(function(data){
         $scope.merchandise_inventory = data;
         for (var i=0; i< $scope.merchandise_inventory.length; i++) {
             var inventory_item = $scope.merchandise_inventory[i].sku;
             for (var j=0; j< $scope.cart.items.length; j++){
                 var cart_item = $scope.cart.items[j].sku;
                 if(cart_item == inventory_item){                    // if cart_item sku
                   // deduct shopping cart quantity from inventory weight
                   $scope.merchandise_inventory[i].quantity -= $scope.cart.items[j].quantity;}}}});};

    $scope.add_workweek_sampler_to_cart = function (sku, name, roast_type, price, quantity) {
      $scope.cart.addItem(sku, name, roast_type, price, quantity);
      $scope.Total += price;
      $route.reload();
    };
    $scope.add_discounted_purchase_to_cart = function (sku, name, roast_type, price, quantity) {
        var stock_weight = $filter('filter')($scope.discounted_inventory, {'sku': sku})[0].weight;
        if (stock_weight - quantity >= 0) {
            $scope.cart.addItem(sku, name, roast_type, price, quantity);
            $scope.Total += price;
            for (var i = 0; i < $scope.discounted_inventory.length; i++) {
                var item = $scope.discounted_inventory[i];

                if (item.sku == sku) {
                    item.weight -= quantity;
                }
            }
            $route.reload();
        }else {alert("That's more than we have, high roller! Try back next week ...");}};

    $scope.add_regular_purchase_to_cart = function (sku, name, roast_type, price, quantity) {
        var stock_weight = $filter('filter')($scope.packaged_inventory, {'sku': sku, 'roast_type': roast_type})[0].weight;

        if (stock_weight - quantity >= 0) {
            $scope.cart.addItem(sku, name, roast_type, price, quantity);
            $scope.Total += price;
            for (var i = 0; i < $scope.packaged_inventory.length; i++) {
                var item = $scope.packaged_inventory[i];

                if (item.sku == sku) {
                    item.weight -= quantity;
                }
            }
            $route.reload();
          }else {alert("That's more than we have, high roller! Try back next week ...");}};

    $scope.add_merchandise_purchase_to_cart = function (sku, name, description, price, quantity) {
        var stock_weight = $filter('filter')($scope.merchandise_inventory, {'sku': sku, 'description': description})[0].quantity;

        if (stock_weight - quantity >= 0) {
            $scope.cart.addItem(sku, name, description, price, quantity);
            $scope.Total += price;
            for (var i = 0; i < $scope.merchandise_inventory.length; i++) {
                var item = $scope.merchandise_inventory[i];

                if (item.sku == sku) {
                    item.quantity -= quantity;
                }
            }
            $route.reload();
          }else {alert("That's more than we have, high roller! Try back next week ...");}};

    $scope.add_reservation_to_cart = function (sku, name, description, price, quantity) {
      var stock_weight = $filter('filter')($scope.green_inventory, {'sku': sku})[0].weight;

          if (!($scope.roast_type_cats.includes(description))){
              description = "1st crack (light)";
          }


      if (stock_weight - quantity >= 0) {
            $scope.cart.addItem(sku, name, description, price, quantity);
            $scope.Total += price;
            for (var i = 0; i < $scope.green_inventory.length; i++) {
                var item = $scope.green_inventory[i];

                if (item.sku == sku) {
                    item.weight -= quantity;
                }
            }
            $route.reload();
            $scope.last_roast_type = description;
      }else {alert("That's more than we have, high roller! Try back next week ...");}};

    $scope.clear_cart = function () {
      $scope.cart.clearItems();
      $scope.Total = ShoppingCartFactory.cart.getTotalPrice();
      $route.reload();
    };
    $scope.remove_from_cart = function (sku, description) {
      $scope.cart.remove_item(sku, description);
      $scope.Total = ShoppingCartFactory.cart.getTotalPrice();
      $route.reload();
    };
}]);
