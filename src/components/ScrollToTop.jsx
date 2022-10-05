import Arrow from "./arrow.gif"

const ScrollToTop = () => {
    function scrollingtotop(){
        window.scrollTo(0, 0);
    }
    return (
        <div>
            <div>
                <img onClick={scrollingtotop}  style={{width:"50px",borderRadius:"25px",position:"absolute"}} src={Arrow} alt="arrow" />
            </div>
        </div>
    );
}

export default ScrollToTop;