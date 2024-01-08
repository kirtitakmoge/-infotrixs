
const QuoteBox=({newq,addLikes,getQuote,getTrendingQuote})=>
{
  if (!newq || !newq.quoteText) {
    
    return <div className="quote-box">No quote available</div>;
  }

    return(<>
    <div className="quote-box">
          <h2>Quote of the Day</h2>
          <p style={{ textAlign: 'left' }}>{newq.quoteText}</p>
          <p className="p-author">    - {newq.author}</p>
         
          <button className="like-btn" onClick={() => addLikes(newq.id)}>
            Like
          </button>
          <button className="new-quote-btn" onClick={() => getQuote()}>
            New Quote
          </button>
          <button className="trending-quote-btn" onClick={() => getTrendingQuote()}>
            Trending Quote
          </button>
        </div>
    </>);

}
export default QuoteBox;