let colors = [
    {bg: 'bwstar.jpg', color: '#ffaeb1', bg2: 'bwstar.jpg'},
    {bg: 'purple-checker.gif', color: '#ffc9f4', bg2: 'black.jpg'},
    {bg: 'sparkle.gif', color: '#FF33A8', bg2: 'sparkle.gif'},
    {bg: 'neonskull.jpg', color: '#ffb6da', bg2: 'black.jpg'},
    {bg: 'tinyheart.jpg', color: '#fe98ff', bg2: 'black.jpg'},
    {bg: 'blinkheart.gif', color: '#80ff80', bg2: 'black.jpg'},
    {bg: 'purpleskull.jpg', color: '#fff', bg2: 'purpleskull.jpg'},
    {bg: 'pinkglitter.jpg', color: '#fff', bg2: 'black.jpg'}
]

let randomColor = colors[Math.floor(Math.random() * colors.length)];

export default randomColor;