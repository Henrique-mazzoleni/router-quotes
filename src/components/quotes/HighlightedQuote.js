import styles from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {
    return (
        <div className={styles.quote}>
            <h2>{props.text}</h2>
            <h3>{props.author}</h3>
        </div>
    )
}

export default HighlightedQuote;