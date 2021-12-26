package com.backend.bookstore.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.backend.bookstore.model.Book;

public interface BookRepository extends CrudRepository<Book, Integer>{
	List<Book> findByCategory(String category);
	List<Book> findByBookcode(String bookcode);
}
