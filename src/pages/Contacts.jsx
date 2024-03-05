import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { Loader } from "components/Loader/Loader";
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { selectError, selectIsLoading } from "../redux/contacts/selectors";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Your contacts</title>
            </Helmet>
            <div>
                {isLoading && !error && <Loader />}
                <h1>Phonebook</h1>
                {error && <ErrorMessage />}
                <ContactForm />
                <div>
                    <h2>Contacts</h2>
                    <Filter />
                    <ContactList />
                </div>
            </div>
        </>
    );
};
