const TrendQuote = ({ newq }) => {
    if (!newq || newq.length === 0) {
      return <div className="quote-box">No quote available</div>;
    }
  
    return (
      <>
        <div className="quote-box">
        <h2 >Trending Top 5 quotes</h2>

          {newq.slice(0, 5).map((t, id) => (
            <div className="trend-div" key={id}>
             
              <p style={{ textAlign: 'left' }}>{id+1}.. <span>{t.quoteText}</span></p>
              <p className="p-author">- {t.author}</p>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default TrendQuote;
  