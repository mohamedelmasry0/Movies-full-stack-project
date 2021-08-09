package com.movies.movies.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movies.movies.api.dataModel.SeenMovie;


@Repository
public interface SeenMovieRepository extends JpaRepository<SeenMovie, Integer> {
	

}

