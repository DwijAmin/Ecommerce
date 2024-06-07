package com.example.Product_Ecommerce;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Service
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@JsonIgnore
	private int oid;
	

	@ManyToOne(fetch =  FetchType.EAGER)
	 private Products product;
	
	 public int getOid() {
		return oid;
	}


	public void setOid(int oid) {
		this.oid = oid;
	}


	public Products getProducts() {
		return product;
	}


	public void setProducts(Products product) {
		this.product = product;
	}




	public Users getUsers() {
		return users;
	}


	public void setUsers(Users users) {
		this.users = users;
	}


	

		@ManyToOne(fetch =  FetchType.LAZY)
		@JsonIgnore
		 private Users users;
		
	
	
}
