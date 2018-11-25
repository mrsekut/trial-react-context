import * as React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrement, increment } from '../modules/index';
import DucksComponent from '../components/DucksComponent';

const mapStateToProps = state => ({
  num: state.reducer.num
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ decrement, increment }, dispatch);

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <DucksComponent num={this.props.num} />
        <button onClick={() => this.props.increment(1)}>+</button>
        <button onClick={() => this.props.decrement(1)}>-</button>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
