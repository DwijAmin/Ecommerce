package com.example.Product_Ecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "http://localhost:3000")
@ComponentScan
public class BackendEcommerceApplication {

	
		// TODO Auto-generated method stub
		public static void main(String[] args) {
			SpringApplication.run(BackendEcommerceApplication.class, args);
		}

}
