import s from './multip_table.module.css';

const MultipTable = ({ number, numArray }) => {
  return (
    <table className={s.table}>
      {numArray.map(i => {
        return (
          <tr key={i} className={s.table_raw}>
            <td className={s.table_cell}>{number}</td>
            <td className={s.table_cell}>x</td>
            <td className={s.table_cell}>{i}</td>
            <td className={s.table_cell}>=</td>
            <td className={s.table_cell}>{number * i}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default MultipTable;
