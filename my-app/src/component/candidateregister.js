import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'


export const Candidateregister = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    addharnumber: "",
    phonenumber: "",
  });
  const FormHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const FormSubmission = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api/v1/candidate", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then((res) => {
      return res.json();
    }).catch((err) => {
      console.log(err);
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <Head>
      <Head1>
        <form >
          <Text>Add Details for Candidate Register</Text>
          <InputWrapper>
            <InputName>First Name:</InputName>
            <Input
              type="text"
              name="firstname" // Change "Name" to "firstname"
              value={data.firstname}
              onChange={FormHandler}
            />
          </InputWrapper>
          <InputWrapper>
            <InputName>Last Name:</InputName>
            <Input
              type="text"
              name="lastname" // Change "Name" to "lastname"
              value={data.lastname}
              onChange={FormHandler}
            />
          </InputWrapper>
          <InputWrapper>
            <InputName>Addhar Number:</InputName>
            <Input
              type="text"
              name="addharnumber" // Change "Addhar Number" to "addharnumber"
              value={data.addharnumber}
              onChange={FormHandler}
            />
          </InputWrapper>
          <InputWrapper>
            <InputName>Phone Number:</InputName>
            <Input
              type="text"
              name="phonenumber" // Change "productImageUri" to "phonenumber"
              value={data.phonenumber}
              onChange={FormHandler}
            />
          </InputWrapper>
          <Button type="submit" onClick={FormSubmission}>Submit</Button>
        </form>
      </Head1>
    </Head>
  )
}

const Text = styled.h1`
  color: white;
  font-size: 40px;
  margin-bottom: 20px;

  @media (max-width: 430px) and (max-height: 932px) {
    font-size: 12px; /* Adjusted font size for smaller screens */
  }
`;

const Head = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #14161a;
  
`


const Head1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #191b21;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 90vw; /* Adjusted width for smaller screens */

  @media (min-width: 768px) {
    width: 60vw; /* Adjusted width for desktop screens */
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const InputName = styled.div`
  color: white;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  background-color: #212631;
  color: white;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px; /* Adjusted font size for desktop screens */
  }
`;