import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../../redux/filters/slice";
import { selectNameFilter } from "../../../redux/filters/selectors";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(setQuery(event.target.value));
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
    </div>
  );
};

export default SearchBox;
