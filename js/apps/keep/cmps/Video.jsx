export default class Video extends React.Component {
    // render(){
    //     return (<video autoPlay loop id="myVideo">
    //   <source src='./js/apps/keep/img/hd0945.mov' type="video/mp4">
    // </video>)
    // }
    // }
    render() {
        return (
            <video id="background-video" loop autoPlay>
                <source src="./js/apps/keep/img/hd0945.mov" type="video/mp4" />
                Your browser does not support the video tag.
        </video>
        )
    }
};
