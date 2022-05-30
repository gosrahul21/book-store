import axios from 'axios';
import { auth } from '../../firebase';
import { LOGOUT, LOGOUT_FAILED, SIGNIN, SIGN_IN_FAILED } from './user.constant';
import store from '../../store';
import { toast } from 'react-toastify';
import { GET_MIN_40_OFF, GET_NEW_ARRIVAL, GET_NEW_ARRIVAL_FAIL, GET_UPTO_45 } from './book.constant.';
const url = 'http://localhost:8000/api/v1';


export const login = async ()=>{
    
    try {
        
        const token = await auth.currentUser.getIdToken();
        const {data} = await axios.post(`${url}/auth/signup`,{name:"rahul goswami", role:"guest"}, {headers: { authorization: `Bearer ${token}`}});
        store.dispatch({
            type: SIGNIN,
            payload: data
        })
        toast.success(`Welcome ${data.name}`)
    } catch (error) {
        store.dispatch({
            type: SIGN_IN_FAILED
        })
    }
}

export const createOrder = async ()=>{

}

export const addToCart = async () => {

}


export const logout = async ()=>{
    try {
        await auth.signOut();
        store.dispatch({
            type: LOGOUT
        })
    } catch (error) {
        store.dispatch({
            type: LOGOUT_FAILED
        })
    }
}


export async function getBooks (){
    try {
        const {data} = await axios.get(`${url}/books`);
        console.log(data);
        return data;
    } catch (error) {
        
    }
}

export async function getNewArrivalBook(){
    try {
        const {data} = await axios.get(`${url}/books?sortByDate=desc`);
        store.dispatch({
            type:GET_NEW_ARRIVAL,
            payload: data
        })
    } catch (error) {
        store.dispatch({
            type:GET_NEW_ARRIVAL_FAIL
        })
    }
}


export async function getMinPercentageBook(minPercentage){
    try {
        const {data} = await axios.get(`${url}/books?discountMin=${minPercentage}`);
        store.dispatch({
            type:GET_MIN_40_OFF,
            payload: data
        })
    } catch (error) {
        store.dispatch({
            type:GET_NEW_ARRIVAL_FAIL
        })
    }
}

export async function getMaxPercentageBook(maxPercentage){
    try {
        const {data} = await axios.get(`${url}/books?discountMax=${maxPercentage}`);
        store.dispatch({
            type:GET_UPTO_45,
            payload: data
        })
    } catch (error) {
        store.dispatch({
            type:GET_NEW_ARRIVAL_FAIL
        })
    }
}


export async function addItemToCart(){

}

export async function removeItemFromCart(){

}


export async function getBookById(bookId){
    try {
        const {data} = await axios.get(`${url}/books/${bookId}`);
        return data;
    } catch (error) {
        return {};
    }
}