
export const type = 'showUs';

const showUs = number => {
    return{
        type,
        payload: number,
    }

};

export default showUs;