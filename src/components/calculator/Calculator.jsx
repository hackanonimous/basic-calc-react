import {useState,useRef,useEffect} from "react"
import "./calculator.css"
import {btns,BTN_ACTIONS} from "./btnConfig"
import Swal from "sweetalert2"
const Calculator=()=>{
	const btnsRef = useRef(null)
	useEffect(() => {
		const btns = Array.from(btnsRef.current.querySelectorAll("button"))
		btns.forEach(e=>e.style.height = e.offsetWidth + "px")
	}, [btns])

	const [operation,setOperation]=useState("")
	const [prevValor,setPrevValor]=useState("")

	const handleButton=(item)=>{
		if(item.action === BTN_ACTIONS.THEME){
			document.body.classList.toggle("dark")
		}
		else if(item.action === BTN_ACTIONS.CALC){
			if(operation.length > 0){
				try{
					const expresion = eval(operation.replace("X","*"))
					setPrevValor(operation)
					setOperation(expresion)
				}	catch(e){
					Swal.fire({
						icon:"error",
						title:"Expresion Invalida",
						text:"Ingrese una expresion matematica valida",
						confirmButtonText:`<i class="fa fa-thumbs-up"></i>🤔 Salir!`
					})
					setPrevValor("")
					setOperation("")
				}
			}else{
				Swal.fire({
					icon:"error",
					title:"Expresion Vacia",
					text:"Ingrese un numero y la operacion a realizar",
					confirmButtonText:`<i class="fa fa-thumbs-up"></i>🙀 Salir!`
				})
				setPrevValor("")
				setOperation("")
			}
		}
		else if(item.action === BTN_ACTIONS.DELETE){
			setPrevValor("")
			setOperation("")	
		}else{
			setOperation(operation+item.display)
		}
	}
	return(
		<div className="calculator">
			<div className="calculator__result">
				<div className="calculator__result__exp">
					{prevValor}
				</div>
				<div className="calculator__result__exp">
					{operation}
				</div>
			</div>

			<div className="calculator__btns" ref={btnsRef}>
				{
					btns.map((item,index)=>(
						<button key={index} className={item.class} onClick={()=>handleButton(item)} >
							{item.display}
						</button>
					))
				}

			</div>		
		</div>
	)
}

export default Calculator