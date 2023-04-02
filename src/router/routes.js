import { home } from '../views/home.js';
import { about } from '../views/about.js';
import { signIn } from '../views/sign-in.js';
import { signUp } from '../views/sign-up.js';
import { feed } from '../views/feed.js';
import { post } from '../views/post-edit.js';
import { postDetail } from '../views/post-detail.js';
import { profile } from '../views/profile.js';

const paths = {
  home: {
    path: '/',
    template: home,
    title: 'Outsy - Home',
  },
  about: {
    path: '/about',
    template: about,
    title: 'Outsy - Conócenos',

  },
  signIn: {
    path: '/sign-in',
    template: signIn,
    title: 'Outsy - Ingresa',

  },
  signUp: {
    path: '/sign-up',
    template: signUp,
    title: 'Outsy - Regístrate',

  },
  feed: {
    path: '/feed',
    template: feed,
    title: 'Outsy - Muro',
  },
  createPost: {
    path: '/post/create',
    template: post,
    title: 'Outsy - Crear Post',
  },
  editPost: {
    path: '/post/edit',
    template: post,
    title: 'Outsy - Editar Post',
  },
  postDetail: {
    path: '/post/detail',
    template: postDetail,
    title: 'Outsy - Post',
  },
  profile: {
    path: '/profile',
    template: profile,
    title: 'Outsy - Perfil',
  },
};

export default paths;
