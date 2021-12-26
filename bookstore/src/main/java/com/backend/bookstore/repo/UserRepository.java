package com.backend.bookstore.repo;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.backend.bookstore.model.User;

public interface UserRepository extends CrudRepository<User, Long>{
		List<User> findByEmail(String email);
		public User findByEmailAndPassword(String email, String password);
}
