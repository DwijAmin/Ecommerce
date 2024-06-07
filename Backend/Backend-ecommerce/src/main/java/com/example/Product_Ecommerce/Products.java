package com.example.Product_Ecommerce;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Service
public class Products {


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int pid;
	
	
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int Orderid;

	private String title;

	private int Price;
	
	private int AvailableUnit;

	public int getAvailableUnit() {
		return AvailableUnit;
	}

	public void setAvailableUnit(int availableUnit) {
		AvailableUnit = availableUnit;
	}

	public int getPrice() {
		return Price;
	}

	public void setPrice(int price) {
		Price = price;
	}

	private String PicByte;
	private String description;

	@ManyToOne(fetch =  FetchType.EAGER)
	    private Categories categories;

 
	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Categories getCategories() {
		return categories;
	}

	public void setCategories(Categories categories) {
		this.categories = categories;
	}

	public String getPicByte() {
		return PicByte;
	}

	public void setPicByte(String picByte) {
		PicByte = picByte;
	}



}
