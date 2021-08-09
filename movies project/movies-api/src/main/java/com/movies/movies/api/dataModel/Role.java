package com.movies.movies.api.dataModel;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Table;

@Entity
//@Table
@Table(name = "Role", schema = "usersandmovies")
public class Role implements Serializable {
	private static final long serialVersionUID = 1L;
	@Column(name = "name")
	private String name;
	@Id
	@Column(name = "id")
	private Integer id;

	public Integer getID() {
		return id;
	}

	public void setID(Integer iD) {
		id = iD;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
