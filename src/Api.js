import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { setRecordData } from "./store/Slices/RecordDataSlice";
const Url = "https://api.jsonbin.io/v3/b/648078908e4aa6225eaa9547";
function Api(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(Url);
      const json = await data.json();
      dispatch(setRecordData(json.record));
    };
    fetchData();
  }, []);
}
export default Api;
