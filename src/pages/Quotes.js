import styles from '.Quotes.module.js';

const DUMMY_QUOTES = [
    {
        id: 'q1',
        text: 'Fumar faz bem.',
        author: 'Sebastiao',
    },
    {
        id: 'q2',
        text: 'iaoéai',
        author: 'Seu Zézinho',
    }
]

const Quotes = () => {
    const renderedQuotes = DUMMY_QUOTES.map(quote => quote.text)

  return <div className={styles.quotes}>
      <button>Sort Ascending</button>
      {renderedQuotes}
  </div>
};

export default Quotes;
