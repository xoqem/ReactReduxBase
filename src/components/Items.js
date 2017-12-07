import { connect } from 'react-redux';
import Item from 'components/Item';
import React from 'react';

class Items extends React.Component {
  render() {
    const { items } = this.props;

    const itemComponents = items.map((item, index) => (
      <Item index={index} key={index} text={item} />
    ));

    return (
      <div>
        <h2>Items</h2>
        {itemComponents}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

export default connect(mapStateToProps)(Items);
