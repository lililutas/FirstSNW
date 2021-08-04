let store = {
    _state : {
        profilePage: {
            posts: [
                { ownerId: 12, holderId: 12, likes: 26, text: 'Мой первый пост' },
                { name: 'Дмитрий Соловьев', likes: 20, text: 'Мой первый пост' },
                { name: 'Дмитрий Соловьев', likes: 23, text: 'Мой первый пост' },
                { name: 'Дмитрий Соловьев', likes: 21, text: 'Мой первый пост' },
                { name: 'Дмитрий Соловьев', likes: 22, text: 'Мой первый пост' },
    
            ],
        },
        messangerPage: {
            messages: [
                { name: 'Дмитрий Соловьев', text: 'Мое первое сообщение' },
                { name: 'Дмитрий Соловьев', text: 'Мое первое сообщение' },
                { name: 'Дмитрий Соловьев', text: 'Мое первое сообщение' },
                { name: 'Дмитрий Соловьев', text: 'Мое первое сообщение' },
                { name: 'Дмитрий Соловьев', text: 'Мое первое сообщение' },
            ]
        }
    },
    addPost(content) {
        
        this._state.profilePage.posts.push({name : 'Дмитрий соловьев', likes : 0, text : content})
    },


}

export default store;