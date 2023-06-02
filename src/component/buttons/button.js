import './button.scss';

function Button(props){
return(
    <button className={ `${props.bgcolor ? props.bgcolor:""}
    ${props.btn_link ? props.btn_link:""}`}
    >click here</button>
)


}

export default Button;