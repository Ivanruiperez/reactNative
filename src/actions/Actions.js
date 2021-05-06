import axios from 'axios';
export default async function getFacts(){
        try {
            const fact = await axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
            return fact.data;
        } catch(error){
            return 'error';
        }
    
}