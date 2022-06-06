import QuoteForm from "../components/quotes/QuoteForm"

import styles from './AddQuote.module.css';

const AddQuote = () => {
    return <div className={styles.card}>
        <QuoteForm />
    </div>
}

export default AddQuote;