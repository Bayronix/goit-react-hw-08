import { useDispatch, useSelector } from "react-redux";
import { setQuery, setQueryNumber } from "../../../redux/filters/slice";
import {
  selectNameFilter,
  selectNumberFilter,
} from "../../../redux/filters/selectors"; // Імпорт селекторів з правильного файлу
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectNameFilter);
  const queryNum = useSelector(selectNumberFilter);

  const handleChange = (event) => {
    dispatch(setQuery(event.target.value));
  };

  const handleChangeNumber = (event) => {
    dispatch(setQueryNumber(event.target.value));
  };

  return (
    <div className={styles.form}>
      <h2>Search Contacts</h2>
      <input
        className={styles.field}
        type="text"
        placeholder="Search by name"
        value={query}
        onChange={handleChange}
      />
      <input
        className={styles.field}
        type="text"
        placeholder="Search by number"
        value={queryNum}
        onChange={handleChangeNumber}
      />
    </div>
  );
};

export default SearchBox;
