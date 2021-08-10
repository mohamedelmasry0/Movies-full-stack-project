package com.movies.movies.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movies.movies.api.dataModel.Contact;


@Repository
public interface ContactRepository extends JpaRepository<Contact, Integer> {
	

}

