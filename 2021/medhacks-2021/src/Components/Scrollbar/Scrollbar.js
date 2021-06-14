import React from "react";
import Piece1 from '../../Images/puzzlePieces/1.png'
import Piece4 from '../../Images/puzzlePieces/4.png'
import Piece7 from '../../Images/puzzlePieces/7.png'
import Piece9 from '../../Images/puzzlePieces/9.png'
import Piece1White from '../../Images/puzzlePieces/1_white.png'
import Piece4White from '../../Images/puzzlePieces/4_white.png'
import Piece7White from '../../Images/puzzlePieces/7_white.png'
import Piece9White from '../../Images/puzzlePieces/9_white.png'

var pieces = [Piece9, Piece1, Piece7, Piece4];
var pieces_white = [Piece9White, Piece1White, Piece7White, Piece4White];

window.onscroll = function () { scrollProgressIndicator() };

function scrollProgressIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = 0;
    var winScrollSection = 0;
    if (document.getElementById('landing') === null) {
        return;
    }

    if (winScroll >= document.getElementById("speakers").offsetTop-5) {
        height = document.getElementById("speakerPage").offsetHeight;
        winScrollSection = winScroll - document.getElementById("speakers").offsetTop;
        changeTimelineBar('bar4', winScrollSection, height);
    } else if (winScroll >= document.getElementById("tracks").offsetTop-5) {
        height = document.getElementById("speakers").offsetTop - document.getElementById("tracks").offsetTop;
        winScrollSection = winScroll - document.getElementById("tracks").offsetTop;
        changeTimelineBar('bar3', winScrollSection, height);
    } else if (winScroll >= document.getElementById("about").offsetTop-5) {
        height = document.getElementById("tracks").offsetTop - document.getElementById("about").offsetTop;
        winScrollSection = winScroll - document.getElementById("about").offsetTop;
        changeTimelineBar('bar2', winScrollSection, height);
    } else {
        height = document.getElementById("about").offsetTop;
        winScrollSection = winScroll;
        changeTimelineBar('bar1', winScrollSection, height);
    }

}

function changeTimelineBar(barId, winScrollSection, height) {
    console.log(barId)
    var scrollProgress = (winScrollSection / height);
    var length = 100 * scrollProgress <= 100 ? 100 * scrollProgress : 100;

    if (document.getElementById(barId) !== null) {
        document.getElementById(barId).style.height = length + "px";
    }

    for (let i = 1; i <= 4; i++) {
        if (i < parseInt(barId[barId.length - 1])) {
            document.getElementById(`bar${i}`).style.height = "100px";
        } else if (i > parseInt(barId[barId.length - 1])) {
            if(i < 4) {
                document.getElementById(`bar${i}`).style.height = "0px";
            }
        } else {
            document.getElementById(`scrollImage${i}`).src = pieces[i-1];
        } 
        if (i === parseInt(barId[barId.length - 1])){
            document.getElementById(`scrollImage${i}`).src = pieces[i-1];
            document.getElementById(`scrollImage${i}`).style = "width: 40px; height: 40px; margin-left: -20px;filter: drop-shadow(5px 5px 7px rgb(0, 0, 0, 0.5));";
        } else {
            document.getElementById(`scrollImage${i}`).src = pieces_white[i-1];
            document.getElementById(`scrollImage${i}`).style = "width: 30px; height: 30px; margin-left: -15px;filter: drop-shadow(5px 5px 7px rgb(0, 0, 0, 0.5));";
        }
    }
}

const timelineStyle = {
    content: '',
    position: 'fixed',
    width: '6px',
    backgroundColor: 'rgb(255, 255, 255, 0.3)',
    top: '200px',
    left: '30px',
    height: '100px',
    boxShadow: '0px 0px 5px rgb(255, 255, 255, 0.5)',
    zIndex: '0'
}

const containerStyle = {
    content: '',
    cursor: 'pointer',
    position: 'absolute',
    width: '30px',
    height: '30px',
    left: '-12px',
    backgroundColor: 'transparent',
    top: '0',
    zIndex: '99',
    borderRadius: '5px',
    color: 'white',
}

const pieceStyle = {
    width: '30px',
    height: '100%',
    marginLeft: '-15px',
    filter: 'drop-shadow(5px 5px 7px rgb(0, 0, 0, 0.5))',
}

const Scrollbar = () => {

    return (
        <>
            {[1, 2, 3].map((element, i) => (
                <div class="timeline" id={`bar${element}`} style={Object.assign({}, timelineStyle, { backgroundColor: '#a992ee', height: '0', top: 100 + element*100 + 'px' })}>
                </div>
            ))}
            <div class="timeline" style={Object.assign({}, timelineStyle, { height: '300px', zIndex: '0'})}>
                {['top', 'about', 'tracks', 'speakers'].map((element, i) => (
                    <a class="container" id={`cont${i + 1}`} href={`#${element}`} style={Object.assign({}, containerStyle, { top: -15 + i * 100 + 'px' })} >
                        <img id={`scrollImage${i+1}`} style={pieceStyle} src={pieces_white[i]} alt="p"></img>
                    </a>
                ))}
            </div>
        </>
    )
}

export default Scrollbar;