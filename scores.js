import { getConditions as gc } from './_util';
import request from './_request';

/**
 * Сохранение оценки
 * 
 * @param {Object} params
 * @returns {Function}
 */

const score = `{
    id,
    value,
    sphere_id,
    criterion{
        id,
        label
    },
    entity{
        id,
        label,
        main_image
    },
    user{
        id,
        name,
        main_image,
        karma
    },
    replies{
        text,
        autor{
            id,
            name,
            main_image,
            karma
        }
    },
    count_sub_comments,
    comment{
        text,
        id,
        useful,
        useless,
        gallery{
            id, 
            items{
                id,
                hash
            }
        }
        updated_at
    }
}`;

export function save(params) {
    if ('comment' in params) {
        let comment = params.comment.replace(/(?:\r\n|\r|\n)/g, '\n');
        params.comment = `""${comment}""`;
    }   
        
    return `mutation {createScore${gc(params)}${score}}`;
}


/**
 * Получение оценок
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function find(params) {
    if (!('limit' in params)) {
        params.limit = 10;
    }
    return `{scores${gc(params)}${score}}`; 
}


export function findById(params) {
    return `{score${gc(params)}${score}}`; 
}




