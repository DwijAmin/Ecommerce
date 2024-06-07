package com.example.Product_Ecommerce;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Service
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(insertable = false, nullable = true)
	private int uid;
	private String name;

	
	 @OneToMany(mappedBy="users", cascade = CascadeType.ALL ,fetch = FetchType.EAGER)
	 @JsonIgnore
	 private Set<Order> orders;

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<Order> getOrders() {
		return orders;
	}

	public void setOrders(Set<Order> orders) {
		this.orders = orders;
	}
}
