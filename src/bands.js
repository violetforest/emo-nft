let bands = [
    "my chemical romance",
    "dashboard confessional",
    "panic! at the disco",
    "weezer",
    "the used",
    "fall out boy",
    "death cab for cutie",
    "brand new",
    "jimmy eat world",
    "AFI", 
    "hawthorne heights",
    "simple plan",
    "yellowcard",
    "thursday",
    "cursive",
    "good charlotte",
    "underoath",
    "from first to last",
    "pierce the veil",
    "senses fail",
    "alexisonfire",
    "thrice",
    "mewithoutyou",
    "la dispute",
    "rufio",
    "paramore"
]
let randomBands = []

function addRandomBand() {
    for (let i = 0; i < Math.floor(Math.random() * bands.length); i++) {
        console.log(i)
        console.log(bands[Math.floor(Math.random() * bands.length)])
        randomBands.push(bands[Math.floor(Math.random() * bands.length)])
        console.log(randomBands)
    }
}

addRandomBand();

export default randomBands;