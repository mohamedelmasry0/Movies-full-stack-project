package com.MoviesELMASRY.controller;

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

import com.MoviesELMASRY.dataModel.UserRatings;
import com.MoviesELMASRY.repositories.UserRatingsRepository;

@RestController
@RequestMapping(value = "/userratings")
public class UserRatingsController {
	@Autowired 
	private UserRatingsRepository userRatingsRepository;

	@GetMapping
	public List<UserRatings> readUsersRatings() {

		return userRatingsRepository.findAll();
	}

	@PostMapping
	public UserRatings createUser(UserRatings userRatings) {
		userRatings.setId(2);
		userRatings.setCommentContent("So exciting no words can describe it");
		userRatings.setCommentTitle("Amazing");
		userRatings.setRating(" 4 stars");
		return userRatingsRepository.save(userRatings);
	}

	@DeleteMapping("/{id}")
	public String deleteUser(@PathVariable int id) {
		UserRatings userRatings = new UserRatings();
		userRatings.setId(id);
		userRatingsRepository.findAll();
		userRatingsRepository.delete(userRatings);
		// id =1;
		// userRepository.deleteById(id);
		return null;
	}

	@PutMapping
	public UserRatings update(@RequestBody UserRatings userRatings) {

		return userRatingsRepository.save(userRatings);

	}
}