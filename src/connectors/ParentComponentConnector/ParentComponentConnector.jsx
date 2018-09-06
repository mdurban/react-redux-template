import { connect } from 'react-redux'
import ParentComponent from '../../presenters/ParentComponent'

const mapDispatchToProps = dispatch => ({
  buttonAction: () => dispatch({ type: 'REDUCER', value: 'state changed from connector' })
})

export default connect(null, mapDispatchToProps)(ParentComponent)
