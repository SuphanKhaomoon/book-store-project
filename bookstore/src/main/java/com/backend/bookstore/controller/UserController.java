package com.backend.bookstore.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.bookstore.repo.UserRepository;
//import com.backend.bookstore.serviceimplementation.UserService;
import com.backend.bookstore.model.User;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/")
public class UserController {
	
	@Autowired
	UserRepository repository;
	
	@GetMapping("/users")
	public ResponseEntity<List<User>> getAllUser(){
		List<User> users = new ArrayList<>();
		try {
			repository.findAll().forEach(users::add);
			
			if (users.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(users, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/users/{id}")
	public ResponseEntity<User> getUserById(@PathVariable("id") long id) {
		Optional<User> userData = repository.findById(id);
			if (userData.isPresent()) {
				return new ResponseEntity<>(userData.get(), HttpStatus.OK);
			} else {				
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
	}
	
	@GetMapping("/users/email/{email}")
	public ResponseEntity<List<User>> findByEmail(@PathVariable String email){
		try {
			List<User> users = repository.findByEmail(email);
			if(users.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(users, HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}

	@PostMapping("/users")
	public ResponseEntity<User> postUser(@RequestBody User user) {
		try {
			String email = user.getEmail();
			if(email != null && !"".equals(email)) {
				List<User> _user = repository.findByEmail(email);
				if(_user.isEmpty()) {
					User __user = repository.save(new User(user.getName(), user.getSurname(), user.getEmail(), user.getTel(), user.getPassword()));
					return new ResponseEntity<>(__user, HttpStatus.CREATED);
				}
			}
			return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	@DeleteMapping("/users/{id}")
	public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") long id) {
		try {
			repository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	@DeleteMapping("/users")
	public ResponseEntity<HttpStatus> deleteAllUsers() {
		try {
			repository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable("id") long id, @RequestBody User user) {
		Optional<User> userData = repository.findById(id);
		
		if(userData.isPresent()) {
			User _user = userData.get();
			_user.setName(user.getName());
			_user.setSurname(user.getSurname());
			_user.setEmail(user.getEmail());
			_user.setTel(user.getTel());
			return new ResponseEntity<>(repository.save(_user), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
