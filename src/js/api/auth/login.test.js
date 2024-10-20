/* eslint-env jest */
import { login } from './login.js';
import { save } from '../../storage/save.js';
import { apiPath } from '../constants.js';
import { headers } from '../headers.js';

jest.mock('../../storage/save.js', () => ({
  save: jest.fn(),
}));

describe('login', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('stores a token when provided valid credentials', async () => {
    const mockProfile = {
      id: 1,
      name: 'Kari Nordmann',
      accessToken: 'mock-token',
    };
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProfile,
    });

    const result = await login('test@stud.noroff.no', 'password123');

    expect(global.fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: 'post',
      body: JSON.stringify({
        email: 'test@stud.noroff.no',
        password: 'password123',
      }),
      headers: headers('application/json'),
    });

    expect(save).toHaveBeenCalledWith('token', 'mock-token');
    expect(save).toHaveBeenCalledWith('profile', {
      id: 1,
      name: 'Kari Nordmann',
    });

    expect(result).toEqual({ id: 1, name: 'Kari Nordmann' });
  });

  it('should throw an error when login fails', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Unauthorized',
    });

    await expect(login('test@stud.noroff.no', 'wrongpassword')).rejects.toThrow(
      'Unauthorized',
    );
    expect(save).not.toHaveBeenCalled();
  });
});
