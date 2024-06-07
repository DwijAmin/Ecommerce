package com.example.Product_Ecommerce;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Order")
public class Order_controller {
	@Autowired
	private Order_imple imple;

	@PostMapping("/")
	public ResponseEntity<?> addProduct(@RequestBody Order Order) {
		 
			Order category1	= this.imple.addOrder(Order);
			return ResponseEntity.ok(category1);
		
	}
	@GetMapping("/allProducts")
	public ResponseEntity<?> getallCategories(){
		return ResponseEntity.ok(imple.getOrder());
		
	}
	@GetMapping("/{pid}")
	public Order getCategory(@PathVariable int pid){
		return  this.imple.getOrder(pid);
		
	}
	
	@GetMapping("/user_/{id}")
	public List<Order> getbyuser(@PathVariable int id){
		return  this.imple.getProducts_(1);
		
	}

	
}
