export default function Score({score}){
    return(
        <div className="p-2 px-4 bg-dark rounded text-white d-flex justify-content-center align-items-center gap-5"
        style={{
            boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'
        }}>
            <div className="d-flex justify-content-center align-items-center gap-2">
                 <h2>X</h2>
                 <h3 className="border border-1 rounded  p-1 px-2 text-center">{score[0]}</h3>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2">
                 <h2>O</h2>
                 <h3 className="border border-1 rounded  p-1 px-2 text-center">{score[1]}</h3>
            </div>
        </div>
    )
}