import RenderCampsite from '../features/campsites/renderCampsite';

const campsiteInfoScreen = (props) => { 
    return <RenderCampsite campsite={props.campsite} />;
};

export default CampsiteInfoScreen;