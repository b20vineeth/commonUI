
import { connect } from 'react-redux';
import GalleryPanel from '../components/GalleryPanel';
import React, { Component } from 'react'
import { common } from 'mallureport-common-lib'
import { onSave,handleSearch,postData ,fileUpload,readData} from '../actions/actions'
import {reset} from 'redux-form';

const mapStateToProps = (state, ownProps) => ({

  title :state.galleryReducer.galleryForm.title ? state.galleryReducer.galleryForm.title : "</Title>",
  content:state.galleryReducer.galleryForm.content ? state.galleryReducer.galleryForm.content : "</content>",
  imgUrl:state.galleryReducer.galleryForm.imgUrl ? state.galleryReducer.galleryForm.imgUrl : 'http://localhost:3000/img/f1.jpg',
  thumbUrl:state.galleryReducer.galleryForm.thumbUrl ? state.galleryReducer.galleryForm.thumbUrl : ' http://localhost:3000/img/f1.jpg',
    
  languageLov:state.galleryReducer.search.languageLov ,
  isLLoading:state.galleryReducer.search.isLLoading ,
  titleUrl:state.galleryReducer.galleryForm.titleUrl ? state.galleryReducer.galleryForm.titleUrl : ' </titleUrl>',
  profileLov:state.galleryReducer.search.profileLov ,
  isPLoading:state.galleryReducer.search.isPLoading ,
  saveStatus:state.galleryReducer.saveStatus ,
  movieLov:state.galleryReducer.search.movieLov ,
  isMLoading:state.galleryReducer.search.isMLoading ,

  popupStatus :state.galleryReducer.galleryForm.popupStatus ? state.galleryReducer.galleryForm.popupStatus : false,
  tagLov:state.galleryReducer.search.tagLov ,
  isTLoading:state.galleryReducer.search.isTLoading ,

  language:state.galleryReducer.defaultSelected.lang?state.galleryReducer.defaultSelected.lang:[],
  movies:state.galleryReducer.defaultSelected.movies,
  profiles: state.galleryReducer.defaultSelected.profiles,
  tags: state.galleryReducer.defaultSelected.tags,

  initialValues:
  {
    title :state.galleryReducer.galleryForm.title ? state.galleryReducer.galleryForm.title : "</Title>",
    content:state.galleryReducer.galleryForm.content ? state.galleryReducer.galleryForm.content : "</content>",
    imgUrl:state.galleryReducer.galleryForm.imgUrl ? state.galleryReducer.galleryForm.imgUrl : ' http://localhost:3000/img/f1.jpg',
    thumbUrl:state.galleryReducer.galleryForm.thumbUrl ? state.galleryReducer.galleryForm.thumbUrl : ' http://localhost:3000/img/f1.jpg',
    titleUrl:state.galleryReducer.galleryForm.titleUrl ? state.galleryReducer.galleryForm.titleUrl : ' </titleUrl>',
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
export default connect(mapStateToProps, mapDispatchToProps)(GalleryPanel)