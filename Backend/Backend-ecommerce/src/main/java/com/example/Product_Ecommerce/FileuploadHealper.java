package com.example.Product_Ecommerce;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FileuploadHealper {

 //   public final String Upload_dir = "C:\\Users\\Dwij Amin\\sts\\Backend-ecommerce\\src\\main\\resources\\static\\image";
	public final String Upload_dir = new ClassPathResource("/static/image").getFile().getAbsolutePath();

	
	public boolean uploadFile(MultipartFile multipartfile) throws IOException {
		Files.copy(multipartfile.getInputStream(),Paths.get(Upload_dir+File.separator+multipartfile.getOriginalFilename()) ,StandardCopyOption.REPLACE_EXISTING );
		return true;
		
	}


	public FileuploadHealper() throws IOException {
		
		// TODO Auto-generated constructor stub
	}




}
