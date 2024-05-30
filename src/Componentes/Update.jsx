import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedUsers = useLoaderData();
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser ={name, email}
        console.log(name, email);

        fetch(`http://localhost:5000/users/${loadedUsers._id}`,{
            method: "PUT",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount>0){
                alert('user updated sucessfully')
            }
        })

    }
    return (
        <div>
            <h3>Updated information of : {loadedUsers.name}</h3>
            <form onSubmit={handleUpdate} >
                <input type="text" name="name" defaultValue={loadedUsers?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadedUsers?.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;