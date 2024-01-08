package com.Quote.Quote_generator.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Quote.Quote_generator.model.Quote;
import com.Quote.Quote_generator.repository.QuoteRepository;


@Service
public class QuoteServiceImplementation implements QuoteService {
	@Autowired
private QuoteRepository quoteRepository;
	@Override
	public Quote findQuoteById(Integer quoteId) {
		Optional<Quote> opt=quoteRepository.findById(quoteId);
		if(opt.isPresent())
			return opt.get();
		else {System.out.println("Qoute not found");
		return null;
		}
		
		
	}

	@Override
	public Quote findQuoteByAuthor(String author) {
		Optional<Quote> opt=quoteRepository.findByAuthor(author);
		if(opt.isPresent())
			return opt.get();
		else {System.out.println("Quote not found");
		return null;}
	}

	@Override
	public Quote updateLike(Integer quoteId) {
		Optional<Quote> quote=quoteRepository.findById(quoteId);
		if(quote.isPresent())
		{
			Quote q=quote.get();
			q.setLikes(q.getLikes()+1);
			return quoteRepository.save(q);
			
			
		}
		else return null;
	}

	@Override
	public List<Quote> searchQuote() {
		List<Quote> users=quoteRepository.findAll();
		return users;
	
	}

	@Override
	public Quote addQuote(Quote quote) {
		quoteRepository.save(quote);
		return quote;
	}

	@Override
	public List<Quote> findMaxLikedQuote() {

List<Quote> maxLikedQuote = (List<Quote>) quoteRepository.findQuoteWithMaxLikes();
System.out.println("Quote with maximum likes: " + maxLikedQuote);
		return maxLikedQuote;
	}

}
