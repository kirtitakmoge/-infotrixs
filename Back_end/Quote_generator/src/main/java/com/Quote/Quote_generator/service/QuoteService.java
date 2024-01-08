package com.Quote.Quote_generator.service;

import java.util.List;

import com.Quote.Quote_generator.model.Quote;


public interface QuoteService {
	public Quote findQuoteById(Integer quoteId);
	
	public Quote findQuoteByAuthor(String author);
	public Quote updateLike(Integer quoteId);
	public List<Quote> searchQuote();

	public Quote addQuote(Quote quote);

	public List<Quote> findMaxLikedQuote();
}
