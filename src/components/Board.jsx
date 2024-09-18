
import Piece from "./Piece";

export default function Board({handleClick, board}) {
    
    return (
        <div
            style={{
                width: '35vw',
                height: '35vw',
                minHeight: '300px',
                minWidth: '300px',
                boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
            }}
            className="d-flex flex-column  rounded"
        >
            {board.map((row, i) => (
                <div
                    className="d-flex flex-row"
                    key={i}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                >
                    {row.map((piece, j) => (
                        <Piece
                            key={j}
                            value={piece}
                            onClick={() => handleClick(i, j)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
