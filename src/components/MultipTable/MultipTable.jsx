import s from './multip_table.module.css';
import { v4 as uuidv4 } from 'uuid';
const MultipTable = ({ number, numArray }) => {
  return (
    <table className={s.table}>
      <tbody>
        {numArray.map(i => {
          return (
            <tr key={uuidv4()} className={s.table_raw}>
              <td className={s.table_cell}>{number}</td>
              <td className={s.table_cell}>x</td>
              <td className={s.table_cell}>{i}</td>
              <td className={s.table_cell}>=</td>
              <td className={s.table_cell}>{number * i}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MultipTable;
