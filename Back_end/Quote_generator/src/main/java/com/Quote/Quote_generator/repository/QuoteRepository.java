package com.Quote.Quote_generator.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.Quote.Quote_generator.model.Quote;

@Repository
public interface QuoteRepository extends JpaRepository<Quote,Integer>{

	 @Query("SELECT q FROM Quote q ORDER BY q.likes DESC")
	   List<Quote> findQuoteWithMaxLikes();
	  @Query("SELECT q FROM Quote q WHERE LOWER(q.author) LIKE LOWER(CONCAT('%', :author, '%'))")
	Optional<Quote> findByAuthor(String author);

}
