import './math.op.css';



interface IProps {
    Op: string;
    onClick:(op:string)=>void
}


const MathematicalOperation = (props: IProps) => {
    return (
        <div className='math_op' onClick={() => props.onClick(props.Op)}>{props.Op}</div>    )
}

export default MathematicalOperation