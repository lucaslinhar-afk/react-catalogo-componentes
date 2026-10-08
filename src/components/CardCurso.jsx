import "./CardCurso.css"

function CardCurso (props){
    
    return (
        <>
            <div className="card">
                <h3> {props.nome} </h3>
                <p> {props.duracao} </p> 
                <p> {props.modalidade} </p>
                <p> {props.nivel} </p>
                <p> {props.vagas > 0 ? "Vagas disponiveis" : "Turma completa" } </p>       
            </div>      
        </>
    )
}

export default CardCurso;