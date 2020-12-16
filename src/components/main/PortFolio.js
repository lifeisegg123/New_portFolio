import React, { useState } from "react";
import styled from "styled-components";

import ProjectBox from "./ProjectBox";
import Title from "./Title";
import Modal from "./Modal";
import portFolioData from "portfolioData";
const PortFolio = () => {
  const [modal, setModal] = useState(null);
  const handleModal = (event) => {
    const [target] = portFolioData.filter(
      ({ title }) => event.currentTarget.innerText === title
    );
    setModal(target);
  };
  const closeModal = () => setModal(null);
  return (
    <>
      {modal && <Modal {...modal} closeModal={closeModal} />}
      <div id="portfolio">
        <Title>PortFolio</Title>
        <GridBox>
          {portFolioData.map(({ logo, title, backgroundColor }) => (
            <ProjectBox
              onClick={handleModal}
              key={title}
              img={logo}
              title={title}
              backgroundColor={backgroundColor}
            ></ProjectBox>
          ))}
        </GridBox>
      </div>
    </>
  );
};

export default PortFolio;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;
