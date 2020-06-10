import { connect } from 'react-redux';
import MoviePanel from '../components/MoviePanel';
import React, { Component } from 'react'
import { common } from 'mallureport-common-lib'
import { onSave,handleSearch,postData ,fileUpload,readData,validateMovieCode,updateRate} from '../actions/actions'
import {reset} from 'redux-form';

const mapStateToProps = (state, ownProps) => ({
 
  profileLov:state.movieReducer.search.profileLov ,
  isPLoading:state.movieReducer.search.isPLoading , 
  language:state.movieReducer.defaultSelected.langs?state.movieReducer.defaultSelected.langs:[], 
  movieType:state.movieReducer.defaultSelected.movieType?state.movieReducer.defaultSelected.movieType:[],
  profiles: state.movieReducer.defaultSelected.profiles,
  languageLov:state.movieReducer.search.languageLov ,
  isLLoading:state.movieReducer.search.isLLoading ,
  saveStatus:state.movieReducer.saveStatus ,
  isMTLoading:state.movieReducer.search.isMTLoading ,
  movieTypeLov:state.movieReducer.search.movieTypeLov ,
  movieStatus:state.movieReducer.validate.movie,
  movieValStatus:state.movieReducer.validate.movieValStatus,
  saveBtn:state.commonReducer.savebtn,
  rate:state.movieReducer.rate?state.movieReducer.rate:0,
  thumbnail:state.movieReducer.thumbnail?state.movieReducer.thumbnail:"",
  initialValues:
  {
    certificate:state.movieReducer.movieForm.certificate?state.movieReducer.movieForm.certificate:"U",
    movieCode:state.movieReducer.movieForm.movieCode?state.movieReducer.movieForm.movieCode:"",
    movieName:state.movieReducer.movieForm.movieName?state.movieReducer.movieForm.movieName:"",
    language:state.movieReducer.defaultSelected.langs?state.movieReducer.defaultSelected.langs:[],
    profiles:state.movieReducer.defaultSelected.profiles?state.movieReducer.defaultSelected.profiles:[],
    video:state.movieReducer.movieForm.video?state.movieReducer.movieForm.video:"",
    gallery:state.movieReducer.movieForm.gallery?state.movieReducer.movieForm.gallery:"",
    storyline:state.movieReducer.movieForm.storyline?state.movieReducer.movieForm.storyline:"",
    shortDesc:state.movieReducer.movieForm.shortDesc?state.movieReducer.movieForm.shortDesc:"",
    releaseDate:state.movieReducer.movieForm.releaseDate?state.movieReducer.movieForm.releaseDate:"",
    
  }
  
})


const mapDispatchToProps = (dispatch) => ({

  updateRate:(rate)=>{ 
    var data={rate}
     dispatch(common.dispatchAction(updateRate)(rate))
  },
  readData:()=>{
    dispatch(common.dispatchAction(readData)())
  },
  validateMovieCode :()=>{
    dispatch(common.dispatchAction(validateMovieCode)())
  },
  onSave: () => {
     dispatch(common.dispatchAction(onSave)())
  },
  handleSearch :(query,key) =>{
    var data={query,key}
    dispatch(common.dispatchAction(handleSearch)(data))
  } ,
 fileUpload:(file)=>{
  
  dispatch(common.dispatchAction(fileUpload)(file));
 },
 postData: (data) => {
    dispatch(common.dispatchAction(postData)(data)); ; 
}})
export default connect(mapStateToProps, mapDispatchToProps)(MoviePanel)