package com.movies.movies.api.dataModel;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Table;

@Entity
//@Table
@Table(name = "Address", schema = "usersandmovies")
public class Address implements Serializable {
	/**
		 * 
		 */
	private static final long serialVersionUID = 1L;
	@Column(name = "country")
	private String country;
	@Column(name = "area")
	private String area;
	@Column(name = "street")
	private String street;
	@Column(name = "number")
	private String number;
	@Id
	@Column(name = "id")
	private Integer id;

	public Integer getID() {
		return id;
	}

	public void setID(Integer iD) {
		id = iD;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

}
