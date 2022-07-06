let colors = [
    {bg: 'bwstar.jpg', color: '#ffaeb1', bg2: 'bwstar.jpg'},
    {bg: 'purple-checker.gif', color: '#ffc9f4', bg2: 'black.jpg'},
    {bg: 'sparkle.gif', color: '#FF33A8', bg2: 'sparkle.gif'}
]

let randomColor = colors[Math.floor(Math.random() * colors.length)];

export default randomColor;