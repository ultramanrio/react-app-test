import React, { useState } from 'react';
type UserProfileProps = { name: string, age: number}


function UserProfile(
    props : UserProfileProps
){
    const [age, setAge] = useState(props.age);
    const [name, setName] =  useState(props.name);
    const addAge = () => { 
        // alert(`Your age is ${age}` );
        
        setAge(age+1)
        setName(name+"1")
    }
    return(
        <div>
            <button onClick={() => addAge()}>Click Here!</button>
            <p>Hello {`Rio ${name}`} {props.age} {age+5}</p>
        </div>
    )
}



export default UserProfile;