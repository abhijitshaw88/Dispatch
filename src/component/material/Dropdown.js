import React from "react";
import Select from "react-select";


class Dropdown extends React.Component {
  constructor(props){
    super(props);
  this.state = {
     options : [
    
    ],
    defaultOption : null,
    selectedOption: null
  };
  this.handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
}
  componentDidMount(){
    this.setState(this.options=this.props.opt);
  }
  render() {
    console.log(this.options);
    const { selectedOption } = this.state;
    return (
      <div className="w-50 ">
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={this.options}
        />
      </div>
    );
  }
}
export default Dropdown;
