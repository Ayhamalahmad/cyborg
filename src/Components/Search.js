import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import{Div} from './Files';
function Search() {
  return (
    <div className="search">
       <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="search" className="search-input" placeholder="Type Somthing" />
    </div>
  );
}
export default Search;
