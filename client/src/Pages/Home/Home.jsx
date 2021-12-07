import useAuthUser from "../../Hooks/useAuthUser";

function Home() {
    const authUser = useAuthUser()
    
    return (
        <>
            <h3>First Name: {authUser.user_fname}</h3>
            <h3>Last Name: {authUser.user_lname}</h3>
            <h3>Email: {authUser.user_email}</h3>
            <small>Join Date: {authUser.user_date ? authUser.user_date.split('.')[0] : ''}</small>
        </>
    )
}

export default Home;
