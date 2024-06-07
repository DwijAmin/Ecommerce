package com.example.Product_Ecommerce;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Product")
public class Controller_product {

	@Autowired
	private Product_imple imple;

	@PostMapping("/")
	public ResponseEntity<?> addProduct(@RequestBody Products category) {
		 
			Products category1	= this.imple.addProducts(category);
			return ResponseEntity.ok(category1);
		
	}
	@GetMapping("/allProducts")
	public ResponseEntity<?> getallCategories(){
		return ResponseEntity.ok(imple.getProducts());
		
	}
	@GetMapping("/{pid}")
	public Products getCategory(@PathVariable int pid){
		return  this.imple.getProducts(pid);
		
	}
	
	@GetMapping("/titles/{title}")
	public List<Products> getCategory_title(@PathVariable String title){
		System.out.println(title);
		//String titles = "polo";
		List<Products> p = (List<Products>) this.imple.getProducts_(title);
		return p ;
		
	}
}
