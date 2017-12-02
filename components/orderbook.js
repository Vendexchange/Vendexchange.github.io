angular
	.module('cqNgApp')
	.component('orderBook', {
		controller: DrawingOrderbook,
		templateUrl: '/templates/orderbook.html',
		controllerAs: 'drawingOrderbook'
	});

DrawingOrderbook.$inject = ['$scope','$rootScope', '$filter','$interval', 'CIQ', 'quoteFeed'];

function DrawingOrderbook($scope, $rootScope, $filter, $interval, CIQ, quoteFeed) {

	// var orderBook =  quoteFeed.makeOrderBook();

	//formatNumberfilter
	$rootScope.formatNumber = function(i) {
		return i.toFixed(8);
	};

	$rootScope.btc_price = 7000;


	//init value
	$scope.bids = quoteFeed.makeOrderBook().bids;
	$scope.ask = quoteFeed.makeOrderBook().ask;

	//last price
	$rootScope.d_last = quoteFeed.makeOrderBook().bids[0].price;
	//
	$rootScope.d_ask = quoteFeed.makeOrderBook().ask[0].price;
	//last ask
	$rootScope.d_bid = quoteFeed.makeOrderBook().bids[0].price;

	//update val
	$interval(function(){
		// console.log(orderBook);
		$scope.bids = quoteFeed.makeOrderBook().bids;
		$scope.ask = quoteFeed.makeOrderBook().ask;
		//last price
		$rootScope.d_last = quoteFeed.makeOrderBook().bids[0].price ++;
		//
		$rootScope.d_ask = quoteFeed.makeOrderBook().ask[0].price;
		//last ask
		$rootScope.d_bid = quoteFeed.makeOrderBook().bids[0].price;

	}, 4000);


	// console.log("Saminu");

}
