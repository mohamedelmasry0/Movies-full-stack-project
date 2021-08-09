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

import com.movies.movies.api.dataModel.Movie;
import com.movies.movies.api.repositories.MovieRepository;



@RestController
@RequestMapping(value = "/movie")
public class MovieController {
	@Autowired
	private MovieRepository movieRepository;
	
	@GetMapping
    public List<Movie> readMovie() {
       
		return movieRepository.findAll();
    }
	
	@PostMapping
	public Movie createUser(Movie movie) {
		movie.setExternal_id(1);
		movie.setAdded(new Date());
		movie.setTitle("Irreversible");
		return movieRepository.saveAndFlush(movie);
	}

	@DeleteMapping("/{id}")
	public String deleteMovie(@PathVariable int id) {
		Movie movie = new Movie();
		movie.setExternal_id(1);
		movieRepository.findAll();
		movieRepository.delete(movie);
		//id =1;
		//userRepository.deleteById(id);
		return null;
	}
	@PutMapping
	public Movie update(@RequestBody  Movie movie) {
			
		return  movieRepository.save(movie);
		
		
		
	}
}
