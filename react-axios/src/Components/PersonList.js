import axios from "axios";
import { useState, useEffect } from "react";
import API from "../API";
function PersonList() {
    const [personList, setPersonList] = useState([]);
    const [name, setName] = useState("");
    useEffect(() => {
        API.get(`/users`)
            .then(res => {
                const persons = res.data;
                console.log(persons);
                setPersonList(persons);
            });
    }, []);
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const user = {
            name: name,
        };
        API.post(`/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            });
    }
    return (<>
        <ul>
            {personList.map((ele, ind) =>
                <li key={ele.id}>{ele.name}</li>
            )}
        </ul>
        <br />
        <form onSubmit={handleSubmit}>
            <label>
                Person Name:
                <input
                    type="text"
                    name="name"
                    onChange={(evt) => { setName(evt.target.value) }}
                    value={name} />
            </label>
            <button type="submit">Add</button>
        </form>
    </>)
}

export default PersonList;