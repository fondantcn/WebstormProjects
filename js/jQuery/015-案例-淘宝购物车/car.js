$(function() {
	//选中模块
	$(".checkall").change(function() {
		console.log($(this).prop("checked"));
		$(".j-checkbox").prop("checked", $(this).prop("checked"));
		if ($(this).prop("checked")) {
			$(".cart-item").addClass("check-cart-item");
		} else {
			$(".cart-item").removeClass("check-cart-item");
		}
		getSum()
	})
	$(".j-checkbox").change(function() {
		//	console.log($(".j-checkbox:checked").length)
		if ($(".j-checkbox:checked").length == 3) {
			$(".checkall").prop("checked", true);
		} else {
			$(".checkall").prop("checked", false);
		}
		if ($(this).prop("checked")) {
			$(this).parents(".cart-item").addClass("check-cart-item");
		} else {
			$(this).parents(".cart-item").removeClass("check-cart-item");
		}
		getSum()
	})
	//加减模块
	$(".decrement").click(function() {
		var a1 = $(this).siblings(".itxt").val();
		a1--;
		if (a1 <= -1) {
			a1 = 0;
		}
		$(this).siblings(".itxt").val(a1);
		var p1 = $(this).parents(".p-num").siblings(".p-price").html();
		//console.log(p1)
		p1 = p1.substr(1);
		//console.log(p1)
		var num = (p1 * a1).toFixed(2);
		$(this).parents(".p-num").siblings(".p-sum").html("￥" + num)
		getSum()
	})
	$(".increment").click(function() {
		var a = $(this).siblings(".itxt").val();
		a++;
		$(this).siblings(".itxt").val(a);
		var p1 = $(this).parents(".p-num").siblings(".p-price").html();
		//console.log(p1)
		p1 = p1.substr(1);
		//console.log(p1)
		var num = (p1 * a).toFixed(2);
		$(this).parents(".p-num").siblings(".p-sum").html("￥" + num)
		getSum()
	})
	$(".itxt").change(function() {
		var a = $(this).val();
		if (a <= -1) {
			a = 0
			$(this).val(0)
		}
		var p1 = $(this).parents(".p-num").siblings(".p-price").html();
		p1 = p1.substr(1);
		var num = (p1 * a).toFixed(2);
		$(this).parents(".p-num").siblings(".p-sum").html("￥" + num)
		getSum()
	})
	//计算模块
	function getSum() {
		var count = 0;
		var money = 0;
		$(".itxt").each(function(i, ele) {
			//console.log($(ele).parents(".cart-item").find(".j-checkbox").prop("checked"))
			if ($(ele).parents(".cart-item").find(".j-checkbox").prop("checked")) {
			count += parseInt($(ele).val())
			}
			

		})
		$(".amount-sum em").text(count)
		$(".p-sum").each(function(i, ele) {
			if ($(ele).parents(".cart-item").find(".j-checkbox").prop("checked")) {
				money += parseFloat($(ele).text().substr(1))
			}

		})
		$(".price-sum em").text("￥" + money.toFixed(2))
	}
	//删除模块
	$(".p-action").click(function() {
		$(this).parents(".cart-item").remove()
		getSum()
	})
	$(".remove-batch").click(function() {
		$(".j-checkbox:checked").parents(".cart-item").remove()
		getSum()
	})
	$(".clear-all").click(function() {
		$(".cart-item").remove()
		getSum()
	})



})
