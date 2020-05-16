import { connect } from 'react-redux';
import LoginPanel from '../components/LoginPanel';
import { common} from 'mallureport-common-lib'
import { onLogin } from '../actions/actions'


const mapStateToProps = (state, ownProps) => ({
  status : state.loginReducer.login.status? state.loginReducer.login.status:"",
  initialValues:
  {
    username: state.loginReducer.login.username?state.loginReducer.login.userName:"",
    password: state.loginReducer.login.password?state.loginReducer.login.password:""
  },
  

})

const mapDispatchToProps = (dispatch) => ({
  onLogin: () => {
    dispatch(common.dispatchAction(onLogin)());
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginPanel)