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
                className:'screen1',
                childComponents:[
                    { component:'title',
                      props:{
                          className:'screen1_title',
                          text: 'GAME DEV TOOL',
                      },
                    },
                    { component:'Compose',
                        props:{
                            childComponents: [
                                {
                                  component:'text',  
                                  props:{
                                    text: "This is a test for a game dev tool framework type sarasa",
                                    className:'screen1_description',
                                  },
                                },
                                { component:'button',
                                  props:{
                                    className:'screen1_button',
                                    onClick: {
                                      action:'setLevel',
                                      event: (evt) => console.log('Sube NIVEL'),
                                    },
                                    text: 'S T A R T',
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