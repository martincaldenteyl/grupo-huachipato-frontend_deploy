import board_img from '../../public/imgs/board.png';
import Auto from '../../public/imgs/auto.png';
import './Board.css'

export default function Board({style}) {
    // const carName = 'img-auto';
    return (
        <div className='board'>
            <img src={Auto} alt="auto" className='img-auto' style={style}/>
        </div>
    );
}