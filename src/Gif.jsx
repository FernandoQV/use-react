import React from "react";
import styled from 'styled-components'
const Container=styled.div`
border:1px solid cyan;
border-radius:15px;
display:flex;
flex-direction:column-reverse;
justify-content:flex-start;
align-items:center;
padding:1rem;
`;
const Image=styled.img`
max-width:100%;
max-height:250px;
object-fit:cover;
`;
const Texto=styled.h4`
margin:0;
`;
const Gif = ({ id,url, title }) => {
  return (
    <Container>
      <Image src={url} />
      <Texto>{title}</Texto>
      <Texto>{id}</Texto>
    </Container>
  );
};

export default Gif;
