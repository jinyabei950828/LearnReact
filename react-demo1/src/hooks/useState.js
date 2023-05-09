let callIndex
const currentStateArr = []

export default function useState(initialState) {
  if(callIndex==undefined){
    callIndex = 0
  }
  if(!currentStateArr[callIndex]){
    currentStateArr.push({
      isFirst:false,
      state:typeof initialState==='function'?initialState():initialState
    })
  } 

  const dispatchState =(()=>{
    let _callIndex = callIndex
    return (newState)=>{
      callIndex = 0;
      console.log('修改前curentState',currentStateArr[_callIndex])
      const prevState = currentStateArr[_callIndex].state
      currentStateArr[_callIndex].state = typeof newState==='function'?newState(prevState):newState
      console.log('修改后curentState',currentStateArr[_callIndex])
      window.render();
    }
  })()

  const matchState = currentStateArr[callIndex++]

  return [matchState.state,dispatchState]
}
