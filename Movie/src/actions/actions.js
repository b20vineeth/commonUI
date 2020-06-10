import axios from 'axios'
import * as action from './action-type'
import moment from 'moment';

export function updateRate(values) {
   const { dispatch, getState, args } = values;
   const state = getState();
   dispatch({ type: action.MOVIE_RATE, data: args });
}
export function validateMovieCode(values) {
   const { dispatch, getState } = values;
   const state = getState();
   var validate = { movie: "FALSE", movieValStatus: "TRUE" };
   var moviecode = state.form.MovieForm.values.movieCode;
   dispatch({ type: action.MOVIECODE_VALIDATE_RESPONSE, data: validate });
   var data = {
      movieCode: moviecode
   }
   if (moviecode && moviecode.length > 2) {
      axios.post('/api/validate/movieCode', data).then(function (response) {
         if (response.data.status) {
            validate = { movie: response.data.status, movieValStatus: "FALSE" };
            dispatch({ type: action.MOVIECODE_VALIDATE_RESPONSE, data: validate });
         }
      }).catch(error => {
         validate = { movie: "FALSE", movieValStatus: "FALSE" };
         dispatch({ type: action.MOVIECODE_VALIDATE_RESPONSE, data: validate });
      });
   }
   else {
      validate = { movie: "FALSE", movieValStatus: "FALSE" };
      dispatch({ type: action.MOVIECODE_VALIDATE_RESPONSE, data: validate });
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
   axios.post('/fileUpload', args).then(function (response) {
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
      axios.get('/api/language', data, axiosConfig).then(function (response) {
         data = {
            languageLov: response.data.lang,
            isLLoding: false
         }
         dispatch({ type: action.SERACH_LANGUAGE, data: data });
      }).catch(error => {
         dispatch({ type: action.SERACH_LANGUAGE, data: data });
      });
   }

   else if (args.key == "MT") {
      var data = { movieTypeLov: [], isMTLoading: true }
      dispatch({ type: action.STORE_MOVIETYPE, data: data });
      var data = { movietypeName: args.query }
      let axiosConfig = { withCredentials: true, }
      axios.get('/api/movietype', data, axiosConfig).then(function (response) {
         data = {
            movieTypeLov: response.data.movieType,
            isMTLoading: false
         }
         dispatch({ type: action.STORE_MOVIETYPE, data: data });
      }).catch(error => {
         dispatch({ type: action.STORE_MOVIETYPE, data: data });
      });
   }
   else if (args.key == "M") {
      var data = { movieLov: [], isMLoding: true }
      dispatch({ type: action.SERACH_MOVIE, data: data });
      var data = { movieName: args.query }
      let axiosConfig = { withCredentials: true, }
      axios.get('/api/movie', data, axiosConfig).then(function (response) {
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
      axios.get('/api/profile', data, axiosConfig).then(function (response) {
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
      axios.get('/api/tag', data, axiosConfig).then(function (response) {
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
   if(state.form.MovieForm.values.movieCode && state.form.MovieForm.values.movieCode.trim().length>2)
   {
    axios.post('/movie/save', data).then(function (response) {
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
else{
   dispatch({ type: "DISABLE_SAVE_BTN", data: false });
   validate = { movie: "FALSE", movieValStatus: "FALSE" };
   dispatch({ type: action.MOVIECODE_VALIDATE_RESPONSE, data: validate });
}

}
 
function constructData(state, args) {

   var data = {

      id: state.movieReducer.movieForm.id ? state.movieReducer.movieForm.id : "0",
      profiles: args.profiles,
      movieType: args.movieType,
      langs: args.langs,
      certificate: state.form.MovieForm.values.certificate,
      movieName: state.form.MovieForm.values.movieName,
      movieCode: state.form.MovieForm.values.movieCode,
      releaseDate: moment(state.form.MovieForm.values.releaseDate).utc().format("DD-MMM-YYYY"),
      video: state.form.MovieForm.values.video,
      gallery: state.form.MovieForm.values.gallery,
      storyline: state.form.MovieForm.values.storyline,
      shortDesc: state.form.MovieForm.values.shortDesc,
      rate:state.movieReducer.rate,
      thumbnail:state.movieReducer.thumbnail
   }

   return data;
}

export function readData(values) {
   const { dispatch, getState, args } = values;
   const state = getState();
   var config = window.getConfig();

   dispatch({ type: "STORE_EDITABLE_STATUS", data: config.editable });

   dispatch({ type: "STORE_LOADING_STATUS", data: "false" });
   axios.post('/movie/readdata', config).then(function (response) {

      if (response.data.successData && response.data.successData.length > 0) {
         var data = {
            
            certificate: response.data.successData[0].certificate,
            gallery: response.data.successData[0].gallery,
            movieCode: response.data.successData[0].movieCode,
            movieName: response.data.successData[0].movieName,
            id: response.data.successData[0]._id,
            releaseDate: response.data.successData[0].releaseDate,
            storyline: response.data.successData[0].storyline,
            shortDesc: response.data.successData[0].shortDesc,
            video: response.data.successData[0].video,
            rate:response.data.successData[0].rate
    }
         dispatch({ type: action.MOVIE_RATE, data: data.rate});
         dispatch({ type: action.STORE_FORM_DATA, data: data });
         dispatch({ type: action.SAVE_THUMBNAIL, data: response.data.successData[0].thumbnail });
         var selected = {
            
            langs: response.data.successData[0].language,
            movieType: response.data.successData[0].movieType,
            profiles: response.data.successData[0].profile 
         }
         dispatch({ type: action.STORE_TAG_SELECTED, data: selected });

      }
      dispatch({ type: "STORE_LOADING_STATUS", data: "true" });


   }).catch(error => {
      console.log(error);
   });


}


