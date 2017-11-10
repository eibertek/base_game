export default {
    screen: [
        {
            initial: true,
            title: "Character Creator",
            achieved: [
                'isCharacterCreated'
            ],
            description: 'Please create your character, use the fields and choose wisely',
            timer: false,
            maxTime: 0,
        },
        {
            initial: false,
            title: "Level 1",
            achieved: [
                'level_1_Won'
            ],
            description: 'Level 1',
            timer: false,
            maxTime: 0,
        },
        {
            initial: false,
            title: "Level 2",
            achieved: [
                'level_2_Won'
            ],
            description: 'Level 2',
            timer: false,
            maxTime: 0,
            objectMapping: [
                {
                    name:'',
                    type:'',
                    destroyable:'',
                    life:'',
                    timeStart:'',
                    points:'',
                },
                {
                    name:'',
                    type:'',
                    destroyable:'',
                    life:'',
                    timeStart:'',
                    points:'',
                },
                {
                    name:'',
                    type:'',
                    destroyable:'',
                    life:'',
                    timeStart:'',
                    points:'',
                },
            ],
            sceneMapping: [],
            characterMapping:[],
        },
    ]
}