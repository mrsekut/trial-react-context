// trial Container
import * as React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrementAmount, incrementAmount } from '../modules/index';
import DucksComponent from '../components/DucksComponent';

const mapStateToProps = state => ({
  num: state.reducer.num
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ decrementAmount, incrementAmount }, dispatch);

// @connect( mapStateToProps, mapDispatchToProps)
class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <DucksComponent num={this.props.num} />
        <button onClick={() => this.props.incrementAmount(1)}>+</button>
        <button onClick={() => this.props.decrementAmount(1)}>-</button>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
