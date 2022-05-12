const vjsPlayer = videojs("my-video", {
    controls: true,
    autoplay: true,
});
const video = document.getElementById("my-video_html5_api");
const canvas = document.getElementById("canvas");
const doSomethingWithTheFrame = (now, metadata) => {
    canvas.width = metadata.width;
    canvas.height = metadata.height;
    console.log(metadata.width)
    video.requestVideoFrameCallback(doSomethingWithTheFrame);
};
video.requestVideoFrameCallback(doSomethingWithTheFrame);

  

