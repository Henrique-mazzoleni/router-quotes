import styles from './CommentItem.module.css';

const CommentItem = (props) => {
    return (
        <p className={styles.item}>{props.children}</p>
    )
}

export default CommentItem;