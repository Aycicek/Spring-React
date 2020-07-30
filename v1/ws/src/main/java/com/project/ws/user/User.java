package com.project.ws.user;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;
//@Data annototasyonu Lombok sayesinde kullanıyoruz ve 
//getter setter metotları ve toString gibi çeşitli metotları içerisinde barındırmaktadır.

@Data
@Entity
public class User {
	
	@Id
	@GeneratedValue
	private long id;
	
	private String username;
	
	private String displayName;
	
	private String password;
	
}