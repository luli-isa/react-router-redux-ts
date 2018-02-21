import Hello from '../components/Hello';
import * as actions from '../actions/';
import { RootState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
//import { withRouter } from 'react-router-dom'

export function mapStateToProps(root: RootState) {
  return {
    enthusiasmLevel: root.app.enthusiasmLevel || 1,
    name: root.app.languageName || "ciao",
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
