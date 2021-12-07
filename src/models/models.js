export const count = {
    state: 10, // initial state
    reducers: {
        // handle state changes with pure functions
        increment(state, payload) {
            return state + payload;
        },
    },
    effects: (dispatch) => ({
        // handle state changes with impure functions.
        // use async/await for async actions
        async incrementAsync(payload, rootState) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            dispatch.count.increment(payload);
        },
    }),
};

export const persona = {
    state: {nombre: "cristian", "apellido":"bereciartua", "dni":"31999298"}, // initial state
    reducers: {
        // handle state changes with pure functions
        changeName(state, payload) {
            return {...state ,nombre: payload.nombre, "apellido":payload.apellido}  ;
        },
    },
    effects: (dispatch) => ({
        // handle state changes with impure functions.
        // use async/await for async actions
        async incrementAsync(payload, rootState) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            dispatch.persona.changeName(payload);
        },
    }),
};

export const user = {
    //state: {nombre: "cristian", "apellido":"bereciartua", "dni":"31999298"}, // initial state
	state: {"id":"",
    "clientId":"",
    "userId":"",
    "username":"",
    "cuitRepresentado":"",
    "apellido":"",
    "nombre":"",
    "idContribuyente":"",
    "establecimiento":"",
    "loteId":"",
    "createdAt":"",
    "usuarioTipoId":"",
    "exp":"",
    "isBackOffice":"",
    "grupo":"",
    "roles":""},

    reducers: {
        // handle state changes with pure functions
        loginSuccess(state, payload) {
          //  return {...payload, roles:["ADMIN"]}  ;
					return {...payload};
        },
    },
    effects: (dispatch) => ({
        // handle state changes with impure functions.
        // use async/await for async actions
        async LoginSuccessAsync(payload, rootState) {
           // alert("asdad:" + payload.roles);
					//

          dispatch.user.loginSuccess(payload);
					localStorage.setItem('roles', JSON.stringify(payload.roles));


				},
    }),
};