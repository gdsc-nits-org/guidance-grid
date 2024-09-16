import { getAuth } from "firebase/auth";

const getIdToken = async () => {
    const auth = getAuth();
    if(!auth) return null;
    return await auth.currentUser.getIdToken(true);
}

export { getIdToken }