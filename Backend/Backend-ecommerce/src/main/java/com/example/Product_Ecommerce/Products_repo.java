package com.example.Product_Ecommerce;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;


@Service

@EnableJpaRepositories
@Repository
public interface Products_repo extends JpaRepository<Products, Integer>{

	public List<Products> findByCategories(Categories category);

}
