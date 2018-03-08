import { uuid } from 'lodash-uuid';
import map from 'lodash/map';
import get from 'lodash/get';

export default function todos(state=[], action={}) {
    switch(action.type) {
        case 'Todo.add': {
            const id = get(action, 'payload.id', uuid());
            return [...state, {title: get(action, 'payload.title'), id}];
        }
        case  'Todo.update': {
            if (!get(action, 'params.id')) return state;

            const { id=''} = action.params;

            return map(state, (todo={}) => {
                if (todo.id !== id) return todo;
                const {payload={}} = action;
                return {...todo, ...payload};
            });
        }
        default:
            return state;
    }
}
