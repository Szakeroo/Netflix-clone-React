import { FirebaseContext } from "../context/firebase";
import {useContext, useEffect, useState} from "react";

export default function useContent(target) {
    const[content, setContent] = useState([]);
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .get()
            .then((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    docId: contentObj.id
                }))
                setContent(allContent)
            })
            .catch((error) => {
                console.log(error.message);
        })
    },[]);
    return { [target]: content };
}