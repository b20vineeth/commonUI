import axios from 'axios'
import * as action from './action-type'


export function onSave(values) {
   const { dispatch, getState } = values;
   const state = getState();

   var data = {

      title: state.form.GalleryForm.values.title,
      content: state.form.GalleryForm.values.content,
      titleUrl: state.form.GalleryForm.values.titleUrl,
      imgUrl: state.form.GalleryForm.values.imgUrl,
      thumbUrl: state.form.GalleryForm.values.thumbUrl
   }
   dispatch({ type: action.STORE_FORM_DATA, data: data });
}
export function fileUpload(values) {

   const { dispatch, getState, args } = values;
   const state = getState();
   axios.post('http://localhost:3000/fileUpload', args).then(function (response) {
      if (response.data) {
         dispatch({ type: action.SAVE_THUMBNAIL, data: response.data.filename });
      }
   }).catch(error => {
      console.log(error);
   });
}

export function handleSearch(values) {
   const { dispatch, getState, args } = values;
   const state = getState();

   if (args.key == "L") {
      var data = { languageLov: [], isLLoding: true }
      dispatch({ type: action.SERACH_LANGUAGE, data: data });
      var data = { langName: args.query }
      let axiosConfig = { withCredentials: true, }
      axios.get('http://localhost:3000/api/language', data, axiosConfig).then(function (response) {
         data = {
            languageLov: response.data.lang,
            isLLoding: false
         }
         dispatch({ type: action.SERACH_LANGUAGE, data: data });
      }).catch(error => {
         dispatch({ type: action.SERACH_LANGUAGE, data: data });
      });
   }
   else if (args.key == "M") {
      var data = { movieLov: [], isMLoding: true }
      dispatch({ type: action.SERACH_MOVIE, data: data });
      var data = { movieName: args.query }
      let axiosConfig = { withCredentials: true, }
      axios.get('http://localhost:3000/api/movie', data, axiosConfig).then(function (response) {
         data = {
            movieLov: response.data.movie,
            isMLoding: false
         }
         dispatch({ type: action.SERACH_MOVIE, data: data });
      }).catch(error => {
         dispatch({ type: action.SERACH_MOVIE, data: data });
      });
   }
   else if (args.key == "P") {
      var data = { profileLov: [], isPLoading: true }
      dispatch({ type: action.SERACH_PROFILE, data: data });
      var data = { profileName: args.query }
      let axiosConfig = { withCredentials: true, }
      axios.get('http://localhost:3000/api/profile', data, axiosConfig).then(function (response) {
         data = {
            profileLov: response.data.profile,
            isPLoading: false
         }
         dispatch({ type: action.SERACH_PROFILE, data: data });
      }).catch(error => {
         dispatch({ type: action.SERACH_PROFILE, data: data });
      });
   }
   else if (args.key == "T") {
      var data = { tagLov: [], isTLoading: true }
      dispatch({ type: action.SERACH_TAG, data: data });
      var data = { tag: args.query }
      let axiosConfig = { withCredentials: true, }
      axios.get('http://localhost:3000/api/tag', data, axiosConfig).then(function (response) {
         data = {
            tagLov: response.data.tag,
            isTLoading: false
         }
         dispatch({ type: action.SERACH_TAG, data: data });
      }).catch(error => {
         dispatch({ type: action.SERACH_TAG, data: data });
      });
   }
}
 
export function postData(values) {
   const { dispatch, getState, args } = values;
   const state = getState();
   if (validateContent(state.galleryReducer.galleryForm)) {
      var data = constructData(state, args);
      axios.post('http://localhost:3000/gallery/save', data).then(function (response) {
         if (response.data.status == 'SUCCESS') {
            dispatch({ type: action.SAVE_STATUS, data: "Y" });
         }
         else
            window.alert("Fail");
      }).catch(error => {
         console.log(error);
      });

   }

}
function validateContent(form) {
   var error = [];
   var result = true;
   if (!form.title) {
      error.push("Title is Empty");
      result = false;
   }
   if (!form.thumbUrl) {
      error.push("Thumbnail is Empty");
      console.log(error);
      result = false;
   }
   if (!form.content) {
      error.push("Content is Empty");
      result = false;
   }
   if (!form.titleUrl) {
      error.push("titleUrl is Empty");
      result = false;
   }
   if (!form.imgUrl) {
      error.push("imgUrl is Empty");
      result = false;
   }
   
   return result;
}

function constructData(state, args) {
    var data = {
      title: state.form.GalleryForm.values.title,
      content: state.form.GalleryForm.values.content,
      titleUrl: state.form.GalleryForm.values.titleUrl,
      imgUrl: state.form.GalleryForm.values.imgUrl,
      lang: args.lang,
      profile: args.profile,
      movie: args.movie,
      tag: args.tag,
      thumbUrl: state.form.GalleryForm.values.thumbUrl,
      id:state.galleryReducer.galleryForm.id?state.galleryReducer.galleryForm.id:""

   }
    
   return data;
}

export function readData(values) {
   const { dispatch, getState, args } = values;
   const state = getState();
   var config = window.getConfig();
   dispatch({ type:  "STORE_LOADING_STATUS", data: "false" }); 
   axios.post('http://localhost:3000/gallery/readdata', config).then(function (response) {

      console.log("response=>",response);
    
      if (response.data.successData && response.data.successData.length>0) {
         var data = {

            title: response.data.successData[0].title,
            content: response.data.successData[0].content,
            titleUrl: response.data.successData[0].titleUrl,
            imgUrl: response.data.successData[0].imgUrl,
            id:response.data.successData[0]._id,
            thumbUrl: response.data.successData[0].thumbUrl
         }
         dispatch({ type: action.STORE_FORM_DATA, data: data });
         dispatch({ type: action.SAVE_THUMBNAIL, data: response.data.successData[0].thumbnail});
         var selected={
               lang: response.data.successData[0].language,
               movies:response.data.successData[0].movies,
               profiles:response.data.successData[0].profiles,
               tags:response.data.successData[0].tag
         }
         dispatch({ type: action.STORE_TAG_SELECTED, data: selected});
         
      }
      dispatch({ type: "STORE_LOADING_STATUS", data: "true" }); 


   }).catch(error => {
      console.log(error);
   });


}


