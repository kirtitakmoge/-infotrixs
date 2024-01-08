const SearchBox=({newq,addLikes})=>
{
  
  if (!newq || !newq.quoteText) {
    console.log("Quote for this author is not availble");
    return <div className="quote-box">No quote available for this author</div>;
  }

    return(<>
    <div className="quote-box">
      <p> Your search Result</p>
      <h2>Quote by {newq.author} </h2>
          <p style={{ textAlign: 'left' }}>{newq.quoteText}</p>
          <p className="p-author">    - {newq.author}</p>
         
          <button className="like-btn" onClick={() => addLikes(newq.id)}>
            Like
          </button>
        </div>
    </>);

}
export default SearchBox;
