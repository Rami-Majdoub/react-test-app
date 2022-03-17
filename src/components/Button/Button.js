import "./Button.css"

function Button({ val, equation, setEquation }){
	function onClick() {
		setEquation(equation + val);
	}
	return(
		<button className="button" onClick={onClick}>{val}</button>
	);
}

export default Button;