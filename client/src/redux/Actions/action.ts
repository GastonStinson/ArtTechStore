import axios from "axios";
import { Dispatch } from "react";

export function prev() {
    return {
      type: 'PREV',
    };
}

export function next() {
    return {
      type: 'NEXT',
    };
}

export function resetPage() {
    return {
      type: 'RESET_PAGE',
    };
}

interface CreatePostAction {
    type: 'CREATE_POST',
    payload: Record<string, any>
}

export const postCreation = (creation: {
    title: string;
    price:string;
    type: string;
    technique: string[];
    image: string;
    description: string;
}) => {
    return async(dispatch: Dispatch<CreatePostAction>) => {

        try {
            const {title, price, type, technique, image, description} = creation

            const response = await axios.post('hhtp://localhost:3001/createPost', {title, price, type, technique, image, description})
            const dbCreation = response.data

            return dispatch({
                type: 'CREATE_POST',
                payload: dbCreation
            })
        } catch (error) {
            
        }
    }
}