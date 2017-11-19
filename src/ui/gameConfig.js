export default {
    screen: [
        {
            initial: true,
            component: 'home',
            props: {},
            auth: true,
            title: "home",
            description: 'Hello good person!',
            gameProps: {
                timer:false,
                achieved:false,
                maxTime:0,
                objectMapping: [],
                sceneMapping: [],
                characterMapping:[],
            },
        },
        {
            initial: false,
            component: 'screen',
            props: {},
            auth: false,
            title: "screen 1",
            description: 'Please create your character, use the fields and choose wisely',
            gameProps: {
                timer:false,
                achieved:false,
                maxTime:0,
                objectMapping: [],
                sceneMapping: [],
                characterMapping:[],
            },
        },
        {
            initial: false,
            component: 'screen',
            props: {},
            auth: false,
            title: "screen 2",
            description: 'Please create your character, use the fields and choose wisely',
            gameProps: {
                timer:false,
                achieved:false,
                maxTime:0,
                objectMapping: [],
                sceneMapping: [],
                characterMapping:[],
            },
        },
    ]
}