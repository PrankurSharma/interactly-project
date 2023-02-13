import { useState } from 'react';
import ReactPlayer from 'react-player';
import { btndata } from './ButtonData';
import Form from './Form';

function Main() {
    const [btnclicked, set_btnclicked] = useState(false);
    const [subbtnclicked, set_subbtnclicked] = useState(false);
    const [btnname, set_btnname] = useState("");
    const [vidurl, set_vidurl] = useState("/videos/intro.mp4");
    return (
        <div className="main" key={vidurl}>
            <div className='playdiv'>
                
                <video width={"100%"} height={"100%"} className="player" controls muted autoPlay>
                    <source src={vidurl} />
                </video>
            </div>
            <div className={!subbtnclicked ? 'options' : 'options2'}>
                {!btnclicked && (<div className='optiondiv'>
                    {btndata.map((val) => {
                        return (
                            <>
                                <button className='option' onClick={() => {
                                    set_btnname(val.btndes);
                                    set_btnclicked(true);
                                    set_vidurl(val.vidurl);
                                }}> {val.btnname} </button>

                            </>
                        );
                    })}
                </div>)}
                {btnclicked && !subbtnclicked && (<div className='optiondiv'>
                    <button className='subbtn' onClick={() => {
                        set_subbtnclicked(true);
                    }}> {btnname} </button>
                </div>)}
                {subbtnclicked && <Form />}
            </div>
        </div>
    );
}

export default Main;