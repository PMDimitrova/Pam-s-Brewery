import hash from 'hash-it';

const hashing = input => {
  const hashedValue = hash(input);

  return hashedValue;
};

export default hashing;
