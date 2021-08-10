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

import com.movies.movies.api.dataModel.Address;
import com.movies.movies.api.repositories.AddressRepository;


@RestController
@RequestMapping(value = "/address")
public class AddressController {
	@Autowired
	private AddressRepository addressRepository;
	
	@GetMapping
    public List<Address> readUsers() {
       
		return addressRepository.findAll();
    }
	
	@PostMapping
	public Address createUser(Address address) {
		address.setID(1);
		address.setArea("La Défence");
		address.setCountry("France");
		address.setNumber("0606060606");
		return addressRepository.saveAndFlush(address);
	}

	@DeleteMapping("/{id}")
	public String deleteAddress(@PathVariable int id) {
		Address address = new Address();
		address.setID(1);
		addressRepository.findAll();
		addressRepository.delete(address);
		//id =1;
		//userRepository.deleteById(id);
		return null;
	}
	@PutMapping
	public Address update(@RequestBody  Address address) {
			
		return  addressRepository.save(address);
		
		
		
	}
}
