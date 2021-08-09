package com.movies.movies.api.controller;
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

import com.movies.movies.api.dataModel.SeenMovie;
import com.movies.movies.api.repositories.SeenMovieRepository;



@RestController
@RequestMapping(value = "/seenMovie")
public class SeenMovieController {
	@Autowired
	private SeenMovieRepository seenMovieRepository;
	
	@GetMapping
    public List<SeenMovie> readSeenMovie() {
       
		return seenMovieRepository.findAll();
    }
	
	@PostMapping
	public SeenMovie createUser(SeenMovie seenMovie) {
		seenMovie.setID(1);
		seenMovie.setDate(new Date());
		return seenMovieRepository.saveAndFlush(seenMovie);
	}

	@DeleteMapping("/{id}")
	public String deleteSeenMovie(@PathVariable int id) {
		SeenMovie seenMovie = new SeenMovie();
		seenMovie.setID(id);
		seenMovieRepository.findAll();
		seenMovieRepository.delete(seenMovie);
		//id =1;
		//userRepository.deleteById(id);
		return null;
	}
	@PutMapping
	public SeenMovie update(@RequestBody  SeenMovie seenMovie) {
			
		return  seenMovieRepository.save(seenMovie);
		
		
		
	}
}
