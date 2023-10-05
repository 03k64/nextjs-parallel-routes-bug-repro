'use server';

const wait = async () => new Promise((resolve) => {
  setTimeout(resolve, 2000);
});

export const getParent = async (parentId: string) => {
  await wait();

  return parentId;
};

export const getResources = async () => {
  await wait();

  return ['a', 'b', 'c'];
};

export const getResource = async (resourceId: string) => {
  await wait();

  return resourceId;
};
