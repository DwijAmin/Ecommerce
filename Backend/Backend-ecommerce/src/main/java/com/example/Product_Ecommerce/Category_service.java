package com.example.Product_Ecommerce;

import java.util.List;


public interface Category_service {
	public Categories addCategory(Categories  category);

	public Categories updateCategory( Categories category);
	
	public void deleteCategory( int cid);
	
	public List<Categories> getCategories();


	public Categories getCategory(int cid);

	Categories getCategory_tite(String title);
}
