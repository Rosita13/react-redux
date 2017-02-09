import users from './users';
import messages from './messages';
import cooperations from './cooperations';

export default function services() {
  const app = this;

  app.configure(users);
  app.configure(cooperations);
  app.configure(messages);
}
