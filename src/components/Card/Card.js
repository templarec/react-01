import mystyle from "./card.module.css";;
console.log(mystyle);
export default function Card(props) {
    return <p className={mystyle["testo-my"]}>{props.nome}</p>
}