import React from "react";
import "../../App.css";
import TrackBox from "./TrackBox";

const Tracks = (props) => {
  const trackButtonsStyle = {
    margin: "auto",
    width: "85%",
    height: "100%",
    display: "flex",

    justifyContent: 'center',
    alignItems: 'center',
  
    flexDirection: "row",
  
    display: "-ms-flex",
    display: "-webkit-flex",
  };

  return (
    <div id="tracks" className="section-container" style={{'backgroundColor':'rgb(17, 61, 86, .2)'}}>
      <div style={{'width': '100%'}}>
        <h1 className="section-title">tracks</h1>
        <p className="section-text">To help with ideation, MedHacks and its sponsors create three tracks every year so hackers can pick a theme to focus their project on. The top three projects in each track will be awarded a prize.</p>
      </div>
      <div style={trackButtonsStyle}>
        {tracks.map((track) => (
          <TrackBox
            titleNum={track.titleNum}
            title={track.title}
            description={track.description}
            trackClick={props.trackClick}
            popup={props.popup}
          />
        ))}
      </div>
    </div>
  );
};

let tracks = [
  { 
    titleNum: 1, 
    title: "Aging in place with resilience and resouces",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nunc ut massa tincidunt varius auctor vel ligula. Integer tempor tellus in ex pellentesque, a molestie ante bibendum. Sed vel purus sit amet justo ultrices tempor. Suspendisse potenti. Vivamus fermentum ante vulputate felis varius, vehicula luctus mauris scelerisque. Aliquam lacinia eros finibus ullamcorper lacinia. Morbi fringilla consequat aliquet. Cras eleifend scelerisque condimentum. Nullam dignissim sit amet arcu vitae tempus. Nam at venenatis libero. Donec tortor erat, condimentum eget magna ac, interdum efficitur mi. Pellentesque ante sem, volutpat et molestie non, condimentum a nisl. Aenean tincidunt suscipit posuere. Quisque non libero nunc. Nam bibendum diam metus, sed consequat felis posuere sit amet. Aliquam non mi vestibulum, placerat risus porta, placerat eros. Maecenas commodo, tellus quis lobortis semper, massa sapien imperdiet sem, eget hendrerit nunc metus a nulla. Praesent tristique tristique convallis. Vivamus vitae pretium tortor. Donec egestas diam suscipit arcu aliquet dignissim. Aenean auctor nulla sed vehicula accumsan. Maecenas porttitor tortor dolor, at consectetur urna tincidunt vitae. Etiam vitae ipsum porttitor, ullamcorper ipsum id, dictum orci. Pellentesque efficitur nisl eget magna mattis accumsan. Nam aliquet nunc a velit blandit fringilla. Sed magna est, ornare a tellus nec, eleifend feugiat magna. Nulla quis tempor magna. Morbi tellus risus, viverra a finibus sed, consequat vitae sapien.",
  },
  {
    titleNum: 2,
    title: "Personalized medicine using data driven healthcare",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at tellus sed mauris viverra iaculis vel sit amet risus. Mauris commodo iaculis erat vitae congue. Mauris sed sagittis dui. Sed sollicitudin rutrum maximus. Aliquam posuere lacinia erat eget iaculis. Cras vitae maximus est. Morbi tincidunt tortor ac dolor efficitur placerat. Praesent nisl risus, placerat a risus a, fermentum maximus purus. Nullam felis massa, consequat quis rutrum non, sollicitudin id metus. Vestibulum malesuada hendrerit velit vitae pharetra. In id congue metus. Phasellus erat lectus, malesuada ut dignissim vitae, elementum vitae urna. Nullam nec est at diam fringilla feugiat non in nisl. Vivamus ut nunc aliquet, rutrum urna quis, vestibulum justo. Pellentesque justo neque, convallis sed sapien ut, varius accumsan urna. Integer cursus finibus ligula, ac fringilla sapien gravida nec. Ut orci nulla, vehicula dictum blandit sit amet, pe"
  },
  {
    titleNum: 3,
    title: "Patient adherence and quality care during a global pandemic",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate feugiat nisl nec mattis. Donec non lorem faucibus, blandit odio eu, lacinia dui. Donec rhoncus metus a lectus efficitur, a egestas leo pulvinar. Etiam aliquet ut tortor ac scelerisque. Mauris maximus tincidunt dui. Donec iaculis tellus ut volutpat convallis. Suspendisse potenti. Nulla ac nunc posuere, suscipit lorem a, pulvinar nulla. \n Nunc vel dapibus tortor. Maecenas auctor nunc ut est maximus egestas. Pellentesque vel sapien sit amet metus eleifend euismod ac sodales leo. Mauris ut dictum neque, sed porttitor justo. Nunc maximus tempor nunc. Phasellus semper congue arcu, in aliquam risus vestibulum quis. Cras blandit iaculis orci eget vulputate. Nunc a rutrum lorem. Donec eu tempus est."
  },
];

export default Tracks;
