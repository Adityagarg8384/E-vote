import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Filecontext } from '../context/FIlecontext';
import styled from 'styled-components';
import { useTodocontext } from '../context/FIlecontext';

export const Voterregister = () => {
    const { changeData } = useTodocontext();
    const [candidateid, setCandidateid] = useState(null);

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        addharNumber: "",
        phoneNumber: ""
    });


    const FormHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    // useEffect(() => {
    //     // console.log(da);
    // }, [])
    const upvote = () => {
        console.log("hello world");

        // fetch()

        fetch(`http://localhost:3001/api/v1/vote/${candidateid}`, {
            method: 'PUT',
            
        }).then((response)=>{
            return response.json();
        }).catch((err)=>{
            console.log(err);
        }).then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
        })

    }
    useEffect(() => {
        console.log("Candidate id updated:", candidateid);
        if (candidateid !== null) {
            upvote();
        }
    }, [candidateid]);

    const datasubmission = (e) => {
        e.preventDefault();
        console.log(data.candidate);
        

        fetch("http://localhost:3001/api/v1/getcandidate", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((response) => {
                // setCandidatename(response);
                console.log(response);
                // console.log(response.data.length);
                var flag = 0;
                for (var i = 0; i < response.data.length; i++) {
                    // console.log(response.data[i].firstname);
                    // console.log(data.candidate);
                    if (response.data[i].firstname === data.candidate) {
                        console.log("Hello world");
                        setCandidateid(response.data[i]._id);
                        flag = 1;
                        break;
                    }
                }
                if(flag==0){
                    alert("Candidate Name doesn't match to any registered candidate");
                }
                console.log(candidateid);
                console.log(data); 
            })
            .catch((err) => console.log(err))
            // console.log(flag);

        // console.log(data);
    }

    return (
        <Head>
            <Head1>
                {/* <h>{props.candidateId}</h> */}
                <form>
                    <Text>Add Details for Voter Register</Text>
                    <InputWrapper>
                        <InputName>First Name:</InputName>
                        <Input
                            type="text"
                            name="firstName"
                            value={data.firstName}
                            onChange={FormHandler}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Last Name:</InputName>
                        <Input
                            type="text"
                            name="lastName"
                            value={data.lastName}
                            onChange={FormHandler}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Addhar Number:</InputName>
                        <Input
                            type="text"
                            name="addharNumber"
                            value={data.addharNumber}
                            onChange={FormHandler}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Phone Number:</InputName>
                        <Input
                            type="text"
                            name="phoneNumber"
                            value={data.phoneNumber}
                            onChange={FormHandler}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Name of Candidate:</InputName>
                        <Input
                            type="text"
                            name="candidate"
                            value={data.candidate}
                            onChange={FormHandler}
                        />
                    </InputWrapper>
                    <Button type="submit" on onClick={datasubmission}>Submit</Button>
                </form>
            </Head1>
        </Head>
    );
};

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
`;

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
