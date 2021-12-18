import React, { useEffect, useState, FC } from 'react'
import axios from 'axios';

export interface UserInterface {
    userId: number,
    firstName: String,
    lastName: String,
    email: String
    role: String
}

interface UserProps {
    name: string,
    age: number,
    userObj: {
        address: string,
        available: boolean
    }
}


// export const User = ({ name, age}:UserProps) => {
export const User: FC<UserProps> = ({ name, age, userObj }: UserProps) => {
    const [userData, setUserData] = useState<UserInterface[]>();
    const [counter, setCounter] = useState<number>(0);
    const [selected, setSelected] = useState<string>("userId");
    const url = "http://localhost:8083/user";
    const url2 = "http://localhost:8083/api/hello";
    const url3 = `http://localhost:8083/user/paging/${counter}/5`;
    const url4 = `http://localhost:8083/user/pageable/${counter}/5`;
    const url5 = `http://localhost:8083/user/pageable/${counter}/5/${selected}`;

    async function getUsers() {
        console.log("User clicked Get Users");
        if (counter != null) {
            let res = await axios.get(url5)
            // console.log(res.data.content);
            setUserData(res.data.content)
        }
    }

    const loadUsers = () => {
        // setCounter(0);
        getUsers();
    }
    console.log(userData);

    function prevPage() {

        setCounter(counter ? counter - 1 : counter);




    }

    function nextPage() {

        if (userData ? userData[0].firstName !== "" : setCounter(0)) {
            setCounter(counter ? counter + 1 : 1);
        }
    }

    useEffect(() => {
        getUsers();
        return () => {

        }
    }, [counter, selected])

    const updateList = (e: any) => {
        setSelected(e.target.value)
        console.log("Hello");

    }

    return (
        <div>
            <button onClick={loadUsers}>Get All Users {name}, {age}</button>
            <div className="" style={{ marginTop: "30px", color: "yellow" }} >
                Users Table
            </div>
            <div className="" style={{ display: "flex", justifyContent: "center", fontSize: "1.4rem" }} >

                <table style={{ width: "44vw", padding: "" }}>

                    <thead>
                        <tr style={{ color: "yellow" }}>
                            <th>User Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>User Role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {userData?.map(x => {
                            return (
                                <tr className="" key={x.userId}>
                                    <td> {x.userId} </td>
                                    <td> {x.firstName} </td>
                                    <td> {x.lastName} </td>
                                    <td> {x.email} </td>
                                    <td> {x.role} </td>
                                </tr>
                            )
                        })
                        }

                    </tbody>

                </table>
            </div>
            <div className="">
                <button onClick={prevPage}> &lt;-Previous Record</button>
                <button onClick={nextPage}>Next Record-&gt; </button>
            </div>

            <div className="">
                {userObj.address} Lives at {userObj.available ? "Yes" : "No"}
                <br />
                <label htmlFor="searchBy">Search By </label>
                <select name="searchBy" id="orderBy" onChange={updateList} defaultValue={"email"}>

                    <option value="firstName" >First Name</option>
                    <option value="userId" >User Id</option>
                    <option value="email">Email</option>
                    <option value="role">User Role</option>
                </select>
                <br />
                <input type="text" value={selected} />
                <button type="submit">SUbmit1</button>
                <input type="submit" value="SUbmit" />
            </div>

        </div>
    )
}
