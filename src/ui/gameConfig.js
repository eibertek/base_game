export default {
    screen: [
        {
            initial: true,
            component: 'screen',
            auth: false,
            props: {
                timer:false,
                achieved:false,
                maxTime:0,
                childComponents:[
                    { component:'title',
                      props:{
                          text: 'GAME DEV TOOL',
                          onClick: (evt)=> console.log(evt),
                      },
                    },
                    { component:'text',
                        props:{
                            text: 'This is a test for a game dev tool framework type sarasa',
                            onClick: ()=>{},
                            childComponents: [
                                { component:'button',
                                  props:{
                                    onClick: (evt) => console.log(evt),
                                    text: 'Start',
                                  }
                                },

                            ],
                        },
                    }
                ],
                objectMapping: [],
                sceneMapping: [],
                characterMapping:[],
            },
        },
        {
            initial: false,
            component: 'screen',
            auth: true,
            title: "screen 1",
            description: 'Please create your character, use the fields and choose wisely',
            props: {
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