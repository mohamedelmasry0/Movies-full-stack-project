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

import com.movies.movies.api.dataModel.Contact;
import com.movies.movies.api.repositories.ContactRepository;


@RestController
@RequestMapping(value = "/contact")
public class ContactController {
	@Autowired
	private ContactRepository contactRepository;
	
	@GetMapping
    public List<Contact> readContact() {
       
		return contactRepository.findAll();
    }
	
	@PostMapping
	public Contact createContact(Contact contact) {
		contact.setID(1);
		contact.setBirthDate(new Date());
		contact.setEmail("martin@martin.com");
		contact.setGender("Male");
		contact.setName("Martin");
		return contactRepository.saveAndFlush(contact);
	}

	@DeleteMapping("/{id}")
	public String deleteContact(@PathVariable int id) {
		Contact contact = new Contact();
		contact.setID(1);
		contactRepository.findAll();
		contactRepository.delete(contact);
		//id =1;
		//userRepository.deleteById(id);
		return null;
	}
	@PutMapping
	public Contact update(@RequestBody  Contact contact) {
			
		return  contactRepository.save(contact);
		
		
		
	}
}
