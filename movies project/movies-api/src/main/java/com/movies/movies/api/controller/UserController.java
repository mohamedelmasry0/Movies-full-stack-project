package com.movies.movies.api.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movies.movies.api.dataModel.Users;
import com.movies.movies.api.repositories.UserRepository;

@RestController
@RequestMapping(value = "/users")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping
    public List<Users> readUsers() {
       
		return userRepository.findAll();
    }
	
	@PostMapping
	public Users createUser(Users user) {
		user.setId(1);
		user.setUserName("Monika");
		return userRepository.saveAndFlush(user);
	}

	@DeleteMapping("/{id}")
	public String deleteUser(@PathVariable int id) {
		Users user = new Users();
		user.setId(id);
		userRepository.findAll();
		userRepository.delete(user);
		//id =1;
		//userRepository.deleteById(id);
		return null;
	}
	@PutMapping
	public Users update(@RequestBody  Users user) {
			
		return  userRepository.save(user);
		
		
		
	}
}
