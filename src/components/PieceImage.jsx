export default function PieceImage({value}){
    return(
        <>
            <img src={`./src/assets/${value}.png`} style={{
                width:'35%',
                
            }}/>
        </>
    )
}