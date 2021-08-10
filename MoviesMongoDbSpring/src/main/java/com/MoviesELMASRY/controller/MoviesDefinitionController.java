package com.MoviesELMASRY.controller;

import java.util.Date;
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

import com.MoviesELMASRY.dataModel.MoviesDefinition;
import com.MoviesELMASRY.repositories.MoviesDefinitionRepository;

@RestController
@RequestMapping(value = "/moviesdefinition")
public class MoviesDefinitionController {
	@Autowired
	private MoviesDefinitionRepository moviesDefinitionRepository;

	@GetMapping 
	public List<MoviesDefinition> readmoviesDefinition() {
		
		return moviesDefinitionRepository.findAll();
	}

	@PostMapping
	public MoviesDefinition createUser(MoviesDefinition moviesDefinition) {
		moviesDefinition.setId(2);
		moviesDefinition.setCategory("Thriller");
		moviesDefinition.setMovieDirector("Tom Six");
		moviesDefinition.setReleaseDate(new Date());
		return moviesDefinitionRepository.save(moviesDefinition);
	}

	@DeleteMapping("/{id}")
	public String deleteUser(@PathVariable int id) {
		MoviesDefinition moviesDefinition = new MoviesDefinition();
		moviesDefinition.setId(id);
		moviesDefinitionRepository.findAll();
		moviesDefinitionRepository.delete(moviesDefinition);
		// id =1;
		// userRepository.deleteById(id);
		return null;
	}

	@PutMapping
	public MoviesDefinition update(@RequestBody MoviesDefinition moviesDefinition) {

		return moviesDefinitionRepository.save(moviesDefinition);

	}

}
