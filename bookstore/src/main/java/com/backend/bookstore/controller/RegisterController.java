package com.backend.bookstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.bookstore.model.User;
import com.backend.bookstore.serviceimplementation.RegistrationService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/")
public class RegisterController {
	
	@Autowired
	private RegistrationService service;
		
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) throws Exception {
		String email = user.getEmail();
		String password = user.getPassword();
		User userObj = null;
		if(email != null && password != null) {
			userObj = service.fetchUserByEmailAndPassword(email, password);
		}
		if(userObj == null) {
			throw new Exception("Bad credentials");
		}
		return userObj;
	}
	
}
