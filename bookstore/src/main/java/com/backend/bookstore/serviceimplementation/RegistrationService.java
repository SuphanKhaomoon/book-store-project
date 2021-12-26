package com.backend.bookstore.serviceimplementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.bookstore.model.User;
import com.backend.bookstore.repo.UserRepository;

@Service
public class RegistrationService {
	
	@Autowired
	UserRepository repo;
	
	public User fetchUserByEmailAndPassword(String email, String password) {
		return repo.findByEmailAndPassword(email, password);
	}

}
