const APDATE_NEW_POST = 'APDATE-NEW-POST';
const ADD_POST =  "ADD-POST";
let store ={
    _state:{
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
    },
    
    getState(){
        return this._state
    },
    _callSubscriber(){
    
    },

    subscribe(observer){
        this._callSubscriber = observer;//наблюдатель
    },

    dispatch(action){//type "ADD-POST"
        if(action.type === "APDATE-NEW-POST"){
            this._state.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if(action.type === 'ADD-POST'){
            let newPost ={
                id: '5',
                message: this._state.newPostText,
                likeCount:0,
            }
            this._state.posts.push(newPost);
            this._state.newPostText ='';
            this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator=()=>({ type:ADD_POST })
  
  export const updateNewPostActionCreator = (text) =>{
  return {type: APDATE_NEW_POST, newText: text}
  }


export default store;
window.store = store;
