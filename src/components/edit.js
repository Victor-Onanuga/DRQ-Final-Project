import React from 'react';
import axios from 'axios';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scandalName: '',
      Date: '',
      Photos: '',
      _id: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleScandalNameChange = this.handleScandalNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handlePhotos = this.handlePhotos.bind(this);
  }
  componentDidMount() {
    alert(this.props.match.params.id);

    axios.get('http://localhost:4000/api/shows/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          _id: response.data._id,
          scandalName: response.data.scandalName,
          Date: response.data.Date,
          Photos: response.data.Photos
        })
      })
      .catch();

  }
  //edit functions for name , date and photos
  handleScandalNameChange(e) {
    this.setState({ scandalName: e.target.value });
  }

  handleDateChange(e) {
    this.setState({ Date: e.target.value });
  }

  handlePhotos(e) {
    this.setState({ Photos: e.target.value });
  }

  handleSubmit(e) {
    alert(this.state.scandalName + "      " + this.state.Date
      + "       " + this.state.Photos);
    e.preventDefault();

    const newScandal = {
      scandalName: this.state.scandalName,
      Date: this.state.Date,
      Photos: this.state.Photos
    };

    axios.put('http://localhost:4000/api/shows/' + this.state._id,
      newScandal)
      .then()
      .catch();


    this.setState({
      scandalName: '',
      Date: '',
      Photos: ''
    });
  }


  render() {
    return (
      <div>
        <h1>Edit component</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Show Scandal Name</label>
            <input
              type='text'
              className='form-control'
              value={this.state.scandalName}
              onChange={this.handleScandalNameChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>Show Date</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Date}
              onChange={this.handleDateChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>Show Photos Url</label>
            <textarea
              row='3'
              className='form-control'
              value={this.state.Photos}
              onChange={this.handlePhotos}
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="Edit Show">
            </input>
          </div>
        </form>
      </div>
    )
  }
}

export default Edit;