
export const type = 'showServices';

const showServices = number => {
    return{
        type,
        payload: number,
    }

};

export default showServices;