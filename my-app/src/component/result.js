import React, { useState, useEffect } from 'react'
import Layout from './Layout';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
var total=0;
var size=0;

const Result = () => {
    const [candidate, setCandidate] = useState(null);
    const [change, setChange] = useState();
    const [ch, setCh]= useState();
    const [vote, setVote] = useState();

    // useEffect(()=>{
    //     fetch("http://localhost:3001/api/v1/getvote",{
    //         method:"GET",
    //     }).then((response)=>{
    //         return response.json()
    //     }).then((response)=>{
    //         console.log("Hello world");
    //         console.log(response);
    //         // setVote(response.data);
    //     })
    // }, [ch]);

    useEffect(() => {
        console.log(candidate);
        if(total===0){
        console.log(size);

        for(var i=0;i<size;i++){
            total= total+ candidate[i].vote;
            console.log(total);
        }
        // total= total/2;
        console.log(total);}
    }, [candidate])

    useEffect(() => {
        fetch("http://localhost:3001/api/v1/getcandidate", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((response) => {
                size= response.data.length;
                setCandidate(response.data);
                // console.log(response.data);
                // console.log(candidate); // This will still log 'null' due to closure
            })
            .catch((err) => console.log(err));
            console.log("Hello world");
        
        fetch("http://localhost:3001/api/v1/getvote",{
            method:"GET",
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response);
            // setVote(response.data);
        })
    }, [change]);
    return (
        <>
            <Layout />
            <Head>
                <H>
                </H>
                <Head2>
                    <Head3>
                        <Text>FirstName</Text>
                        <Text>Vote</Text>
                        <Text>Percentage</Text>
                    </Head3>
                    {candidate == null ? <></> :
                            (candidate.map((candidate, index) => (
                                <Head3>
                                    <Text>{candidate.firstname}</Text>
                                    <Text>{candidate.vote}</Text>
                                    <Text>{((candidate.vote*100)/total)}</Text>
                                </Head3>

                                // <Head3>
                                //     <Text>Candidate B</Text>
                                //     <Link to="Voterregister"><Button>VOTE</Button></Link>
                                // </Head3>
                                // <Head3>
                                //     <Text>Candidate C</Text>
                                //     <Link to="Voterregister"><Button>VOTE</Button></Link>
                                // </Head3>
                                // <Head3>
                                //     <Text>Candidate D</Text>
                                //     <Link to="Voterregister"><Button>VOTE</Button></Link>
                                // </Head3>
                            )))
                    }
                </Head2>

            </Head>
        </>
    )
}
export default Result;

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


