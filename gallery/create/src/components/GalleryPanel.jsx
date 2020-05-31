import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { common } from 'mallureport-common-lib'
import { asyncContainer, Typeahead } from 'react-bootstrap-typeahead';
import '../index.css'
import 'react-bootstrap-typeahead/css/Typeahead.css';
const AsyncTypeahead = asyncContainer(Typeahead);

class GalleryPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleEditable: false,
      contentEditable: false,
      galleryEditable: false,
      languageTagsEditable: false,
      langSelected :this.props.language,
      profileselected: this.props.profiles,
      tagselected: this.props.tags,
      movieselected:this.props.movies,
      popStatus: false,
      selectedFile: null

    }

  }
  editVideo = () => {
    this.setState({ galleryEditable: true })
  }

  editTitle = () => {
    this.setState({ titleEditable: true })
  }
  editContent = () => {
    this.setState({ contentEditable: true })
  }
  onLanguageTagsEditable = () => {
    this.setState({ languageTagsEditable: true })

  }

  onImgSave = () => {
    this.props.onSave();
    this.setState({ galleryEditable: false })
  }
  onTitleSave = () => {
    this.props.onSave();
    this.setState({ titleEditable: false })
  }
  onContentSave = () => {
    this.props.onSave();
    this.setState({ contentEditable: false })
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
  tagSearch = (query) => {
    this.props.handleSearch(query, "T");
  }
  onChangeHandler = event => {

    const data = new FormData()
    data.append('file', event.target.files[0])
    this.props.fileUpload(data);
 }
  postData = () => {

    var data = {
      lang: this.state.langSelected,
      profile: this.state.profileselected,
      movie: this.state.movieselected,
      tag: this.state.tagselected
    }
    console.log(data);
    this.props.postData(data);

  }
  componentWillReceiveProps(props){
    this.setState({selected: this.props.language});
    
  } 
 
  render() {
    console.log("this.props.language=>",this.props.language);
    if (this.props.saveStatus == 'Y') {
      window.location.reload();
    }

     return (


      <React.Fragment>


        <div className="single-post-wrap">
         

          <div className="content-wrap">



            {this.state.titleEditable == true ?
              <div><br />   <div className="row">
                <div className="col-lg-11">

                  <div className="row">
                    <div className="col-lg-6">

                      <Field
                        name="title"
                        onChange={this.updateUrl}
                        type="text" 
                        value={this.props.title}
                        component={common.renderField}
                        validate={[common.StringValidation.required]}
                      />
                    </div>
                    <div className="col-lg-6">
                      <Field
                        name="titleUrl"
                        type="text"
                        component={common.renderField}
                        validate={[common.StringValidation.required,

                        common.StringValidation.minValue13]}
                      />
                    </div>
                  </div>

                </div>

                <div className="col-lg-1 padd" > <i onClick={this.onTitleSave} className="fa fa-check" aria-hidden="true" style={{ color: 'Green' }} />
                </div></div>
              </div> : <h3 onClick={this.editTitle}>{this.props.title} </h3>}
<br></br>
              {this.state.galleryEditable == true ?
            <div className="row">
              <div className="col-lg-6">
                <Field name="imgUrl" type="text" component={common.renderField} validate={[common.StringValidation.required,
                common.StringValidation.minValue13]} />
              </div>
              <div className="col-lg-5">
                <Field name="thumbUrl" type="text" component={common.renderField} validate={[common.StringValidation.required,
                common.StringValidation.minValue13]} />
              </div>
              <div className="col-lg-1 padd" > <i onClick={this.onImgSave} className="fa fa-check" aria-hidden="true" style={{ color: 'Green' }} />
              </div>  </div> :
            <div className="feature-img-thumb relative" onClick={this.editVideo}>
              <div className="video-box">
                <div id="player" />
                <div id="thumbnail_container" className="thumbnail_container">
                
                  <img className="img-fluid" src={this.props.imgUrl}/>
                  <div className="overlay overlay-bg" />
                </div>
                
              </div>
            </div>
          }
             






            <ul className="meta pb-20">
              <li><a href="#"><span className="lnr lnr-user" />Mark wiens</a></li>
              <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
              <li><a href="#"><span className="lnr lnr-bubble" />06 </a></li>
            </ul>


            {this.state.contentEditable == false ? <p onClick={this.editContent}>  {this.props.content}  </p> :

              <div><br />   <div className="row">
                <div className="col-lg-11"> <Field
                  name="content"
                  type="textarea"
                  component={common.renderField}

                /></div>
                <div className="col-lg-1 padd" >
                  <i onClick={this.onContentSave} className="fa fa-check" aria-hidden="true" style={{ color: 'Green' }} />
                </div>
              </div>
              </div>
            }



            <div>  <br /><br /><div className="row">
              <div className="col-lg-11">

                <div className="row">
                  <div className="col-lg-6">
                    Language <br />
                    <AsyncTypeahead
                      isLoading={this.props.isLLoading}
                      labelKey="langName"
                      onChange={(langSelected) => this.setState({ langSelected })}
                      onSearch={this.languageSearch}
                      id="langName"
                      allowNew={true}
                      options={this.props.languageLov}
                      multiple
                      defaultSelected={this.props.language}
                       
                    />

                  </div>
                  <div className="col-lg-6">

                    Profile <br />
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
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    Movie <br />
                    <AsyncTypeahead
                      isLoading={this.props.isMLoading}
                      labelKey="movieName"
                      onChange={(movieselected) => this.setState({ movieselected })}
                      onSearch={this.movieSearch}
                      id="movieName"
                      allowNew={true}
                      options={this.props.movieLov}
                      multiple
                      defaultSelected={this.state.movieselected}
                    />

                  </div>
                  <div className="col-lg-6">

                    Tag {this.props.isTLoading} <br />
                    <AsyncTypeahead
                      isLoading={this.props.isTLoading}
                      labelKey="tagName"
                      onChange={(tagselected) => this.setState({ tagselected })}
                      onSearch={this.tagSearch}
                      id="tagName"
                      allowNew={true}
                      options={this.props.tagLov}
                      multiple
                      defaultSelected={this.state.tagselected}
                    />


                  </div>
                </div>
                

              </div>

              <div className="col-lg-1 padd" > &nbsp;
                </div></div>
            </div>


            <div className="row">
              <div className="col-lg-12"><br></br>
                <button className="btn  btn-success" onClick={this.postData}>Save</button> &nbsp;
              <button className="btn">Close</button>
              </div>
            </div>


          </div>
        </div>

      </React.Fragment>

    )
  }
}



GalleryPanel.propTypes = {
  onSave: PropTypes.func
};
export default reduxForm({
  form: 'GalleryForm',
  enableReinitialize:true
})(GalleryPanel)



class imgUrl extends React.Component {
  render() {
    return <div>{ this.props.imgUrl?<img src={this.props.imgUrl}/>: "" }</div>;
 
                  
  }
}

