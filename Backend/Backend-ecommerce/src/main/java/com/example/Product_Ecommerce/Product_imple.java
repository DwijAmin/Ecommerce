package com.example.Product_Ecommerce;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Product_imple implements Product_service{
	
	@Autowired
	private Products_repo repo;

	@Autowired
	 private Categories categories;

	@Autowired
   private Categories_imple imple;
	@Override
	public Products addProducts(Products products) {
		// TODO Auto-generated method stub
		return this.repo.save(products);
	}

	@Override
	public Products updateProducts(Products Products) {
		// TODO Auto-generated method stub
		return this.repo.save(Products);
	}

	@Override
	public void deleteProducts(int pid) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Products> getProducts() {
		// TODO Auto-generated method stub
		return this.repo.findAll();
	}

	@Override
	public Products getProducts(int pid) {
		// TODO Auto-generated method stub
		return this.repo.getById(pid);
	}

	@Override
	public List<Products> getProducts_(String title) {
		// TODO Auto-generated method stub
		//System.out.println(title);
		//String titles = "polo";
		Categories categories = this.imple.getCategory_tite(title);
		System.out.println(categories.getCid());

		return (List<Products>) repo.findByCategories(categories);
	}

}
