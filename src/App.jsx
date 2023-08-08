import "./styles.css"
import { useEffect, useState } from "react"

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
        setQuote(data[0])
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }

  return (
    <main>
      <h1>Quote Generator</h1>
      <section>
        <button onClick={getNewQuote}>New Quote</button>
        <h2>
          <span>“</span>
          {quote?.text}
        </h2>
        <i>-  {quote?.author}</i>
      </section>
    </main>
  )
}

export default App