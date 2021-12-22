import React from "react";
import { VideoBack } from "./styledvideo";

const Video = () => {
	return (
		<div>
			<div style={{ display: "block", height: "91vh" }}>
				<h1>Old London</h1>
			</div>
			<VideoBack autoPlay loop muted>
				<source
					src="https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/fashion-clip.mp4?alt=media&token=92808d50-7af2-4007-a607-e00b4ec39123"
					type="video/mp4"
				/>
			</VideoBack>
			<div></div>
		</div>
	);
};

export default Video;
