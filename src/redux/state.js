let rerenderEntireThree =() => {
    
}




let state ={
    posts:[//Посты
        {id:1, message:'Я покакал у меня все хорошо', likeCount:20,},
        {id:2, message:'привет как у тебя дела?', likeCount:35,},
    ],
    newPostText:'',//обнуляет textarea;
    
    dialogsData:[//Имена пользователей
        {id:1, name: 'Дима'}, 
        {id:2, name: 'Света'},
        {id:3, name:'Сергей'},
        {id:4, name: 'Алексей'},
        {id:5, name: 'Павел'}, 
    ],
   

    messagesData:[//сообщения;
        {id:1, messages: 'Hello',}, 
        {id:2, messages: 'Whats',},
        {id:3, messages:'Hi',},
        {id:4, messages: 'ByBy',},
        {id:5, messages: 'suck some dick',},
    ]
}

export let addPost = () => {
    let newPost ={
        id:5,
        message: state.newPostText,
        likeCount:0,
    }
    state.posts.push(newPost);
    message: state.newPostText ='';
    rerenderEntireThree(state);
};

export function updateNewPostText (newText) {
    state.newPostText = newText;
    rerenderEntireThree(state);
};

export function subscribe(observer){
    rerenderEntireThree = observer;//наблюдатель
}

export default state;

