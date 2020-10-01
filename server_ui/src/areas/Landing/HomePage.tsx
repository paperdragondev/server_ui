import React, { useState } from 'react';
import { MenuItem, Select, Grid } from '@material-ui/core';

import LinkButton from '../shared/LinkButton';

const users = [
  { name: 'Anthony', value: 'anthony' },
  { name: 'Lauren', value: 'lauren' },
];

function HomePage() {
  const [user, setUser] = useState<String>('default');

  const handleUserChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setUser(event.target.value as string);
    localStorage.setItem('user', event.target.value as string);
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ marginTop: 75 }}
    >
      {user === 'default' && (
        <Grid item>
          <h3>Select User</h3>
          <Select
            labelId="Select-user"
            id="user"
            value={user}
            onChange={handleUserChange}
            style={{ width: 100 }}
          >
            {users.map((user) => {
              return <MenuItem value={user.value}>{user.name}</MenuItem>;
            })}
          </Select>
        </Grid>
      )}

      {user !== 'default' && (
        <Grid item>
          <h3>Would you like to Store or Retrieve file?</h3>
        </Grid>
      )}

      {user !== 'default' && (
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <LinkButton
              onClick={() => console.log('Store Clicked')}
              color="primary"
              path="file/upload"
            >
              Store
            </LinkButton>
          </Grid>

          <Grid item>
            <LinkButton
              onClick={() => console.log('Store Retrieve')}
              color="primary"
              path="file/retrieve"
            >
              Retrieve
            </LinkButton>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default HomePage;
