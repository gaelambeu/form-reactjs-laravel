import useAuthContext from "../context/AuthContext";
// import { useEffect } from "react";

const Home = () => {
    // const { user, getUser } = useAuthContext();
    const { user } = useAuthContext();

    // useEffect(() => {
    //     if (!user) {
    //         getUser();
    //     }
    // }, [])

    return (
        <div className="max-w-7xl mx-auto mt-12">{user?.name}</div>
    )
}

export default Home;