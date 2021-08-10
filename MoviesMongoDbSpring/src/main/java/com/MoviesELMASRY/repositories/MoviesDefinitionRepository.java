package com.MoviesELMASRY.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.MoviesELMASRY.dataModel.MoviesDefinition;



@Repository
public interface MoviesDefinitionRepository extends MongoRepository<MoviesDefinition, Integer> {
	

}
