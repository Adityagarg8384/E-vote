import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { Filecontext } from '../context/FIlecontext';
import { useTodocontext } from '../context/FIlecontext';
// import { candidate } from '../../../server/controller/candidate';

export const Main = () => {
    const [data, setData] = useState(null);
    const { updateDa, da } = useTodocontext();
    const [change, setChange] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3001/api/v1/getcandidate", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((response) => {
                setData(response.data);
                console.log(response.data);
                console.log(data); // This will still log 'null' due to closure
            })
            .catch((err) => console.log(err));
    }, [change]);
    useEffect(()=>{
        console.log(data);
    }, [data]);

    const changeata = () => {
        console.log(updateDa);
        console.log(da);
        updateDa(da);
        console.log("H");
    }

    return (
        <>
            <Layout />
            <Head>

                <H>
                    <div>{da}</div>
                    <Link to={{
                        pathname: 'Candidateregister',
                        state: { yourData: "1" }
                    }}><Button1>Candidate Register</Button1></Link>
                </H>
                <Head2>
                    {data == null ? (
                        <></> // Render nothing if data is null
                    ) : (
                        <>
                            {data.map((item, index) => (
                                <Head3 key={index}>
                                    <Text>{item.firstname}</Text>
                                    <Link to="Voterregister"><Button onClick={changeata}>VOTE</Button></Link>
                                </Head3>
                            ))}
                            
                        </>
                    )}
                </Head2>

                <H>
                    <Link to="Result"><Button1>See Result</Button1></Link>
                </H>
            </Head>
        </>
    );
}

// Styled components...

const Button1 = styled.button`
margin-bottom: 2vh;
height: 5vh;
font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    background-color: #4CAF50; /* Green */
    color: white;
    border: 2px solid #4CAF50;
    border-radius: 5px;
    cursor: pointer;
`

const Text = styled.h3`
color: white;
`
const Head = styled.div`
height: 100vh;
width: 100vw;
// margin-top: 10px;
display: flex;
justify-content: start;

align-items: center;
flex-direction: column;
background-color: #14161a;

`

const Head2 = styled.div`
marigin-top: 10vh;
display: flex;
flex-direction: column;
justify-content: center;
 /* Updated background color */
 background-color: #191b21;
align-items: center;
`
const Head3 = styled.div`
// margin-left: 30%;
// margin-right: 50%;
width: 80vw;
display: flex;
justify-content: space-around;
align-items: center;
`
const H = styled.div`
margin-top: 2%
`

// const Button = styled.button`
// height: 5vh;
// width: 10vw;
//     font-size: 14px;
//     font-weight: bold;
//     text-align: center;
//     text-decoration: none;
//     background-color: #4CAF50; /* Green */
//     color: white;
//     border: 2px solid #4CAF50;
//     border-radius: 5px;
//     cursor: pointer;

//     :hover {
//         background-color: #45a049; 
//     }

//     :active {
//         background-color: #3e8e41;
//         border-color: #3e8e41;
//     }

//     @media (min-width: 768px) {
//         width: 20%; /* Adjust width for desktop */
//     }
// `;

const Button = styled.button`
margin-bottom: 2vh;
height: 5vh;
width: 10vw;
font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    background-color: #4CAF50; /* Green */
    color: white;
    border: 2px solid #4CAF50;
    border-radius: 5px;
    cursor: pointer;
`
