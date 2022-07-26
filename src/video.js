let videos = [
    'https://www.youtube.com/embed/ap0mqwvf7H0', 
    'https://www.youtube.com/embed/s1tAYmMjLdY', 
    'https://www.youtube.com/embed/S9z3gv3MWaM', 
    'https://www.youtube.com/embed/1a4C_SxvITk', 
    'https://www.youtube.com/embed/brHzB_1Xauc',
    'https://www.youtube.com/embed/9zufrkkNwfA',
    'https://www.youtube.com/embed/UwKCL1Nr9Qc',
    'https://www.youtube.com/embed/XYGcfJsKWbU',
    'https://www.youtube.com/embed/aJXRFcyWgdk'
]

let randomVideo = videos[Math.floor(Math.random() * videos.length)]

export default randomVideo;