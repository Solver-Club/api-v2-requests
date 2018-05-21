import { getConditions } from './_util';

export function save(params) {
    let conditions = getConditions(params);
    return `mutation {createScore ${conditions} {id, value, user {id, name, main_image}, comment {text, id}}}`;
}


export function findByObjectCriterion(params) {
    let conditions = getConditions(params);
    return `{scores ${conditions} {value, user {id,name,main_image}, comment {text,id}}}`;  
}


