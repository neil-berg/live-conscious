import { Member } from '../types';

export const randomBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const randomNineMembers = (members: Member[]) => {
  const output: Member[] = [];
  const usedIDs: number[] = [];
  while (output.length < 9) {
    const idx = randomBetween(0, members.length);
    const member = members[idx];
    if (!usedIDs.includes(member.id)) {
      output.push(member);
      usedIDs.push(member.id);
    }
  }
  return output;
};
