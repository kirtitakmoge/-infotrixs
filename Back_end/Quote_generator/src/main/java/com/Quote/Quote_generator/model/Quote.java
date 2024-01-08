package com.Quote.Quote_generator.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Quote {
	@Id
	
	    @GeneratedValue(strategy=GenerationType.AUTO)
	 
private Integer id;
	private Integer likes;
	private String author;
	public Quote(Integer id, Integer like, String author, String quoteText) {
		super();
		this.id = id;
		this.likes = like;
		this.author = author;
		this.quoteText = quoteText;
	}
	@Override
	public String toString() {
		return "Quote [id=" + id + ", like=" + likes+ ", author=" + author + ", quoteText=" + quoteText + "]";
	}
	public Quote() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getLikes() {
		return likes;
	}
	public void setLikes(Integer like) {
		this.likes= like;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getQuoteText() {
		return quoteText;
	}
	public void setQuoteText(String quoteText) {
		this.quoteText = quoteText;
	}
	private String quoteText;
}
	