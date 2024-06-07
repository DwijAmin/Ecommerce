package com.example.Product_Ecommerce;

import java.util.Map;

import org.json.JSONObject;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

@RestController
@RequestMapping("/user")
public class Payment {

	@PostMapping("/create_order")
	@ResponseBody
	public String pay(@RequestBody Map<String , Object>data) throws RazorpayException {
		
		int amt = Integer.parseInt(data.get("amount").toString());
		
		var client = new RazorpayClient("rzp_test_IMtOQYxTuBCdlF", "td8dPHloLOPXe2xX7NzWVhMD");
		JSONObject orderRequest = new JSONObject();

		  orderRequest.put("amount", amt); // amount in the smallest currency unit

		  orderRequest.put("currency", "INR");

		  orderRequest.put("receipt", "order_rcptid_11");

		  Order order = client.orders.create(orderRequest);
		System.out.println(order);
		
		return "done";
	}

}
