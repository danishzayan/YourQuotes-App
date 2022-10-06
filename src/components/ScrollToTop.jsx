import Arrow from "./arrow.gif"

const ScrollToTop = () => {
    return (
        <div>
            <div>
                <a href="#"><img style={{width:"50px",borderRadius:"25px",position:"absolute"}} src={Arrow} alt="arrow" /></a>
            </div>
        </div>
    );
}

export default ScrollToTop;