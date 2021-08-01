


let state = {
    profilePage: {
        posts: [
            { name: 'Дмитрий Соловьев', likes: 26, text: 'Мой первый пост' },
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
}

export const addPost = (content) => {
    state.profilePage.posts.push({name : 'Дмитрий соловьев', likes : 0, text : content})

}

export default state;