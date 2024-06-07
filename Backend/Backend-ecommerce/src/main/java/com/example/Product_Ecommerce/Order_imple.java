package com.example.Product_Ecommerce;

import java.io.Console;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
@Component
public class Order_imple implements Order_service {

	@Autowired
	private Order_repo repo;
	@Autowired
	private Users_repo repo_;

	@Override
	public Order addOrder(Order order) {
		// TODO Auto-generated method stub
		return this.repo.save(order);
	}

	@Override
	public Order updateOrder(Order Order) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteOrder(int oid) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Order> getOrder() {
		// TODO Auto-generated method stub
		return this.repo.findAll();
	}

	@Override
	public Order getOrder(int oid) {
		// TODO Auto-generated method stub
		return this.repo.getById(oid);
	}

	@Override
	public List<Order> getProducts_(int id) {
		// TODO Auto-generated method stub
		Users user = this.repo_.getById(id);
	    System.out.println(user.getName());
		return this.repo.findByUsers(user);
	}

}
