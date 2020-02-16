import {decrement, increment} from "../store/actions";
import App from "./App";
import {connect} from "react-redux";

const mapStateToProps = (state) => (
    {
        value: state.counter,
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        increment: () => setTimeout(() => dispatch(increment(1)), 100),
        decrement: () => setTimeout(() => dispatch(decrement(1)), 100),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
