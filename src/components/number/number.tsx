import './number.css'



interface IProps {
    number: number | string;
    onClick:(value:string)=>void;
}


const Number = (props: IProps) => {
    return (
        <div className='number' onClick={() => props.onClick(props.number.toString())}>{props.number}</div>
        )
}

export default Number