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
            props: {
                timer:false,
                achieved:false,
                maxTime:0,
                className:'screen1',
                childComponents:[
                    { component:'title',
                        props:{
                            className:'screen1_title',
                            text: 'SCREEEN 2',
                        },
                    },
                    { component:'Compose',
                        props:{
                            childComponents: [
                                {
                                    component:'CharacterComponent',
                                    props:{
                                        className:'screen1_description',
                                        strategy:'selection',
                                    },
                                },
                            ],
                        },
                    },
                ],
                objectMapping: [],
                sceneMapping: [],
                characterMapping:[],
            },
        },
        {
            initial: false,
            component: 'scene',
            auth: true,
            props: {
                timer:false,
                achieved:false,
                maxTime:0,
                className:'screen1',
                childComponents:[
                    { component:'title',
                        props:{
                            className:'screen1_title',
                            text: 'YOU WOULD START',
                        },
                    },
                    { component:'Compose',
                        props:{
                            childComponents: [
                                {
                                    component:'text',
                                    props:{
                                        text: "If the dev already written code for start a game :)",
                                        onClick: {
                                            action:'getDamage',
                                            params: 200,
                                            event: (evt) => console.log('DAÑ0 200'),
                                        },
                                        className:'screen1_description',
                                    },
                                },
                                {
                                    component:'CharacterComponent',
                                    props:{
                                        className:'screen1_description',
                                        strategy:'character',
                                    },
                                },
                            ],
                        },
                    },
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
            props: {
                timer:false,
                achieved:false,
                maxTime:0,
                className:'screen1',
                childComponents:[
                    { component:'title',
                        props:{
                            className:'screen1_title',
                            text: 'SCREEEN 2',
                        },
                    },
                    { component:'Compose',
                        props:{
                            childComponents: [
                                {
                                    component:'text',
                                    props:{
                                        text: "This is a test for a screen 4 on game dev tool",
                                        onClick: {
                                            action:'setLevel',
                                            event: (evt) => console.log('Sube NIVEL'),
                                        },
                                        className:'screen1_description',
                                    },
                                },
                            ],
                        },
                    },
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
            props: {
                timer:false,
                achieved:false,
                maxTime:0,
                className:'screen1',
                childComponents:[
                    { component:'title',
                        props:{
                            className:'screen1_title',
                            text: 'SCREEEN 2',
                        },
                    },
                    { component:'Compose',
                        props:{
                            childComponents: [
                                {
                                    component:'text',
                                    props:{
                                        text: "This is a test for a screen 5 on game dev tool",
                                        className:'screen1_description',
                                    },
                                },
                            ],
                        },
                    },
                ],
                objectMapping: [],
                sceneMapping: [],
                characterMapping:[],
            },
        },
    ]
}