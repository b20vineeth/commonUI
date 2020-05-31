
import { connect } from 'react-redux';
import VideoPanel from '../components/VideoPanel';
import React, { Component } from 'react'
import { common } from 'mallureport-common-lib'
import { onSave,updateLanguagetags,handleSearch,postData ,fileUpload,readData} from '../actions/actions'
import {reset} from 'redux-form';

const mapStateToProps = (state, ownProps) => ({

  title :state.videoReducer.videoForm.title ? state.videoReducer.videoForm.title : "</Title>",
  content:state.videoReducer.videoForm.content ? state.videoReducer.videoForm.content : "</content>",
  videoUrl:state.videoReducer.videoForm.videoUrl ? state.videoReducer.videoForm.videoUrl : ' <img className="img-fluid" id="thumbnail" alt="" src="http://localhost:3000/img/f1.jpg" />',
  languageLov:state.videoReducer.search.languageLov ,
  isLLoading:state.videoReducer.search.isLLoading ,
  titleUrl:state.videoReducer.videoForm.titleUrl ? state.videoReducer.videoForm.titleUrl : ' </titleUrl>',
  profileLov:state.videoReducer.search.profileLov ,
  isPLoading:state.videoReducer.search.isPLoading ,
  saveStatus:state.videoReducer.saveStatus ,
  movieLov:state.videoReducer.search.movieLov ,
  isMLoading:state.videoReducer.search.isMLoading ,

  popupStatus :state.videoReducer.videoForm.popupStatus ? state.videoReducer.videoForm.popupStatus : false,
  tagLov:state.videoReducer.search.tagLov ,
  isTLoading:state.videoReducer.search.isTLoading ,

  language:state.videoReducer.defaultSelected.lang?state.videoReducer.defaultSelected.lang:[],
  movies:state.videoReducer.defaultSelected.movies,
  profiles: state.videoReducer.defaultSelected.profiles,
  tags: state.videoReducer.defaultSelected.tags,

  initialValues:
  {
    title :state.videoReducer.videoForm.title ? state.videoReducer.videoForm.title : "</Title>",
    content:state.videoReducer.videoForm.content ? state.videoReducer.videoForm.content : "</content>",
    videoUrl:state.videoReducer.videoForm.videoUrl ? state.videoReducer.videoForm.videoUrl : ' <img className="img-fluid" id="thumbnail" alt="" src="http://localhost:3000/img/f1.jpg" />',
    titleUrl:state.videoReducer.videoForm.titleUrl ? state.videoReducer.videoForm.titleUrl : ' </titleUrl>',
  }
  


})


const mapDispatchToProps = (dispatch) => ({

  readData:()=>{
    dispatch(common.dispatchAction(readData)())
  },
  onSave: () => {
     dispatch(common.dispatchAction(onSave)())
  },
  handleSearch :(query,key) =>{
    var data={query,key}
    dispatch(common.dispatchAction(handleSearch)(data))
  },
  updateLanguageTags: (tags) => {
   
    dispatch(common.dispatchAction(updateLanguagetags)(tags));
   // dispatch(reset('VideoForm')); 
 } ,
 fileUpload:(file)=>{
  
  dispatch(common.dispatchAction(fileUpload)(file));
 },
 postData: (data) => {
   
  dispatch(common.dispatchAction(postData)(data)); ; 
}})
export default connect(mapStateToProps, mapDispatchToProps)(VideoPanel)