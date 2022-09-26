import {API} from './API'
export const ProductsServices ={
    getProductsClient:(keyword , currentPage, category ,ratings ,brand)=>{
        if(brand && ratings){
            return API.get(`/getProducts/?keyword=${keyword}&page=${currentPage}&rating=${ratings}&brand=${brand}`)
        }
        
        if(brand){
           return API.get(`/getProducts/?keyword=${keyword}&page=${currentPage}&brand=${brand}`)
       }

       if(category){
        return API.get(`/getProducts/?keyword=${keyword}&page=${currentPage}&category=${category}`)
       }
       
        if(ratings){
            return API.get(`/getProducts/?keyword=${keyword}&page=${currentPage}&rating=${ratings}`)
        }
        

        else{
            return API.get(`/getProducts/?keyword=${keyword}&page=${currentPage}`)
        }
        
    },

    getAllProducts:()=>{
        return API.get('/getAllProducts')
    },

    getProductDetails:(id)=>{
        return API.get(`/getProduct/${id}`)
    },

    deleteProduct:(id)=>{
        return API.delete(`/deleteProduct/${id}`)
    },
    createReviews:(reviewData)=>{
        return API.post('/createReview',reviewData)
    }


}