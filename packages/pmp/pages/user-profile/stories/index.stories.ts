import { html, TemplateResult } from 'lit';
import '../src/user-profile.js';

export default {
  title: 'pmp/pages/UserProfile',
  component: 'iz-pmp-user-profile',
  argTypes: {
    email: { control: 'text' },
    firstname: { control: 'text' },
    lastname: { control: 'text' },
    status: { control: 'text' },
    userRole: { control: 'select', options: ['admin', 'user'] },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  email: string;
  firstname: string;
  lastname: string;
  locked: boolean;
  status: string;
  userRole: string;
  roles: string[];
}

const Template: Story<ArgTypes> = ({
  email = 'henry.pap@interzero.de',
  firstname = 'Henry',
  lastname = 'Pap',
  status = 'locked',
  userRole = 'admin',
  roles = ['admin', 'user'],
}: ArgTypes) => html`
  <iz-pmp-user-profile
    .email=${email}
    .firstname=${firstname}
    .lastname=${lastname}
    .status=${status}
    .userRole=${userRole}
    .roles=${roles}
  ></iz-pmp-user-profile>
`;

export const Regular = Template.bind({});
