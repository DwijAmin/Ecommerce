package com.example.Product_Ecommerce;

import java.util.List;

public interface Product_service {
	public Products addProducts(Products products);

	public Products updateProducts(Products Products);
	
	public void deleteProducts( int pid);
	
	public List<Products> getProducts();


	public Products getProducts(int pid);
	

	public List<Products> getProducts_(String title);

}
