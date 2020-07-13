const MegaLibrary = require('../../../services/apiTest');

describe('MegaLibrary Resource', () => {
  const fakeRequest = {
    get: jest.fn(),
  };
  const megaLibraryResource = new MegaLibrary(fakeRequest);
  afterEach(() => jest.clearAllMocks());

  it('should return the user count for a given MegaLibrary user', async () => {
    fakeRequest.get.mockResolvedValueOnce({
      "email": "softdesign@gmail.com",
      "password": "softdesign"
    });

    const response = await megaLibraryResource.postFollowerCount('/users');
    expect(response).toEqual({ api: response });
  });

  it('should return not found when the user doenst exist', async () => {
    fakeRequest.get.mockRejectedValueOnce({ response: { data: 'Not Found', status: 404 } });

    const response = await megaLibraryResource.getFollowerCount('odkasodksaodk');
    expect(response).toEqual({ error: 'Not Found' });
  });

  it('should return error when a general error happens', async () => {
    fakeRequest.get.mockRejectedValueOnce({ response: { data: 'Error', status: 500 } });

    const response = await megaLibraryResource.getFollowerCount('erick');
    expect(response).toEqual({ error: 'Error' });
  });
});