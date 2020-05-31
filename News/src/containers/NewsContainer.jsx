
import { connect } from 'react-redux';
import NewsPanel from '../components/NewsPanel';
import React, { Component } from 'react'
import { common } from 'mallureport-common-lib'
import { onSave,handleSearch,postData ,fileUpload,readData} from '../actions/actions'
import {reset} from 'redux-form';

const mapStateToProps = (state, ownProps) => ({

  title :state.newsReducer.newsForm.title ? state.newsReducer.newsForm.title : "</Title>",
  content:state.newsReducer.newsForm.content ? state.newsReducer.newsForm.content : "</content>",
  imgUrl:state.newsReducer.newsForm.imgUrl ? state.newsReducer.newsForm.imgUrl : 'http://localhost:3000/img/f1.jpg',
  thumbUrl:state.newsReducer.newsForm.thumbUrl ? state.newsReducer.newsForm.thumbUrl : ' http://localhost:3000/img/f1.jpg',
    
  languageLov:state.newsReducer.search.languageLov ,
  isLLoading:state.newsReducer.search.isLLoading ,
  titleUrl:state.newsReducer.newsForm.titleUrl ? state.newsReducer.newsForm.titleUrl : ' </titleUrl>',
  profileLov:state.newsReducer.search.profileLov ,
  isPLoading:state.newsReducer.search.isPLoading ,
  saveStatus:state.newsReducer.saveStatus ,
  movieLov:state.newsReducer.search.movieLov ,
  isMLoading:state.newsReducer.search.isMLoading ,

  popupStatus :state.newsReducer.newsForm.popupStatus ? state.newsReducer.newsForm.popupStatus : false,
  tagLov:state.newsReducer.search.tagLov ,
  isTLoading:state.newsReducer.search.isTLoading ,

  language:state.newsReducer.defaultSelected.lang?state.newsReducer.defaultSelected.lang:[],
  movies:state.newsReducer.defaultSelected.movies,
  profiles: state.newsReducer.defaultSelected.profiles,
  tags: state.newsReducer.defaultSelected.tags,

  initialValues:
  {
    title :state.newsReducer.newsForm.title ? state.newsReducer.newsForm.title : "</Title>",
    content:state.newsReducer.newsForm.content ? state.newsReducer.newsForm.content : "</content>",
    imgUrl:state.newsReducer.newsForm.imgUrl ? state.newsReducer.newsForm.imgUrl : ' http://localhost:3000/img/f1.jpg',
    thumbUrl:state.newsReducer.newsForm.thumbUrl ? state.newsReducer.newsForm.thumbUrl : ' http://localhost:3000/img/f1.jpg',
    titleUrl:state.newsReducer.newsForm.titleUrl ? state.newsReducer.newsForm.titleUrl : ' </titleUrl>',
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
export default connect(mapStateToProps, mapDispatchToProps)(NewsPanel)