
type Props={
    name:string
}
const Icon=(props:Props)=>{
    const {name}=props
    return (
        <>
            <svg className='icon'>
                <use xlinkHref={`#icon-${name}`}/>
            </svg>
        </>
    )
}

export default Icon