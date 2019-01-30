import expect from 'expect';
import React from 'react';
import { getUser, getUsers, getDeputiesFor } from './users';

const users = getUsers();
const userName = 'Богдан Димитров Христозов';

describe('Users tests', () => {
  it('Users should be valid', () => {
    expect(users.length).toBeGreaterThan(0);
    users.map(user => {
      expect(!!user.id).toBe(true);
      expect(!!user.name).toBe(true);
      expect(!!user.position).toBe(true);
    });
  });

  it('Should be able to get user by name', () => {
    const user = getUser(userName);
    expect(!!user).toBe(true);
  });

  it('Should be able to get deputies for user', () => {
    const deputies = getDeputiesFor(userName);
    expect(deputies.length).toBeGreaterThan(0);
    expect(deputies.indexOf(userName)).toBe(-1);
  });
});
