import "./ManegeProduct.css";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faPlus,
  faTasks,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Table } from "react-bootstrap";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);
const ManegeProduct = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={2}>
            <Paper className={classes.paper} id="leftColumn">
              <div>
                <FontAwesomeIcon icon={faTasks} />
                <Link className="adminLink" to="/ManegeProduct">
                  Manage Product
                </Link>
              </div>
              <div>
                <FontAwesomeIcon icon={faPlus} />
                <Link className="adminLink" to="/AddProduct">
                  AddProduct
                </Link>
              </div>
              <div>
                <FontAwesomeIcon icon={faPencilAlt} />
                <Link className="adminLink" to="/EditProduct">
                  Edit Product
                </Link>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={9}>
            <h3 className="addProductHeading">Manage Product</h3>
        
            <div className="hr"></div>
            <div className="table_manegeProduct">
            <Table striped bordered hover className="tableContent">
              <thead>
                <tr>
                  <th>Product Price</th>
                  <th>Wight</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>product name</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td><FontAwesomeIcon icon={faTrash}/></td>
                </tr>
              </tbody>
            </Table>
            </div>
            
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ManegeProduct;
