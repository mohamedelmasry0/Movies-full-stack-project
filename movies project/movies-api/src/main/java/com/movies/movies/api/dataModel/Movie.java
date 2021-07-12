package com.movies.movies.api.dataModel;

import java.util.Date;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Table;

@Entity
//@Table
@Table(name = "Movie", schema = "usersandmovies")
public class Movie implements Serializable {
	private static final long serialVersionUID = 1L;
	private String title;
	private Date added;
	@Id
	@Column(name = "external_id")
	private Integer external_id;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Date getAdded() {
		return added;
	}

	public void setAdded(Date added) {
		this.added = added;
	}

	public Integer getExternal_id() {
		return external_id;
	}

	public void setExternal_id(Integer external_id) {
		this.external_id = external_id;
	}

}
