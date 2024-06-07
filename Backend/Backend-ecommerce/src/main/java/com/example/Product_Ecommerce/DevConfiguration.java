package com.example.Product_Ecommerce;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@Profile("development")
public class DevConfiguration implements WebMvcConfigurer {
 
	  @Override
	  public void addCorsMappings(CorsRegistry registry) {
	    registry.addMapping("/**")
	        .allowedOrigins("http://localhost:3000")
	        .allowedMethods("GET", "POST", "HEAD", "OPTIONS", "PUT", "PATCH", "DELETE")
	        .allowCredentials(true);
	  }
}
