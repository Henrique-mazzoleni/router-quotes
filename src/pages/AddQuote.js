import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm"
import { quotesActions } from "../store";

import styles from './AddQuote.module.css';

const AddQuote = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const addQuoteHandler = (author, text) => {
        const timestamp = new Date()
        dispatch(quotesActions.addQuote(
            {id: String(Math.random()), text, author, created_at: timestamp.toString(), comments: []}
        ))
        history.push('/quotes')
    }

    return <div className={styles.card}>
        <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
}

export default AddQuote;