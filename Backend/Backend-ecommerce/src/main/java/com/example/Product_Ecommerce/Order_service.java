package com.example.Product_Ecommerce;

import java.util.List;

public interface Order_service {
	public Order addOrder(Order order);

	public Order updateOrder(Order Order);
	
	public void deleteOrder( int oid);
	
	public List<Order> getOrder();



	public List<Order> getProducts_(int id);
	
	public Order getOrder(int oid);
}
