import React from 'react';

class ListMakanan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: this.props.pic
    };
  }

  render() {
    return (
      <div>
        <img src={this.state.dataList} alt="product makanan" width="150" />
      </div>
    );
  }
}


export default ListMakanan;
