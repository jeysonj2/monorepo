import { html, TemplateResult } from 'lit';
import '../src/profile-form.js';

export default {
  title: 'pmp/atoms/ProfileForm',
  component: 'iz-pmp-profile-form',
  argTypes: {
    email: { control: 'text' },
    firstname: { control: 'text' },
    lastname: { control: 'text' },
    status: { control: 'text' },
    locked: { control: 'boolean' },
    userRole: { control: 'control', options: ['admin', 'user'] },
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
  locked = false,
  status = 'locked',
  userRole = 'admin',
  roles = ['admin', 'user'],
}: ArgTypes) => html`
  <iz-pmp-profile-form
    .email=${email}
    .firstname=${firstname}
    .lastname=${lastname}
    .status=${status}
    .locked=${locked}
    .userRole=${userRole}
    .roles=${roles}
  ></iz-pmp-profile-form>
`;

export const Regular = Template.bind({});
