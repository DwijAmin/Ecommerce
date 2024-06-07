package com.example.Product_Ecommerce;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.util.UriComponentsBuilder;
@RestController
@RequestMapping("/Fileupload")
public class FileuploadController
{

	@Autowired
	private Products Product;
	
	@Autowired
	private Product_imple Product_service;

	@Autowired
	private Products_repo Product_repo;

	@Autowired
	private Categories category;
	@Autowired
	private Category_Repo category_repo;
	@Autowired
	private Categories_imple category_impl;

	@Autowired
	private FileuploadHealper fileuploadHealper;
	@PostMapping("/Upload")
	public ResponseEntity<String> uploadFile(@RequestParam(value ="myfile") MultipartFile myfile,@RequestParam(value ="Category") String title,@RequestParam(value ="Price") int Price ,@RequestParam(value ="available_unit") int AvailableUnit ,@RequestParam(value ="product_name") String Product_name  ) throws IOException{
		
		fileuploadHealper.uploadFile(myfile);

        String PicByte = ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(myfile.getOriginalFilename()).toUriString();
        System.out.println(PicByte);
       Product.setPicByte(PicByte);
		Product.setPrice(Price);
		Product.setAvailableUnit(AvailableUnit);
		Product.setTitle(Product_name);
		//String title = "hhhk";
		Categories A = category_repo.findBytitle(title);
		
		Product.setCategories(A);
		Product_repo.save(Product);
		//System.out.println(A.getCid());
		return ResponseEntity.ok(ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(myfile.getOriginalFilename()).toUriString());
		
	}
	
	@GetMapping("/Get")
	public List<Products> GETFile(@RequestParam(value ="title") String title) throws IOException{
		//fileuploadHealper.uploadFile(myfile);
	//	String A = ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(myfile).toUriString();
		//String title = "hhhk";
		Categories A = category_repo.findBytitle(title);
		
		List<Products> p =(List<com.example.Product_Ecommerce.Products>) Product_repo.findByCategories(A);
		
		
		return p;
		
	}
	@GetMapping("/Getbyname")
	public Optional<Products> GETbyname(@RequestParam(value ="id") int title) throws IOException{
		//fileuploadHealper.uploadFile(myfile);
	//	String A = ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(myfile).toUriString();
		//String title = "hhhk";
		Optional<Products> A = Product_repo.findById(title);
		
		//List<Product> p =(List<com.example.Product_Ecommerce.Product>) Product_repo.findBycategory_cid(A.getCid());
		
		
		return A;
		
	}
	@GetMapping("/GetCategory")
	public ResponseEntity<Categories> GetCategory(@RequestParam String title) throws IOException{
		//fileuploadHealper.uploadFile(myfile);
	//	String A = ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(myfile).toUriString();
		//String title = "hhhk";
		Categories A = category_repo.findBytitle(title);
		
		//Product p =Product_repo.findBycategory_cid(A.getCid());
		
		
		return ResponseEntity.ok(A);
		
	}
}
