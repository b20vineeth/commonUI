import * as type from "../actions/action-type"
const initialStateContacts = {
  videoForm: {
    title: "",
    content: "",
    status: "",
    titleUrl: "",
    videoUrl: "",
    popupStatus: false,


  },
  defaultSelected: [],
  saveStatus: 'N',
  thumbnail: "",
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

export const videoReducer = (state = initialStateContacts, action) => {
  switch (action.type) {

    case type.STORE_FORM_DATA:
      return Object.assign({}, state, { videoForm: action.data })

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


    default:
      return state
  }
}
