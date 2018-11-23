import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import Button from "components/CustomButtons/Button"

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>Equipe 3</h4>
            <p className={classes.cardCategoryWhite}>
              Avaliação do seu Grupo.
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="success"
              tableHead={["Aluno", "Nota"]}
              tableData={[
                ["Bernardo ", <select><option>1</option><option>2</option><option>4</option><option>6</option><option>8</option><option>10</option></select>],
                ["Giovanni", <select><option>1</option><option>2</option><option>4</option><option>6</option><option>8</option><option>10</option></select>],
                ["Guilherme", <select><option>1</option><option>2</option><option>4</option><option>6</option><option>8</option><option>10</option></select>],
                ["João", <select><option>1</option><option>2</option><option>4</option><option>6</option><option>8</option><option>10</option></select>],
                ["Mauricio", <select><option>1</option><option>2</option><option>4</option><option>6</option><option>8</option><option>10</option></select>],
                ["Marx", <select><option>1</option><option>2</option><option>4</option><option>6</option><option>8</option><option>10</option></select>],
                ["Rodrigo", <select><option>1</option><option>2</option><option>4</option><option>6</option><option>8</option><option>10</option></select>],
                ["Thiago", <select><option>1</option><option>2</option><option>4</option><option>6</option><option>8</option><option>10</option></select>],
              ]}
            />
          </CardBody>
          <Button color="success" href="/equipe3">Adicionar</Button>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(TableList);
