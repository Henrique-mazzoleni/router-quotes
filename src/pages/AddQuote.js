import QuoteForm from "../components/quotes/QuoteForm"

import styles from './AddQuote.module.css';

const AddQuote = (props) => {
    const addQuoteHandler = (author, text) => {
        props.onAddQuote(author, text)
    }

    return <div className={styles.card}>
        <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
}

export default AddQuote;