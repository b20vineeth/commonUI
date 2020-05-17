import axios from 'axios'
import * as action from './action-type'

export function onClear(values) {
  const { dispatch } = values;
  dispatch({ type: action.CLEAR_LANGUAGE, data: {} });

}
export function onSave(values) {

  var config = window.getConfig();
  const { dispatch, getState } = values;
  const state = getState(); 
  if (!state.form.LangaugeForm.syncErrors) {
    var data = {
      langCode: state.form.LangaugeForm.values.langCode,
      langName: state.form.LangaugeForm.values.langName,
      status: "W", msg: ""
    }
    dispatch({ type: action.STORE_LANGUAGE, data: data });
    axios.post(config.domain + '/language/save', state.form.LangaugeForm.values)
      .then(function (response) {
        console.log(response);
        var responseStatus = response.data.successData ? response.data.successData[0].status : "N";
        if (responseStatus == "N") {
          responseStatus = response.data.status;
          data.msg = response.data.msg;
        }
        data.status = responseStatus;

        dispatch({ type: action.STORE_LANGUAGE, data: data });

      }).catch(error => {
        data.status = "E";
        dispatch({ type: action.STORE_LANGUAGE, data: data });
      });
  }
}


