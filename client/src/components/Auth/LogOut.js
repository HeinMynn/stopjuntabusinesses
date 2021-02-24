import { useHistory } from "react-router-dom";
import { logout } from "../../utils";

function LogOut(props) {
  logout();
  const history = useHistory();
  history.push("/");
  return null;
}

export default LogOut;
