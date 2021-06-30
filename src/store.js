import Vue from 'vue';
import Vuex from 'vuex';
import  './localMixins';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        colorHeader: "steelblue",
        indexOfPickedColor: 0,
        pickedColor: "",
        colors: [],
        message: "",
        quantity: 6

    },
    mutations: {
        pickWinnerIndex(state){
            state.indexOfPickedColor = Math.floor(Math.random() * state.quantity);
        },
        addNewColor(state, color){
            state.colors.push(color);
        },
        makeColorInvisible(state, index){
            state.colors.splice(index, 1, '#232323');
        },
        changeColorsToWinner(state){
            //Así no actualiza la vista, excede mi conocimiento por qué
            /*for(let i = 0; i < state.colors.length; i++){
                state.colors[i] = state.pickedColor;
            }*/
            let arr = [];
            for(let i = 0; i < state.colors.length; i++){
                arr[i] = state.pickedColor;
            }
            state.colors = arr;

        },
        pickWinnerColor(state){
            state.pickedColor = state.colors[state.indexOfPickedColor];
        },
        changeHeaderColor(state, color){
            state.colorHeader = color;
        },
        changeHeaderMessage(state, msg){
            state.message = msg;
        },
        resetColors(state){
            state.colors = [];
        },
        changeQuantityOfColors(state, q){
            state.quantity = q;
        }
    },
    actions: {
        seleccionarIndiceGanador({commit}){
            commit('pickWinnerIndex');
        },
        agregarColor({commit}, color){
            commit('addNewColor', color);
        },
        iniciarColorGanador({commit}){
            commit('pickWinnerColor');
        },
        cambiarColorHeader({commit}, color){
            commit('changeHeaderColor', color);
        },
        cambiarMensajeHeader({commit}, msj){
            commit('changeHeaderMessage', msj);
        },
        volverColorInvicible({commit}, index){
            commit('makeColorInvisible', index)
        },
        cambiarColoresAGanador({commit}){
            commit('changeColorsToWinner');
        },
        resetColores({commit}){
            commit('resetColors');
        },
        cambiarCantidadColores({commit}, cantidad){
            commit('changeQuantityOfColors', cantidad);
        }
    }
})