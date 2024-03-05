import { useSelector } from "react-redux"
import { selectError } from "../../redux/contacts/selectors"

export const ErrorMessage = () => {
    const message = useSelector(selectError);
    
    return (
        <div>{message}</div>
    );
}
