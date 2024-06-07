package com.example.Product_Ecommerce;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Service
public class Categories {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int cid;
	private String title;
	 @OneToMany(mappedBy="categories", cascade = CascadeType.ALL ,fetch = FetchType.EAGER)
		@JsonIgnore
	 private Set<Products> items;
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}

}
