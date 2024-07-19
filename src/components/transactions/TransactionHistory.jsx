import css from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
    return (
      <table className={css.table}>
        <thead className={css.thead}>
          <tr className={css.tr}>
            <th className={css.th}>Type</th>
            <th className={css.th}> Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr className={css.trgray} key={id}>
              <td className={css.td}>{type}</td>
              <td className={css.td}>{amount}</td>
              <td className={css.td}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default TransactionHistory;