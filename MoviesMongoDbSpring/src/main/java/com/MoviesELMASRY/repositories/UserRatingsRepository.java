package com.MoviesELMASRY.repositories;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.MoviesELMASRY.dataModel.UserRatings;


@Repository
public interface UserRatingsRepository extends MongoRepository<UserRatings, Integer> {
	

}
