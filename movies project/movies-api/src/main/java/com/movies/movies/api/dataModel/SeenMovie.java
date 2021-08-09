package com.movies.movies.api.dataModel;

import java.util.Date;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Table;

@Entity
//@Table
@Table(name = "SeenMovie", schema = "usersandmovies")
public class SeenMovie implements Serializable {
	private static final long serialVersionUID = 1L;
	@Column(name = "date")
	private Date date;
	@Id
	@Column(name = "id")
	private Integer id;

	public Integer getID() {
		return id;
	}

	public void setID(Integer iD) {
		id = iD;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
}
