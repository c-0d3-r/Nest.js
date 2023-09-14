import { App }             from '../app';
import { TYPES }           from '../types';
import { createContainer } from './ioc';

export const createApp = () => {
  return createContainer().get<App>(TYPES.Application);
};
