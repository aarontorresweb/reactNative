import RenderCampsite from '../features/campsites/RenderCampsite';

const campsiteInfoScreen = ({ route }) => { 
    const { campsite } = route.params;
    return <RenderCampsite campsite={campsite} />;
};

export default CampsiteInfoScreen;