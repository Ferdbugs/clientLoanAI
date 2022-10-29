import { connect } from "react-redux"
import Content from "../components/Content"
import { loadData, addData, deleteData } from "../actions/index.js"

const mapStateToProps = (state) => ({
  tableData: state.data,
})
const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(loadData()),
  addData: () => dispatch(addData()),
  deleteData: () => dispatch(deleteData()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Content)
