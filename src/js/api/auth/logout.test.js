import { logout } from './logout.js';
import { remove } from '../../storage/index.js';

jest.mock('../../storage/index.js', () => ({
  remove: jest.fn(),
}));

describe('logout', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should remove the token and profile from storage', () => {
    logout();

    expect(remove).toHaveBeenCalledWith('token');
    expect(remove).toHaveBeenCalledWith('profile');
    expect(remove).toHaveBeenCalledTimes(2);
  });
});
