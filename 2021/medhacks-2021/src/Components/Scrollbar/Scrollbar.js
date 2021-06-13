import React from "react";
import Piece1 from '../../Images/puzzlePieces/1.png'
import Piece4 from '../../Images/puzzlePieces/4.png'
import Piece7 from '../../Images/puzzlePieces/7.png'
import Piece9 from '../../Images/puzzlePieces/9.png'
import Piece1White from '../../Images/puzzlePieces/1_white.png'
import Piece4White from '../../Images/puzzlePieces/4_white.png'
import Piece7White from '../../Images/puzzlePieces/7_white.png'
import Piece9White from '../../Images/puzzlePieces/9_white.png'

window.onscroll = function () { scrollProgressIndicator() };

function scrollProgressIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = 0;
    var winScrollSection = 0;
    if (document.getElementById('landing') === null) {
        return;
    }

    if (winScroll >= document.getElementById("speakers").offsetTop) {
        height = document.getElementById("speakerPage").offsetHeight;
        winScrollSection = winScroll - document.getElementById("speakers").offsetTop;
        changeTimelineBar('bar4', winScrollSection, height);
        console.log('speakers')
    } else if (winScroll >= document.getElementById("tracks").offsetTop) {
        height = document.getElementById("speakers").offsetTop - document.getElementById("tracks").offsetTop;
        winScrollSection = winScroll - document.getElementById("tracks").offsetTop;
        changeTimelineBar('bar3', winScrollSection, height);
    } else if (winScroll >= document.getElementById("about").offsetTop) {
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
    var scrollProgress = (winScrollSection / height);
    var length = 100 * scrollProgress <= 100 ? 100 * scrollProgress : 100;

    if (document.getElementById(barId) !== null) {
        document.getElementById(barId).style.height = length + "px";
    }

    for (let i = 1; i <= 3; i++) {
        if (i === parseInt(barId[barId.length - 1])) {
            document.getElementById(`cont${i}`).style.color = '#a992ee';
        } else {
            document.getElementById(`cont${i}`).style.color = '#FFF';
        }
        if (i < parseInt(barId[barId.length - 1])) {
            document.getElementById(`bar${i}`).style.height = "100px";
        } else if (i > parseInt(barId[barId.length - 1])) {
            document.getElementById(`bar${i}`).style.height = "0px";
        }
    }
}

const timelineStyle = {
    content: '',
    position: 'fixed',
    width: '6px',
    backgroundColor: 'white',
    top: '200px',
    left: '30px',
    height: '100px',
    boxShadow: '5px 5px 7px rgb(0 0 0 / 20%)',
    zIndex: '0'
}

const containerStyle = {
    content: '',
    cursor: 'pointer',
    position: 'absolute',
    width: '30px',
    height: '30px',
    left: '-12.5px',
    backgroundColor: 'transparent',
    top: '0',
    zIndex: '99',
    borderRadius: '5px',
    boxShadow: '5px 5px 7px rgb(0 0 0 / 20%)',
    color: 'white',
}

const pieceStyle = {
    width: '30px',
    height: '30px',
    marginLeft: '-15px',

}

const Scrollbar = () => {
    var pieces = [Piece1, Piece4, Piece7, Piece9];
    var pieces_white = [Piece1White, Piece4White, Piece7White, Piece9White];

    return (
        <>
            <div class="timeline" style={Object.assign({}, timelineStyle, { height: '300px', zIndex: '0'})}>
                {['top', 'about', 'tracks', 'speakers'].map((element, i) => (
                    <a class="container" id={`cont${i + 1}`} href={`#${element}`} style={Object.assign({}, containerStyle, { top: i * 100 + 'px' })} >
                        <img style={pieceStyle} src={pieces_white[i]} alt="p"></img>
                    </a>
                ))}
            </div>
            {[1, 2, 3].map((element, i) => (
                <div class="timeline" id={`bar${element}`} style={Object.assign({}, timelineStyle, { backgroundColor: '#a992ee', height: '0', top: 100 + element*100 + 'px' })}>
                </div>
            ))}
        </>
    )
}

export default Scrollbar;