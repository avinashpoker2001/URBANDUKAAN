import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { publicRequest, userRequest } from "../requestMethods";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";

export const login = async(dispatch,user)=>{
    dispatch(loginStart());
    console.log("apiCalls")
    try{
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
    }
    catch(e){
        dispatch(loginFailure())
    }
} 

export const getProducts = async(dispatch)=>{
    dispatch(getProductStart());
    console.log("apiCalls")
    try{
        const res = await publicRequest.get("/products")
        dispatch(getProductSuccess(res.data))
    }
    catch(e){
        console.log(e)
        dispatch(getProductFailure())
    }
}

export const deleteProduct = async(id,dispatch)=>{
    dispatch(deleteProductStart());
    console.log("apiCalls")
    try{
        const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
    }
    catch(e){
        console.log(e)
        dispatch(deleteProductFailure())
    }
} 

export const updateProduct = async(id,product,dispatch)=>{
    dispatch(updateProductStart());
    console.log("apiCalls")
    try{
        // update
        dispatch(updateProductSuccess({id,product}))
    }
    catch(e){
        console.log(e)
        dispatch(updateProductFailure())
    }
} 

export const addProduct = async(product,dispatch)=>{
    dispatch(addProductStart());
    console.log("apiCalls")
    try{
        const res = await userRequest.post(`/products`,product)
        dispatch(addProductSuccess(res.data))
    }
    catch(e){
        console.log(e)
        dispatch(addProductFailure())
    }
} 