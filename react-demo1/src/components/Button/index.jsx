import './index.less'

export default function Button(props){

  return(
    <div className='wrapper'>{props.children||'click me'}</div>
  )
}