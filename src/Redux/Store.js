import {getAllInfo,getCompanys} from "../requests"



let store = {
  _state:{
    companyNames:   getCompanys(),
    allInfo:   getAllInfo(),
  },
  getState(){
    return this._state
  },
  subscirebe(observer){
    this._callsubscriber = observer 
  },
  _callsubscriber(){

  }
}


export default store