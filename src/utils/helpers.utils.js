import { TIMEOUT_SEC } from './config.utils';

const timeout = (sec) => {
  return new Promise((_, reject) => {
    return setTimeout(() => {
      return reject(`Request Timeout... More than ${sec}`);
    }, sec * 1000);
  });
};

export const apiRequest = async (
  url,
  signal,
  uploadData = undefined,
  errMsg = 'Something went wrong...'
) => {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          signal: signal,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url, {
          method: 'GET',
          signal: signal,
          headers: {
            'app-id': '64a67270fa6e10772c89d556',
          },
        });
    const resposne = await Promise.race([timeout(TIMEOUT_SEC), fetchPro]);
    const data = await resposne.json();
    if (!resposne.ok) {
      throw new Error(`${errMsg} ${resposne.status} ${data.message}`);
    }
    return data;
  } catch (err) {
    throw err;
  }
};
