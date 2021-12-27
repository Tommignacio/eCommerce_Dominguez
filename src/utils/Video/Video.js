import React from "react";
import { DivTitle, ImgTitle, VideoBack } from "./styledvideo";

const Video = () => {
	return (
		<div>
			<DivTitle>
				<ImgTitle src="https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/logo.png?alt=media&token=46487fca-790e-4f10-b603-c264e556b1e6" />
			</DivTitle>
			<VideoBack autoPlay loop muted>
				<source
					src="https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/fashion-clip.mp4?alt=media&token=92808d50-7af2-4007-a607-e00b4ec39123"
					type="video/mp4"
				/>
			</VideoBack>
		</div>
	);
};

export default Video;
