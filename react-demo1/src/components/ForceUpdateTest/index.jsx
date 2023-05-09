import useForceUpdate from '../../hooks/useForceUpdate'
import useWindowScrollWatcher from '../../hooks/useWindowScrollWatcher';

export default function ForceUpdateTest() {
  console.log('ForceUpdateTest组件进行了渲染')
  const forceUpdate = useForceUpdate()

  useWindowScrollWatcher(()=>{
    console.log("ForceUpdateTest组件的浏览器滚动触发了")
  });//监听浏览器滚动事件

  return (
    <div style={{height:'1000px'}}>
      <button onClick={forceUpdate}>force update</button>
    </div>
  )
}
