import axios from 'axios'
import * as action from './action-type'
import moment from 'moment';

export function updateRate(values) {
   const { dispatch, getState, args } = values;
   const state = getState();
   dispatch({ type: action.MOVIE_RATE, data: args });
}
export function validateProfileCode(values) {
   const { dispatch, getState } = values;
   const state = getState();
   var validate = { profile: "FALSE", profileValStatus: "TRUE" };
   var profileCode = state.form.ProfileForm.values.profileCode;
   dispatch({ type: action.PROFILECODE_VALIDATE_RESPONSE, data: validate });
   var data = {
      profileCode: profileCode
   }
   if (profileCode && profileCode.length > 2) {
      axios.post('http://localhost:3000/api/validate/profileCode', data).then(function (response) {
         if (response.data.status) {
            validate = { profile: response.data.status, profileValStatus: "FALSE" };
            dispatch({ type: action.PROFILECODE_VALIDATE_RESPONSE, data: validate });
         }
      }).catch(error => {
         validate = { profile: "FALSE", profileValStatus: "FALSE" };
         dispatch({ type: action.PROFILECODE_VALIDATE_RESPONSE, data: validate });
      });
   }
   else {
      validate = { profile: "FALSE", profileValStatus: "FALSE" };
      dispatch({ type: action.PROFILECODE_VALIDATE_RESPONSE, data: validate });
   }


}

export function onSave(values) {
   const { dispatch, getState } = values;
   const state = getState();

   var data = {

      title: state.form.ReviewForm.values.title,
      content: state.form.ReviewForm.values.content,
      titleUrl: state.form.ReviewForm.values.titleUrl,
      imgUrl: state.form.ReviewForm.values.imgUrl,
      thumbUrl: state.form.ReviewForm.values.thumbUrl
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
      var data = { movieTypeLov: [], isMTLoading: true }
      dispatch({ type: action.STORE_MOVIENAME, data: data });
      var data = { movieName: args.query }
      axios.get('http://localhost:3000/api/movie', data).then(function (response) {
         data = {
            movieLov: response.data.movie,
            isMLoading: false
         }
         dispatch({ type: action.STORE_MOVIENAME, data: data });
      }).catch(error => {
         dispatch({ type: action.STORE_MOVIENAME, data: data });
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
   dispatch({ type: "DISABLE_SAVE_BTN", data: true });
   var data = constructData(state, args);
   if (state.form.ProfileForm.values.profileCode && state.form.ProfileForm.values.profileCode.trim().length > 2) {
      axios.post('http://localhost:3000/profile/save', data).then(function (response) {
         if (response.data.status == 'TRUE') {
            dispatch({ type: action.SAVE_STATUS, data: "Y" });
         }
         else
            window.alert("Fail");
         dispatch({ type: "DISABLE_SAVE_BTN", data: false });
      }).catch(error => {
         dispatch({ type: "DISABLE_SAVE_BTN", data: false });
      });
   }
   else {
      dispatch({ type: "DISABLE_SAVE_BTN", data: false });
      validate = { profile: "FALSE", profileValStatus: "FALSE" };
      dispatch({ type: action.PROFILECODE_VALIDATE_RESPONSE, data: validate });
   }

}

function constructData(state, args) {

   var data = {

      id: state.profileReducer.profileForm.id ? state.profileReducer.profileForm.id : "0",
      langs: args.langs,
      movie: args.movie,
      profileName: state.form.ProfileForm.values.profileName,
      profileCode: state.form.ProfileForm.values.profileCode,
      dob: moment(state.form.ProfileForm.values.dob).utc().format("DD-MMM-YYYY"),
      video: state.form.ProfileForm.values.video,
      gallery: state.form.ProfileForm.values.gallery,
      storyline: state.form.ProfileForm.values.storyline,
      shortDesc: state.form.ProfileForm.values.shortDesc,
      thumbnail: state.profileReducer.thumbnail
   }

   return data;
}

export function readData(values) {
   const { dispatch, getState, args } = values;
   const state = getState();
   var config = window.getConfig();

   dispatch({ type: "STORE_EDITABLE_STATUS", data: config.editable });

   dispatch({ type: "STORE_LOADING_STATUS", data: "false" });
   axios.post('http://localhost:3000/profile/readdata', config).then(function (response) {
   console.log("response.data=>",response.data)
      if (response.data.successData && response.data.successData.length > 0) {
         var data = {
            id: response.data.successData[0]._id,
            profileName: response.data.successData[0].profileName,
            profileCode: response.data.successData[0].profileCode,
            dob: response.data.successData[0].dob,
            video: response.data.successData[0].video,
            gallery: response.data.successData[0].gallery,
            storyline: response.data.successData[0].storyline,
            shortDesc: response.data.successData[0].shortDesc
         }
         dispatch({ type: action.STORE_FORM_DATA, data: data });
         dispatch({ type: action.SAVE_THUMBNAIL, data: response.data.successData[0].thumbnail });
         var selected = {

            langs: response.data.successData[0].language,
            movie: response.data.successData[0].movie,
         }
         dispatch({ type: action.STORE_TAG_SELECTED, data: selected });

      }
      dispatch({ type: "STORE_LOADING_STATUS", data: "true" });


   }).catch(error => {
      console.log(error);
   });


}


