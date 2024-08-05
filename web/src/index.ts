import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

const users = new Collection((json: UserProps) => {
    return User.buildUser(json);
}, 'http://localhost:3000/users');

users.on('change', () => {
   const root = document.getElementById('root');

   if (root) {
       new UserList(root, users).render();
   } else {
       throw new Error('Root not found');
   }
});

users.fetch();