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

import com.backend.bookstore.model.Book;
import com.backend.bookstore.repo.BookRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/")
public class BookController {
	
	@Autowired
	BookRepository bookrepository;
	
	@GetMapping("/books")
	public ResponseEntity<List<Book>> getAllBook(){
		List<Book> books = new ArrayList<>();
		try {
			bookrepository.findAll().forEach(books::add);
			
			if (books.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(books, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/books/{id}")
	public ResponseEntity<Book> getBookById(@PathVariable("id") int id) {
		Optional<Book> bookData = bookrepository.findById(id);
			if (bookData.isPresent()) {
				return new ResponseEntity<>(bookData.get(), HttpStatus.OK);
			} else {				
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
	}
	
	@GetMapping("/books/category/{category}")
	public ResponseEntity<List<Book>> findByCatagory(@PathVariable String category){
		try {
			List<Book> books = bookrepository.findByCategory(category);
			if(books.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(books, HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	@GetMapping("/books/bookcode/{bookcode}")
	public ResponseEntity<List<Book>> findByBookcode(@PathVariable String bookcode){
		try {
			List<Book> books = bookrepository.findByBookcode(bookcode);
			if(books.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(books, HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}

	@PostMapping("/books")
	public ResponseEntity<Book> postBook(@RequestBody Book book) {
		try {
			String bookcode = book.getBookcode();
			if(bookcode != null && !"".equals(bookcode)) {
				List<Book> _book = bookrepository.findByBookcode(bookcode);
				if(_book.isEmpty()) {
					Book __book = bookrepository.save(new Book(book.getBookname(), book.getBookcode(), book.getAuthor(), 
							book.getPublisher(), book.getPrice(), book.getOldPrice(), book.getQuantity(), book.getImageUrl(),
							book.getCategory()));
					return new ResponseEntity<>(__book, HttpStatus.CREATED);
				}
			}
			return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	@DeleteMapping("/books/{id}")
	public ResponseEntity<HttpStatus> deleteBook(@PathVariable("id") int id) {
		try {
			bookrepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	@DeleteMapping("/books")
	public ResponseEntity<HttpStatus> deleteAllBooks() {
		try {
			bookrepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	@PutMapping("/books/{id}")
	public ResponseEntity<Book> updateBook(@PathVariable("id") int id, @RequestBody Book book) {
		Optional<Book> bookData = bookrepository.findById(id);
		
		if(bookData.isPresent()) {
			Book _book = bookData.get();
			_book.setBookname(book.getBookname());
			_book.setBookcode(book.getBookcode());
			_book.setAuthor(book.getAuthor());
			_book.setPublisher(book.getPublisher());
			_book.setPrice(book.getPrice());
			_book.setOldPrice(book.getOldPrice());
			_book.setImageUrl(book.getImageUrl());
			_book.setCategory(book.getCategory());
			
			return new ResponseEntity<>(bookrepository.save(_book), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
