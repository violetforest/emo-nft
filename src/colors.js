let colors = [
    {bg: 'bwstar.jpg', color: '#ffaeb1', bg2: 'bwstar.jpg', repeat: 'repeat', bgSize: '50%', bgAttach: 'scroll'},
    {bg: 'purple-checker.gif', color: '#ffc9f4', bg2: 'black.jpg', repeat: 'repeat', bgSize: '50%', bgAttach: 'scroll'},
    {bg: 'sparkle.gif', color: '#FF33A8', bg2: 'sparkle.gif', repeat: 'repeat', bgSize: '20%', bgAttach: 'scroll'},
    {bg: 'neonskull.jpg', color: '#ffb6da', bg2: 'black.jpg', repeat: 'repeat', bgSize: '15%', bgAttach: 'scroll'},
    {bg: 'tinyheart.jpg', color: '#fe98ff', bg2: 'black.jpg', repeat: 'repeat', bgSize: '10%', bgAttach: 'scroll'},
    {bg: 'blinkheart.gif', color: '#80ff80', bg2: 'black.jpg', repeat: 'repeat', bgSize: '20%', bgAttach: 'scroll'},
    {bg: 'purpleskull.jpg', color: '#fff', bg2: 'black.jpg', repeat: 'repeat', bgSize: '30%', bgAttach: 'scroll'},
    {bg: 'pinkglitter.jpg', color: '#fff', bg2: 'black.jpg', repeat: 'repeat', bgSize: '20%', bgAttach: 'scroll'},
    {bg: 'swirlstars.jpg', color: '#c0a9ff', bg2: 'black.jpg', repeat: 'repeat', bgSize: '100%', bgAttach: 'fixed'},
    {bg: 'glitterskulls.gif', color: '#fff', bg2: 'black.jpg', repeat: 'repeat', bgSize: '15%', bgAttach: 'scroll'},
    {bg: 'pinkhearts.gif', color: '#ffc6f1', bg2: 'black.jpg', repeat: 'repeat', bgSize: '15%', bgAttach: 'scroll'}
]

let randomColor = colors[Math.floor(Math.random() * colors.length)];

export default randomColor;