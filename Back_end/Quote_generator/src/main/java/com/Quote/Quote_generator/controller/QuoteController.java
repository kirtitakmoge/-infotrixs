package com.Quote.Quote_generator.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.Quote.Quote_generator.model.Quote;
import com.Quote.Quote_generator.repository.QuoteRepository;
import com.Quote.Quote_generator.service.QuoteService;


@RestController
@RequestMapping("/api/quotes")
@CrossOrigin(origins = "http://localhost:3000")
public class QuoteController {
	@Autowired
	private QuoteService quoteService;
	@Autowired
	private QuoteRepository quoteRepository;

@GetMapping("/quotecontroller")
public ResponseEntity<Quote> hellouser()
	{
	Quote q=new Quote();
	q.setId(2);
	q.setQuoteText("new users");
	q.setLikes(0);
	q.setAuthor("isha");
	quoteRepository.save(q);
	
	System.out.println("Welcome Quote Api ");
	return new ResponseEntity<Quote>(q,HttpStatus.OK);
	
}
@PostMapping("/addquote")
public ResponseEntity<Quote> addQuote(@RequestBody Quote quote)
{
	Quote q=quoteService.addQuote(quote);
	System.out.println("new quote is added"+quote);
	return new ResponseEntity<Quote>(q,HttpStatus.OK);
	
}
@GetMapping("/allquotes")
public ResponseEntity<List<Quote>>getAllQuotes()
	{
	
	List<Quote> quotes=quoteService.searchQuote();
	System.out.println("quotes are retrived from database");
	return new ResponseEntity<List<Quote>>(quotes,HttpStatus.OK);
	
}
@GetMapping("/update/{quoteId}")
public ResponseEntity<Quote> updateLike(@PathVariable Integer quoteId)
{
Quote quotes=quoteService.updateLike(quoteId);
System.out.println("quote's likes are updated");
return new ResponseEntity<Quote>(quotes,HttpStatus.OK);

}
@GetMapping("/trendingquote")
public ResponseEntity<List<Quote>> getMaximumLikedQuote()
{

List<Quote> quotes=quoteService.findMaxLikedQuote();
System.out.println(" trending quotes are retrived from database");
return new ResponseEntity<List<Quote>>(quotes,HttpStatus.OK);

}

@GetMapping("/findquotes/{author}")
public ResponseEntity<Quote>getQuoteByAuthor(@PathVariable String author)
	{
	Quote quotes=quoteService.findQuoteByAuthor(author);
	if(quotes==null)
	{
		System.out.println("Given author quote is not available");
	}
	
	return new ResponseEntity<Quote>(quotes,HttpStatus.OK);
	
}

}
