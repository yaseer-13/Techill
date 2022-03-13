import {
    v4 as uuidv4
} from 'uuid';

function chillHop() {
    return [{
        name: 'Jazz Cabbage',
        artist: 'Ian Ewing, Strehlow',
        cover: 'https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg',
        id: uuidv4(),
        active: true,
        color: ["#DEA499", "#B44C46"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9363",
    },
    {
        name: 'Everlight',
        artist: 'Parkbench Epiphany',
        cover: "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ['#F07F77', '#423B35'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=27500',
    },
    {
        name: 'Hung Up',
        artist: 'Ezzy',
        cover: 'https://chillhop.com/wp-content/uploads/2021/09/dc49d7971512be0192848d072efdaaab91a4c73c-1024x1024.jpg',
        id: uuidv4(),
        active: false,
        color: ['#D44847', '#F9DEA9'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=24699',
    },
    {
        name: 'Odyssey',
        artist: 'Smile High, Teddy Roxpin',
        cover: 'https://chillhop.com/wp-content/uploads/2021/08/af3ce13ad39d38057f00144f8a7c295877ccfec1-1024x1024.jpg',
        id: uuidv4(),
        active: false,
        color: ['#357A84', '#0B1745'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=23337',
    },
    {
        name: 'La zona',
        artist: 'Maydee',
        cover: 'https://chillhop.com/wp-content/uploads/2021/11/3ff29a35be582c8dc0222273cb9c401ea6b209dc-1024x1024.jpg',
        id: uuidv4(),
        active: false,
        color: ['#5D302A', '#789BB7'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=27455',
    },
    {
        name: 'What If I',
        artist: 'Juan Rios',
        cover: 'https://chillhop.com/wp-content/uploads/2021/07/935da7886600df5eeb2d3b13b12cf27ee8c6c700-1024x1024.jpg',
        id: uuidv4(),
        active: false,
        color: ['#FCF5C5', '#D6B2A3'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=21649',
    },
    {
        name: 'Bliss',
        artist: 'Misha, Jussi Halme',
        cover: 'https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg',
        id: uuidv4(),
        active: false,
        color: ['#E97274', '#30395A'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=9248',
    },
    {
        name: 'Sozu',
        artist: 'Mommy, Sleepy Fish',
        cover: 'https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg',
        id: uuidv4(),
        active: false,
        color: ['#A2B5CA', '#5E90D2'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=19062',
    },
    {
        name: 'Polaroid',
        artist: 'Makzo, Mama Aiuto',
        cover: 'https://chillhop.com/wp-content/uploads/2021/09/501327d9a200bed56717f5f4a0fa7e4517c491c9-1024x1024.jpg',
        id: uuidv4(),
        active: false,
        color: ['#E79D00', '#151F2B'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=24767',
    },
    {
        name: 'Somber Sky',
        artist: 'Oddfish',
        cover: 'https://chillhop.com/wp-content/uploads/2022/01/c8729f09c7a1bf1143edf05091027770837d9e10-1024x1024.jpg',
        id: uuidv4(),
        active: false,
        color: ['#DC9168', '#3B446D'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=30295',
    }
    ];
}

export default chillHop;