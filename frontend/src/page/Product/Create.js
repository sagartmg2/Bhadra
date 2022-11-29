import axios from 'axios';
import Reac,{useEffect} from 'react';

const Create = () => {
    useEffect(() => {
        // axios.post(`${process.env.REACT_APP_SERVER_URL}/products`,{name:"axios product"},{
        //     headers: {
        //       Authorization: `Bearer ${localStorage.getItem("access_token")}`
        //     }
        //   })
        //     .then(user_res => {
        //       console.log({ user_res })
        //     //   dispatch(setUser(user_res.data))
        //     }).catch(err => {
        //       console.log(err)
        //     })
    }, []);
    return (
        <div>
            <form>
                createa ...f
            </form>
        </div>
    );
}

export default Create;
