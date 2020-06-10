import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { common } from 'mallureport-common-lib'
import { asyncContainer, Typeahead } from 'react-bootstrap-typeahead';
import '../index.css'
import DropdownList from 'react-widgets/lib/DropdownList'
import Multiselect from 'react-widgets/lib/Multiselect'
import 'react-bootstrap-typeahead/css/Typeahead.css';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import 'react-widgets/dist/css/react-widgets.css'
import ReactStars from 'react-rating-stars-component'
import moment from 'moment';
import momentLocalizer from 'react-widgets-moment'
momentLocalizer()
const AsyncTypeahead = asyncContainer(Typeahead);

class MoviePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.language,
      profileselected: this.props.profiles,
      movieType: this.props.movieType,
      saveBtn: this.props.saveBtn
    }

  }
  closeForm=()=>{
    window.location.href="/movie"
  }
  postData = () => {

    var data = {
      movieType: this.state.movieType,
      profiles: this.state.profileselected,
      langs: this.state.selected
    };

    this.setState({ saveBtn: true });
    this.props.postData(data);
  }
  ratingChanged = (newRating) => {
    this.props.updateRate(newRating);
  }
  languageSearch = (query) => {
    this.props.handleSearch(query, "L");
  }
  profileSearch = (query) => {
    this.props.handleSearch(query, "P");
  }
  movieTypeSearch = (query) => {
    this.props.handleSearch(query, "MT");
  }
  handleBlur = () => {
    this.props.validateMovieCode();
  }
  onChangeHandler = event => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    this.props.fileUpload(data);
  }
  render() {
    this.state.saveBtn = this.props.saveBtn;
    let certificates = ['U', 'A']
    if (this.props.saveStatus == 'Y') {
      window.location.href="/movie"

    }

    return (


      <React.Fragment>


        <div className="latest-post-wrap">
            <h4>Movie</h4>
            <div className="single-latest-post row align-items-center">


              <div className="row">

                <div className="col-lg-12"> 
                  { this.props.thumbnail? <div><img src={this.props.thumbnail} className="img-fluid"/><br/><br/></div>:""}
                </div>



              </div>

              <div className="col-lg-12">

                <div className="row">
                  <div className="col-lg-5">
                  Movie Name<br />
                    <Field
                      name="movieName"
                      type="text"
                      Label="Movie Name"
                      component={common.renderField}
                      validate={[common.StringValidation.required, common.StringValidation.alphaNumeric]}
                    />
                  </div>
                  <div className="col-lg-1">
                    &nbsp;
                    </div>
                  <div className="col-lg-5">
                    Movie Code<br />
                    <Field
                      name="movieCode"
                      type="text"
                      onBlur={this.handleBlur}
                      component={common.renderField}
                      validate={[common.StringValidation.required]}
                    />
                  </div>
                  <div className="col-lg-1">
                    {this.props.movieValStatus == "TRUE" && this.props.movieStatus == "FALSE" ? <div className="padd30"><i className="fa fa-circle-o-notch fa-spin"></i> </div> : this.props.movieValStatus == "FALSE" && this.props.movieStatus == "TRUE"
                      ? <div className="padd30"><i className="fa fa-check" aria-hidden="true"></i></div> : this.props.movieValStatus == "FALSE" && this.props.movieStatus == "FALSE"
                        ? <div className="padd30red"><i className="fa fa-close"></i></div> : ""}
                    &nbsp;
                  </div>

                </div>

                <div className="row">
                  <div className="col-lg-5">
                    Language<br />

                    <AsyncTypeahead
                      isLoading={this.props.isLLoading}
                      labelKey="langName"
                      onChange={(selected) => this.setState({ selected })}
                      onSearch={this.languageSearch}
                      id="langName"
                      allowNew={true}
                      options={this.props.languageLov}
                      multiple
                      defaultSelected={this.state.selected}

                    />
                  </div>
                  <div className="col-lg-1">
                    &nbsp;
                  </div>
                  <div className="col-lg-5">



                    Movie Type<br />
                    <AsyncTypeahead
                      isLoading={this.props.isMTLoading}
                      labelKey="movietypeName"
                      onChange={(movieType) => this.setState({ movieType })}
                      onSearch={this.movieTypeSearch}
                      id="movietypeName"
                      allowNew={true}
                      options={this.props.movieTypeLov}
                      multiple
                      defaultSelected={this.state.movieType}

                    />


                  </div>
                  <div className="col-lg-1">
                    &nbsp;
                  </div>
                </div>

                <br />
                <div className="row">
                  <div className="col-lg-5">
                    Release Date<br /> <Field name="releaseDate" showTime={false} component={renderDateTimePicker} />
                  </div>
                  <div className="col-lg-3">
                    Rating<br />
                    <ReactStars
                      value={this.props.rate}
                      count={5}
                      onChange={this.ratingChanged}
                      size={30}
                      color2={'#ffd700'} />
                  </div>
                  <div className="col-lg-3"><br />
                    <div className="custom-file">
                      <input type='file' className="custom-file-input" onChange={this.onChangeHandler} />
                      <label class="custom-file-label" for="customFile">Choose file</label>
                    </div>
                  </div>
                  <div className="col-lg-1">
                    &nbsp;
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-5">
                    Certificate<br />
                    <Field
                      name="certificate"
                      component={renderDropdownList}
                      data={certificates}
                      valueField="value"
                      textField="certificates"
                    />
                  </div>
                  <div className="col-lg-1">
                    &nbsp;
                  </div>
                  <div className="col-lg-5">
                    Cast<br />
                    <AsyncTypeahead
                      isLoading={this.props.isPLoading}
                      labelKey="profileName"
                      onChange={(profileselected) => this.setState({ profileselected })}
                      onSearch={this.profileSearch}
                      id="profileName"
                      allowNew={true}
                      options={this.props.profileLov}
                      multiple
                      defaultSelected={this.state.profileselected}
                    />

                  </div>
                  <div className="col-lg-1">
                    &nbsp;
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-5">
                    Video<br />
                    <Field
                      name="video"
                      type="text"
                      Label="Video"
                      component={common.renderField}
                      validate={[common.StringValidation.required, common.StringValidation.alphaNumeric]}
                    />
                  </div>
                  <div className="col-lg-1">&nbsp;</div>
                  <div className="col-lg-5">
                    Gallery<br />
                    <Field
                      name="gallery"
                      type="text"

                      component={common.renderField}
                      validate={[common.StringValidation.required]}
                    />
                  </div>
                  <div className="col-lg-1">&nbsp;</div>

                </div>

                <br />
                <div className="row">
                  <div className="col-lg-6">
                    StoryLine <br />
                    <Field
                      name="storyline"
                      type="textarea"
                      component={common.renderField}

                    />
                  </div>
                  <div className="col-lg-6">
                    Short Desc <br />
                    <Field
                      name="shortDesc"
                      type="textarea"
                      component={common.renderField}

                    />
                  </div>

                </div>


                <div className="row">
                  <div className="col-lg-12"><br></br>
                    <button className="btn  btn-dark" disabled={this.state.saveBtn} onClick={this.postData}>Save</button> &nbsp;
                    <button className="btn"  onClick={this.closeForm}>Close</button>

                  </div>
                </div>


              </div>
            </div>
          </div>
       

      </React.Fragment>

    )
  }
}



MoviePanel.propTypes = {
  onSave: PropTypes.func
};
export default reduxForm({
  form: 'MovieForm',
  enableReinitialize: true
})(MoviePanel)




export const renderDropdownList = ({ input, data, valueField, textField }) => (
  <DropdownList
    {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange}
  />
)
export const renderMultiselect = ({ input, data, valueField, textField }) => (
  <Multiselect
    {...input}
    onBlur={() => input.onBlur()}
    value={input.value || []} // requires value to be an array
    data={data}
    valueField={valueField}
    textField={textField}
  />
)


export const renderDateTimePicker = ({ input: { onChange, value }, showTime }) => (
  <DateTimePicker
    onChange={onChange}
    format="DD-MMM-YYYY"
    time={showTime}
    value={!value ? null : new Date(value)}
  />
)