import PieceImage from "./PieceImage";

export default function Piece({ value, onClick }) {
    return (
        <div
            className="border border-3 border-light bg-dark rounded text-light"
            style={{
                width: '100%',
                height: '100%',
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                
            }}
            onClick={onClick}>
            {value === 1 ? <PieceImage value={'x'}/> : value === 2 ? <PieceImage value={'o'}/> : ''}
        </div>
    );
}