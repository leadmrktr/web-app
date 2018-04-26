const Image = (props) => 
    <img src={`../static/images/${props.item}${props.reduced?"-or8":""}.png`} style={props.style||[]}/>

export default Image;