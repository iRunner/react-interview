import { useState } from "react";
import styled from "styled-components";


function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    const list = [];

    const onSubmit = () => {
        list.append({ email, name});
        setName('');
        setEmail('');
    }

    

  return (
    <div>
        <input value={name} onChange={e => setName(e.target.value) } />
        <input value={email} onChange={e => setEmail(e.target.value)} />
        <button onClick={onSubmit} >Submit</button>
        { list.map(user => (<p>{user.email}</p>)) }
    </div>
  );
}

export default Home;
