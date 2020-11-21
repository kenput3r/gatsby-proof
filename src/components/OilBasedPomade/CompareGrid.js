import React from "react"
import styled from "styled-components"

import TableRow from "./TableRow"
import HoldArrow from "../../images/hold.png"
import ShineArrow from "../../images/shine.png"

const Section = styled.div`
  font-family: NexaRust;
`
const Grid = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
`
const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => props.flex};
  justify-content: top;

  &.hold {
    min-width: 33px;
    @media (max-width: 428px) {
      flex: 1;
    }
    img {
      height: 500px;
      align-self: flex-end;
    }
  }

  &.overflow-x {
    overflow-x: scroll;
    padding-bottom: 45px;
  }
`
const TableWrapper = styled.div`
  position: relative;
  width: 600px;
`
const Table = styled.table`
  border: 1px solid #000;
  border-bottom: 1px solid #000;
  height: 500px;
  width: 600px;
  margin-bottom: 0;

  td {
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    width: 10%;
  }
`
const Item = styled.div`
  background-color: ${props => props.color};
  border: 1px solid #000;
  border-radius: 50%;
  color: ${props => props.textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  width: 70px;
  height: 70px;
  padding: 2px;
  line-height: 1;
  position: absolute;
  top: calc(${props => props.top} - 35px);
  left: calc(${props => props.left} - 35px);
`
const table_rows = []
const items = [
  {
    name: "Firme Clay Pomade",
    color: "#c96f54",
    top: "20%",
    left: "10%",
    textColor: "#000",
  },
  {
    name: "Matte Pomade",
    color: "#62a96f",
    top: "50%",
    left: "20%",
    textColor: "#000",
  },
  {
    name: "Hairspray",
    color: "#000",
    top: "48%",
    left: "40%",
    textColor: "#de9026",
  },
  {
    name: "Hair Cream",
    color: "#5d2259",
    top: "80%",
    left: "40%",
    textColor: "#de9026",
  },
  {
    name: "Grooming Spray",
    color: "#451917",
    top: "56%",
    left: "50%",
    textColor: "#de9026",
  },
  {
    name: "Firme (Strong) Hold Pomade",
    color: "#54230e",
    top: "10%",
    left: "70%",
    textColor: "#de9026",
  },
  {
    name: "Original Hold Pomade",
    color: "#650912",
    top: "50%",
    left: "70%",
    textColor: "#de9026",
  },
  {
    name: "Light Hold Pomade",
    color: "#85d2e3",
    top: "80%",
    left: "70%",
    textColor: "#000",
  },
  {
    name: "Oil Based Pomade",
    color: "#a7712e",
    top: "50%",
    left: "90%",
    textColor: "#FFF",
  },
]
for (let i = 0; i < 10; i++) {
  table_rows.push(<TableRow key={`row-${i}`} />)
}
const CompareGrid = () => {
  return (
    <Section>
      <Grid>
        <GridItem flex="2" className="hold">
          <img src={HoldArrow} alt="Hold Level" />
        </GridItem>
        <GridItem className="overflow-x" flex="8">
          <TableWrapper>
            <Table>{table_rows.map(row => row)}</Table>
            {items.map((item, index) => (
              <Item
                key={`item-${index}`}
                color={item.color}
                textColor={item.textColor}
                top={item.top}
                left={item.left}
              >
                {item.name}
              </Item>
            ))}
            <img
              src={ShineArrow}
              alt="Shine Level"
              style={{ position: "absolute", marginTop: 10 }}
            />
          </TableWrapper>
        </GridItem>
      </Grid>
    </Section>
  )
}

export default CompareGrid
