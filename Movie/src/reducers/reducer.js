import * as type from "../actions/action-type"
const initialStateContacts = {
  movieForm: {
    title: "",
    content: "",
    status: "",
    titleUrl: "",
    imgUrl: ""
  },
  editable: "F",
  rate:"0",
  defaultSelected: [],
  saveStatus: 'N',
  thumbnail: "",
  validate: [],
  search: {
    languageLov: [],
    profileLov: [],
    movieLov: [],
    tagLov: [],
    isLLoading: false,
    isPLoading: false,
    isMLoading: false,
    isTLoading: false,
  }
}

export const movieReducer = (state = initialStateContacts, action) => {
  switch (action.type) {

    case type.STORE_FORM_DATA:
      return Object.assign({}, state, { movieForm: action.data })

    case type.SERACH_LANGUAGE:
      return Object.assign({}, state, { search: action.data })

    case type.SERACH_MOVIE:
      return Object.assign({}, state, { search: action.data })

    case type.SERACH_PROFILE:
      return Object.assign({}, state, { search: action.data })
    case type.SERACH_TAG:
      return Object.assign({}, state, { search: action.data })
    case type.SAVE_THUMBNAIL:
      return Object.assign({}, state, { thumbnail: action.data })
    case type.SAVE_STATUS:
      return Object.assign({}, state, { saveStatus: action.data })
    case type.STORE_TAG_SELECTED:
      return Object.assign({}, state, { defaultSelected: action.data })
    case type.STORE_EDITABLE_STATUS:
      return Object.assign({}, state, { editable: action.data })
    case type.STORE_MOVIETYPE:
      return Object.assign({}, state, { search: action.data })
    case type.MOVIECODE_VALIDATE_RESPONSE:
      return Object.assign({}, state, { validate: action.data })
    case type.MOVIE_RATE:
      return Object.assign({}, state, { rate: action.data })

    default:
      return state
  }
}
