import { useStore } from "../../store"
import BaseLayout from "../../layouts/private/BaseLayout";

function Overview(){

    const { store, dispatch } = useStore()

    console.log(store.user.loggedIn, "store here")
    const updateLogged = () => {
        dispatch({
            type: "user/logger",
            payload: true
        })
    }
    return (
        <>
         <h1>Overview</h1>
         <button onClick={updateLogged}> Logger </button>
        </>
    )
}


Overview.getLayout = BaseLayout

export default Overview;