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

import com.movies.movies.api.dataModel.Role;
import com.movies.movies.api.repositories.RoleRepository;


@RestController
@RequestMapping(value = "/role")
public class RoleController {
	@Autowired
	private RoleRepository roleRepository;
	
	@GetMapping
    public List<Role> readRole() {
       
		return roleRepository.findAll();
    }
	
	@PostMapping
	public Role createUser(Role role) {
		role.setID(1);
		role.setName("Director");
		return roleRepository.saveAndFlush(role);
	}

	@DeleteMapping("/{id}")
	public String deleteRole(@PathVariable int id) {
		Role role = new Role();
		role.setID(id);
		roleRepository.findAll();
		roleRepository.delete(role);
		//id =1;
		//userRepository.deleteById(id);
		return null;
	}
	@PutMapping
	public Role update(@RequestBody  Role role) {
			
		return  roleRepository.save(role);
		
		
		
	}
}
