package com.example.Product_Ecommerce;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
@Service
@Component
public class Categories_imple implements Category_service {
	@Autowired
	private Category_Repo repo;

	@Override
	public Categories addCategory(Categories category) {
		// TODO Auto-generated method stub
		return repo.save(category);
	}

	@Override
	public Categories updateCategory(Categories category) {
		// TODO Auto-generated method stub
		return repo.save(category);
	}

	@Override
	public void deleteCategory(int cid) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Categories> getCategories() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public Categories getCategory(int cid) {
		// TODO Auto-generated method stub
		return repo.getById(cid);
	}
	@Override
	public Categories getCategory_tite(String title) {
		// TODO Auto-generated method stub
		return repo.findBytitle(title);
	}

}
