package com.example.Product_Ecommerce;

import java.util.Set;

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
@RequestMapping("/Categories")
public class Categories_controller {
	@Autowired
	 private Categories categories;

	@Autowired
    private Categories_imple imple;
	
	@PostMapping("/")
	public ResponseEntity<?> addCategory(@RequestBody Categories category) {
		 
			Categories category1	= this.imple.addCategory(category);
			return ResponseEntity.ok(category1);
		
	}
	@GetMapping("/allcategories")
	public ResponseEntity<?> getallCategories(){
		return ResponseEntity.ok(imple.getCategories());
		
	}
	@GetMapping("/{cid}")
	public Categories getCategory(@PathVariable int cid){
		return  this.imple.getCategory(cid);
		
	}
	@PutMapping("/")
	public Categories UpdateCategory(@RequestBody Categories category){
		return  this.imple.updateCategory(category);
		
	}
	
	@DeleteMapping("/{cid}")
	public void deletCategory(@PathVariable int cid) {
		this.imple.deleteCategory(cid);
		
	}
	@GetMapping("/titles/{title}")
	public Categories getCategory_title(@PathVariable String title){
		System.out.println(title);
		String titles = "polo";
		return  this.imple.getCategory_tite(title);
		
	}

}
