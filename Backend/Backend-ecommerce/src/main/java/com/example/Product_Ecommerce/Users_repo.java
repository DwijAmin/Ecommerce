package com.example.Product_Ecommerce;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
@Service

@EnableJpaRepositories
@Repository
public interface Users_repo extends JpaRepository<Users, Integer> {

}
