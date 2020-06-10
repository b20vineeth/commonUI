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

class ProfilePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.language,
      profileselected: this.props.profiles,
      movie: this.props.movie,
      saveBtn: this.props.saveBtn
    }

  }

  postData = () => {
console.log( this.state.movie);
    var data = {
      movie: this.state.movie, 
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
  movieSearch = (query) => {
    this.props.handleSearch(query, "M");
  }
  handleBlur = () => {
    this.props.validateProfileCode();
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
      window.location.reload();

    }

    return (


      <React.Fragment>


        {this.props.editableStatus == 'F' ?
          <div className="latest-post-wrap">

            <div className="single-latest-post row align-items-center">
              <div className="col-lg-12">
                <a href="image-post.html">
                  <h4>Movie Name 01</h4>
                </a>
                <ul className="meta">
                  <li><a href="#"><span className="lnr lnr-user" />Drama <i className="fas fa-edit" /> </a></li>
                  <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018 <i className="fas fa-edit" /> </a></li>
                  <li><a href="#"><span className="lnr lnr-bubble" />Malayalam / Tamil  <i className="fas fa-edit" /></a> </li>
                  <li><a href="#"><span className="lnr lnr-bubble" />Malayalam / Tamil  <i className="fas fa-edit" /></a> </li>
                  <li><a href="#"><span className="lnr lnr-bubble" />Malayalam / Tamil  <i className="fas fa-edit" /></a> </li>
                </ul>
              </div>
            </div>
            <div className="single-latest-post row align-items-center">
              <div className="col-lg-5 post-left">
                <div className="feature-img relative">
                  <div className="overlay overlay-bg" />
                  <img className="img-fluid" src="img/r3.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-7 post-right">
                <div className="row">
                  <div className="col-lg-12 post-right">
                    Director
              </div>
                  <div className="col-lg-12 post-right">
                    Writers
              </div>
                  <div className="col-lg-12 post-right">
                    un 8, 2019 - Language: Malayalam. The last time Aashiq Abu released a film, it left in its wake a beautiful pain that is yet to subside and a heartache that
              </div>
                </div>
              </div>
            </div>
            <div className="single-latest-post row align-items-center">
              <div className="col-lg-12 post-right">
                <h4>Story</h4>
                <br />
                <p>
                  un 8, 2019 - Language: Malayalam. The last time Aashiq Abu released a film, un 8, 2019 - Language: Malayalam.
                  The last time Aashiq Abu released a film, it left in its wake a beautiful pain that is yet to subside and a heartache that
                  un 8, 2019 - Language: Malayalam. The last time Aashiq Abu released a film, un 8, 2019 - Language: Malayalam.
                  The last time Aashiq Abu released a film, it left in its wake a beautiful pain that is yet to subside and a heartache that
                  un 8, 2019 - Language: Malayalam. The last time Aashiq Abu released a film, un 8, 2019 - Language: Malayalam.
                  The last time Aashiq Abu released a film, it left in its wake a beautiful pain that is yet to subside and a heartache that
                  un 8, 2019 - Language: Malayalam. The last time Aashiq Abu released a film, un 8, 2019 - Language: Malayalam.
                  The last time Aashiq Abu released a film, it left in its wake a beautiful pain that is yet to subside and a heartache that
            </p>
              </div>
              <div className="col-lg-12 post-right">
                <h4>Cast/Crew</h4>
                <br />

              </div>
              <div className="col-lg-12 post-right">
                <h4>Video</h4>
                <br />

              </div>
              <div className="col-lg-12 post-right">
                <h4>Gallery</h4>
                <br />

              </div>

            </div>
          </div>
          : <div className="latest-post-wrap">
            <h4>Profile</h4>
            <div className="single-latest-post row align-items-center">

              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-5">
                    Profile Name<br />
                    <Field
                      name="profileName"
                      type="text"
                      Label="Profile Name"
                      component={common.renderField}
                      validate={[common.StringValidation.required, common.StringValidation.alphaNumeric]}
                    />
                  </div>
                  <div className="col-lg-1">
                    &nbsp;
                    </div>
                  <div className="col-lg-5">
                    Profile Code<br />
                    <Field
                      name="profileCode"
                      type="text"
                      onBlur={this.handleBlur}
                      component={common.renderField}
                      validate={[common.StringValidation.required]}
                    />
                  </div>
                  <div className="col-lg-1">
                    {this.props.profileValStatus == "TRUE" && this.props.profileStatus == "FALSE" ? <div className="padd30"><i className="fa fa-circle-o-notch fa-spin"></i> </div> : this.props.profileValStatus == "FALSE" && this.props.profileStatus == "TRUE"
                      ? <div className="padd30"><i className="fa fa-check" aria-hidden="true"></i></div> : this.props.profileValStatus == "FALSE" && this.props.profileStatus == "FALSE"
                        ? <div className="padd30red"><i className="fa fa-close"></i></div> : ""}
                    &nbsp;
                  </div>

                </div>
                <br />
                <div className="row">
                  <div className="col-lg-5">
                    Date of Birth<br /> <Field name="dob" showTime={false} component={renderDateTimePicker} />
                  </div>
                  <div className="col-lg-1">
                    &nbsp;
                  </div>
                  <div className="col-lg-5">
                    Thumbnail <br />
                    <div className="custom-file">
                      <input type='file' className="custom-file-input" onChange={this.onChangeHandler} />
                      <label className="custom-file-label" for="customFile">Choose file</label>
                    </div>
                  </div>

                  <div className="col-lg-1">
                    &nbsp;
                  </div>
                </div>
                <br />

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



                    Movie <br />
                    <AsyncTypeahead
                      isLoading={this.props.isMLoading}
                      labelKey="movieName"
                      onChange={(movie) => this.setState({ movie })}
                      onSearch={this.movieSearch}
                      id="movieName"
                      allowNew={true}
                      options={this.props.movieLov}
                      multiple
                      defaultSelected={this.state.movie}

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
                    <button className="btn">Close</button>

                  </div>
                </div>


              </div>
            </div>
          </div>
        }

      </React.Fragment>

    )
  }
}



ProfilePanel.propTypes = {
  onSave: PropTypes.func
};
export default reduxForm({
  form: 'ProfileForm',
  enableReinitialize: true
})(ProfilePanel)




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