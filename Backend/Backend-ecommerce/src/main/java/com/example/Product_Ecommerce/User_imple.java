package com.example.Product_Ecommerce;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

public class User_imple implements Users_service {
	@Autowired
	private Users_repo repo;

	@Override
	public Users addUsers(Users users) {
		// TODO Auto-generated method stub
		return this.repo.save(users);
	}

	@Override
	public Users getUsers(int id) {
		// TODO Auto-generated method stub
		return this.repo.getById(id);
	}

	@Override
	public List<Users> getProducts_(int id) {
		// TODO Auto-generated method stub
		return (List<Users>) this.repo.getById(id);
		}

}
