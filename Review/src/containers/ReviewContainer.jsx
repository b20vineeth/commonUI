
import { connect } from 'react-redux';
import ReviewPanel from '../components/ReviewPanel';
import React, { Component } from 'react'
import { common } from 'mallureport-common-lib'
import { onSave,handleSearch,postData ,fileUpload,readData} from '../actions/actions'
import {reset} from 'redux-form';

const mapStateToProps = (state, ownProps) => ({

  title :state.reviewReducer.reviewForm.title ? state.reviewReducer.reviewForm.title : "</Title>",
  content:state.reviewReducer.reviewForm.content ? state.reviewReducer.reviewForm.content : "</content>",
  imgUrl:state.reviewReducer.reviewForm.imgUrl ? state.reviewReducer.reviewForm.imgUrl : 'http://localhost:3000/img/f1.jpg',
  thumbUrl:state.reviewReducer.reviewForm.thumbUrl ? state.reviewReducer.reviewForm.thumbUrl : ' http://localhost:3000/img/f1.jpg',
    
  languageLov:state.reviewReducer.search.languageLov ,
  isLLoading:state.reviewReducer.search.isLLoading ,
  titleUrl:state.reviewReducer.reviewForm.titleUrl ? state.reviewReducer.reviewForm.titleUrl : ' </titleUrl>',
  profileLov:state.reviewReducer.search.profileLov ,
  isPLoading:state.reviewReducer.search.isPLoading ,
  saveStatus:state.reviewReducer.saveStatus ,
  movieLov:state.reviewReducer.search.movieLov ,
  isMLoading:state.reviewReducer.search.isMLoading ,

  popupStatus :state.reviewReducer.reviewForm.popupStatus ? state.reviewReducer.reviewForm.popupStatus : false,
  tagLov:state.reviewReducer.search.tagLov ,
  isTLoading:state.reviewReducer.search.isTLoading ,

  language:state.reviewReducer.defaultSelected.lang?state.reviewReducer.defaultSelected.lang:[],
  movies:state.reviewReducer.defaultSelected.movies,
  profiles: state.reviewReducer.defaultSelected.profiles,
  tags: state.reviewReducer.defaultSelected.tags,

  initialValues:
  {
    title :state.reviewReducer.reviewForm.title ? state.reviewReducer.reviewForm.title : "</Title>",
    content:state.reviewReducer.reviewForm.content ? state.reviewReducer.reviewForm.content : "</content>",
    imgUrl:state.reviewReducer.reviewForm.imgUrl ? state.reviewReducer.reviewForm.imgUrl : ' http://localhost:3000/img/f1.jpg',
    thumbUrl:state.reviewReducer.reviewForm.thumbUrl ? state.reviewReducer.reviewForm.thumbUrl : ' http://localhost:3000/img/f1.jpg',
    titleUrl:state.reviewReducer.reviewForm.titleUrl ? state.reviewReducer.reviewForm.titleUrl : ' </titleUrl>',
    reviewPoint:state.reviewReducer.reviewForm.reviewPoint ? state.reviewReducer.reviewForm.reviewPoint : '0',
 
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
  } ,
 fileUpload:(file)=>{
  
  dispatch(common.dispatchAction(fileUpload)(file));
 },
 postData: (data) => {
   
  dispatch(common.dispatchAction(postData)(data)); ; 
}})
export default connect(mapStateToProps, mapDispatchToProps)(ReviewPanel)